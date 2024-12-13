// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import { FaUpload } from 'react-icons/fa';
// import axios from 'axios';
// import { base_url } from "./Utils/base_url";

// const QuestionForm = ({ index, questionData, onChange, onDelete }) => {
//   const {
//     question,
//     subtitle,
//     options,
//     totalOptions,
//     points,
//     mathToggle,
//     multipleAnswers,
//     required,
//     mainCategory,
//     subCategory,
//   } = questionData;

//   const handleInputChange = (field, value) => {
//     onChange(index, { ...questionData, [field]: value });
//   };

//   const handleOptionChange = (idx, value) => {
//     const newOptions = [...options];
//     newOptions[idx].text = value;
//     handleInputChange('options', newOptions);
//   };

//   const toggleCorrect = (idx) => {
//     const newOptions = [...options];
//     newOptions[idx].correct = !newOptions[idx].correct;
//     handleInputChange('options', newOptions);
//   };

//   const addOption = () => {
//     handleInputChange('options', [...options, { text: '', correct: false }]);
//   };

//   const removeOption = (idx) => {
//     const newOptions = options.filter((_, i) => i !== idx);
//     handleInputChange('options', newOptions);
//   };

//   return (
//     <div className='main-container-div'>
//       <div className="question-form" style={{ position: 'relative' }}>

//       <style>
//         {       
//         `
//         .question-form {
//           display: flex;
//           flex-direction: column;
//           gap: 16px;
//           max-width: 100%;
//           margin: 1rem auto;
//           padding: 2rem;
//           border: 2px solid rgba(0,0,0,0.2);
//           border-radius: 8px;
//           background-color: #ffffff;
//           position: relative;
//         }
//         .question-input, .subtitle-input {
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }
//           .footer-controls{
//           display: flex;
//           justify-content: space-between;
//           padding-top: 1rem;
//           border-top: 1px solid rgba(0,0,0,0.1);
//           }
//           .controls{
//           width: 30%;
//           margin: 1rem 0px;
//           }
//         .options-list {
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }
//         .option-item {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
//         .upload-icon {
//           margin-left: 8px;
//           cursor: pointer;
//           color: #007bff;
//         }
//         .control-item {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
//           input{
//           height: 2.5rem;
//           padding-left: 10px;
//           }
//           .desc-del-btn{
//             background-color: transparent;
//             color: red;
//             box-shadow: none;
//             width: fit-content;
//             border-radius: 50%;
//             }
//             .desc-del-btn:hover{
//             background-color: red;
//             color: #ffffff
//             }
//             .add-option-btn{
//             background-color: #ffffff;
//             color: #7A1CAC;
//             border: 1px solid #7A1CAC;
//             width: 18%;
//             font-weight: 500;
//             }
//             .add-option-btn:hover{
//             background-color: #7A1CAC;
//             color: #ffffff;
//             }
//             .btn-div button{
//             background-color: #7A1CAC;
//             }
//             .btn-div button:hover{
//             background-color: #2E073F;
//             }
//             .dropdowns {
//             display: flex;
//             gap: 16px;
//             margin-top: 16px;
//           }
//             .dropdowns select {
//             border-color: rgba(0,0,0,0.5);
//             }
//         `
        
//         }
//       </style>
//         {/* Delete Button */}
//         <button
//           style={{
//             position: 'absolute',
//             top: '10px',
//             right: '10px',
//             backgroundColor: 'transparent',
//             color: '#000',
//             borderRadius: '50%',
//             cursor: 'pointer',
//             fontSize: '16px',
//             width: '24px',
//             height: '24px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             opacity: '0.7',
//           }}
//           onClick={() => onDelete(index)}
//         >
//           <i className="fa-solid fa-trash-can"></i>
//         </button>

//         <h5>Question No. {index + 1}</h5>

//         <div className="question-input">
//           <input
//             type="text"
//             value={question}
//             onChange={(e) => handleInputChange('question', e.target.value)}
//             placeholder="Enter your question"
//             style={{ width: '100%' }}
//           />
//         </div>

//         <div className="subtitle-input">
//           <input
//             type="text"
//             value={subtitle}
//             onChange={(e) => handleInputChange('subtitle', e.target.value)}
//             placeholder="Enter a subtitle (optional)"
//           />
//         </div>

//         <div className="options-list">
//           {options.map((option, idx) => (
//             <div className="option-item" key={idx}>
//               <input
//                 type="checkbox"
//                 checked={option.correct}
//                 onChange={() => toggleCorrect(idx)}
//               />
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <input
//                   type="text"
//                   value={option.text}
//                   onChange={(e) => handleOptionChange(idx, e.target.value)}
//                   placeholder={`Option ${idx + 1}`}
//                 />
//                 <FaUpload className="upload-icon" title="Upload Image" />
//               </div>
//               <button className="desc-del-btn" onClick={() => removeOption(idx)}>
//                 <i className="fa-regular fa-trash-can"></i>
//               </button>
//             </div>
//           ))}
//           <button className="add-option-btn" onClick={addOption}>
//             <i className="fa-solid fa-plus"></i> Add Option
//           </button>
//         </div>

//         <div className="dropdowns">
//           <div>
//             <label>Main Category:</label>
//             <select
//               value={mainCategory}
//               onChange={(e) => handleInputChange('mainCategory', e.target.value)}
//             >
//               <option value="">Select Main Category</option>
//               <option value="Category 1">Category 1</option>
//               <option value="Category 2">Category 2</option>
//             </select>
//           </div>
//           <div>
//             <label>Sub Category:</label>
//             <select
//               value={subCategory}
//               onChange={(e) => handleInputChange('subCategory', e.target.value)}
//             >
//               <option value="">Select Sub Category</option>
//               <option value="Sub Category 1">Sub Category 1</option>
//               <option value="Sub Category 2">Sub Category 2</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AddQuestionContainer = () => {
//   const [questions, setQuestions] = useState([]);

//   const addNewQuestion = () => {
//     setQuestions([
//       ...questions,
//       {
//         question: '',
//         subtitle: '',
//         options: [{ text: '', correct: false }],
//         totalOptions: 2,
//         points: 0,
//         mathToggle: false,
//         multipleAnswers: true,
//         required: false,
//         mainCategory: '',
//         subCategory: '',
//       },
//     ]);
//   };

//   const deleteQuestion = (index) => {
//     const newQuestions = questions.filter((_, i) => i !== index);
//     setQuestions(newQuestions);
//   };

//   const handleQuestionChange = (index, newQuestionData) => {
//     const newQuestions = [...questions];
//     newQuestions[index] = newQuestionData;
//     setQuestions(newQuestions);
//   };

//   const handleSaveAllQuestions = async () => {
//     try {
//       const response = await axios.post(`${base_url}/add_questions`, { questions });
//       if (response.status === 200) {
//         alert('Questions saved successfully!');
//         setQuestions([]); // Clear questions after saving
//       } else {
//         alert('Failed to save the questions. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error saving questions:', error);
//       alert('Failed to save the questions. Please check your network connection.');
//     }
//   };

//   return (
//     <div>
//       {questions.map((questionData, index) => (
//         <QuestionForm
//           key={index}
//           index={index}
//           questionData={questionData}
//           onChange={handleQuestionChange}
//           onDelete={deleteQuestion}
//         />
//       ))}

//       <div className="info-div-item btn-div">
//         <button id="add-newQues-btn" onClick={addNewQuestion}>
//           <i className="fa-solid fa-plus"></i> Add new question
//         </button>
//       </div>

//       <div className="info-div-item btn-div" style={{ marginTop: '1rem' }}>
//         <button onClick={handleSaveAllQuestions} style={{ backgroundColor: '#7A1CAC' }}>
//           Save All Questions
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddQuestionContainer;


// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import { FaUpload } from 'react-icons/fa';
// import { IconButton } from '@mui/material';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import { toast } from 'react-toastify';

// const QuestionForm = ({ sections, setSections, sectionIndex }) => {
//   const [visible, setVisible] = useState(true);
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState([
//     { text: '', correct: false },
//     { text: '', correct: false },
//   ]);
//   const [points, setPoints] = useState(1); // Independent points, limited to 10
//   const [multipleAnswers, setMultipleAnswers] = useState(false);
//   const [mainCategory, setMainCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [correctAnswers, setCorrectAnswers] = useState(1); // Number of correct answers allowed


//   // Update the section data with the new MCQ question
//   const handleAddQuestion = () => {
//     const updatedSection = { ...sections[sectionIndex] };
//     updatedSection.questions.questionMCQ.push({ question, options });
    
//     // Call the parent function to update the section
//     setSections(updatedSection, sectionIndex);
//   };


//   // Update question state
//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   // const handleOptionChange = (idx, value) => {
//   //   const newOptions = [...options];
//   //   newOptions[idx].text = value;
//   //   setOptions(newOptions);
//   // };

//    // Update option state
//    const handleOptionChange = (index, e) => {
//     const newOptions = [...options];
//     newOptions[index].text = e.target.value;
//     setOptions(newOptions);
//   };

//   const toggleCorrect = (idx) => {
//     const updatedOptions = [...options];

//     if (multipleAnswers) {
//       const correctCount = updatedOptions.filter((opt) => opt.correct).length;

//       if (!updatedOptions[idx].correct && correctCount >= correctAnswers) {
//         toast.error(
//           `You can select up to ${correctAnswers} correct answers.`,
//           { autoClose: 2000 }
//         );
//         return;
//       }

//       updatedOptions[idx].correct = !updatedOptions[idx].correct;
//     } else {
//       updatedOptions.forEach((opt, i) => (opt.correct = i === idx));
//     }

//     setOptions(updatedOptions);
//   };

//   const handlePointsChange = (value) => {
//     const newPoints = Math.max(1, Math.min(10, Number(value))); // Limit to 1-10
//     setPoints(newPoints);
//   };

//   const handleCorrectAnswersChange = (value) => {
//     const newCorrectAnswers = Math.min(Number(value), options.length);
//     setCorrectAnswers(newCorrectAnswers);

//     // Ensure the correct count doesn't exceed the allowed number
//     const updatedOptions = [...options];
//     let correctCount = updatedOptions.filter((opt) => opt.correct).length;

//     if (correctCount > newCorrectAnswers) {
//       updatedOptions.forEach((opt, idx) => {
//         if (correctCount > newCorrectAnswers && opt.correct) {
//           opt.correct = false;
//           correctCount -= 1;
//         }
//       });
//     }

//     setOptions(updatedOptions);
//   };

//   const addOption = () => {
//     setOptions([...options, { text: '', correct: false }]);
//   };

//   const removeOption = (idx) => {
//     const newOptions = options.filter((_, i) => i !== idx);
//     setOptions(newOptions);
//   };

//   // const handleDelete = () => {
//   //   setVisible(false);
//   // };

//   if (!visible) return null;

//   return (
//     <div className='main-container-div'>

// <style>
// {`
// .question-form {
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   max-width: 100%;
//   margin: 1rem auto;
//   // padding: 2rem;
//   // border: 2px solid rgba(0,0,0,0.2);
//   border-radius: 8px;
//   background-color: #ffffff;
// }
// .footer-controls{
//   display: flex;
//   justify-content: space-between;
//   padding-top: 1rem;
//   border-top: 1px solid rgba(0,0,0,0.1);
// }
// .options-list {
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// }
// .option-item {
//   display: flex;
//   align-items: center;
//   gap: 8px;
// }
// .upload-icon {
//   margin-left: 8px;
//   cursor: pointer;
//   color: #007bff;
// }
// .desc-del-btn {
//   background-color: transparent;
//   color: red;
//   box-shadow: none;
//   width: fit-content;
//   border-radius: 50%;
// }
// .desc-del-btn:hover {
//   background-color: red;
//   color: #ffffff;
// }
// .add-option-btn {
//   background-color: #ffffff;
//   color: #7A1CAC;
//   border: 1px solid #7A1CAC;
//   width: 18%;
//   font-weight: 500;
// }
// .add-option-btn:hover {
//   background-color: #7A1CAC;
//   color: #ffffff;
// }
// .btn-div button {
//   background-color: #7A1CAC;
// }
// .btn-div button:hover {
//   background-color: #2E073F;
// }
// input {
//   height: 2.5rem;
//   padding-left: 10px;
// }
// .dropdowns {
//   display: flex;
//   gap: 16px;
//   margin-top: 16px;
// }
// .dropdowns select {
//   border-color: rgba(0,0,0,0.5);
// }
// `}
// </style>

//       <div className="question-form" style={{ position: 'relative' }}>
//         <div className="question-input">
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="text"
//               id='mcq_question'
//               value={question}
//               // onChange={(e) => setQuestion(e.target.value)}
//               onChange={handleQuestionChange} 
//               placeholder="Enter your question"
//               style={{ width: '100%' }}
//             />
//             <IconButton color="primary" component="label">
//               <input hidden accept="image/*" type="file" />
//               <AddPhotoAlternateIcon />
//             </IconButton>
//           </div>
//         </div>

//         <div className="options-list">
//           {options.map((option, index) => (
//             <div className="option-item" key={index}>
//               <input
//                 type="checkbox"
//                 checked={option.correct}
//                 onChange={() => toggleCorrect(index)}
//               />
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <input
//                   type="text"
//                   value={option.text}
//                   id='options'
//                   // onChange={(e) => handleOptionChange(idx, e.target.value)}
//                   onChange={(e) => handleOptionChange(index, e)} 
//                   placeholder={`Option ${index + 1}`}
//                 />
//                 <FaUpload className="upload-icon" title="Upload Image" />
//               </div>
//               <button className="desc-del-btn" onClick={() => removeOption(index)}>
//                 <i className="fa-regular fa-trash-can"></i>
//               </button>
//             </div>
//           ))}
//           <button className="add-option-btn" onClick={() => setOptions([...options, { text: '', correct: false }])}>
//             <i className="fa-solid fa-plus"></i> Add Option
//           </button>
//         </div>

//         <div className="dropdowns">
//           <div>
//             <label>Main Category:</label>
//             <select
//               value={mainCategory}
//               onChange={(e) => setMainCategory(e.target.value)}
//             >
//               <option value="">Select Main Category</option>
//               <option value="Category 1">Category 1</option>
//               <option value="Category 2">Category 2</option>
//             </select>
//           </div>
//           <div>
//             <label>Sub Category:</label>
//             <select
//               value={subCategory}
//               onChange={(e) => setSubCategory(e.target.value)}
//             >
//               <option value="">Select Sub Category</option>
//               <option value="Sub Category 1">Sub Category 1</option>
//               <option value="Sub Category 2">Sub Category 2</option>
//             </select>
//           </div>
//         </div>

//         <div className="footer-controls">
//           <div className="control-item">
//             <label>Points:</label>
//             <input
//               type="number"
//               id='points'
//               value={points}
//               min={1}
//               max={10}
//               onChange={(e) => handlePointsChange(e.target.value)}
//             />
//           </div>
//           <div className="control-item">
//             <Form>
//               <Form.Check
//                 type="switch"
//                 id="custom-switch"
//                 label="Multiple answers:"
//                 checked={multipleAnswers}
//                 onChange={(e) => {
//                   setMultipleAnswers(e.target.checked);
//                   if (!e.target.checked) {
//                     // Reset selections when switching to single answer mode
//                     const updatedOptions = [...options];
//                     updatedOptions.forEach((opt, i) => (opt.correct = i === 0));
//                     setOptions(updatedOptions);
//                   }
//                 }}
//               />
//             </Form>
//           </div>

//           {multipleAnswers && (
//             <div className="control-item">
//               <label>Correct Answers:</label>
//               <input
//                 type="number"
//                 id='correct_number'
//                 value={correctAnswers}
//                 min={1}
//                 max={options.length}
//                 onChange={(e) => handleCorrectAnswersChange(e.target.value)}
//               />
//             </div>
//           )}
//         </div>

//         <button onClick={handleAddQuestion}>Add mcq question</button>
//       </div>
//     </div>
//   );
// };

// export default QuestionForm;




import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaUpload } from 'react-icons/fa';
import { IconButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { toast } from 'react-toastify';

const QuestionForm = () => {

  const [formState, setFormState] = useState({
    visible: true,
    question: '',
    options: [
      { text: '', correct: false },
      { text: '', correct: false },
    ],
    points: 1,
    multipleAnswers: false,
    mainCategory: '',
    subCategory: '',
    correctAnswers: 1,
  });

  const updateState = (key, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const updateOption = (index, field, value) => {
    const updatedOptions = [...formState.options];
    updatedOptions[index][field] = value;
    updateState('options', updatedOptions);
  };

  const toggleCorrect = (index) => {
    const updatedOptions = [...formState.options];
    if (formState.multipleAnswers) {
      const correctCount = updatedOptions.filter((opt) => opt.correct).length;

      if (!updatedOptions[index].correct && correctCount >= formState.correctAnswers) {
        toast.error(`You can select up to ${formState.correctAnswers} correct answers.`, {
          autoClose: 2000,
        });
        return;
      }
      updatedOptions[index].correct = !updatedOptions[index].correct;
    } else {
      updatedOptions.forEach((opt, i) => (opt.correct = i === index));
    }
    updateState('options', updatedOptions);
  };

  const handlePointsChange = (value) => {
    updateState('points', Math.max(1, Math.min(10, Number(value))));
  };

  const handleCorrectAnswersChange = (value) => {
    const correctAnswers = Math.min(Number(value), formState.options.length);
    updateState('correctAnswers', correctAnswers);

    const updatedOptions = [...formState.options];
    let correctCount = updatedOptions.filter((opt) => opt.correct).length;

    if (correctCount > correctAnswers) {
      updatedOptions.forEach((opt, idx) => {
        if (correctCount > correctAnswers && opt.correct) {
          opt.correct = false;
          correctCount -= 1;
        }
      });
    }
    updateState('options', updatedOptions);
  };

  const addOption = () => {
    updateState('options', [...formState.options, { text: '', correct: false }]);
  };

  const removeOption = (index) => {
    const newOptions = formState.options.filter((_, i) => i !== index);
    updateState('options', newOptions);
  };

  if (!formState.visible) return null;



  return (
    
    <div className='main-container-div'>
       <style>
 {`
.question-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  margin: 1rem auto;
  // padding: 2rem;
  // border: 2px solid rgba(0,0,0,0.2);
  border-radius: 8px;
  background-color: #ffffff;
}
.footer-controls{
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid rgba(0,0,0,0.1);
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
.desc-del-btn {
  background-color: transparent;
  color: red;
  box-shadow: none;
  width: fit-content;
  border-radius: 50%;
}
.desc-del-btn:hover {
  background-color: red;
  color: #ffffff;
}
.add-option-btn {
  background-color: #ffffff;
  color: #7A1CAC;
  border: 1px solid #7A1CAC;
  width: 18%;
  font-weight: 500;
}
.add-option-btn:hover {
  background-color: #7A1CAC;
  color: #ffffff;
}
.btn-div button {
  background-color: #7A1CAC;
}
.btn-div button:hover {
  background-color: #2E073F;
}
input {
  height: 2.5rem;
  padding-left: 10px;
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
      <div className="question-input">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={formState.question}
            onChange={(e) => updateState('question', e.target.value)}
            placeholder="Enter your question"
            style={{ width: '100%' }}
          />
          <IconButton color="primary" component="label">
            <input hidden accept="image/*" type="file" />
            <AddPhotoAlternateIcon />
          </IconButton>
        </div>
      </div>

      <div className="options-list">
        {formState.options.map((option, index) => (
          <div className="option-item" key={index}>
            <input
              type="checkbox"
              checked={option.correct}
              onChange={() => toggleCorrect(index)}
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                value={option.text}
                onChange={(e) => updateOption(index, 'text', e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
              <FaUpload className="upload-icon" title="Upload Image" />
            </div>
            <button className="desc-del-btn" onClick={() => removeOption(index)}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        ))}
        <button className="add-option-btn" onClick={addOption}>
          <i className="fa-solid fa-plus"></i> Add Option
        </button>
      </div>

      <div className="dropdowns">
        <div>
          <label>Main Category:</label>
          <select
            value={formState.mainCategory}
            onChange={(e) => updateState('mainCategory', e.target.value)}
          >
            <option value="">Select Main Category</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </select>
        </div>
        <div>
          <label>Sub Category:</label>
          <select
            value={formState.subCategory}
            onChange={(e) => updateState('subCategory', e.target.value)}
          >
            <option value="">Select Sub Category</option>
            <option value="Sub Category 1">Sub Category 1</option>
            <option value="Sub Category 2">Sub Category 2</option>
          </select>
        </div>
      </div>

      <div className="footer-controls">
        <div className="control-item">
          <label>Points:</label>
          <input
            type="number"
            value={formState.points}
            min={1}
            max={10}
            onChange={(e) => handlePointsChange(e.target.value)}
          />
        </div>
        <div className="control-item">
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Multiple answers:"
              checked={formState.multipleAnswers}
              onChange={(e) => {
                updateState('multipleAnswers', e.target.checked);
                if (!e.target.checked) {
                  const updatedOptions = [...formState.options];
                  updatedOptions.forEach((opt, i) => (opt.correct = i === 0));
                  updateState('options', updatedOptions);
                }
              }}
            />
          </Form>
        </div>

        {formState.multipleAnswers && (
          <div className="control-item">
            <label>Correct Answers:</label>
            <input
              type="number"
              value={formState.correctAnswers}
              min={1}
              max={formState.options.length}
              onChange={(e) => handleCorrectAnswersChange(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
    
    </div>
  );
};

export default QuestionForm;


