const { Assessment, MCQ, TextQuestion, MatchTheFollowing } = require('../Modal/create_assessment');

// Create Assessment
const createAssessment = async (req, res) => {
  try {
    const { title, code, description, timer, questions, createdBy } = req.body;

    const questionIds = await Promise.all(
      questions.map(async (q) => {
        if (q.questionType === 'MCQ') {
          const newMCQ = new MCQ(q.data);
          await newMCQ.save();
          return { questionType: q.questionType, questionId: newMCQ._id };
        } else if (q.questionType === 'Text') {
          const newText = new TextQuestion(q.data);
          await newText.save();
          return { questionType: q.questionType, questionId: newText._id };
        } else if (q.questionType === 'MatchTheFollowing') {
          const newMatch = new MatchTheFollowing(q.data);
          await newMatch.save();
          return { questionType: q.questionType, questionId: newMatch._id };
        }
      })
    );

    const newAssessment = new Assessment({
      title,
      code,
      description,
      timer,
      questions: questionIds,
      createdBy,
    });

    await newAssessment.save();
    res.status(201).json({ message: 'Assessment created successfully', assessment: newAssessment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllAssessments = async (req, res) => {
    try {
      const assessments = await Assessment.find()
        .populate('questions.questionId')
        .populate('createdBy', 'name email');
      res.status(200).json(assessments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getAssessmentById = async (req, res) => {
    try {
      const { id } = req.params;
      const assessment = await Assessment.findById(id)
        .populate('questions.questionId')
        .populate('createdBy', 'name email');
      if (!assessment) {
        return res.status(404).json({ message: 'Assessment not found' });
      }
      res.status(200).json(assessment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateAssessment = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
  
      const updatedAssessment = await Assessment.findByIdAndUpdate(id, updatedData, { new: true });
      if (!updatedAssessment) return res.status(404).json({ message: 'Assessment not found' });
  
      res.status(200).json({ message: 'Assessment updated successfully', assessment: updatedAssessment });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {createAssessment, getAllAssessments, getAssessmentById, updateAssessment};