import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import QuestionFormTwo from './QuestionTextForm';
import { toast, ToastContainer } from 'react-toastify';
import MatchTheFollowingForm from './MatchTheFollowingForm';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { NavLink } from 'react-router-dom';

function CreateAssessment() {
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [selectedQuestionType, setSelectedQuestionType] = useState('');
    const [questions, setQuestions] = useState([]); // Holds all added questions

    function chooseQuestionType(type) {
        setSelectedQuestionType(type);
        document.getElementById('questions-type-id').style.display = 'flex';
        document.getElementById('questions-type-id').style.justifyContent = 'space-between';
    }

    function MCQquestion() {
        setSelectedQuestionType('mcq');
    }

    function Textquestion() {
        setSelectedQuestionType('text');
    }

    function MTFquestion() {
        setSelectedQuestionType('match');
    }

    const addQuestionToAssessment = () => {
        let questionData = {
            type: selectedQuestionType,
            questionText,
        };
    
        if (selectedQuestionType === 'mcq') {
            // Include MCQ-specific fields (options and correct answer)
            questionData = {
                ...questionData,
                options,
                correctAnswer,
            };
        } else if (selectedQuestionType === 'match') {
            // Include Match the Following specific fields (matchPairs)
            const matchPairs = [
                { question: "Q1", answer: "A1" },
                { question: "Q2", answer: "A2" },
                // Add match pairs as needed
            ];
            questionData = {
                ...questionData,
                matchPairs,
            };
        }
    
        // Add the question to the questions array
        setQuestions([...questions, questionData]);
    
        // Clear the form after adding the question
        setQuestionText('');
        setOptions([]);
        setCorrectAnswer('');
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
`}
</style>

            <div className='header-section'></div>

            <div className='section-module'>
                <h4>Create Assessment</h4>
                <div className="container">
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

                    <div className='add-question-div'>
                        <h6 style={{ marginBottom: "1rem" }}>Add questions</h6>
                        <label style={{color:'#7A1CAC', cursor:"pointer"}} onClick={() => chooseQuestionType('')}> 
                            <i className="fa-solid fa-circle-plus"></i> Type of question
                        </label>
                        <div className='questions-type-options' id='questions-type-id'>
                            <button id='mcq-questions-btn' onClick={MCQquestion}>Multiple Choice Questions</button>
                            <button id='text-questions-btn' onClick={Textquestion}>Text type questions</button>
                            <button id='match-following-btn' onClick={MTFquestion}>Match the following</button>
                        </div>
                    </div>

                    {selectedQuestionType === 'mcq' && (
                        <div className='mcq-type-container questions-container'>
                            <h5>Multiple Choice Question</h5>
                            <QuestionForm setQuestionText={setQuestionText} setOptions={setOptions} setCorrectAnswer={setCorrectAnswer} />
                            <Button variant="primary" className='added-btn' onClick={addQuestionToAssessment}>Add MCQ Question</Button>
                        </div>
                    )}

                    {selectedQuestionType === 'text' && (
                        <div className='text-type-container questions-container'>
                            <h5>Text type question</h5>
                            <QuestionFormTwo setQuestionText={setQuestionText} />
                            <Button variant="primary" className='added-btn' onClick={addQuestionToAssessment}>Add Text Question</Button>
                        </div>
                    )}

                    {selectedQuestionType === 'match' && (
                        <div className='match-type-container questions-container'>
                            <h5>Match the following type questions</h5>
                            <MatchTheFollowingForm />
                            <Button variant="primary" className='added-btn' onClick={addQuestionToAssessment}>Add Match Question</Button>
                        </div>
                    )}

                    {/* List of all added questions */}
                    <div className='questions-container added-question'>
                        <h5>All Added Questions:</h5>
                        <ul>
                            {questions.map((q, index) => (
                                <li key={index}>
                                    {q.type.toUpperCase()} Question: {q.questionText}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Submit button to save assessment */}
                    <Button variant="success" onClick={handleSubmit}>Submit Assessment</Button>
                </div>

                <div className='add-different-section'>
                    <label><NavLink to={'/addsection'}><i className="fa-solid fa-circle-plus"></i> Add different section</NavLink> </label>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default CreateAssessment;





