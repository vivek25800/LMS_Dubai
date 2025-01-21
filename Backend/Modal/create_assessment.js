// const mongoose = require('mongoose');

// // Schema for MCQs
// const MCQSchema = new mongoose.Schema({
//   question: { type: String, required: true },
//   options: [
//     {
//       text: { type: String, required: true },
//       isCorrect: { type: Boolean, default: false },
//     },
//   ],
//   points: { type: Number, required: true, default: 0 },
//   mainCategory: { type: String, required: true },
//   subCategory: { type: String, required: true },
//   questionImage: { type: String },
// });

// // Schema for Text Questions
// const TextQuestionSchema = new mongoose.Schema({
//   question: { type: String, required: true },
//   answer: { type: Array, required: true },
//   mainCategory: { type: String, required: true },
//   subCategory: { type: String, required: true },
//   points: { type: Number, required: true, default: 0 },
//   questionImage: { type: String },
// });

// // Schema for Match the Following
// const MatchTheFollowingSchema = new mongoose.Schema({
//   question: { type: Array, required: true },
//   pairs: [
//     {
//       question: { type: String, required: true },
//       answer: { type: String, required: true },
//     },
//   ],
//   mainCategory: { type: String, required: true },
//   subCategory: { type: String, required: true },
//   points: { type: Number, required: true, default: 0 },
// });

// // Main Assessment Schema
// const AssessmentSchema = new mongoose.Schema({
//   assessment_title: { type: String, required: true },
//   assessment_code: { type: String, required: true, unique: true },
//   assessment_description: { type: String, required: false },
//   assessment_timer: { type: Number, required: false },
//   questions: [
//     {
//       questionType: {
//         type: String,
//         enum: ['MCQ', 'Text', 'MatchTheFollowing'],
//         required: true,
//       },
//       questionId: {
//         type: mongoose.Schema.Types.ObjectId,
//         refPath: 'questions.questionType',
//       },
//     },
//   ],
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

// AssessmentSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// const MCQ = mongoose.model('MCQ', MCQSchema);
// const TextQuestion = mongoose.model('TextQuestion', TextQuestionSchema);
// const MatchTheFollowing = mongoose.model('MatchTheFollowing', MatchTheFollowingSchema);
// const Assessment = mongoose.model('Assessment', AssessmentSchema);

// module.exports = { Assessment, MCQ, TextQuestion, MatchTheFollowing };


// const mongoose = require('mongoose');

// // Schema for each option
// const OptionSchemaMCQ = new mongoose.Schema({
//   text: {
//     type: String,
//     // required: true, // Option text is required
//   },
//   image: {
//     type: String, // Optional image URL for the option
//   },
//   correct: {
//     type: Boolean,
//     default: false, // Default: not correct
//   },
// });

// // Main schema for the MCQ question
// const MCQQuestionSchema = new mongoose.Schema({
//   question: {
//     type: String,
//     // required: true, // Question text is required
//   },
//   questionImage: {
//     type: String, // Optional image URL for the question
//   },
//   options: {
//     type: [OptionSchemaMCQ], // Array of options
//     validate: [arrayLimit, "{PATH} exceeds the limit of 10"], // Max of 10 options
//   },
//   mainCategory: {
//     type: String,
//     // required: true, // Main category is required
//   },
//   subCategory: {
//     type: String,
//     // required: true, // Sub-category is required
//   },
//   points: {
//     type: Number,
//     // required: true, // Points are required
//     min: 1,
//     max: 10, // Points must be between 1 and 10
//   },
//   multipleAnswers: {
//     type: Boolean,
//     default: false, // Default: single answer mode
//   },
//   correctAnswers: {
//     type: Number,
//     min: 1,
//     validate: {
//       validator: function (value) {
//         return !this.multipleAnswers || value <= this.options.length;
//       },
//       message: "Correct answers must not exceed the number of options",
//     },
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now, // Auto-generate creation timestamp
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now, // Auto-generate update timestamp
//   },
// });

// // Custom validator to limit the number of options
// function arrayLimit(val) {
//   return val.length <= 10;
// }


// // Schema for options
// const OptionSchemaText = new mongoose.Schema({
//   text: {
//     type: String,
//     // required: true,
//   },
//   isCorrect: {
//     type: Boolean,
//     default: false, // To identify the correct answer(s) later
//   },
// });

// // Main Question schema
// const TextQuestionSchema = new mongoose.Schema({
//   question: {
//     type: String,
//     // required: true,
//   },
//   questionImage: {
//     type: String, // For storing the uploaded image's URL or path
//     default: null,
//   },
//   options: {
//     type: [OptionSchemaText], // Array of options
//     default: [],
//   },
//   mainCategory: {
//     type: String,
//     // required: true,
//   },
//   subCategory: {
//     type: String,
//     // required: true,
//   },
//   answerType: {
//     type: String,
//     enum: ['short', 'long'], // Either short or long answers
//     // required: true,
//   },
//   points: {
//     type: Number,
//     // required: true,
//     min: 1,
//   },
// });


// // Schema for individual match-the-following question
// const MatchQuestionSchema = new mongoose.Schema({
//   question: {
//     type: String,
//     // required: true, // Question text is mandatory
//   },
//   correctAnswer: {
//     type: String,
//     // required: true, // Correct answer is mandatory
//   },
//   points: {
//     type: Number,
//     // required: true, // Points are mandatory
//     min: 1, // Minimum points allowed
//   },
// });

// // Main schema for Match the Following type question
// const MatchTheFollowingSchema = new mongoose.Schema({
//   questions: {
//     type: [MatchQuestionSchema], // Array of individual match-the-following questions
//     validate: [arrayLimit, '{PATH} exceeds the limit of 10'], // Custom validation for max limit
//   },
//   mainCategory: {
//     type: String,
//     // required: true, // Main category is mandatory
//   },
//   subCategory: {
//     type: String,
//     // required: true, // Subcategory is mandatory
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now, // Timestamp for when the question was created
//   },
// });

// // Custom validator to limit the number of questions
// function arrayLimit(val) {
//   return val.length <= 10; // Maximum 10 match-the-following questions allowed
// }

// const SectionSchema = new mongoose.Schema({
//   id: Number,
//   title: String,
//   subtitle: String,
//   questions: [
//     {
//       questionMCQ: [MCQQuestionSchema] // Array for MCQs
//     },
//     {
//       questionText: [TextQuestionSchema] // Array for Text Questions
//     },
//     {
//       questionMTF: [MatchTheFollowingSchema] // Array for Match the Following Questions
//     }
//   ],
// });

// const createAssessment = new mongoose.Schema({
//   assessment_title: {type:String},
//   assessment_code: {type:String},
//   assessment_description: {type:String},
//   assessment_timer: {type:String},
//   sections: [SectionSchema],
// });

// const CreateAssessment = mongoose.model("createAssessment", createAssessment);
// module.exports = CreateAssessment;


// const mongoose = require('mongoose');

// // Schema for MCQ options
// const OptionSchemaMCQ = new mongoose.Schema({
//   text: { type: String },
//   image: { type: String, default: null },
//   correct: { type: Boolean, default: false },
// });

// // Schema for MCQ questions
// const MCQQuestionSchema = new mongoose.Schema({
//   title: { type: String },
//   options: [OptionSchemaMCQ],
//   points: { type: Number, min: 1 },
//   correctAnswers: { type: Number, min: 1 },
//   multipleAnswers: { type: Boolean, default: false },
//   mainCategory: { type: String },
//   subCategory: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// // Schema for Text questions
// const TextQuestionSchema = new mongoose.Schema({
//   title: { type: String },
//   answerType: { type: String, enum: ['short', 'long'] },
//   points: { type: Number, min: 1 },
//   options: [{ type: String }], // This can be used for predefined answers
//   mainCategory: { type: String },
//   subCategory: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// // Schema for Match the Following questions
// const MatchQuestionSchema = new mongoose.Schema({
//   title: { type: String },
//   correctAnswer: { type: String },
//   points: { type: Number, min: 1 },
// });

// // Schema for the section
// const SectionSchema = new mongoose.Schema({
//   id: { type: Number },
//   title: { type: String },
//   subtitle: { type: String },
//   questions: [
//     {
//       questionMCQ: [MCQQuestionSchema], // MCQ questions
//       questionText: [TextQuestionSchema], // Text questions
//       questionMTF: [MatchQuestionSchema], // Match the Following questions
//     },
//   ],
// });

// // Main schema for the assessment
// const AssessmentSchema = new mongoose.Schema({
//   assessment_title: { type: String},
//   assessment_code: { type: String, unique: true, required: true },
//   assessment_description: { type: String },
//   assessment_timer: { type: String },
//   sections: [SectionSchema],
//   createdAt: { type: Date, default: Date.now },
// });

// const Assessment = mongoose.model('Assessment', AssessmentSchema);

// module.exports = Assessment;





// assessmentModel.js
const mongoose = require('mongoose');

// Schema for MCQ options
const OptionSchemaMCQ = new mongoose.Schema({
  text: { type: String },
  image: { type: String, default: null },
  correct: { type: Boolean, default: false },
});

// Schema for MCQ questions
const MCQQuestionSchema = new mongoose.Schema({
  title: { type: String },
  options: [OptionSchemaMCQ],
  points: { type: Number, min: 1 },
  correctAnswers: { type: Number, min: 1 },
  multipleAnswers: { type: Boolean, default: false },
  mainCategory: { type: String },
  subCategory: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Schema for Text questions
const TextQuestionSchema = new mongoose.Schema({
  title: { type: String },
  answerType: { type: String, enum: ['short', 'long'] },
  points: { type: Number, min: 1 },
  options: [{ type: String }],
  mainCategory: { type: String },
  subCategory: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Schema for Match the Following questions
const MatchQuestionSchema = new mongoose.Schema({
  title: { type: String },
  correctAnswer: { type: String },
  points: { type: Number, min: 1 },
});

// Schema for the section
const SectionSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  subtitle: { type: String },
  questions: [
    {
      questionMCQ: [MCQQuestionSchema],
      questionText: [TextQuestionSchema],
      questionMTF: [MatchQuestionSchema],
    },
  ],
});

// Main schema for the assessment with improved validation
const AssessmentSchema = new mongoose.Schema({
  assessment_title: { 
    type: String,
    required: [true, 'Assessment title is required']
  },
  code: {  // Changed from assessment_code to code to match the index
    type: String, 
    required: [true, 'Assessment code is required'],
    unique: true,
    trim: true,
    validate: {
      validator: function(v) {
        return v && v.length > 0;
      },
      message: 'Assessment code cannot be empty'
    }
  },
  assessment_description: { type: String },
  assessment_timer: { type: String },
  sections: [SectionSchema], // Your existing section schema
  createdAt: { type: Date, default: Date.now }
});

// Explicitly create the index with sparse option
AssessmentSchema.index({ code: 1 }, { unique: true, sparse: true });

// Add a pre-save middleware to ensure code is never null
AssessmentSchema.pre('save', function(next) {
  if (!this.code) {
    const err = new Error('Assessment code cannot be null');
    next(err);
  }
  next();
});

const Assessment = mongoose.model('Assessment', AssessmentSchema);

module.exports = Assessment;

