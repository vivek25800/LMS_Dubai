const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the common schema for all questions
const QuestionSchema = new Schema({
    questionText: { type: String },
    type: { type: String, enum: ['mcq', 'text', 'match'] },
    options: [String],         // For MCQ
    correctAnswer: String,     // For MCQ
    matchPairs: [              // For Match the Following (array of pairs)
        {
            question: String,  // Matching question
            answer: String     // Correct match
        }
    ]
});

// Define the assessment schema
const AssessmentSchema = new Schema({
    title: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: String },
    questions: [QuestionSchema], // An array of questions
});

const Assessment = mongoose.model('Assessment', AssessmentSchema);

module.exports = Assessment;
