import React, { useState } from "react";
import TextQuize from "./TextQuize";
import RatingQuestionQuize from "./RatingQuestionQuize";
import DateQuestionForm from "./DateQuestionForm";
import StatementQuestion from "./StatementQuestion";
import { NavLink } from "react-router-dom";

function CreateQuize() {
  const [questions, setQuestions] = useState([]); // Array to hold questions
  const [showQuickStart, setShowQuickStart] = useState(false); // Toggle for quick start buttons

  const addQuestion = (type) => {
    setQuestions([...questions, { type, id: questions.length + 1 }]);
    setShowQuickStart(false); // Hide quick start after selecting a question type
  };

  const handleAddNew = () => {
    setShowQuickStart(true); // Show quick start buttons when "Add New Question" is clicked
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const renderQuestionComponent = (question) => {
    switch (question.type) {
      case "Text":
        return <TextQuize />;
      case "Rating":
        return <RatingQuestionQuize />;
      case "Date":
        return <DateQuestionForm />;
      case "Likert":
        return <StatementQuestion />;
      case "UploadFile":
        return (
          <div>
            <h4>Upload file here...</h4>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
       <style>
            {
            `
            body{
            background-color: rgba(46, 7, 63, 0.2);
            padding: 1.5rem;
            }
            .header-section{
            // height: 5rem;
            width: 100%;
            border-radius: 10px;
            background-color: #ffffff;
            padding: 1.7rem 2rem;
            }
            .header-section span i{
            font-size: 1.5rem;
            cursor: pointer;
            }
            .container{
            border: 2px solid rgba(0,0,0,0.2);
            border-radius: 10px;
            padding: 1.5rem;
            }
            .button-grid{
            display: grid;
            grid-template-columns: auto auto auto;
            column-gap: 1rem;
            row-gap: 1rem;
            }
            .button-grid button {
            width: 100%;
            height: 2.5rem;
            background-color: #ffffff;
            color: #7A1CAC;
            border: 1px solid #7A1CAC;
            font-weight: 500;
            }
            .button-grid button:hover{
            background-color: #7A1CAC;
            color: #ffffff;
            }
            .header input{
            margin-bottom: 1rem;
            }
            .header{
            margin-top: 0px;
            }
            .section-module{
            border-top: 5px solid #7A1CAC;
            width: 70%;
            margin: 0 auto;
            margin-top: 1.5rem;
            border-radius: 10px;
            background-color: #ffffff;
            padding: 3rem 6rem;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
            }
            .container{
            margin: 0px;
            width: 100%;
            }
            .questions-container{
            width: 70%;
            margin: 0 auto;
            margin-top: 1.5rem;
            }
            .quick-start{
            background-color: #fff;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
            margin-bottom: 1rem;
            }
            .question-item{
            max-width: 100%;
            margin: 1rem auto;
            padding: 2rem;
            border-top: 5px solid #7A1CAC;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
            border-radius: 1rem;
            background-color: #ffffff;
          }
            .add-new-button{
            background-color: #7A1CAC;
          color: #ffffff;
          border: none;
          }
          .add-new-button:hover{
          background-color: #2E073F;
        }
            `
            }
        </style>

      <div className="header-section">
        <NavLink to={'/assessment'}>
            <span>
                <i class="fa-solid fa-arrow-left"></i>
            </span>
        </NavLink>
      </div>

      <div className="section-module">
        <h4>Create Survey</h4>
        <div className="container">
          <div className="header info-div-item">
            <input type="text" placeholder="Enter quiz name" />
            <input type="text" placeholder="Enter the subtitle ( Subtitle )" />
          </div>
        </div>
      </div>

      <div className="questions-container">
        {questions.map((question, index) => (
          <div key={question.id} className="question-item">
            <h5 className="question-number">Question {index + 1}</h5>
            {renderQuestionComponent(question)}
            <button
              className="delete-button"
              onClick={() => deleteQuestion(question.id)}
            >
              Delete Question
            </button>
          </div>
        ))}

        {showQuickStart && (
          <div className="quick-start">
            {/* <h6 style={{ color: "#7A1CAC", cursor: "pointer" }}>
              <i className="fa-solid fa-circle-plus"></i> Quick start with
            </h6> */}
            <div className="button-grid">
              <button onClick={() => addQuestion("Text")}>
                <i className="fa-regular fa-file-lines"></i> Text
              </button>
              <button onClick={() => addQuestion("Rating")}>
                <i className="fa-regular fa-thumbs-up"></i> Rating
              </button>
              <button onClick={() => addQuestion("Date")}>
                <i className="fa-regular fa-calendar-days"></i> Date
              </button>
              <button onClick={() => addQuestion("Likert")}>
                <i className="fa-solid fa-ticket"></i> Likert
              </button>
              <button onClick={() => addQuestion("UploadFile")}>
                <i className="fa-solid fa-file-arrow-up"></i> Upload File
              </button>
              <button>
                <i class="fa-solid fa-layer-group" /> Section
              </button>
            </div>
          </div>
        )}

        {!showQuickStart && (
          <button className="add-new-button" onClick={handleAddNew}>
            Add New Question
          </button>
        )}
      </div>
    </div>
  );
}

export default CreateQuize;
