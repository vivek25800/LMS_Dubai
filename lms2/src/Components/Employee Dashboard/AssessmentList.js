import React, { useEffect, useState } from 'react'
import EmployeeSidebar from './EmployeeSidebar'
import EmployeeHeader from './EmployeeHeader'
import { base_url } from '../Utils/base_url'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

// function AssessmentList() {

//   const navigate = useNavigate();
//   const { id } = useParams(); // Get the employee ID from URL
//   const [assessment, setAssessment] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [employeeData, setEmployeeData] = useState(null);
//   const [assessmentStatus, setAssessmentStatus] = useState({});

//       const handleTakeAssessment = (assessmentId) => {
//           const employeeData = JSON.parse(localStorage.getItem('employeeData'));
//           if (!employeeData) {
//               toast.error('Please login again');
//               navigate('/');
//               return;
//           }
//           navigate(`/takeAssessmentView/${assessmentId}`);
//       };


//       const fetchAssignedAssessments = async () => {
//         try {
//             setLoading(true);
//             // Get employee data from localStorage for additional verification
//             const employeeData = JSON.parse(localStorage.getItem('employeeData'));
            
//             if (!employeeData || !employeeData._id) {
//                 toast.error('Please login again');
//                 navigate('/');
//                 return;
//             }

//             // Use the ID from URL params, but verify it matches the logged-in user
//             if (id !== employeeData._id) {
//                 toast.error('Unauthorized access');
//                 navigate('/');
//                 return;
//             }

//             const response = await axios.get(`${base_url}/get_assigned_assessments/${id}`);
//             console.log('Assigned Assessments response:', response.data);
            
//             if (response.data.success && Array.isArray(response.data.data)) {
//               setAssessment(response.data.data);
//             } else {
//                 console.log('Invalid response format:', response.data);
//                 setAssessment([]);
//             }
//         } catch (error) {
//             console.error('Error fetching Assessment data:', error);
//             toast.error(error.response?.data?.message || "Error fetching assigned Assessments");
//             setAssessment([]);
//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//       fetchAssignedAssessments();
//     }, [id]);


//     useEffect(() => {
//       // fetchEmployeeData();
//       fetchAssessments();
//   }, []);

//   const fetchAssessmentStatus = async (employeeId, assessmentId) => {
//       try {
//           const response = await axios.get(`${base_url}/assessment_status/${assessmentId}/${employeeId}`);
//           setAssessmentStatus(prev => ({
//               ...prev,
//               [assessmentId]: response.data.status
//           }));
//       } catch (error) {
//           console.error("Error fetching assessment status:", error);
//       }
//   };

//   const fetchAssessments = async () => {
//       try {
//           const response = await axios.get(`${base_url}/assessment_data_fetch`);
//           setAssessment(response.data.assessments);

//           // Fetch status for each assessment
//           const employeeData = JSON.parse(localStorage.getItem('employeeData'));
//           if (employeeData) {
//               response.data.assessments.forEach(assessment => {
//                   fetchAssessmentStatus(employeeData.employee_id, assessment._id);
//               });
//           }
//       } catch (error) {
//           console.error("Error fetching assessments:", error);
//       }
//   };

//   return (
//     <div>

//       <style>
//       {
//           `
//           body{
//           background-color: #e9ecef;
//           padding: 20px;
//           }
//           .training-list{
//           background-color: #fff;
//           width: 100%;
//           border-radius: 10px;
//           padding: 1.5rem;
//           }
//           .training-list-header{
//           background-color: #2E073F;
//           width: 100%;
//           height: 80px;
//           border-top-left-radius: 10px;
//           border-top-right-radius: 10px;
//           display: flex;
//           justify-content: left;
//           align-items: center;
//           padding-left: 2rem
//           }
//           .training-list-body{
//           margin-top: 1rem 2rem;
//           }
//           .assessment-data{
//       padding: 2rem;
//       }
//       .assessment-header{
//           display: flex;
//           justify-content: space-between;
//           padding: 8px 2rem;
//           border-radius: 1.5rem;
//           border: 1px solid #2E073F;
//           margin-bottom: 2rem;
//           }
//       .assessment-items{
//           border-bottom: 1px solid rgba(0,0,0,0.4);
//           display: flex;
//           justify-content: space-between;
//           margin: 1rem;
//           padding: 5px 1rem;
//           }
//           h5{
//           margin-bottom: 0px;
//           }

//           .status-badge {
//     padding: 4px 8px;
//     border-radius: 4px;
//     font-size: 0.875rem;
//     font-weight: 500;
//     margin: 8px 0;
// }

// .status-badge.pending {
//     background-color: #FEF3C7;
//     color: #92400E;
// }

// .status-badge.completed {
//     background-color: #D1FAE5;
//     color: #065F46;
// }

// .take-assessment-btn.disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//     background-color: #gray-400;
// }
//           `
//       }
//       </style> 

//       <EmployeeSidebar/>

//       <section className="main-content-section">
//         <EmployeeHeader/>

//         <div className="header-div header-two">
//           <div className='title-name'>
//             <h5>Assessment List</h5>
//               <p><a onClick={() => window.location.reload()} style={{cursor:"pointer", color:"#099ded"}}>Home</a> <i class="fa-solid fa-caret-right"></i> Assessment List</p> 
//           </div> 
//         </div>

//         <div className="training-list">
//           <div className="training-list-header">
//             <h4 style={{color: "#fff"}}>All Avallable Assessments</h4> 
//           </div>

//           <div className="training-list-body">
//             <div className='assessment-data'>
//               <div className='assessment-header'>
//                 <h5>Assessment name</h5>
//                 <h5>Actions</h5>
//               </div>
//                           {loading ? (
//                                 <div style={{margin:"1rem 2rem"}}>
//                                     <h5>Loading...</h5>
//                                 </div>
//                             ) : assessment && assessment.length > 0 ? (
//                               assessment.map((item, index) => (
//                                     <div className='assessment-items' key={item._id}>
//                                         <div className='assessment-titles'>
//                                             <h6 style={{marginBottom:"0px"}}>
//                                                 {index + 1}. {item.assessment_title}
//                                             </h6>
//                                         </div>
//                                         <div className="status-badge">
//                                             Status: {assessmentStatus[assessment._id] || 'pending'}
//                                         </div>
//                                         <div className='assessment-actions' 
//                                              style={{display:"flex", justifyContent:"space-between", width:"240px"}}>
//                                             <p style={{marginBottom:"0px"}}>
//                                                 <i className="fa-regular fa-clock"></i> {item.assessment_timer}
//                                             </p>
//                                             {/* <p style={{marginBottom:"0px", cursor:"pointer", color:"#036bfc"}} 
//                                                onClick={() => handleTakeAssessment(item._id)}>
//                                                 <i className="fa-regular fa-pen-to-square"></i> Attend Assessment
//                                             </p> */}
//                                             <button
//                                                 onClick={() => handleTakeAssessment(item._id)}
//                                                 disabled={assessmentStatus[item._id] === 'completed'}
//                                                 className={`take-assessment-btn ${
//                                                     assessmentStatus[item._id] === 'completed' ? 'disabled' : ''
//                                                 }`}
//                                             >
//                                                 {assessmentStatus[item._id] === 'completed' 
//                                                     ? 'Completed' 
//                                                     : 'Take Assessment'}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <div style={{margin:"1rem 2rem"}}>
//                                     <h5>No Assessments available.</h5>
//                                 </div>
//                             )}       
              
//             </div>
//           </div>
//         </div>

//       </section>

//     </div>
//   )
// }

// export default AssessmentList


function AssessmentList() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [assessment, setAssessment] = useState([]);
    const [loading, setLoading] = useState(true);
    const [employeeData, setEmployeeData] = useState(null);
    const [assessmentStatus, setAssessmentStatus] = useState({});
    const location = useLocation(); // Add this to detect navigation changes
  
    const handleTakeAssessment = (assessmentId) => {
      const employeeData = JSON.parse(localStorage.getItem('employeeData'));
      if (!employeeData) {
        toast.error('Please login again');
        navigate('/');
        return;
      }
      navigate(`/takeAssessmentView/${assessmentId}`);
    };
  
    const fetchAssessmentStatus = async (employeeId, assessmentId) => {
      try {
        const response = await axios.get(`${base_url}/assessment_status/${assessmentId}/${employeeId}`);
        if (response.data.success) {
          setAssessmentStatus(prev => ({
            ...prev,
            [assessmentId]: response.data.status
          }));
        }
      } catch (error) {
        console.error("Error fetching assessment status:", error);
      }
    };
  
    const fetchAssignedAssessments = async () => {
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
  
        const response = await axios.get(`${base_url}/get_assigned_assessments/${id}`);
        
        if (response.data.success && Array.isArray(response.data.data)) {
          setAssessment(response.data.data);
          // Fetch status for each assessment
          response.data.data.forEach(item => {
            fetchAssessmentStatus(employeeData.employee_id, item._id);
          });
        } else {
          console.log('Invalid response format:', response.data);
          setAssessment([]);
        }
      } catch (error) {
        console.error('Error fetching Assessment data:', error);
        toast.error(error.response?.data?.message || "Error fetching assigned Assessments");
        setAssessment([]);
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
      fetchAssignedAssessments();
    }, [id, location.key]); // Add location.key to refresh on navigation
  
    return (
      <div>
        <style>
        {`
            body {
            background-color: #e9ecef;
            padding: 20px;
            }
            .training-list {
            background-color: #fff;
            width: 100%;
            border-radius: 10px;
            padding: 1.5rem;
            }
            .training-list-header {
            background-color: #2E073F;
            width: 100%;
            height: 80px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            display: flex;
            justify-content: left;
            align-items: center;
            padding-left: 2rem;
            }
            .training-list-body {
            margin-top: 1rem;
            }
            .assessment-data {
            padding: 2rem;
            }
            .assessment-header {
            display: flex;
            justify-content: space-between;
            padding: 8px 2rem;
            border-radius: 1.5rem;
            border: 1px solid #2E073F;
            margin-bottom: 2rem;
            }
            .assessment-items {
            border-bottom: 1px solid rgba(0,0,0,0.4);
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1rem;
            padding: 5px 1rem;
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
        `}
        </style>

        <EmployeeSidebar />
  
        <section className="main-content-section">
          <EmployeeHeader />
  
          <div className="header-div header-two">
            <div className='title-name'>
              <h5>Assessment List</h5>
              <p>
                <a onClick={fetchAssignedAssessments} style={{cursor:"pointer", color:"#099ded"}}>
                  Home
                </a> 
                <i className="fa-solid fa-caret-right"></i> Assessment List
              </p>
            </div>
          </div>
  
          <div className="training-list">
            <div className="training-list-header">
              <h4 style={{color: "#fff"}}>All Available Assessments</h4>
            </div>
  
            <div className="training-list-body">
              <div className='assessment-data'>
                <div className='assessment-header'>
                  <h5>Assessment name</h5>
                  <h5>Actions</h5>
                </div>
                
                {loading ? (
                  <div style={{margin:"1rem 2rem"}}>
                    <h5>Loading...</h5>
                  </div>
                ) : assessment && assessment.length > 0 ? (
                  assessment.map((item, index) => (
                    <div className='assessment-items' key={item._id}>
                      <div className='assessment-titles'>
                        <h6 style={{marginBottom:"0px"}}>
                          {index + 1}. {item.assessment_title}
                        </h6>
                      </div>
                      <div className={`status-badge ${assessmentStatus[item._id] || 'pending'}`}>
                        {assessmentStatus[item._id] || 'pending'}
                      </div>
                      <div className='assessment-actions' 
                           style={{display:"flex", alignItems:"center", gap:"20px"}}>
                        <p style={{marginBottom:"0px"}}>
                          <i className="fa-regular fa-clock"></i> {item.assessment_timer}
                        </p>
                        <button
                          onClick={() => handleTakeAssessment(item._id)}
                          disabled={assessmentStatus[item._id] === 'completed'}
                          className={`take-assessment-btn ${
                            assessmentStatus[item._id] === 'completed' ? 'disabled' : ''
                          }`}
                        >
                          {assessmentStatus[item._id] === 'completed' 
                            ? 'Completed'
                            : 'Take Assessment'}
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{margin:"1rem 2rem"}}>
                    <h5>No Assessments available.</h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default AssessmentList;

