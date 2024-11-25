import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import QuestionTextForm from './QuestionTextForm';
import { toast, ToastContainer } from 'react-toastify';
import MatchTheFollowingForm from './MatchTheFollowingForm';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { NavLink } from 'react-router-dom';
import DuplicateAssessment from './DuplicateAssessment';

function CreateAssessment() {
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [selectedQuestionType, setSelectedQuestionType] = useState('');
    const [questions, setQuestions] = useState([]); // Holds all added questions

    // Function to show question type selection
    function chooseQuestionType() {
        setSelectedQuestionType(''); // Reset question type to allow new selection
        document.getElementById('questions-type-id').style.display = 'flex';
    }

    // Function to set specific question type
    function setQuestionType(type) {
        setSelectedQuestionType(type);
    }

    // Function to add question to state and reset selection
    const addNewQuestion = (question) => {
        setQuestions([...questions, question]);
        chooseQuestionType(); // Reset to show question types again
    };

    const handleSubmit = async () => {
        const assessmentData = {
            title,
            code,
            description,
            time,
            questions,
        };

        try {
            const response = await axios.post(`${base_url}/create_assessment`, assessmentData);
            console.log(response.data);
            if (response.status === 200) {
                toast.success("Assessment data saved successfully", { autoClose: 2000 });
            }
        } catch (error) {
            console.error('Error saving assessment:', error);
        }
    };

    return (
        <div>
            <style>
                {`
                body{
                background-color: rgba(46, 7, 63, 0.2);
                padding: 1.5rem;
                }
                .header-section{
                height: 5rem;
                width: 100%;
                border-radius: 10px;
                background-color: #ffffff;
                }
                .container{
                border: 2px solid rgba(0,0,0,0.2);
                border-radius: 10px;
                padding: 1.5rem;
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
                .section-module h4{
                margin-bottom: 1.5rem;
                }
                .container{
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
                .add-question-div{
                margin: 2rem auto 0 auto;
                border: 2px solid rgba(0,0,0,0.2);
                padding: 1.5rem;
                border-radius: 10px;
                margin-bottom: 2rem;
                }
                .questions-type-options{
                display: flex;
                justify-content: space-between;
                margin-top: 1rem;
                }
                .questions-type-options.show {
                display: flex;  /* Add this to toggle visibility */
                }
                .questions-type-options button{
                background-color: #7A1CAC;
                }
                .questions-type-options button:hover{
                background-color: #2E073F;
                }
                .added-question{
                margin-top: 2rem;
                }
                .added-btn{
                width: 12rem;
                background-color: #2E073F;
                border: none;
                color: #ffffff;
                height: 2.5rem;
                }
                #questions-type-id{
                display: none;
                }
                .add-different-section{
                border-top: 2px solid rgba(0,0,0,0.4);
                padding: 10px 0;
                margin-top: 1.5rem;
                }
                .add-different-section label a{
                color:#7A1CAC;
                cursor: pointer;
                float: right;
                font-size: 1rem;
                text-decoration: none;
                }
                .add-new-questions-btn{
                width: 13rem;
                height: 2rem;
                background-color: #7A1CAC;
                border: none;
                margin-bottom: 1.5rem;
                }
                .add-new-questions-btn:hover{
                background-color: #2E073F;
                }
                `}
                </style>

            <div className='header-section'></div>

            <div className='section-module'>
                <h4>Create Assessment</h4>
                <div className="container">
                    {/* Assessment Form */}
                    <div className="header info-div-item">
                        <div className='assessment-form-items'>
                            <div className="info-div-item">
                                <label>Title</label>
                                <input type='text' placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="info-div-item">
                                <label>Code</label>
                                <input type='text' placeholder='Enter Code' value={code} onChange={(e) => setCode(e.target.value)} />
                            </div>
                            <div className="info-div-item">
                                <label>Description</label>
                                <textarea placeholder='Enter description here...' value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="info-div-item">
                                <label>Assign assessment time</label>
                                <input type='text' placeholder='00:00:00' value={time} onChange={(e) => setTime(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    {/* Question Adding Section */}
                    <div className='add-question-div'>
                        <h6 style={{ marginBottom: "1rem" }}>Add questions</h6>
                        <label style={{ color: '#7A1CAC', cursor: "pointer" }} onClick={chooseQuestionType}> 
                            <i className="fa-solid fa-circle-plus"></i> Type of question
                        </label>
                        <div className='questions-type-options' id='questions-type-id'>
                            <button onClick={() => setQuestionType('mcq')}>Multiple Choice Questions</button>
                            <button onClick={() => setQuestionType('text')}>Text type questions</button>
                            <button onClick={() => setQuestionType('match')}>Match the following</button>
                            <button onClick={() => setQuestionType('duplicate')}>Duplicate</button>
                        </div>
                    </div>

                    {/* Conditionally Render Question Forms Based on Type */}
                    {selectedQuestionType === 'mcq' && (
                        <QuestionForm addQuestion={addNewQuestion} />
                    )}
                    {selectedQuestionType === 'text' && (
                        <QuestionTextForm addQuestion={addNewQuestion} />
                    )}
                    {selectedQuestionType === 'match' && (
                        <MatchTheFollowingForm addQuestion={addNewQuestion} />
                    )}
                    {selectedQuestionType === 'duplicate' && (
                        <DuplicateAssessment addQuestion={addNewQuestion} />
                    )}

                    {/* Button to Add New Question */}
                    <Button variant="primary" className='add-new-questions-btn' onClick={chooseQuestionType}>Add New Question</Button>

                    {/* Submit button to save assessment */}
                    <Button variant="success" onClick={handleSubmit}>Submit Assessment</Button>
                </div>

                <div className='add-different-section'>
                    <label><NavLink to={'/addsection'}><i className="fa-solid fa-circle-plus"></i> Add different section</NavLink> </label>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CreateAssessment;






