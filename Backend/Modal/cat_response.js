// const mongoose = require('mongoose');

// const CATResponseSchema = new mongoose.Schema({
//     catId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'CAT',
//         required: true
//     },
//     employee_id: {          // Changed from userId to employee_id
//         type: String,
//         required: true
//     },
//     employee_name: {        // Added employee_name field
//         type: String,
//         required: true
//     },
//     responses: {
//         mcq: [{
//             questionId: String,
//             selectedOptions: [String],
//             score: Number,
//             subSkillId: String,
//             subSkillName: String
//         }],
//         text: [{
//             questionId: String,
//             answer: String,
//             score: Number
//         }]
//     },
//     subSkillResults: [{
//         subSkillId: String,
//         name: String,
//         correctPercentage: Number,
//         scorePercentage: Number,
//         correctCount: Number,
//         totalQuestions: Number,
//         totalPoints: Number,
//         maxPossiblePoints: Number
//     }],
//     mcqTotalScore: {
//         type: Number,
//         default: 0
//     },
//     textTotalScore: {
//         type: Number,
//         default: 0
//     },
//     totalScore: {
//         type: Number,
//         default: 0
//     },
//     mcqAverage: { type: Number, default: 0 },
//     textAverage: { type: Number, default: 0 },
//     passed: Boolean,
//     completedAt: {
//         type: Date,
//         default: Date.now
//     }
// }, {
//     timestamps: true
// });

// const CATResponse = mongoose.model('CATResponse', CATResponseSchema);
// module.exports = CATResponse;


const mongoose = require('mongoose');

const CATResponseSchema = new mongoose.Schema({
    catId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CAT',
        required: true
    },
    catTitle: {  // Added new field for CAT title
        type: String,
        required: true
    },
    employee_id: {
        type: String,
        required: true
    },
    employee_name: {
        type: String,
        required: true
    },
    responses: {
        mcq: [{
            questionId: String,
            selectedOptions: [String],
            score: Number,
            subSkillId: String,
            subSkillName: String
        }],
        text: [{
            questionId: String,
            answer: String,
            score: { type: Number, default: null }
        }],
        interview: [{
            questionId: String,
            question: String,
            ratingRange: String,
            ratingScore: { type: Number, default: null }
        }]
    },
    subSkillResults: [{
        subSkillId: String,
        name: String,
        correctPercentage: Number,
        scorePercentage: Number,
        correctCount: Number,
        totalQuestions: Number,
        totalPoints: Number,
        maxPossiblePoints: Number
    }],
    mcqTotalScore: {
        type: Number,
        default: 0
    },
    textTotalScore: {
        type: Number,
        default: null
    },
    totalScore: {
        type: Number,
        default: 0
    },
    mcqAverage: { type: Number, default: 0 },
    textAverage: { type: Number, default: null },
    passed: Boolean,
    completedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const CATResponse = mongoose.model('CATResponse', CATResponseSchema);
module.exports = CATResponse;