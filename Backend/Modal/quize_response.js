const mongoose = require("mongoose");

const QuizResponseSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answers: [{
    questionId: Number,
    sectionId: Number,
    answer: {
      type: mongoose.Schema.Types.Mixed, // Can store different types of answers
      required: true
    },
    isCorrect: {
      type: Boolean,
      default: null // null for questions that don't have correct/incorrect answers
    }
  }],
  score: {
    type: Number,
    default: 0
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  completionTime: {
    type: Number // Time taken in seconds
  }
});

const QuizResponse = mongoose.model("QuizResponse", QuizResponseSchema);
module.exports = QuizResponse;