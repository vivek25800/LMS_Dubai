// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { base_url } from '../Utils/base_url';

// function TakeAssessmentView() {

//     const location = useLocation();
//   const navigate = useNavigate();
//   const [assessment, setAssessment] = useState(null);
//   const [answers, setAnswers] = useState({});
//   const [timer, setTimer] = useState(null);

//   useEffect(() => {
//     if (location.state?.assessment) {
//       const { assessment_timer, ...data } = location.state.assessment;
//       setAssessment(data);
//       setTimer(assessment_timer);
//     } else {
//       // Fetch assessment details if not passed via state
//       const fetchAssessment = async () => {
//         const id = location.pathname.split('/').pop();
//         try {
//           const response = await axios.get(`${base_url}/assessments_fetch_byid/${id}`);
//           const { assessment_timer, ...data } = response.data.assessments;
//           setAssessment(data);
//           setTimer(assessment_timer);
//         } catch (error) {
//           console.error(error);
//         }
//       };
//       fetchAssessment();
//     }
//   }, [location]);

//   const handleAnswerChange = (sectionId, questionId, answer) => {
//     setAnswers({
//       ...answers,
//       [sectionId]: {
//         ...answers[sectionId],
//         [questionId]: answer,
//       },
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(`${base_url}/submit_assessment`, {
//         assessmentId: assessment._id,
//         answers,
//       });
//       alert('Assessment submitted successfully!');
//       navigate('/assessments');
//     } catch (error) {
//       console.error(error);
//       alert('Failed to submit assessment.');
//     }
//   };

//   return (
//     <div>
//         <div className="assessment-view-container">
//         <h2>{assessment?.assessment_title}</h2>
//         <p>Timer: {timer} minutes</p>

//         {assessment?.sections?.map((section) => (
//             <div key={section.id}>
//                 <h3>{section.title}</h3>
//                 {section.questions?.length > 0 ? (
//                 section.questions.map((question, idx) => (
//                     <div key={question.id || idx}>
//                     <h4>{question.title}</h4>

//                     {/* Handle MCQ */}
//                     {question.type === 'MCQ' && question.questionMCQ?.options?.length > 0 && (
//                         question.questionMCQ.options.map((option, optIdx) => (
//                         <label key={optIdx}>
//                             <input
//                             type="radio"
//                             name={`section-${section.id}-question-${question.id || idx}`}
//                             value={option.text}
//                             onChange={(e) =>
//                                 handleAnswerChange(section.id, question.id || idx, e.target.value)
//                             }
//                             />
//                             {option.text}
//                         </label>
//                         ))
//                     )}

//                     {/* Handle Text */}
//                     <h4>{question.title}</h4>
//                     {question.type === 'Text' && (
//                         <textarea
//                         name={`section-${section.id}-question-${question.id || idx}`}
//                         onChange={(e) =>
//                             handleAnswerChange(section.id, question.id || idx, e.target.value)
//                         }
//                         placeholder="Write your answer here..."
//                         />
//                     )}

//                     {/* Handle Match the Following */}
//                     {question.type === 'Match' && question.questionMatch?.pairs?.length > 0 && (
//                         <div className="match-the-following">
//                         {question.questionMatch.pairs.map((pair, pairIdx) => (
//                             <div key={pairIdx} className="pair">
//                             <div className="left-item">{pair.left}</div>
//                             <select
//                                 name={`section-${section.id}-question-${question.id || idx}-pair-${pairIdx}`}
//                                 onChange={(e) =>
//                                 handleAnswerChange(section.id, `${question.id || idx}-${pairIdx}`, e.target.value)
//                                 }
//                             >
//                                 <option value="">Select an answer</option>
//                                 {pair.rightOptions.map((option, optIdx) => (
//                                 <option key={optIdx} value={option}>
//                                     {option}
//                                 </option>
//                                 ))}
//                             </select>
//                             </div>
//                         ))}
//                         </div>
//                     )}
//                     </div>
//                 ))
//                 ) : (
//                 <p>No questions available in this section.</p>
//                 )}
//             </div>
//         ))}

//         <button onClick={handleSubmit}>Submit Assessment</button>
//       </div>
//     </div>
//   )
// }

// export default TakeAssessmentView


 // const handleSubmit = async (isTimeout = false) => {
    //     try {
    //         if (!userId) {
    //             toast.error('User not authenticated');
    //             navigate('/login');
    //             return;
    //         }

    //         const timeSpent = assessment.assessment_timer * 60 - timeLeft;
            
    //         // Format the responses by section
    //         const formattedResponses = assessment.sections.map(section => {
    //             const sectionAnswers = [];
                
    //             section.questions.forEach(questionSet => {
    //                 // Handle MCQ questions
    //                 questionSet.questionMCQ?.forEach(question => {
    //                     if (answers[question._id]) {
    //                         sectionAnswers.push({
    //                             questionId: question._id,
    //                             questionType: 'MCQ',
    //                             answer: answers[question._id],
    //                             points: question.points || 0 // Include points
    //                         });
    //                     }
    //                 });
                    
    //                 // Handle Text questions
    //                 questionSet.questionText?.forEach(question => {
    //                     if (answers[question._id]) {
    //                         sectionAnswers.push({
    //                             questionId: question._id,
    //                             questionType: 'Text',
    //                             answer: answers[question._id],
    //                             points: question.points || 0
    //                         });
    //                     }
    //                 });
                    
    //                 // Handle Match the Following questions
    //                 questionSet.questionMTF?.forEach(question => {
    //                     if (answers[question._id]) {
    //                         sectionAnswers.push({
    //                             questionId: question._id,
    //                             questionType: 'MTF',
    //                             answer: answers[question._id],
    //                             points: question.points || 0
    //                         });
    //                     }
    //                 });
    //             });
                
    //             return {
    //                 sectionId: section.id,
    //                 title: section.title,
    //                 answers: sectionAnswers
    //             };
    //         });
    
    //         const responseData = {
    //             assessmentId: assessment._id,
    //             userId: userId, // Use the actual userId from state
    //             sections: formattedResponses,
    //             timeSpent: timeSpent,
    //             isTimeout: isTimeout
    //         };
    
    //         // Submit the response to your backend
    //         const response = await axios.post(`${base_url}/assessment_responses`, responseData);
            
    //         if (response.data.success) {
    //             toast.success('Assessment submitted successfully.');
    //             navigate('/takeAssessment');
    //         } else {
    //             toast.error(response.data.message || 'Error submitting assessment');
    //         }
    //     } catch (error) {
    //         console.error('Error submitting assessment:', error);
    //         toast.error(error.response?.data?.message || 'Error submitting assessment');
    //     }
    // };


        // For logged user 
    // const fetchUserDetails = async () => {
    //     try {
    //         // Fetch user details from localStorage or your auth system
    //         const userInfo = localStorage.getItem('userInfo');
    //         if (userInfo) {
    //             const user = JSON.parse(userInfo);
    //             setUserId(user._id); // Assuming your user object has _id field
    //         } else {
    //             // Redirect to login if user is not authenticated
    //             navigate('/');
    //         }
    //     } catch (error) {
    //         console.error('Error fetching user details:', error);
    //         navigate('/login');
    //     }
    // };


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


const MatchingQuestion = ({ question, onAnswerChange }) => {
    const [answers, setAnswers] = useState(
      Array(question?.questionMTF?.length || 0).fill('')
    );
  
    const handleDragStart = (e, answer) => {
      e.dataTransfer.setData('answer', answer);
    };
  
    const handleDrop = (e, index) => {
      e.preventDefault();
      const droppedAnswer = e.dataTransfer.getData('answer');
      
      // Remove the answer from its previous position if it exists
      const newAnswers = [...answers];
      const prevIndex = newAnswers.indexOf(droppedAnswer);
      if (prevIndex !== -1) {
        newAnswers[prevIndex] = '';
      }
      
      // Place the answer in its new position
      newAnswers[index] = droppedAnswer;
      setAnswers(newAnswers);
      onAnswerChange(question._id, newAnswers);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    const unusedAnswers = question.questionMTF.filter(q => 
      !answers.includes(q.correctAnswer)
    );
  
    if (!question?.questionMTF?.length) {
      return <div className="text-red-500">No matching questions available</div>;
    }
  
    return (
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <div className="flex gap-8">
          {/* Left column - Draggable Answers */}
          <div className="w-1/2">
            <h4 className="font-medium mb-3 text-gray-700">Answers</h4>
            <div className="space-y-2">
              {unusedAnswers.map((q, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, q.correctAnswer)}
                  className="bg-gray-50 p-3 rounded border border-gray-200 cursor-move hover:bg-gray-100 transition-colors"
                >
                  {q.correctAnswer}
                </div>
              ))}
            </div>
          </div>
  
          {/* Right column - Question Dropzones */}
          <div className="w-1/2">
            <h4 className="font-medium mb-3 text-gray-700">Questions</h4>
            <div className="space-y-2">
              {question.questionMTF.map((q, index) => (
                <div
                  key={index}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragOver={handleDragOver}
                  className="bg-emerald-600 text-white p-3 rounded min-h-[48px] flex items-center justify-between"
                >
                  <div className="flex-1">
                    <p className="text-black">{q.title}</p>
                  </div>
                  {answers[index] && (
                    <div 
                      className="bg-white text-gray-800 p-2 rounded ml-2 shadow-sm cursor-move"
                      draggable
                      onDragStart={(e) => handleDragStart(e, answers[index])}
                    >
                      {answers[index]}
                    </div>
                  )}
                  {!answers[index] && (
                    <div className="bg-white/20 text-white p-2 rounded ml-2 min-w-[100px] text-sm">
                      Drop answer here
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Score: {question.points} points
        </div>
      </div>
    );
};

const TakeAssessmentView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [assessment, setAssessment] = useState(null);
    const [assessmentStatus, setAssessmentStatus] = useState('pending');
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(0);
    const [loading, setLoading] = useState(true);
    const [matchingAnswers, setMatchingAnswers] = useState({});
    const [employeeData, setEmployeeData] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);

    const checkAssessmentStatus = async (employeeId, assessmentId) => {
        try {
            const response = await axios.get(`${base_url}/assessment_status/${assessmentId}/${employeeId}`);
            const status = response.data.status;
            setIsCompleted(status === 'completed');
            setAssessmentStatus(status);
            
            if (status === 'completed') {
                toast.info("You have already completed this assessment.");
                navigate('/takeAssessment');
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error checking assessment status:", error);
            return false;
        }
    };

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const storedData = localStorage.getItem('employeeData');
                if (!storedData) {
                    toast.error("Please login to take the assessment");
                    navigate('/');
                    return;
                }

                const employeeData = JSON.parse(storedData);
                setEmployeeData({
                    employee_id: employeeData.employee_id,
                    employee_name: employeeData.employee_name,
                    _id: employeeData._id
                });

                // Check initial status
                await checkAssessmentStatus(employeeData.employee_id, id);
            } catch (error) {
                console.error("Error fetching employee data:", error);
                toast.error("Error loading employee data");
                navigate('/');
            }
        };

        fetchEmployeeData();
    }, [id, navigate]);

     // Using a fixed ObjectId for testing - this is a valid MongoDB ObjectId format
     const TEMP_USER_ID = "507f1f77bcf86cd799439011";

    useEffect(() => {
        // fetchUserDetails();
        fetchAssessment();
    }, [id]);

    useEffect(() => {
        if (assessment && assessment.assessment_timer) {
            // Convert timer string (e.g., "30 minutes") to seconds
            const minutes = parseInt(assessment.assessment_timer);
            setTimeLeft(minutes * 60);
        }
    }, [assessment]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        handleSubmit(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    const fetchAssessment = async () => {
        try {
            const response = await axios.get(`${base_url}/assessments_fetch_byid/${id}`);
            setAssessment(response.data.assessment);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching assessment:', error);
            setLoading(false);
        }
    };

    const handleAnswerChange = (questionId, value, isMultiple = false) => {
        if (isMultiple) {
            const currentAnswers = answers[questionId] || [];
            const newAnswers = currentAnswers.includes(value)
                ? currentAnswers.filter(v => v !== value)
                : [...currentAnswers, value];
            setAnswers(prev => ({ ...prev, [questionId]: newAnswers }));
        } else {
            setAnswers(prev => ({ ...prev, [questionId]: value }));
        }
    };

    const handleSubmit = async (isTimeout = false) => {
        try {
            if (!employeeData) {
                toast.error("Employee data not found. Please login again.");
                navigate('/');
                return;
            }

            const timeSpent = assessment.assessment_timer * 60 - timeLeft;
            
            // Format the responses by section
            const formattedResponses = assessment.sections.map(section => {
                const sectionAnswers = [];
                
                section.questions.forEach(questionSet => {
                    // Handle MCQ questions
                    questionSet.questionMCQ?.forEach(question => {
                        if (answers[question._id]) {
                            sectionAnswers.push({
                                questionId: question._id,
                                questionType: 'MCQ',
                                answer: answers[question._id],
                                points: question.points || 0
                            });
                        }
                    });
                    
                    // Handle Text questions
                    questionSet.questionText?.forEach(question => {
                        if (answers[question._id]) {
                            sectionAnswers.push({
                                questionId: question._id,
                                questionType: 'Text',
                                answer: answers[question._id],
                                points: question.points || 0
                            });
                        }
                    });
                    
                    // Handle Match the Following questions
                    questionSet.questionMTF?.forEach(question => {
                        if (matchingAnswers[question._id]) {
                            sectionAnswers.push({
                                questionId: question._id,
                                questionType: 'MTF',
                                answer: matchingAnswers[question._id],
                                points: question.points || 0
                            });
                        }
                    });
                });
                
                return {
                    sectionId: section.id,
                    title: section.title,
                    answers: sectionAnswers
                };
            });
    
            const responseData = {
                assessmentId: assessment._id,
                userId: employeeData.employee_id, // Using employee_id instead of TEMP_USER_ID
                employee_id: employeeData.employee_id,
                employee_name: employeeData.employee_name,
                sections: formattedResponses,
                timeSpent: timeSpent,
                isTimeout: isTimeout,
                status: 'completed' // Set status to completed
            };
    
            // Submit the response to your backend
            const response = await axios.post(`${base_url}/assessment_responses`, responseData);
            
            if (response.data.success) {
                // Verify the submission by checking status again
                await checkAssessmentStatus(employeeData.employee_id, assessment._id);
                
                Swal.fire({
                    title: "Success",
                    text: "Assessment submitted successfully!",
                    icon: "success",
                    confirmButtonText: "OK"
                }).then(() => {
                    navigate(`/employeeDashboard/${employeeData._id}`);
                });
            } else {
                toast.error(response.data.message || 'Error submitting assessment');
            }
        } catch (error) {
            console.error('Error submitting assessment:', error);
            toast.error(error.response?.data?.message || 'Error submitting assessment');
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    if (loading) {
        return <div>Loading assessment...</div>;
    }

    if (isCompleted) {
        return (
            <div className="text-center p-8">
                <h2 className="text-xl font-bold mb-4">Assessment Completed</h2>
                <p>You have already completed this assessment.</p>
                <button 
                    onClick={() => navigate('/takeAssessment')}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Back to Assessments
                </button>
            </div>
        );
    }

    return (
        <div>

        <style>
        {`
            body {
                background-color: rgba(46, 7, 63, 0.1);
                padding: 20px;
            }
            .assessment-container {
                background-color: #ffffff;
                width: 80%;
                padding: 2rem;
                margin: 0 auto;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            
            .assessment-header {
                position: sticky;
                top: 0;
                background-color: #2E073F;
                color: white;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                z-index: 100;
                border-radius: 8px;
            }
            
            // .timer {
            //     background-color: #2E073F;
            //     color: white;
            //     padding: 0.5rem 1rem;
            //     border-radius: 5px;
            //     font-size: 1.2rem;
            // }
            
            .section {
                margin: 2rem 0;
                padding: 1rem;
                border: 1px solid #ddd;
                border-radius: 8px;
            }
            
            .question {
                margin: 1.5rem 0;
                padding: 1rem;
                background-color: #f8f9fa;
                border-radius: 5px;
            }
            
            .options {
                margin-top: 1rem;
            }
            
            .option {
                display: flex;
                align-items: center;
                margin: 0.5rem 0;
                padding: 0.5rem;
                border: 1px solid #ddd;
                border-radius: 4px;
                cursor: pointer;
            }
            
            .option:hover {
                background-color: #f0f0f0;
            }
            
            .submit-btn {
                background-color: #2E073F;
                color: white;
                padding: 0.75rem 2rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 2rem;
            }
            
            .submit-btn:hover {
                background-color: #1a0424;
            }
            
            .text-answer {
                width: 100%;
                padding: 0.5rem;
                margin-top: 0.5rem;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
                .question-Match{
                margin: 10px 0;
                padding: 1rem;
                background-color: #f8f9fa;
                border-radius: 5px;
                display: flex;
                justify-content: space-between;
                gap: 1rem;
            }
            
            .matching-container {
                display: flex;
                gap: 2rem;
                margin: 2rem 0;
            }

            .matching-column {
                flex: 1;
            }

            .matching-item {
                background: #fff;
                padding: 1rem;
                margin: 0.5rem 0;
                border: 1px solid #ddd;
                border-radius: 4px;
                cursor: grab;
                transition: all 0.2s ease;
            }

            .matching-item:hover {
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }

            .matching-item.dragging {
                opacity: 0.5;
            }

            .matching-questions {
                background: #28a745;
                color: white;
                padding: 1rem;
                margin: 0.5rem 0;
                border-radius: 4px;
            }
        `}
        </style>

            <div className="assessment-container">
                <div className="assessment-header">
                    <div>
                        <h4>{assessment?.assessment_title}</h4>
                        <p style={{marginBottom:"0px"}}>{assessment?.assessment_description}</p>
                    </div>
                    <div className="timer">
                        Time Remaining: {formatTime(timeLeft)}
                    </div>
                </div>

                {assessment?.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="section">
                        <h4>{section.title}</h4>
                        <p>{section.subtitle}</p>

                        {section.questions.map((questionSet, questionIndex) => (
                            <div key={questionIndex}>
                                {/* MCQ Questions */}
                                {questionSet.questionMCQ?.map((question, index) => (
                                    <div key={index} className="question">
                                        <h6>{sectionIndex + 1}.{index + 1} {question.title}</h6>
                                        <div className="options">
                                            {question.options.map((option, optionIndex) => (
                                                <div
                                                    key={optionIndex}
                                                    className="option"
                                                    onClick={() => handleAnswerChange(
                                                        question._id,
                                                        option.text,
                                                        question.multipleAnswers
                                                    )}
                                                >
                                                    <input
                                                        type={question.multipleAnswers ? "checkbox" : "radio"}
                                                        checked={question.multipleAnswers
                                                            ? answers[question._id]?.includes(option.text)
                                                            : answers[question._id] === option.text
                                                        }
                                                        readOnly
                                                    />
                                                    <span style={{marginLeft: '10px'}}>{option.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p>Score. {question.points}</p>
                                    </div>
                                ))}

                                {/* Text Questions */}
                                {questionSet.questionText?.map((question, index) => (
                                    <div key={index} className="question">
                                        <h6>{sectionIndex + 1}.{index + 1} {question.title}</h6>
                                        <textarea
                                            className="text-answer"
                                            rows={question.answerType === 'long' ? 6 : 2}
                                            value={answers[question._id] || ''}
                                            onChange={(e) => handleAnswerChange(question._id, e.target.value)}
                                            placeholder={`Enter your ${question.answerType} answer here...`}
                                        />
                                        <p> Score. {question.points}</p>
                                    </div>
                                ))}

                                {/* Match the Following Questions */}
                                {questionSet.questionMTF?.map((question, index) => (
                                <MatchingQuestion
                                    key={index}
                                    question={{
                                    _id: question._id,
                                    title: `${sectionIndex + 1}.${index + 1} ${question.title}`,
                                    questionMTF: [
                                        {
                                        title: question.title,
                                        correctAnswer: question.correctAnswer,
                                        points: question.points
                                        }
                                    ],
                                    points: question.points
                                    }}
                                    onAnswerChange={(questionId, answers) => {
                                    setMatchingAnswers(prev => ({
                                        ...prev,
                                        [questionId]: answers
                                    }));
                                    }}
                                />
                                ))}
                            </div>
                        ))}
                    </div>
                ))}

                <button className="submit-btn" onClick={() => handleSubmit(false)}>
                    Submit Assessment
                </button>
            </div>
        </div>
    );
};

export default TakeAssessmentView;



// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { toast, ToastContainer } from 'react-toastify';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { base_url } from '../Utils/base_url';

// const MatchQuestion = ({ question, onAnswerChange }) => {
//   const [state, setState] = useState({
//     questions: question.questions || Array(5).fill({ text: '' }),
//     answers: question.answers || Array(5).fill({ text: '' }),
//     matchedPairs: [],
//   });

//   // Update parent component when matches change
//   useEffect(() => {
//     onAnswerChange(question._id, state.matchedPairs);
//   }, [state.matchedPairs]);

//   const handleMatch = (questionIndex, answerIndex) => {
//     setState(prev => {
//       const newPairs = [...prev.matchedPairs];
//       // Remove any existing pairs with this question or answer
//       const filteredPairs = newPairs.filter(pair => 
//         pair.questionIndex !== questionIndex && pair.answerIndex !== answerIndex
//       );
//       // Add the new pair
//       filteredPairs.push({ questionIndex, answerIndex });
//       return { ...prev, matchedPairs: filteredPairs };
//     });
//   };

//   return (
//     <div className="match-question p-4 border rounded">
//       <h6 className="mb-4">{question.title}</h6>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="questions">
//           {state.questions.map((q, index) => (
//             <div key={`q-${index}`} className="p-2 border rounded mb-2">
//               {q.text}
//             </div>
//           ))}
//         </div>
//         <div className="answers">
//           {state.answers.map((a, index) => (
//             <div key={`a-${index}`} className="p-2 border rounded mb-2">
//               {a.text}
//             </div>
//           ))}
//         </div>
//       </div>
//       <p className="mt-2">Score: {question.points}</p>
//     </div>
//   );
// };

// const TakeAssessmentView = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [assessment, setAssessment] = useState(null);
//   const [answers, setAnswers] = useState({});
//   const [matchingAnswers, setMatchingAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const TEMP_USER_ID = "507f1f77bcf86cd799439011";

//   useEffect(() => {
//     fetchAssessment();
//   }, [id]);

//   useEffect(() => {
//     if (assessment && assessment.assessment_timer) {
//       const minutes = parseInt(assessment.assessment_timer);
//       setTimeLeft(minutes * 60);
//     }
//   }, [assessment]);

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setInterval(() => {
//         setTimeLeft(prev => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             handleSubmit(true);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [timeLeft]);

//   const fetchAssessment = async () => {
//     try {
//       const response = await axios.get(`${base_url}/assessments_fetch_byid/${id}`);
//       setAssessment(response.data.assessment);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching assessment:', error);
//       setLoading(false);
//     }
//   };

//   const handleAnswerChange = (questionId, value, isMultiple = false) => {
//     if (isMultiple) {
//       setAnswers(prev => ({
//         ...prev,
//         [questionId]: prev[questionId]?.includes(value)
//           ? prev[questionId].filter(v => v !== value)
//           : [...(prev[questionId] || []), value]
//       }));
//     } else {
//       setAnswers(prev => ({ ...prev, [questionId]: value }));
//     }
//   };

//   const handleMatchingAnswerChange = (questionId, matches) => {
//     setMatchingAnswers(prev => ({ ...prev, [questionId]: matches }));
//   };

//   const handleSubmit = async (isTimeout = false) => {
//     try {
//       const timeSpent = assessment.assessment_timer * 60 - timeLeft;
      
//       const formattedResponses = assessment.sections.map(section => ({
//         sectionId: section.id,
//         title: section.title,
//         answers: section.questions.flatMap(questionSet => [
//           ...(questionSet.questionMCQ?.map(q => ({
//             questionId: q._id,
//             questionType: 'MCQ',
//             answer: answers[q._id],
//             points: q.points || 0
//           })) || []),
//           ...(questionSet.questionText?.map(q => ({
//             questionId: q._id,
//             questionType: 'Text',
//             answer: answers[q._id],
//             points: q.points || 0
//           })) || []),
//           ...(questionSet.questionMTF?.map(q => ({
//             questionId: q._id,
//             questionType: 'MTF',
//             answer: matchingAnswers[q._id],
//             points: q.points || 0
//           })) || [])
//         ])
//       }));

//       const responseData = {
//         assessmentId: assessment._id,
//         userId: TEMP_USER_ID,
//         sections: formattedResponses,
//         timeSpent,
//         isTimeout
//       };

//       const response = await axios.post(`${base_url}/assessment_responses`, responseData);
      
//       if (response.data.success) {
//         Swal.fire("Success", "Assessment submitted successfully!", "success");
//         setTimeout(() => {
//           navigate('/takeAssessment');
//         }, 3000);
//       } else {
//         toast.error(response.data.message || 'Error submitting assessment');
//       }
//     } catch (error) {
//       console.error('Error submitting assessment:', error);
//       toast.error(error.response?.data?.message || 'Error submitting assessment');
//     }
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   if (loading) {
//     return <div>Loading assessment...</div>;
//   }

//   return (
//     <div>
//     <DndProvider backend={HTML5Backend}>
//       <div className="assessment-container">
//         <div className="assessment-header">
//           <div>
//             <h4>{assessment?.assessment_title}</h4>
//             <p style={{marginBottom: "0px"}}>{assessment?.assessment_description}</p>
//           </div>
//           <div className="timer">
//             Time Remaining: {formatTime(timeLeft)}
//           </div>
//         </div>

//         {assessment?.sections.map((section, sectionIndex) => (
//           <div key={sectionIndex} className="section">
//             <h4>{section.title}</h4>
//             <p>{section.subtitle}</p>

//             {section.questions.map((questionSet, questionIndex) => (
//               <div key={questionIndex}>
//                 {/* MCQ Questions */}
//                 {questionSet.questionMCQ?.map((question, index) => (
//                   <div key={index} className="question">
//                     <h6>{sectionIndex + 1}.{index + 1} {question.title}</h6>
//                     <div className="options">
//                       {question.options.map((option, optionIndex) => (
//                         <div
//                           key={optionIndex}
//                           className="option"
//                           onClick={() => handleAnswerChange(
//                             question._id,
//                             option.text,
//                             question.multipleAnswers
//                           )}
//                         >
//                           <input
//                             type={question.multipleAnswers ? "checkbox" : "radio"}
//                             checked={question.multipleAnswers
//                               ? answers[question._id]?.includes(option.text)
//                               : answers[question._id] === option.text
//                             }
//                             readOnly
//                           />
//                           <span style={{marginLeft: '10px'}}>{option.text}</span>
//                         </div>
//                       ))}
//                     </div>
//                     <p>Score: {question.points}</p>
//                   </div>
//                 ))}

//                 {/* Text Questions */}
//                 {questionSet.questionText?.map((question, index) => (
//                   <div key={index} className="question">
//                     <h6>{sectionIndex + 1}.{index + 1} {question.title}</h6>
//                     <textarea
//                       className="text-answer"
//                       rows={question.answerType === 'long' ? 6 : 2}
//                       value={answers[question._id] || ''}
//                       onChange={(e) => handleAnswerChange(question._id, e.target.value)}
//                       placeholder={`Enter your ${question.answerType} answer here...`}
//                     />
//                     <p>Score: {question.points}</p>
//                   </div>
//                 ))}

//                 {/* Match Questions */}
//                 {questionSet.questionMTF?.map((question, index) => (
//                   <MatchQuestion
//                     key={index}
//                     question={{
//                       _id: question._id,
//                       title: `${sectionIndex + 1}.${index + 1} ${question.title}`,
//                       questions: question.questions,
//                       answers: question.answers,
//                       points: question.points
//                     }}
//                     onAnswerChange={handleMatchingAnswerChange}
//                   />
//                 ))}
//               </div>
//             ))}
//           </div>
//         ))}

//         <button className="submit-btn" onClick={() => handleSubmit(false)}>
//           Submit Assessment
//         </button>
//       </div>
//     </DndProvider>
//      <ToastContainer/>
//     </div>
//   );
// };

// export default TakeAssessmentView;