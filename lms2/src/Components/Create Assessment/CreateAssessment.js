// import * as React from "react";
// import { useState } from "react";
// import QuestionForm from "./QuestionForm";
// import QuestionTextForm from "./QuestionTextForm";
// import MatchTheFollowingForm from "./MatchTheFollowingForm";
// import DuplicateAssessment from "./DuplicateAssessment";
// import Button from "react-bootstrap/Button";
// import { NavLink } from "react-router-dom";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// function CreateAssessment() {
//   const [title, setTitle] = useState("");
//   const [code, setCode] = useState("");
//   const [description, setDescription] = useState("");
//   const [time, setTime] = useState("");
//   const [questions, setQuestions] = useState([]);
//   const [showQuestionTypes, setShowQuestionTypes] = useState(false);

//   const addQuestion = (ComponentType, type) => {
//     const newQuestion = {
//       id: questions.length + 1,
//       type,
//       ComponentType,
//     };
//     setQuestions([...questions, newQuestion]);
//     setShowQuestionTypes(false);
//   };

//   const removeQuestion = (id) => {
//     setQuestions(questions.filter((q) => q.id !== id));
//   };

//   return (
//     <div>
//       <style>
//         {`
//         body {
//           background-color: rgba(46, 7, 63, 0.2);
//           padding: 1.5rem;
//         }
//         .header-section {
//           height: 5rem;
//           width: 100%;
//           border-radius: 10px;
//           background-color: #ffffff;
//           padding: 1.7rem 2rem;
//         }
//            .header-section span i{
//             font-size: 1.5rem;
//             cursor: pointer;
//             }

//         .container {
//           border: 2px solid rgba(0,0,0,0.2);
//           border-radius: 10px;
//           padding: 1.5rem;
//         }
//         .section-module {
//           border-top: 5px solid #7A1CAC;
//           width: 70%;
//           margin: 0 auto;
//           margin-top: 1.5rem;
//           border-radius: 10px;
//           background-color: #ffffff;
//           padding: 3rem 6rem;
//           box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
//         }
//           .section-module h4{
//             margin-bottom: 1.5rem;
//             }
//         .add-question-div {
//         //   margin: 2rem auto;
//         //   border: 2px solid rgba(0,0,0,0.2);
//         //   padding: 1.5rem;
//         //   border-radius: 10px;
//         //   margin-bottom: 2rem;
//         }
//           container{
//             margin: 0px;
//             width: 100%;
//             }
//             .assessment-form-items{
//             margin: 0 auto;
//             }
//             .info-div-item{
//             margin: 1rem 0;
//             }
//             textarea{
//             width: 100%;
//             height: 6rem;
//             padding: 10px;
//             }
//         .questions-type-options {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 1rem;
//           border: 2px solid rgba(0,0,0,0.2);
//           padding: 1.5rem;
//           border-radius: 10px;
//           margin-bottom: 2rem;
//         }
//         .questions-type-options button {
//           background-color: #7A1CAC;
//         }
//         .questions-type-options button:hover {
//           background-color: #2E073F;
//         }
//         .questions-list {
//           margin-top: 2rem;
//         }
//         .add-new-questions-btn {
//           width: 13rem;
//           height: 2rem;
//           background-color: #7A1CAC;
//           border: none;
//         }
//         .add-new-questions-btn:hover {
//           background-color: #2E073F;
//         }
//           .other-section{
//           border-top: 5px solid #7A1CAC;
//           width: 70%;
//           margin: 1.5rem auto;
//           background-color: #fff;
//           border-radius: 10px;
//           }
//           .other-section .section-number{
//           padding: 10px 2rem;
//           background-color: rgba(46, 7, 63, 0.08); 
//           }
//           .other-section .section-form-div{
//           padding: 3rem 6rem;
//           }
//         `}
//       </style>
//       <div className="header-section">
//         <NavLink to={'/assessment'}>
//             <span>
//                 <i class="fa-solid fa-arrow-left"></i>
//             </span>
//         </NavLink>
//       </div>
//       <div className="section-module">
//         <h4>Create Assessment</h4>
//         <div className="container">
//           <div className="assessment-form-items">
//             <div className="info-div-item">
//               <label>Title</label>
//               <input
//                 type="text"
//                 placeholder="Enter title"
//                 id="assessment_title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div className="info-div-item">
//               <label>Code</label>
//               <input
//                 type="text"
//                 placeholder="Enter Code"
//                 id="assessment_code"
//                 value={code}
//                 onChange={(e) => setCode(e.target.value)}
//               />
//             </div>
//             <div className="info-div-item">
//               <label>Description</label>
//               <textarea
//                 placeholder="Enter description here..."
//                 id="assessment_description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>
//             <div className="info-div-item">
//               <label>Time</label>
//               <input
//                 type="time"
//                 id="assessment_time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="questions-list">
//             {questions.map((q, index) => (
//               <QuestionComponent
//                 key={q.id}
//                 id={q.id}
//                 index={index}
//                 ComponentType={q.ComponentType}
//                 onRemove={removeQuestion}
//               />
//             ))}

//             {/* Add New Question Button */}
//             <div className="add-question-div">
//               <Button
//                 className="add-new-questions-btn"
//                 onClick={() => setShowQuestionTypes(!showQuestionTypes)}
//               >
//                 Add New Question
//               </Button>
//               {showQuestionTypes && (
//                 <div>
//                 <div className="questions-type-options">
//                   <button onClick={() => addQuestion(QuestionForm, "mcq")}>
//                     Multiple Choice Questions
//                   </button>
//                   <button onClick={() => addQuestion(QuestionTextForm, "text")}>
//                     Text Questions
//                   </button>
//                   <button
//                     onClick={() => addQuestion(MatchTheFollowingForm, "match")}
//                   >
//                     Match the Following
//                   </button>
//                   <button
//                     onClick={() => addQuestion(DuplicateAssessment, "duplicate")}
//                   >
//                     Duplicate
//                   </button>
//                 </div>
//                 <h6 style={{color:"#7A1CAC", cursor:"pointer"}}><i class="fa-solid fa-circle-plus"></i> Add new section</h6>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="other-section">
//         <div className="section-number">
//             <h4>Section 1</h4>
//         </div>
//           <div className="section-form-div">
//             <div className="info-div-item">
//               <TextField
//                 id="outlined-multiline-flexible"
//                 label="Input section title here"
//                 multiline
//                 style={{width:"100%"}}
//               />
//             </div>
//             <div className="info-div-item">
//               <TextField
//                 id="outlined-multiline-flexible"
//                 label="Internal subtitle"
//                 multiline
//                 style={{width:"100%"}}
//               />
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// }

// function QuestionComponent({ id, index, ComponentType, onRemove }) {
//   return (
//     <div>
//         <style>
//             {`
//             .class-container-div{
//             margin-bottom: 1.5rem;
//             border: 1px solid rgba(0,0,0,0.2);
//             padding: 2rem;
//             border-radius: 8px;
//             // box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
//             border-top: 5px solid #7A1CAC;
//             }
//             .delete_question{
//             width: fit-content;
//             padding: 5px 12px !important;
//             }
            
//             `}
//         </style>
//     <div className="class-container-div">
//       <h5>Question {index + 1}</h5>
//       <ComponentType />
//       <Button className="delete_question" variant="danger" onClick={() => onRemove(id)}>
//         Delete Question
//       </Button>
//     </div>
//     </div>
//   );
// }

// export default CreateAssessment;



import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import QuestionForm from "./QuestionForm";
import QuestionTextForm from "./QuestionTextForm";
import MatchTheFollowingForm from "./MatchTheFollowingForm";
import DuplicateAssessment from "./DuplicateAssessment";
import { NavLink } from "react-bootstrap";
import axios from 'axios';
import { base_url } from "../Utils/base_url";
import Swal from 'sweetalert2';

function CreateAssessment() {
  
  const [sections, setSections] = useState([{ id: 1, questions: [] }]);
  const [globalQuestionNumber, setGlobalQuestionNumber] = useState(1);
  const [questionOptionsVisibility, setQuestionOptionsVisibility] = useState({});
  const [assessmentDetails, setAssessmentDetails] = useState({
    title: "",
    code: "",
    description: "",
    timer: "",
  });

  const addSection = () => {
    const newSection = {
      id: sections.length + 1,
      questions: [],
    };
    setSections([...sections, newSection]);
  };

  const removeSection = (sectionId) => {
    const updatedSections = sections.filter((section) => section.id !== sectionId);
    setSections(updatedSections);
    const updatedVisibility = { ...questionOptionsVisibility };
    delete updatedVisibility[sectionId];
    setQuestionOptionsVisibility(updatedVisibility);

    // Update section titles after removal to ensure they are sequential
    setSections((prevSections) =>
      prevSections.map((section, index) => ({
        ...section,
        id: index + 1, // Update section ID to reflect correct order
      }))
    );
  };

  const addQuestionToSection = (sectionId, type) => {
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        const newQuestion = {
          id: globalQuestionNumber,
          type,
        };
        section.questions.push(newQuestion);
      }
      return section;
    });
    setSections(updatedSections);
    setGlobalQuestionNumber(globalQuestionNumber + 1); // Increment global question number
  };

  const removeQuestionFromSection = (sectionId, questionId) => {
    let isQuestionRemoved = false;
    const updatedSections = sections.map((section) => {
      if (section.id === sectionId) {
        const filteredQuestions = section.questions.filter(
          (question) => question.id !== questionId
        );
        if (filteredQuestions.length < section.questions.length) {
          isQuestionRemoved = true;
        }
        section.questions = filteredQuestions;
      }
      return section;
    });
    setSections(updatedSections);
    if (isQuestionRemoved) {
      // Decrement globalQuestionNumber to maintain sequential numbering
      setGlobalQuestionNumber(globalQuestionNumber - 1);
    }
  };

  const toggleQuestionOptionsVisibility = (sectionId) => {
    setQuestionOptionsVisibility((prevVisibility) => ({
      ...prevVisibility,
      [sectionId]: !prevVisibility[sectionId],
    }));
  };

  const handleAssessmentInputChange = (e) => {
    const { name, value } = e.target;
    setAssessmentDetails({ ...assessmentDetails, [name]: value });
  };

  // const renderQuestionComponent = (type) => {
  //   switch (type) {
  //     case "MCQ":
  //       return <QuestionForm />;
  //     case "Text":
  //       return <QuestionTextForm />;
  //     case "Match The Following":
  //       return <MatchTheFollowingForm />;
  //     case "Duplicate":
  //       return <DuplicateAssessment />;
  //     default:
  //       return null;
  //   }
  // };

  const renderQuestionComponent = (type, sectionId, questionId) => {
    const handleQuestionChange = (data) => {
      setSections((prevSections) =>
        prevSections.map((section) => {
          if (section.id === sectionId) {
            return {
              ...section,
              questions: section.questions.map((question) => {
                if (question.id === questionId) {
                  return { ...question, ...data }; // Update question data
                }
                return question;
              }),
            };
          }
          return section;
        })
      );
    };
  
    switch (type) {
      case "MCQ":
        return <QuestionForm onChange={handleQuestionChange} />;
      case "Text":
        return <QuestionTextForm onChange={handleQuestionChange} />;
      case "Match The Following":
        return <MatchTheFollowingForm onChange={handleQuestionChange} />;
      case "Duplicate":
        return <DuplicateAssessment onChange={handleQuestionChange} />;
      default:
        return null;
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${base_url}/assessment_data_save`, {
        assessment_title: assessmentDetails.assessment_title,
        assessment_code: assessmentDetails.assessment_code,
        assessment_description: assessmentDetails.assessment_description,
        assessment_timer: assessmentDetails.assessment_timer,
        sections: sections.map((section) => ({
          id: section.id,
          title: document.getElementById(`section-title-${section.id}`)?.value || '',
          subtitle: document.getElementById(`section-subtitle-${section.id}`)?.value || '',
          questions: section.questions, // This now contains the updated question data
        })),
        
      });
      console.log('Assessment saved:', response.data);
      Swal.fire({
        icon: 'success',
        title: 'Assessment added successfully!',
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error('Error saving assessment:', error.response ? error.response.data : error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error saving assessment!',
        text: error.response?.data?.message || error.message,
        timer: 3000,
        showConfirmButton: true,
      });
    }
  };
  
  
  return (
    <div>
      <style>
        {`
        body {
          background-color: rgba(46, 7, 63, 0.2);
          padding: 1.5rem;
        }
        .header-section {
          height: 5rem;
          width: 100%;
          border-radius: 10px;
          background-color: #ffffff;
          padding: 1.7rem 2rem;
        }
        .container {
          border: 2px solid rgba(0,0,0,0.2);
          border-radius: 10px;
          padding: 2rem 6rem;
          background: #ffffff;
          width: 70%;
          margin: 1.5rem auto;
        }
        .section-module {
          border-top: 5px solid #7A1CAC;
          width: 70%;
          margin: 1.5rem auto;
          border-radius: 10px;
          background-color: #ffffff;
          box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
          position: relative;
        }
        .section-module .section-title-div{
          padding: 10px 2rem;
          background-color: rgba(46, 7, 63, 0.1);
          display: flex;
          justify-content: space-between;
        }
        .section-module .section-contents-div{
          padding: 2rem 6rem;
        }
        .question-type-btn {
          width: 23%;
          height: 2rem;
          background-color: #7A1CAC;
          border: none;
        }
        .question-type-btn:hover{
          background-color: #2E073F;
        }
        .add-new-questions-btn,
        .add-new-section-btn {
          width: 13rem;
          height: 2rem;
          background-color: #7A1CAC;
          border: none;
        }
        .add-new-questions-btn:hover,
        .add-new-section-btn:hover {
          background-color: #2E073F;
        }
        .delete_section {
          background-color: #dc3545;
          width: 2rem;
          height: 2rem;
          border: none;
        }
        .delete_question{
          background-color: transparent;
          width: 2rem;
          height: 2rem;
          border: none;
        }
        .delete_section:hover,
        .delete_question:hover{
          background-color: red;
        }
        .add-new-section-div{
          width: 70%;
          margin: auto;
        }
        .all-type-questions-options{
          border: 1px solid rgba(0,0,0,0.4);
          display: flex;
          padding: 1rem;
          justify-content: space-between;
          margin-top: 1rem;
          border-radius: 10px;
        }
        .class-container-div{
          border: 1px solid rgba(0,0,0,0.2);
          border-radius: 10px;
          margin-bottom: 1rem;
        }
        .question-header{
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          background-color: #2E073F;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .question-header h5{
          color: #fff;
        }
      `}
      </style>

      <div className="header-section">
        <NavLink to={"/assessment"}>
          <span>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
        </NavLink>
      </div>

      <div className="container">
        <h4>Assessment Details</h4>
        <TextField
          name="assessment_title"
          label="Assessment Title"
          // value={assessmentDetails.title}
          onChange={handleAssessmentInputChange}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <TextField
          name="assessment_code"
          label="Assessment Code"
          // value={assessmentDetails.code}
          onChange={handleAssessmentInputChange}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <TextField
          name="assessment_description"
          label="Assessment Description"
          // value={assessmentDetails.description}
          onChange={handleAssessmentInputChange}
          multiline
          rows={3}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <TextField
          name="assessment_timer"
          label="Timer (in minutes)"
          // value={assessmentDetails.timer}
          onChange={handleAssessmentInputChange}
          type="number"
          style={{ width: "100%" }}
        />
      </div>
      {sections.map((section) => {
        return (
          <div key={section.id} className="section-module">
            <div className="section-title-div">
              <h4>Section {section.id}</h4>
              <Button
                className="delete_section"
                onClick={() => removeSection(section.id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </Button>
            </div>
            <div className="section-contents-div">
              <TextField
                id={`section-title-${section.id}`}
                label="Section Title"
                multiline
                style={{ width: "100%", marginBottom: "1rem" }}
              />
              <TextField
                id={`section-subtitle-${section.id}`}
                label="Section Subtitle"
                multiline
                style={{ width: "100%", marginBottom: "1rem" }}
              />

              {section.questions.map((question) => {
                return (
                  <div key={question.id} className="class-container-div">
                    <div className="question-header">
                      <h5>Question No. {question.id}</h5>
                      <Button
                        className="delete_question"
                        onClick={() =>
                          removeQuestionFromSection(section.id, question.id)
                        }
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </Button>
                    </div>
                    <div style={{padding:"1rem 2rem"}}>
                     {renderQuestionComponent(question.type)}
                    </div>
                  </div>
                );
              })}

              <Button
                className="add-new-questions-btn"
                onClick={() => toggleQuestionOptionsVisibility(section.id)}
              >
                Add Question
              </Button>

                {questionOptionsVisibility[section.id] && (
                  <div className="all-type-questions-options">
                    <Button
                      className="question-type-btn"
                      onClick={() => addQuestionToSection(section.id, "MCQ")}
                    >
                      MCQ
                    </Button>
                    <Button
                      className="question-type-btn"
                      onClick={() => addQuestionToSection(section.id, "Text")}
                    >
                      Text
                    </Button>
                    <Button
                      className="question-type-btn"
                      onClick={() => addQuestionToSection(section.id, "Match The Following")}
                    >
                      Match the Following
                    </Button>
                    <Button
                      className="question-type-btn"
                      onClick={() => addQuestionToSection(section.id, "Duplicate")}
                    >
                      Duplicate
                    </Button>
                  </div>
                )}

            </div>
          </div>
        );
      })}
      <div className="add-new-section-div">
        <Button
          className="add-new-section-btn"
          onClick={addSection}
        >
          Add New Section
        </Button>
      </div>
      <div>
        <Button onClick={handleSubmit}>Create Assessment</Button>
      </div>

    </div>
  );
}

export default CreateAssessment;

