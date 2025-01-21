import React, { useState, useEffect } from 'react'
import EmployeeSidebar from './EmployeeSidebar'
import EmployeeHeader from './EmployeeHeader'
import { base_url } from '../Utils/base_url'
import axios from 'axios'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'

function QuizesList() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [employeeData, setEmployeeData] = useState(null);
    const [quizStatus, setQuizStatus] = useState({});
    const location = useLocation();

        const handleTakeQuize = (quizId) => {
          const employeeData = JSON.parse(localStorage.getItem('employeeData'));
          if (!employeeData) {
            toast.error('Please login again');
            navigate('/');
            return;
          }
          navigate(`/takeQuiz/${quizId}`);
        };

        const fetchQuizStatus = async (employeeId, quizId) => {
            try {
              const response = await axios.get(`${base_url}/quiz_status/${quizId}/${employeeId}`);
              if (response.data.success) {
                setQuizStatus(prev => ({
                  ...prev,
                  [quizId]: response.data.status
                }));
              }
            } catch (error) {
              console.error("Error fetching quiz status:", error);
            }
        };

        const fetchAssignedQuizes = async () => {
            try {
              setLoading(true);
              const employeeData = JSON.parse(localStorage.getItem('employeeData'));
              
              if (!employeeData || !employeeData._id) {
                toast.error('Please login again');
                navigate('/');
                return;
              }
        
              if (id !== employeeData._id) {
                toast.error('Unauthorized access');
                navigate('/');
                return;
              }
        
              const response = await axios.get(`${base_url}/get_assigned_quizes/${id}`);
              
              if (response.data.success && Array.isArray(response.data.data)) {
                setQuizData(response.data.data);
                // Fetch status for each assessment
                response.data.data.forEach(item => {
                    fetchQuizStatus(employeeData.employee_id, item._id);
                });
              } else {
                console.log('Invalid response format:', response.data);
                setQuizData([]);
              }
            } catch (error) {
              console.error('Error fetching Quiz data:', error);
              toast.error(error.response?.data?.message || "Error fetching assigned Quizes");
              setQuizData([]);
            } finally {
              setLoading(false);
            }
          };

              // Add effect to handle employee data
              useEffect(() => {
                const storedData = localStorage.getItem('employeeData');
                if (storedData) {
                  setEmployeeData(JSON.parse(storedData));
                }
              }, []);
            
              // Modified useEffect to handle navigation and initial load
              useEffect(() => {
                fetchAssignedQuizes();
              }, [id, location.key]); // Add location.key to refresh on navigation

    const fetchQuizeData = async () => {
        try {
            const response = await axios.get(`${base_url}/quize_data_get`);
            setQuizData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        fetchQuizeData();
    }, []);

  return (
    <div>

        <style>
            {
                `
                body{
                background-color: #e9ecef;
                padding: 20px;
                }
                .training-list{
                background-color: #fff;
                width: 100%;
                border-radius: 10px;
                padding: 1.5rem;
                }
                .training-list-header{
                background-color: #2E073F;
                width: 100%;
                height: 80px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                display: flex;
                justify-content: left;
                align-items: center;
                padding-left: 2rem
                }
                .training-list-body{
                margin-top: 1rem 2rem;
                }
                .assessment-data{
            padding: 2rem;
            }
            .assessment-header{
                display: flex;
                justify-content: space-between;
                padding: 8px 2rem;
                border-radius: 1.5rem;
                border: 1px solid #2E073F;
                margin-bottom: 2rem;
                }
            .assessment-items{
                border-bottom: 1px solid rgba(0,0,0,0.4);
                display: flex;
                justify-content: space-between;
                margin: 1rem;
                padding: 5px 1rem;
                }
                h5{
                margin-bottom: 0px;
                }
                .status-badge {
                    padding: 6px 12px;
                    border-radius: 4px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    display: inline-block;
                    }
                    .status-badge.pending {
                    background-color: #FEF3C7;
                    color: #92400E;
                    }
                    .status-badge.completed {
                    background-color: #D1FAE5;
                    color: #065F46;
                    }
                    .take-assessment-btn {
                    padding: 6px 12px;
                    border-radius: 4px;
                    background-color: #2E073F;
                    color: white;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    }
                    .take-assessment-btn:hover {
                    opacity: 0.9;
                    }
                    .take-assessment-btn.disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    background-color: #666;
                    }
                `
            }
        </style>

        <EmployeeSidebar/>

        <section className="main-content-section">
            <EmployeeHeader/>

        <div className="header-div header-two">
          <div className='title-name'>
            <h5>Quizes List</h5>
              <p><a onClick={() => window.location.reload()} style={{cursor:"pointer", color:"#099ded"}}>Home</a> <i class="fa-solid fa-caret-right"></i> Quizes List</p> 
          </div> 
        </div>

        <div className="training-list">
            <div className="training-list-header">
                <h4 style={{color: "#fff"}}>All Available Quizes</h4> 
            </div> 

            <div className="training-list-body">
                <div className='assessment-data'>
                    <div className='assessment-header'>
                        <h5>Quizes name</h5>
                        <h5>Actions</h5>
                    </div> 

                    {/* {Array.isArray(quizData) && quizData.length > 0 ? (
                        quizData.map((item, index) => (
                            <div className='assessment-items' key={item._id}>
                                <div className='assessment-titles'>
                                    <h6 style={{marginBottom:"0px"}}>{index + 1}. {item.title}</h6>
                                </div>
                                <div className='assessment-actions' style={{display:"flex", justifyContent:"space-between"}}>
                                    <p style={{marginBottom:"0px", cursor:"pointer", color:"#036bfc"}} onClick={() => navigate(`/takeQuiz/${item._id}`)}> <i class="fa-regular fa-pen-to-square"></i> Take quize</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{margin:"1rem 2rem"}}>
                            <h5>No assessment available.</h5>
                        </div>
                    )}    */}


                {loading ? (
                  <div style={{margin:"1rem 2rem"}}>
                    <h5>Loading...</h5>
                  </div>
                ) : quizData && quizData.length > 0 ? (
                    quizData.map((item, index) => (
                    <div className='assessment-items' key={item._id}>
                      <div className='assessment-titles'>
                        <h6 style={{marginBottom:"0px"}}>
                          {index + 1}. {item.title}
                        </h6>
                      </div>
                      <div className={`status-badge ${quizStatus[item._id] || 'pending'}`}>
                        {quizStatus[item._id] || 'pending'}
                      </div>
                      <div className='assessment-actions' 
                           style={{display:"flex", alignItems:"center", gap:"20px"}}>
                        {/* <p style={{marginBottom:"0px"}}>
                          <i className="fa-regular fa-clock"></i> {item.assessment_timer}
                        </p> */}
                        <button
                          onClick={() => handleTakeQuize(item._id)}
                          disabled={quizStatus[item._id] === 'completed'}
                          className={`take-assessment-btn ${
                            quizStatus[item._id] === 'completed' ? 'disabled' : ''
                          }`}
                        >
                          {quizStatus[item._id] === 'completed' 
                            ? 'Completed'
                            : 'Take Quiz'}
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{margin:"1rem 2rem"}}>
                    <h5>No Quizes available.</h5>
                  </div>
                )}

                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default QuizesList