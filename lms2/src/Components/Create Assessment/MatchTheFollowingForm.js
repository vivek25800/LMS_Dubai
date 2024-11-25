import React, { useState } from 'react';

const MatchTheFollowingForm = ({index, onDelete}) => {
  const [questions, setQuestions] = useState([
    { question: '', correctAnswer: '', points: 2 },
    { question: '', correctAnswer: '', points: 2 },
    { question: '', correctAnswer: '', points: 2 },
    { question: '', correctAnswer: '', points: 2 },
    { question: '', correctAnswer: '', points: 2 },
  ]);
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [visible, setVisible] = useState(true);

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].correctAnswer = value;
    setQuestions(newQuestions);
  };

  const handlePointsChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].points = Number(value);
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', correctAnswer: '', points: 2 }]);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleDelete = () => {
    setVisible(false); // Set visible to false to hide the component
  };

  if (!visible) return null; // If visible is false, do not render the component

  return (
    <div style={{ maxWidth: '100%', margin: '2rem auto' }}>
      <style>
        {`
          .question-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            background-color: #ffffff;
            padding: 1.5rem;
            border-radius: 10px;
            border: 1px solid rgba(0,0,0,0.2);
          }
          
          .question-item {
            display: flex;
            gap: 10px;
            align-items: center;
            // justify-content: space-between;
          }
           .question-item .ques-ans-input{
           height: 2.5rem;
           width: 42%;
           padding-left: 10px;
           }
            .points-input {
           width: 6rem;
           height: 2.5rem;
           padding-left: 10px;
           }

          .dropdowns {
            display: flex;
            gap: 16px;
            margin-top: 16px;
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

          @media (max-width: 600px) {
            .question-item {
              flex-direction: column;
              align-items: flex-start;
            }

            .dropdowns {
              flex-direction: column;
            }
          }
        `}
      </style>
      <div className="question-form" style={{position: "relative"}}>

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
        onClick={handleDelete}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>

        {questions.map((q, index) => (
          <div className="question-item" key={index}>
            <input
              type="text"
              placeholder={`Question ${index + 1}`}
              className='ques-ans-input'
              value={q.question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
            />
            <input
              type="text"
              placeholder="Correct Answer"
              className='ques-ans-input'
              value={q.correctAnswer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
            <input
              type="number"
              placeholder="Points"
              className='points-input'
              value={q.points}
              onChange={(e) => handlePointsChange(index, e.target.value)}
            />
            <button className="desc-del-btn" onClick={() => removeQuestion(index)}><i className="fa-regular fa-trash-can"></i></button>
          </div>
        ))}
        <button className="add-option-btn" onClick={addQuestion}> <i className="fa-solid fa-plus"></i> Add Question</button>
        <div className="dropdowns">
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
        </div>
      </div>
    </div>
  );
};

export default MatchTheFollowingForm;

// const AddQuestionContainer = () => {
//     const [questions, setQuestions] = useState([]);
  
//     const addNewQuestion = () => {
//       setQuestions([...questions, {}]);
//     };
  
//     const deleteQuestion = (index) => {
//       const newQuestions = questions.filter((_, i) => i !== index);
//       setQuestions(newQuestions);
//     };
  
//     return (
//       <div>
//           <style>
//               {`
//               .btn-div button{
//               background-color: #7A1CAC;
//               }
//               .btn-div button:hover{
//               background-color: #2E073F;
//               }
//               `}
//           </style>
//         {questions.map((_, index) => (
//           <MatchTheFollowingForm key={index} index={index} onDelete={deleteQuestion} />
//         ))}
  
//         <div className="info-div-item btn-div">
//           <button id="add-newQues-btn" onClick={addNewQuestion}>
//             <i className="fa-solid fa-plus"></i> Add new question
//           </button>
//         </div>
//       </div>
//     );
//   };
// export default AddQuestionContainer;

// export default MatchTheFollowingForm;
