import React, { useState } from 'react';
import { TextField, Button, IconButton, FormControlLabel, Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const StatementQuestion = () => {
    const [questions, setQuestions] = useState([]);

    const addNewQuestion = () => {
        setQuestions([
            ...questions,
            {
                id: questions.length + 1,
                text: '',
                statements: [{ text: '', selectedOption: null }],
                required: false,
            },
        ]);
    };

    const deleteQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    const addStatement = (questionIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].statements.push({ text: '', selectedOption: null });
        setQuestions(updatedQuestions);
    };

    const deleteStatement = (questionIndex, statementIndex) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].statements = updatedQuestions[questionIndex].statements.filter(
            (_, i) => i !== statementIndex
        );
        setQuestions(updatedQuestions);
    };

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const handleStatementChange = (questionIndex, statementIndex, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].statements[statementIndex].text = value;
        setQuestions(updatedQuestions);
    };

    return (
        <div>
            <style>
                {`
                .main-container-div {
                    background-color: #ffffff;
                    border-radius: 10px;
                    border-top: 5px solid #7A1CAC;
                    width: 100%;
                    padding: 2rem;
                }
                .add-statement-btn, .addnewQ-btn {
                    background-color: #7A1CAC;
                    color: #ffffff;
                    border: none;
                    margin-top: 10px;
                }
                .add-statement-btn:hover, .addnewQ-btn:hover {
                    background-color: #2E073F;
                }
                .statement-container {
                    display: grid;
                    grid-template-columns: 1fr repeat(5, minmax(50px, 1fr)) auto;
                    align-items: center;
                    gap: 10px;
                    margin-top: 10px;
                }
                .options-container {
                    display: grid;
                    grid-template-columns: 1fr repeat(5, minmax(50px, 1fr));
                    gap: 10px;
                    margin-bottom: 5px;
                    text-align: center;
                    font-weight: bold;
                }
                .statement-input {
                    max-width: 100%;
                }
                `}
            </style>
            <div className="main-container-div">
                <div>
                    {questions.map((question, index) => (
                        <div key={question.id} style={{ marginBottom: 20, border: '1px solid #ccc', padding: 15, borderRadius: 10 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h5>Question no. {index + 1}</h5>
                                <IconButton aria-label="delete" onClick={() => deleteQuestion(index)} color="secondary">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <TextField
                                    fullWidth
                                    label="Question"
                                    value={question.text}
                                    onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
                                    placeholder="Enter your question"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <IconButton color="primary" component="label">
                                    <input hidden accept="image/*" type="file" />
                                    <AddPhotoAlternateIcon />
                                </IconButton>
                            </div>
                            <div style={{ marginTop: 10 }}>
                                <div className="options-container">
                                    <span>Statement</span>
                                    <span>Option 1</span>
                                    <span>Option 2</span>
                                    <span>Option 3</span>
                                    <span>Option 4</span>
                                    <span>Option 5</span>
                                </div>
                                {question.statements.map((statement, sIndex) => (
                                    <div key={sIndex} className="statement-container">
                                        <TextField
                                            value={statement.text}
                                            onChange={(e) => handleStatementChange(index, sIndex, e.target.value)}
                                            placeholder={`Statement ${sIndex + 1}`}
                                            variant="outlined"
                                            className="statement-input"
                                        />
                                        {[1, 2, 3, 4, 5].map((option) => (
                                            <input
                                                key={option}
                                                type="radio"
                                                name={`option-${index}-${sIndex}`}
                                                style={{ justifySelf: 'center' }}
                                            />
                                        ))}
                                        <IconButton aria-label="delete" onClick={() => deleteStatement(index, sIndex)} color="secondary">
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                ))}
                                <Button
                                    variant="outlined"
                                    onClick={() => addStatement(index)}
                                    className="add-statement-btn"
                                >
                                    Add Statement
                                </Button>
                            </div>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={question.required}
                                        onChange={() => handleQuestionChange(index, 'required', !question.required)}
                                    />
                                }
                                label="Required"
                                style={{ marginTop: 10 }}
                            />
                        </div>
                    ))}
                    <Button variant="outlined" onClick={addNewQuestion} className="addnewQ-btn">
                        Add New Question
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StatementQuestion;
