const CAT = require('../Modal/create_cat');
const CATResponse = require('../Modal/cat_response');
const register_modal = require('../Modal/employee_register');  // Adjust the path as needed

// Submit CAT Response
// const submitCATResponse = async (req, res) => {
//     try {
//         const { catId, employee_id, responses } = req.body;  // Changed from userId to employee_id

//         if (!catId || !employee_id || !responses) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Missing required fields'
//             });
//         }

//         // Find employee details
//         const employee = await register_modal.findOne({ employee_id });
//         if (!employee) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Employee not found'
//             });
//         }

//         const cat = await CAT.findById(catId);
//         if (!cat) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'CAT not found'
//             });
//         }

//         if (new Date(cat.validTill) < new Date()) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'CAT has expired'
//             });
//         }

//         const existingResponse = await CATResponse.findOne({ catId, employee_id });
//         if (existingResponse) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'You have already submitted this CAT'
//             });
//         }


//         let mcqTotalScore = 0;
//         let textTotalScore = 0;
//         let textAverage = 0;
//         const subSkillScores = new Map();
//         const mcqQuestionsMap = new Map();
//         const subSkillQuestionsCount = new Map();
//         const textQuestionsMap = new Map();

//         if (cat.mainSkills && Array.isArray(cat.mainSkills)) {
//             cat.mainSkills.forEach(mainSkill => {
//                 if (mainSkill.subSkills && Array.isArray(mainSkill.subSkills)) {
//                     mainSkill.subSkills.forEach(subSkill => {
//                         if (!subSkill || !subSkill._id) return;
                        
//                         const subSkillId = subSkill._id.toString();
//                         subSkillScores.set(subSkillId, {
//                             name: subSkill.name,
//                             correctCount: 0,
//                             totalQuestions: 0,
//                             totalPoints: 0,
//                             maxPossiblePoints: 0
//                         });

//                         if (subSkill.mcqQuestions && Array.isArray(subSkill.mcqQuestions)) {
//                             subSkill.mcqQuestions.forEach(question => {
//                                 if (!question || !question._id) return;
                                
//                                 mcqQuestionsMap.set(question._id.toString(), {
//                                     ...question.toObject(),
//                                     subSkillId,
//                                     subSkillName: subSkill.name
//                                 });
                                
//                                 const currentCount = subSkillQuestionsCount.get(subSkillId) || 0;
//                                 subSkillQuestionsCount.set(subSkillId, currentCount + 1);
//                             });
//                         }
//                     });
//                 }
//             });
//         }

//         const scoredMcqResponses = [];
//         if (responses.mcq && Array.isArray(responses.mcq)) {
//             responses.mcq.forEach(response => {
//                 if (!response || !response.questionId) return;

//                 const question = mcqQuestionsMap.get(response.questionId);
//                 if (!question) return;

//                 const subSkillData = subSkillScores.get(question.subSkillId);
//                 if (!subSkillData) return;

//                 subSkillData.totalQuestions++;
//                 subSkillData.maxPossiblePoints += question.points || 0;

//                 let score = 0;
//                 if (response.selectedOptions && Array.isArray(response.selectedOptions)) {
//                     const correctOptionIndices = question.options
//                         .map((opt, idx) => opt.correct ? idx.toString() : null)
//                         .filter(idx => idx !== null);

//                     const selectedOptionsSet = new Set(response.selectedOptions);
//                     const correctOptionsSet = new Set(correctOptionIndices);

//                     if (question.maxCorrectAnswers === 1) {
//                         if (selectedOptionsSet.size === 1 && 
//                             correctOptionsSet.has(Array.from(selectedOptionsSet)[0])) {
//                             score = question.points || 0;
//                             subSkillData.correctCount++;
//                             subSkillData.totalPoints += score;
//                         }
//                     } else {
//                         const selectedArray = Array.from(selectedOptionsSet);
//                         const correctArray = Array.from(correctOptionsSet);
                        
//                         if (selectedArray.length === correctArray.length && 
//                             selectedArray.every(opt => correctOptionsSet.has(opt))) {
//                             score = question.points || 0;
//                             subSkillData.correctCount++;
//                             subSkillData.totalPoints += score;
//                         }
//                     }
//                 }

//                 mcqTotalScore += score;
//                 scoredMcqResponses.push({
//                     questionId: response.questionId,
//                     selectedOptions: response.selectedOptions || [],
//                     score,
//                     subSkillId: question.subSkillId,
//                     subSkillName: question.subSkillName
//                 });
//             });
//         }

//         const scoredTextResponses = [];
//         if (responses.text && Array.isArray(responses.text)) {
//             if (cat.textQuestions && Array.isArray(cat.textQuestions)) {
//                 cat.textQuestions.forEach(question => {
//                     if (question && question._id) {
//                         textQuestionsMap.set(question._id.toString(), question.toObject());
//                     }
//                 });
//             }

//             responses.text.forEach(response => {
//                 if (!response || !response.questionId) return;

//                 const question = textQuestionsMap.get(response.questionId);
//                 if (!question) return;

//                 const score = question.points || 0;
//                 textTotalScore += score;
                
//                 scoredTextResponses.push({
//                     questionId: response.questionId,
//                     answer: response.answer || '',
//                     score
//                 });
//             });

//             const totalTextQuestions = cat.textQuestions?.length || 0;
//             textAverage = totalTextQuestions > 0 ? (textTotalScore / totalTextQuestions) * 100 : 0;
//         }

//         const subSkillResults = Array.from(subSkillScores.entries()).map(([id, data]) => ({
//             subSkillId: id,
//             name: data.name,
//             correctPercentage: data.totalQuestions > 0 ? (data.correctCount / data.totalQuestions) * 100 : 0,
//             scorePercentage: data.maxPossiblePoints > 0 ? (data.totalPoints / data.maxPossiblePoints) * 100 : 0,
//             correctCount: data.correctCount,
//             totalQuestions: data.totalQuestions,
//             totalPoints: data.totalPoints,
//             maxPossiblePoints: data.maxPossiblePoints
//         }));

//         const totalQuestionsAcrossSubskills = Array.from(subSkillQuestionsCount.values())
//             .reduce((sum, count) => sum + count, 0);
//         const overallMcqPercentage = totalQuestionsAcrossSubskills > 0 ? 
//             (mcqTotalScore / totalQuestionsAcrossSubskills) * 100 : 0;

//             const catResponse = new CATResponse({
//                 catId,
//                 employee_id,                    // Changed from userId
//                 employee_name: employee.employee_name,  // Added employee name
//                 responses: {
//                     mcq: scoredMcqResponses,
//                     text: scoredTextResponses
//                 },
//                 mcqTotalScore,
//                 textTotalScore,
//                 totalScore: mcqTotalScore + textTotalScore,
//                 mcqAverage: overallMcqPercentage,
//                 textAverage,
//                 subSkillResults,
//                 passed: cat.passingScore ? (mcqTotalScore + textTotalScore) >= cat.passingScore : undefined
//             });

//         await catResponse.save();

//         return res.status(201).json({
//             success: true,
//             message: 'CAT response submitted successfully',
//             data: {
//                 employee_id,                // Changed from userId
//                 employee_name: employee.employee_name,  // Added employee name
//                 mcqTotalScore,
//                 textTotalScore,
//                 totalScore: mcqTotalScore + textTotalScore,
//                 mcqAverage: overallMcqPercentage,
//                 textAverage,
//                 subSkillResults,
//                 passed: catResponse.passed,
//                 responseId: catResponse._id
//             }
//         });

//     } catch (error) {
//         console.error('Error submitting CAT response:', error);
//         return res.status(500).json({
//             success: false,
//             message: 'Error submitting CAT response',
//             error: error.message
//         });
//     }
// };

const submitCATResponse = async (req, res) => {
    try {
        const { catId, catTitle, employee_id, responses } = req.body;

        if (!catId || !catTitle || !employee_id || !responses) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields'
            });
        }

        const employee = await register_modal.findOne({ employee_id });
        if (!employee) {
            return res.status(404).json({
                success: false,
                message: 'Employee not found'
            });
        }

        const cat = await CAT.findById(catId);
        if (!cat) {
            return res.status(404).json({
                success: false,
                message: 'CAT not found'
            });
        }

        if (new Date(cat.validTill) < new Date()) {
            return res.status(400).json({
                success: false,
                message: 'CAT has expired'
            });
        }

        const existingResponse = await CATResponse.findOne({ catId, employee_id });
        if (existingResponse) {
            return res.status(400).json({
                success: false,
                message: 'You have already submitted this CAT'
            });
        }

        let mcqTotalScore = 0;
        const subSkillScores = new Map();
        const mcqQuestionsMap = new Map();
        const subSkillQuestionsCount = new Map();

        // Setup subskill maps
        if (cat.mainSkills && Array.isArray(cat.mainSkills)) {
            cat.mainSkills.forEach(mainSkill => {
                if (mainSkill.subSkills && Array.isArray(mainSkill.subSkills)) {
                    mainSkill.subSkills.forEach(subSkill => {
                        if (!subSkill || !subSkill._id) return;
                        
                        const subSkillId = subSkill._id.toString();
                        subSkillScores.set(subSkillId, {
                            name: subSkill.name,
                            correctCount: 0,
                            totalQuestions: 0,
                            totalPoints: 0,
                            maxPossiblePoints: 0
                        });

                        if (subSkill.mcqQuestions && Array.isArray(subSkill.mcqQuestions)) {
                            subSkill.mcqQuestions.forEach(question => {
                                if (!question || !question._id) return;
                                
                                mcqQuestionsMap.set(question._id.toString(), {
                                    ...question.toObject(),
                                    subSkillId,
                                    subSkillName: subSkill.name
                                });
                                
                                const currentCount = subSkillQuestionsCount.get(subSkillId) || 0;
                                subSkillQuestionsCount.set(subSkillId, currentCount + 1);
                            });
                        }
                    });
                }
            });
        }

        // Process MCQ responses
        const scoredMcqResponses = [];
        if (responses.mcq && Array.isArray(responses.mcq)) {
            responses.mcq.forEach(response => {
                if (!response || !response.questionId) return;

                const question = mcqQuestionsMap.get(response.questionId);
                if (!question) return;

                const subSkillData = subSkillScores.get(question.subSkillId);
                if (!subSkillData) return;

                subSkillData.totalQuestions++;
                subSkillData.maxPossiblePoints += question.points || 0;

                let score = 0;
                if (response.selectedOptions && Array.isArray(response.selectedOptions)) {
                    const correctOptionIndices = question.options
                        .map((opt, idx) => opt.correct ? idx.toString() : null)
                        .filter(idx => idx !== null);

                    const selectedOptionsSet = new Set(response.selectedOptions);
                    const correctOptionsSet = new Set(correctOptionIndices);

                    if (question.maxCorrectAnswers === 1) {
                        if (selectedOptionsSet.size === 1 && 
                            correctOptionsSet.has(Array.from(selectedOptionsSet)[0])) {
                            score = question.points || 0;
                            subSkillData.correctCount++;
                            subSkillData.totalPoints += score;
                        }
                    } else {
                        const selectedArray = Array.from(selectedOptionsSet);
                        const correctArray = Array.from(correctOptionsSet);
                        
                        if (selectedArray.length === correctArray.length && 
                            selectedArray.every(opt => correctOptionsSet.has(opt))) {
                            score = question.points || 0;
                            subSkillData.correctCount++;
                            subSkillData.totalPoints += score;
                        }
                    }
                }

                mcqTotalScore += score;
                scoredMcqResponses.push({
                    questionId: response.questionId,
                    selectedOptions: response.selectedOptions || [],
                    score,
                    subSkillId: question.subSkillId,
                    subSkillName: question.subSkillName
                });
            });
        }

        // Process text responses (without scoring)
        const textResponses = responses.text?.map(response => ({
            questionId: response.questionId,
            answer: response.answer || '',
            score: null
        })) || [];

        // Process interview responses (if any)
        const interviewResponses = responses.interview?.map(response => ({
            questionId: response.questionId,
            question: response.question,
            ratingRange: response.ratingRange,
            ratingScore: null
        })) || [];

        const subSkillResults = Array.from(subSkillScores.entries()).map(([id, data]) => ({
            subSkillId: id,
            name: data.name,
            correctPercentage: data.totalQuestions > 0 ? (data.correctCount / data.totalQuestions) * 100 : 0,
            scorePercentage: data.maxPossiblePoints > 0 ? (data.totalPoints / data.maxPossiblePoints) * 100 : 0,
            correctCount: data.correctCount,
            totalQuestions: data.totalQuestions,
            totalPoints: data.totalPoints,
            maxPossiblePoints: data.maxPossiblePoints
        }));

        const totalQuestionsAcrossSubskills = Array.from(subSkillQuestionsCount.values())
            .reduce((sum, count) => sum + count, 0);
        const overallMcqPercentage = totalQuestionsAcrossSubskills > 0 ? 
            (mcqTotalScore / totalQuestionsAcrossSubskills) * 100 : 0;

        const catResponse = new CATResponse({
            catId,
            catTitle,
            employee_id,
            employee_name: employee.employee_name,
            responses: {
                mcq: scoredMcqResponses,
                text: textResponses,
                interview: interviewResponses
            },
            mcqTotalScore,
            textTotalScore: null,
            totalScore: mcqTotalScore,  // Only includes MCQ score
            mcqAverage: overallMcqPercentage,
            textAverage: null,
            subSkillResults,
            passed: cat.passingScore ? mcqTotalScore >= cat.passingScore : undefined
        });

        await catResponse.save();

        return res.status(201).json({
            success: true,
            message: 'CAT response submitted successfully',
            data: {
                employee_id,
                employee_name: employee.employee_name,
                mcqTotalScore,
                textTotalScore: null,
                totalScore: mcqTotalScore,
                mcqAverage: overallMcqPercentage,
                textAverage: null,
                subSkillResults,
                passed: catResponse.passed,
                responseId: catResponse._id
            }
        });

    } catch (error) {
        console.error('Error submitting CAT response:', error);
        return res.status(500).json({
            success: false,
            message: 'Error submitting CAT response',
            error: error.message
        });
    }
};

const getAllCATResponse = async (req, res) => {
    try {
      const cats = await CATResponse.find();
      res.status(200).json({ data: cats });
    } catch (error) {
      console.error('Error fetching CAT responses:', error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  };

// Get User's CAT Response
const getCATResponse = async (req, res) => {
    try {
        const { responseId } = req.params;
        const response = await CATResponse.findById(responseId)
                                       .populate('catId', 'title description questions');
        
        if (!response) {
            return res.status(404).json({
                success: false,
                message: 'Response not found'
            });
        }

        res.status(200).json({
            success: true,
            data: response
        });

    } catch (error) {
        console.error('Error fetching CAT response:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching CAT response',
            error: error.message
        });
    }
};

// Get All Responses for a CAT
const getCATResponses = async (req, res) => {
    try {
        const { catId } = req.params;
        const responses = await CATResponse.find({ catId })
                                         .populate('catId', 'title questions');

        res.status(200).json({
            success: true,
            data: responses
        });

    } catch (error) {
        console.error('Error fetching CAT responses:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching CAT responses',
            error: error.message
        });
    }
};

const updateCATResponse = async (req, res) => {
    try {
        const { responseId } = req.params;
        const updatedData = req.body;

        // Calculate text total score
        const textTotalScore = updatedData.responses.text.reduce((sum, item) => 
            sum + (item.score || 0), 0);

        // Calculate interview total score
        const interviewTotalScore = updatedData.responses.interview.reduce((sum, item) => 
            sum + (item.ratingScore || 0), 0);

        // Update total score to include MCQ, text, and interview scores
        const totalScore = (updatedData.mcqTotalScore || 0) + textTotalScore + interviewTotalScore;

        // Create a clean update object without conflicting paths
        const updateObject = {
            textTotalScore,
            totalScore,
            responses: updatedData.responses, // Update entire responses object at once
            mcqTotalScore: updatedData.mcqTotalScore,
            mcqAverage: updatedData.mcqAverage,
            textAverage: textTotalScore > 0 ? (textTotalScore / updatedData.responses.text.length) * 10 : null,
            passed: updatedData.passed
        };

        const response = await CATResponse.findByIdAndUpdate(
            responseId,
            updateObject,
            { new: true }
        );

        if (!response) {
            return res.status(404).json({
                success: false,
                message: 'Response not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Response updated successfully',
            data: response
        });

    } catch (error) {
        console.error('Error updating CAT response:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating CAT response',
            error: error.message
        });
    }
};

const getCATResponseByEmployee = async (req, res) => {
    try {
        const { catId, employeeId } = req.params;
        const response = await CATResponse.findOne({
            catId,
            employee_id: employeeId
        }).populate('catId');

        if (!response) {
            return res.status(404).json({
                success: false,
                message: 'Response not found'
            });
        }

        res.status(200).json({
            success: true,
            data: response
        });

    } catch (error) {
        console.error('Error fetching CAT response:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching CAT response',
            error: error.message
        });
    }
};

module.exports = {
    submitCATResponse,
    getAllCATResponse,
    getCATResponse,
    getCATResponses,
    updateCATResponse,
    getCATResponseByEmployee
};