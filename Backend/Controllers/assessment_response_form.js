const AssessmentResponse = require('../Modal/assessment_response');
const register_modal = require('../Modal/employee_register');  // Adjust the path as needed
const Assessment = require('../Modal/create_assessment');

// Save Assessment Response
// const saveAssessmentResponse = async (req, res) => {
//     try {
//         const { assessmentId, userId, sections, timeSpent, isTimeout } = req.body;

//         if (!assessmentId || !userId || !sections || timeSpent == null) {
//             return res.status(400).json({ success: false, message: 'Missing required fields' });
//         }

//         const totalScore = sections.reduce((total, section) => {
//             return total + section.answers.reduce((sectionTotal, answer) => {
//                 return sectionTotal + (answer.points || 0);
//             }, 0);
//         }, 0);

//         const newResponse = new AssessmentResponse({
//             assessmentId,
//             userId,
//             sections,
//             timeSpent,
//             submittedAt: new Date(),
//             isTimeout,
//             totalScore
//         });

//         await newResponse.save();
//         res.status(201).json({ success: true, message: 'Assessment response saved successfully.' });
//     } catch (error) {
//         console.error('Error saving assessment response:', error);
//         res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
// };

const saveAssessmentResponse = async (req, res) => {
    try {
        const { assessmentId, userId, employee_id, employee_name, sections, timeSpent, isTimeout } = req.body;

        // Validate required fields
        if (!assessmentId || !userId || !employee_id || !sections || timeSpent == null) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing required fields' 
            });
        }

        // Fetch the original assessment
        const assessment = await Assessment.findById(assessmentId);
        if (!assessment) {
            return res.status(404).json({
                success: false,
                message: 'Assessment not found'
            });
        }

        // Fetch employee data
        const employee = await register_modal.findOne({ employee_id });
        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found'
            });
        }

        let maxPossibleScore = 0;
        let totalEarnedScore = 0;

        // Process each section and calculate scores
        const processedSections = sections.map((section, sectionIndex) => {
            let sectionScore = 0;
            const processedAnswers = section.answers.map(answer => {
                let earnedPoints = 0;
                
                // Make sure the section exists
                const originalSection = assessment.sections[sectionIndex];
                if (!originalSection) return answer;

                if (answer.questionType === 'MCQ') {
                    const question = originalSection.questions
                        .flatMap(q => q.questionMCQ)
                        .find(q => q._id.toString() === answer.questionId.toString());

                    if (question) {
                        maxPossibleScore += question.points;
                        if (question.multipleAnswers) {
                            const correctOptions = question.options.filter(opt => opt.correct).map(opt => opt.text);
                            const userAnswers = Array.isArray(answer.answer) ? answer.answer : [answer.answer];
                            const correctCount = userAnswers.filter(ans => correctOptions.includes(ans)).length;
                            const incorrectCount = userAnswers.filter(ans => !correctOptions.includes(ans)).length;
                            
                            if (correctCount > 0 && incorrectCount === 0) {
                                earnedPoints = (correctCount / correctOptions.length) * question.points;
                            }
                        } else {
                            const correctAnswer = question.options.find(opt => opt.correct)?.text;
                            if (answer.answer === correctAnswer) {
                                earnedPoints = question.points;
                            }
                        }
                    }
                } else if (answer.questionType === 'MTF') {
                    const question = originalSection.questions
                        .flatMap(q => q.questionMTF)
                        .find(q => q._id.toString() === answer.questionId.toString());

                    if (question) {
                        maxPossibleScore += question.points;
                        if (answer.answer === question.correctAnswer) {
                            earnedPoints = question.points;
                        }
                    }
                } else if (answer.questionType === 'Text') {
                    const question = originalSection.questions
                        .flatMap(q => q.questionText)
                        .find(q => q._id.toString() === answer.questionId.toString());

                    if (question) {
                        maxPossibleScore += question.points;
                        earnedPoints = 0; // Text questions need manual grading
                    }
                }

                sectionScore += earnedPoints;
                totalEarnedScore += earnedPoints;

                return {
                    ...answer,
                    earnedPoints,
                    isCorrect: earnedPoints > 0
                };
            });

            return {
                ...section,
                answers: processedAnswers,
                sectionScore
            };
        });

        // Calculate score percentage
        const scorePercentage = maxPossibleScore > 0 ? (totalEarnedScore / maxPossibleScore) * 100 : 0;

        // Create and save the response
        const newResponse = new AssessmentResponse({
            assessmentId,  // This should be a valid ObjectId
            userId: userId.toString(), // Convert to string if not already
            employee_id,
            employee_name: employee.employee_name,
            sections: processedSections,
            timeSpent,
            submittedAt: new Date(),
            isTimeout,
            totalScore: totalEarnedScore,
            maxPossibleScore,
            scorePercentage: Math.round(scorePercentage * 100) / 100
        });

        await newResponse.save();

        res.status(201).json({ 
            success: true, 
            message: 'Assessment response saved successfully.',
            score: {
                earned: totalEarnedScore,
                maximum: maxPossibleScore,
                percentage: Math.round(scorePercentage * 100) / 100
            }
        });
    } catch (error) {
        console.error('Error saving assessment response:', error);
        res.status(500).json({ 
            success: false, 
            message: error.message || 'Internal Server Error' 
        });
    }
};

// Get All Submitted Assessments
const getAllSubmittedAssessments = async (req, res) => {
    try {
        const responses = await AssessmentResponse.find()
            .populate('assessmentId', 'title code') // Populate assessment details
            .populate('userId', 'name email'); // Populate user details
        res.status(200).json({ success: true, data: responses });
    } catch (error) {
        console.error('Error fetching submitted assessments:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Get Assessment Response by ID
const getAssessmentResponseById = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await AssessmentResponse.findById(id)
            .populate('assessmentId', 'title code')
            .populate('userId', 'name email');

        if (!response) {
            return res.status(404).json({ success: false, message: 'Assessment response not found' });
        }

        res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.error('Error fetching assessment response:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const getAssessmentStatus = async (req, res) => {
    try {
        const { assessmentId, employeeId } = req.params;

        const existingResponse = await AssessmentResponse.findOne({
            assessmentId,
            employee_id: employeeId,
            status: 'completed'
        });

        res.json({
            success: true,
            status: existingResponse ? 'completed' : 'pending',
            completed: !!existingResponse
        });
    } catch (error) {
        console.error('Error checking assessment status:', error);
        res.status(500).json({
            success: false,
            message: 'Error checking assessment status'
        });
    }
};

module.exports = {
    saveAssessmentResponse,
    getAllSubmittedAssessments,
    getAssessmentResponseById,
    getAssessmentStatus,
};
