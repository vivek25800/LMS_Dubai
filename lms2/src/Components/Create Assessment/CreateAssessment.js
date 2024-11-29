import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import QuestionTextForm from "./QuestionTextForm";
import MatchTheFollowingForm from "./MatchTheFollowingForm";
import DuplicateAssessment from "./DuplicateAssessment";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function CreateAssessment() {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showQuestionTypes, setShowQuestionTypes] = useState(false);

  const addQuestion = (ComponentType, type) => {
    const newQuestion = {
      id: questions.length + 1,
      type,
      ComponentType,
    };
    setQuestions([...questions, newQuestion]);
    setShowQuestionTypes(false);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
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
           .header-section span i{
            font-size: 1.5rem;
            cursor: pointer;
            }

        .container {
          border: 2px solid rgba(0,0,0,0.2);
          border-radius: 10px;
          padding: 1.5rem;
        }
        .section-module {
          border-top: 5px solid #7A1CAC;
          width: 70%;
          margin: 0 auto;
          margin-top: 1.5rem;
          border-radius: 10px;
          background-color: #ffffff;
          padding: 3rem 6rem;
          box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
        }
          .section-module h4{
            margin-bottom: 1.5rem;
            }
        .add-question-div {
        //   margin: 2rem auto;
        //   border: 2px solid rgba(0,0,0,0.2);
        //   padding: 1.5rem;
        //   border-radius: 10px;
        //   margin-bottom: 2rem;
        }
          container{
            margin: 0px;
            width: 100%;
            }
            .assessment-form-items{
            margin: 0 auto;
            }
            .info-div-item{
            margin: 1rem 0;
            }
            textarea{
            width: 100%;
            height: 6rem;
            padding: 10px;
            }
        .questions-type-options {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          border: 2px solid rgba(0,0,0,0.2);
          padding: 1.5rem;
          border-radius: 10px;
          margin-bottom: 2rem;
        }
        .questions-type-options button {
          background-color: #7A1CAC;
        }
        .questions-type-options button:hover {
          background-color: #2E073F;
        }
        .questions-list {
          margin-top: 2rem;
        }
        .add-new-questions-btn {
          width: 13rem;
          height: 2rem;
          background-color: #7A1CAC;
          border: none;
        }
        .add-new-questions-btn:hover {
          background-color: #2E073F;
        }
        `}
      </style>
      <div className="header-section">
        <NavLink to={'/assessment'}>
            <span>
                <i class="fa-solid fa-arrow-left"></i>
            </span>
        </NavLink>
      </div>
      <div className="section-module">
        <h4>Create Assessment</h4>
        <div className="container">
          <div className="assessment-form-items">
            <div className="info-div-item">
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="info-div-item">
              <label>Code</label>
              <input
                type="text"
                placeholder="Enter Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="info-div-item">
              <label>Description</label>
              <textarea
                placeholder="Enter description here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="info-div-item">
              <label>Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="questions-list">
            {questions.map((q, index) => (
              <QuestionComponent
                key={q.id}
                id={q.id}
                index={index}
                ComponentType={q.ComponentType}
                onRemove={removeQuestion}
              />
            ))}

            {/* Add New Question Button */}
            <div className="add-question-div">
              <Button
                className="add-new-questions-btn"
                onClick={() => setShowQuestionTypes(!showQuestionTypes)}
              >
                Add New Question
              </Button>
              {showQuestionTypes && (
                <div className="questions-type-options">
                  <button onClick={() => addQuestion(QuestionForm, "mcq")}>
                    Multiple Choice Questions
                  </button>
                  <button onClick={() => addQuestion(QuestionTextForm, "text")}>
                    Text Questions
                  </button>
                  <button
                    onClick={() => addQuestion(MatchTheFollowingForm, "match")}
                  >
                    Match the Following
                  </button>
                  <button
                    onClick={() => addQuestion(DuplicateAssessment, "duplicate")}
                  >
                    Duplicate
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionComponent({ id, index, ComponentType, onRemove }) {
  return (
    <div>
        <style>
            {`
            .class-container-div{
            margin-bottom: 1.5rem;
            border: 1px solid rgba(0,0,0,0.2);
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
            }
            
            `}
        </style>
    <div className="class-container-div">
      <h5>Question {index + 1}</h5>
      <ComponentType />
      <Button variant="danger" onClick={() => onRemove(id)}>
        Delete Question
      </Button>
    </div>
    </div>
  );
}

export default CreateAssessment;
