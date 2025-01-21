import React from 'react'
import EmployeeHeader from './EmployeeHeader'
import EmployeeSidebar from './EmployeeSidebar'

function TrainingList() {
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
                margin-top: 2rem;}
                `
            }
        </style>

       <EmployeeSidebar/>

       <section className="main-content-section">
            <EmployeeHeader/>

            <div className="header-div header-two">
              <div className='title-name'>
                <h5>Training List</h5>
                <p><a onClick={() => window.location.reload()} style={{cursor:"pointer", color:"#099ded"}}>Home</a> <i class="fa-solid fa-caret-right"></i> Training List</p>
              </div>
            </div>

            <div className="training-list">
              <div className="training-list-header">
                <h4 style={{color: "#fff"}}>All Avallable Training</h4>
              </div>

              <div className="training-list-body">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Training Name</th>
                      <th scope="col">Training Type</th>
                      <th scope="col">Training Date</th>
                      <th scope="col">Training Time</th>
                      <th scope="col">Training Duration</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

        </section> 

    </div>
  )
}

export default TrainingList


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { base_url } from '../Utils/base_url';
// import EmployeeSidebar from './EmployeeSidebar';
// import EmployeeHeader from './EmployeeHeader';

// function TrainingList() {
//     const { id } = useParams(); // Get employee ID from URL
//     const navigate = useNavigate();
    
//     const [trainings, setTrainings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [employeeData, setEmployeeData] = useState(null);

//     useEffect(() => {
//         // Verify if employee is logged in
//         const storedEmployee = JSON.parse(localStorage.getItem('employeeData'));
//         if (!storedEmployee || storedEmployee._id !== id) {
//             toast.error('Please login to view your trainings');
//             navigate('/');
//             return;
//         }
//         setEmployeeData(storedEmployee);

//         // Fetch employee's training data
//         fetchTrainings();
//     }, [id, navigate]);

//     const fetchTrainings = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get(`${base_url}/employee-trainings/${id}`);
            
//             if (response.status === 200) {
//                 setTrainings(response.data.trainings);
//             }
//         } catch (error) {
//             console.error('Error fetching trainings:', error);
//             toast.error('Failed to load training data');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleStartTraining = async (trainingId) => {
//         try {
//             await axios.post(`${base_url}/start-training`, {
//                 employeeId: id,
//                 trainingId: trainingId
//             });
            
//             toast.success('Training started successfully');
//             fetchTrainings(); // Refresh training list
//         } catch (error) {
//             console.error('Error starting training:', error);
//             toast.error('Failed to start training');
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <EmployeeSidebar />
            
//             <div className="main-content">
//                 <EmployeeHeader />

//                 <div className="content-header">
//                     <h2>My Trainings</h2>
//                     <p>Employee ID: {employeeData?.employee_id}</p>
//                 </div>

//                 {loading ? (
//                     <div className="loading-spinner">Loading...</div>
//                 ) : trainings.length === 0 ? (
//                     <div className="no-data-message">
//                         <p>No trainings found. New trainings will appear here when assigned.</p>
//                     </div>
//                 ) : (
//                     <div className="trainings-grid">
//                         {trainings.map((training) => (
//                             <div key={training._id} className="training-card">
//                                 <div className="training-header">
//                                     <h3>{training.title}</h3>
//                                     <span className={`status ${training.status.toLowerCase()}`}>
//                                         {training.status}
//                                     </span>
//                                 </div>

//                                 <div className="training-details">
//                                     <p><strong>Type:</strong> {training.type}</p>
//                                     <p><strong>Duration:</strong> {training.duration}</p>
//                                     <p><strong>Due Date:</strong> {new Date(training.dueDate).toLocaleDateString()}</p>
//                                 </div>

//                                 <div className="progress-section">
//                                     <div className="progress-bar">
//                                         <div 
//                                             className="progress-fill"
//                                             style={{ width: `${training.progress}%` }}
//                                         ></div>
//                                     </div>
//                                     <span>{training.progress}% Complete</span>
//                                 </div>

//                                 {training.status === 'PENDING' && (
//                                     <button
//                                         className="start-button"
//                                         onClick={() => handleStartTraining(training._id)}
//                                     >
//                                         Start Training
//                                     </button>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             <style jsx>{`
//                 .dashboard-container {
//                     display: flex;
//                     min-height: 100vh;
//                 }

//                 .main-content {
//                     flex: 1;
//                     padding: 20px;
//                 }

//                 .content-header {
//                     margin-bottom: 20px;
//                 }

//                 .trainings-grid {
//                     display: grid;
//                     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//                     gap: 20px;
//                     padding: 20px;
//                 }

//                 .training-card {
//                     background: white;
//                     border-radius: 8px;
//                     padding: 20px;
//                     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//                 }

//                 .training-header {
//                     display: flex;
//                     justify-content: space-between;
//                     align-items: center;
//                     margin-bottom: 15px;
//                 }

//                 .status {
//                     padding: 4px 8px;
//                     border-radius: 4px;
//                     font-size: 12px;
//                     font-weight: bold;
//                 }

//                 .status.pending {
//                     background: #fff3cd;
//                     color: #856404;
//                 }

//                 .status.in-progress {
//                     background: #cce5ff;
//                     color: #004085;
//                 }

//                 .status.completed {
//                     background: #d4edda;
//                     color: #155724;
//                 }

//                 .progress-bar {
//                     background: #e9ecef;
//                     height: 8px;
//                     border-radius: 4px;
//                     margin: 10px 0;
//                 }

//                 .progress-fill {
//                     background: #4B0082;
//                     height: 100%;
//                     border-radius: 4px;
//                     transition: width 0.3s ease;
//                 }

//                 .start-button {
//                     width: 100%;
//                     padding: 8px;
//                     background: #2C073C;
//                     color: white;
//                     border: none;
//                     border-radius: 4px;
//                     cursor: pointer;
//                     margin-top: 15px;
//                 }

//                 .start-button:hover {
//                     background: #4B0082;
//                 }

//                 .loading-spinner {
//                     text-align: center;
//                     padding: 40px;
//                 }

//                 .no-data-message {
//                     text-align: center;
//                     padding: 40px;
//                     color: #666;
//                 }
//             `}</style>
//         </div>
//     );
// }

// export default TrainingList;