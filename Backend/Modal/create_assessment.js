const mongoose = require('mongoose');

// Schema for MCQs
const MCQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, default: false },
    },
  ],
  points: { type: Number, required: true, default: 0 },
  mainCategory: { type: String, required: true },
  subCategory: { type: String, required: true },
  questionImage: { type: String, required: false },
});

// Schema for Text Questions
const TextQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: Array, required: true },
  mainCategory: { type: String, required: true },
  subCategory: { type: String, required: true },
  points: { type: Number, required: true, default: 0 },
  questionImage: { type: String, required: false },
});

// Schema for Match the Following
const MatchTheFollowingSchema = new mongoose.Schema({
  question: { type: Array, required: true },
  pairs: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
  mainCategory: { type: String, required: true },
  subCategory: { type: String, required: true },
  points: { type: Number, required: true, default: 0 },
});

// Main Assessment Schema
const AssessmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  timer: { type: Number, required: false },
  questions: [
    {
      questionType: {
        type: String,
        enum: ['MCQ', 'Text', 'MatchTheFollowing'],
        required: true,
      },
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'questions.questionType',
      },
    },
  ],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

AssessmentSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const MCQ = mongoose.model('MCQ', MCQSchema);
const TextQuestion = mongoose.model('TextQuestion', TextQuestionSchema);
const MatchTheFollowing = mongoose.model('MatchTheFollowing', MatchTheFollowingSchema);
const Assessment = mongoose.model('Assessment', AssessmentSchema);

module.exports = { Assessment, MCQ, TextQuestion, MatchTheFollowing };
