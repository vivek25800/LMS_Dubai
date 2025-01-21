const QuizResponse = require('../Modal/quize_response');
const Quiz = require("../Modal/create_quize");

  // Create a new quiz response
  const createResponse = async (req, res) => {
    try {
      const { quizId, answers, completionTime } = req.body;
      
      // Get userId from token or session
      // If you don't have auth yet, you can temporarily hardcode a userId for testing
      const userId = req.user?._id || "65f123456789abcdef123456"; // Replace with a valid MongoDB ObjectId
  
      // Format the answers to match the schema
      const formattedAnswers = answers.map(ans => ({
        questionId: ans.questionId,
        sectionId: ans.sectionId,
        answer: ans.answer,
        isCorrect: null // Will be updated if it's a scored question
      }));
  
      // Create the response
      const response = new QuizResponse({
        quizId,
        userId,
        answers: formattedAnswers,
        completionTime
      });
  
      try {
        // Calculate score for questions with correct answers
        let score = 0;
        const quiz = await Quiz.findById(quizId);
        
        if (quiz) {
          formattedAnswers.forEach(answer => {
            const section = quiz.sections.find(s => s.id === answer.sectionId);
            const question = section?.questions.find(q => q.id === answer.questionId);
            
            if (question?.type === 'multiple-choice') {
              const correctOption = question.options.find(opt => opt.correct);
              if (correctOption && answer.answer === correctOption.text) {
                score += 1;
                answer.isCorrect = true;
              } else {
                answer.isCorrect = false;
              }
            }
          });
  
          response.score = score;
        }
      } catch (err) {
        console.log('Error calculating score:', err);
        // Continue without scoring if there's an error
      }
  
      await response.save();
  
      res.status(201).json({
        message: 'Quiz response submitted successfully',
        response
      });
    } catch (error) {
      console.error('Error submitting quiz response:', error);
      res.status(500).json({
        message: 'Error submitting quiz response',
        error: error.message
      });
    }
  };

  // Get responses for a specific quiz
  const getQuizResponses = async (req, res) => {
    try {
      const { quizId } = req.params;
      const responses = await QuizResponse.find({ quizId })
        .populate('userId', 'name email')
        .sort('-submittedAt');

      res.json(responses);
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching quiz responses',
        error: error.message
      });
    }
  };

  // Get a specific response
  const getResponse = async (req, res) => {
    try {
      const { responseId } = req.params;
      const response = await QuizResponse.findById(responseId)
        .populate('userId', 'name email')
        .populate('quizId');

      if (!response) {
        return res.status(404).json({ message: 'Response not found' });
      }

      res.json(response);
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching response',
        error: error.message
      });
    }
  }

  const getQuizStatus = async (req, res) => {
    try {
        const { quizId, employeeId } = req.params;

        const existingResponse = await QuizResponse.findOne({
            quizId,
            employee_id: employeeId,
            status: 'completed'
        });

        res.json({
            success: true,
            status: existingResponse ? 'completed' : 'pending',
            completed: !!existingResponse
        });
    } catch (error) {
        console.error('Error checking quiz status:', error);
        res.status(500).json({
            success: false,
            message: 'Error checking quiz status'
        });
    }
};

module.exports = {createResponse, getQuizResponses, getResponse, getQuizStatus};