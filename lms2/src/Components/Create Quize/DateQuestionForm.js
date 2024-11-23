import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { IconButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const DateQuestionForm = () => {
  const [questions, setQuestions] = useState([
    { questionText: '', answerDate: '', questionNumber: 1 }
  ]);

  const addNewQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: '', answerDate: '', questionNumber: questions.length + 1 }
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, idx) => idx !== index);
    setQuestions(
      updatedQuestions.map((q, idx) => ({ ...q, questionNumber: idx + 1 }))
    );
  };

  return (
    <div className="date-question-form">
      {questions.map((question, index) => (
        <div key={index} className="question-box">
          <div className="question-header">
            <h3>Question No. {question.questionNumber}</h3>
            <button onClick={() => removeQuestion(index)} className="remove-btn">
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={question.questionText}
            onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
            placeholder="Enter your question"
            className="question-input"
            style={{ width: '100%' }}
          />
          <IconButton color="primary" component="label">
              <input hidden accept="image/*" type="file" />
              <AddPhotoAlternateIcon />
          </IconButton>
          </div>
          <div className="date-answer">
            <input
              type="date"
              value={question.answerDate}
              onChange={(e) => handleQuestionChange(index, 'answerDate', e.target.value)}
              className="answer-input"
              style={{ width: '100%' }}
              placeholder='Answer option'
              disabled
            />
          </div>
        </div>
      ))}
      <button onClick={addNewQuestion} className="add-question-btn">
        <i className="fa-solid fa-plus"></i> Add New Question
      </button>
      <style jsx>{`
        .date-question-form {
          max-width: 100%;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border-radius: 10px;
        }
        .question-box {
          border: 1px solid #ddd;
          border-top: 5px solid #7A1CAC;
          padding: 1rem;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
          background-color: #ffffff;
        }
        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .question-input, .answer-input {
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .date-answer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .upload-icon {
          cursor: pointer;
          color: #007bff;
        }
        .remove-btn {
          background: none;
          border: none;
          color: red;
          cursor: pointer;
          font-size: 1.2rem;
        }
        .add-question-btn {
          align-self: flex-start;
          padding: 0.5rem 1rem;
          background-color: #7A1CAC;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }
        .add-question-btn:hover {
          background-color: #2E073F;
        }
        @media (max-width: 600px) {
          .date-question-form {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DateQuestionForm;
