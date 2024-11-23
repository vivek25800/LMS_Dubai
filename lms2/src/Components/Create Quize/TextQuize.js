import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { IconButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function TextQuize({ index, onDelete, onChange }) {
  const [question, setQuestion] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [options, setOptions] = useState([{ text: '', correct: false }]);
  const [points, setPoints] = useState(0);
  const [mathToggle, setMathToggle] = useState(false);
  const [multipleAnswers, setMultipleAnswers] = useState(true);
  const [required, setRequired] = useState(false);
  const [answerType, setAnswerType] = useState('short'); // 'short' or 'long'

  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleOptionChange = (idx, value) => {
    const newOptions = [...options];
    newOptions[idx].text = value;
    setOptions(newOptions);
    handleChange();
  };

  const addOption = () => {
    setOptions([...options, { text: '', correct: false }]);
  };

  const removeOption = (idx) => {
    const newOptions = options.filter((_, i) => i !== idx);
    setOptions(newOptions);
    handleChange();
  };

  const handleChange = () => {
    onChange(index, {
      question,
      subtitle,
      options,
      points,
      mathToggle,
      multipleAnswers,
      required,
      answerType,
    });
  };

  return (
    <div>
        <style>
        {`
        .question-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 100%;
          margin: 1rem auto;
          padding: 2rem;
          border-top: 5px solid #7A1CAC;
          box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
          border-radius: 1rem;
          background-color: #ffffff;
          position: relative;
        }
        .question-input, .subtitle-input {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
          .footer-controls{
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid rgba(0,0,0,0.1);
          }
          .controls{
          width: 30%;
          margin: 1rem 0px;
          }
        .options-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .option-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .upload-icon {
          margin-left: 8px;
          cursor: pointer;
          color: #007bff;
        }
        .control-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
          input{
          height: 2.5rem;
          padding-left: 10px;
          }
          .desc-del-btn{
            background-color: transparent;
            color: red;
            box-shadow: none;
            width: fit-content;
            border-radius: 50%;
            }
            .desc-del-btn:hover{
            background-color: red;
            color: #ffffff
            }
            .add-option-btn{
            background-color: #ffffff;
            color: #7A1CAC;
            border: 1px solid #7A1CAC;
            width: 18%;
            font-weight: 500;
            }
            .add-option-btn:hover{
            background-color: #7A1CAC;
            color: #ffffff;
            }
            .btn-div button{
            background-color: #7A1CAC;
            }
            .btn-div button:hover{
            background-color: #2E073F;
            }
            .dropdowns {
            display: flex;
            gap: 16px;
            margin-top: 16px;
          }
            .dropdowns select {
            border-color: rgba(0,0,0,0.5);
            }
        `}
      </style>

    <div className="question-form" style={{ position: 'relative' }}>
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'transparent',
          color: '#000',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '16px',
          width: '24px',
          height: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: '0.7',
        }}
        onClick={() => onDelete(index)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>

      <h5>Question No. {index + 1}</h5>

      {/* Question Input */}
      <div className="question-input">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
              handleChange();
            }}
            placeholder="Enter your question"
            style={{ width: '100%' }}
          />
          <IconButton color="primary" component="label">
              <input hidden accept="image/*" type="file" />
              <AddPhotoAlternateIcon />
          </IconButton>
        </div>
      </div>

      {/* Subtitle Input */}
      <div className="subtitle-input">
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Enter a subtitle (optional)"
        />
      </div>

      {/* Options List */}
      <div className="options-list">
        {options.map((option, idx) => (
          <div className="option-item" key={idx}>
            <div style={{ display: 'flex', alignItems: 'center', width:"100%" }}>
              <input
                type={answerType === 'short' ? 'text' : 'textarea'}
                value={option.text}
                onChange={(e) => handleOptionChange(idx, e.target.value)}
                placeholder={`Answer options ${idx + 1}`}
                style={{ width: '100%', height: answerType === 'short' ? 'auto' : '100px' }}
                disabled
              />
            </div>
            <button className="desc-del-btn" onClick={() => removeOption(idx)}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        ))}
        <h5>Correct Answer:</h5>
        <button className="add-option-btn" onClick={addOption}>
          <i className="fa-solid fa-plus"></i>Add Answer
        </button>
      </div>

      {/* <div className="dropdowns">
          <div>
            <label>Main Category:</label>
            <select
              value={mainCategory}
              onChange={(e) => setMainCategory(e.target.value)}
            >
              <option value="">Select Main Category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
            </select>
          </div>
          <div>
            <label>Sub Category:</label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option value="">Select Sub Category</option>
              <option value="Sub Category 1">Sub Category 1</option>
              <option value="Sub Category 2">Sub Category 2</option>
            </select>
          </div>
        </div> */}

      {/* Answer Type Selection */}
      <div style={{ marginTop: '10px' }}>
        <Form.Check
          type="radio"
          label="Short Answer"
          name={`answerType-${index}`}
          checked={answerType === 'short'}
          onChange={() => setAnswerType('short')}
          style={{ marginRight: '10px' }}
        />
        <Form.Check
          type="radio"
          label="Long Answer"
          name={`answerType-${index}`}
          checked={answerType === 'long'}
          onChange={() => setAnswerType('long')}
        />
      </div>

      {/* <div className="dropdowns">
          <div>
            <label>Main Category:</label>
            <select
              value={mainCategory}
              onChange={(e) => setMainCategory(e.target.value)}
            >
              <option value="">Select Main Category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
            </select>
          </div>
          <div>
            <label>Sub Category:</label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option value="">Select Sub Category</option>
              <option value="Sub Category 1">Sub Category 1</option>
              <option value="Sub Category 2">Sub Category 2</option>
            </select>
          </div>
        </div> */}

      {/* Footer Controls */}
      <div className="footer-controls">
        {/* <div className="control-item">
          <label>Points:</label>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </div> */}

        {/* <div className="control-item">
          <Form>
            <Form.Check
              type="switch"
              id="math-switch"
              label="Math:"
              checked={mathToggle}
              onChange={(e) => setMathToggle(e.target.checked)}
            />
          </Form>
        </div>

        <div className="control-item">
          <Form>
            <Form.Check
              type="switch"
              id="multiple-switch"
              label="Multiple answers:"
              checked={multipleAnswers}
              onChange={(e) => setMultipleAnswers(e.target.checked)}
            />
          </Form>
        </div> */}

        <div className="control-item">
          <Form>
            <Form.Check
              type="switch"
              id="required-switch"
              label="Required:"
              checked={required}
              onChange={(e) => setRequired(e.target.checked)}
            />
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
}

const AddQuestionContainer = () => {
  const [questions, setQuestions] = useState([]);

  const addNewQuestion = () => {
    setQuestions([...questions, {}]);
  };

  const deleteQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, questionData) => {
    const newQuestions = [...questions];
    newQuestions[index] = questionData;
    setQuestions(newQuestions);
  };

  return (
    <div>
      {questions.map((_, index) => (
        <TextQuize
          key={index}
          index={index}
          onDelete={deleteQuestion}
          onChange={handleQuestionChange}
        />
      ))}

      <div className="info-div-item btn-div">
        <button id="add-newQues-btn" onClick={addNewQuestion}>
          <i className="fa-solid fa-plus"></i> Add new question
        </button>
        {/* <button id="submit-questions-btn">
          Submit Questions
        </button> */}
      </div>
    </div>
  );
};

export default AddQuestionContainer;
