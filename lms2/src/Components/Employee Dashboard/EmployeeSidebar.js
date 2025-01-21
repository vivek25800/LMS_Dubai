// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// function EmployeeSidebar() {

//   const navigate = useNavigate();

//       const logOut = () => {
//           toast.warning('You logged out successfully');
//           setTimeout(() => {
//               navigate('/');
//           }, 2000);
//       }

//       const mainDashboard = () => {
//         navigate('/employeeProfile');
//       }

//       const courseFunc = () => {
//         navigate('/maincourse')
//       }

//       const trainingFunc = () => {
//         navigate('/employeeTraining');
//       }

//       const assessmentFunc = () => {
//         navigate('/employeeAssessments')
//       }

//       const catFunc = () => {
//         navigate('/employeeCATs');
//       }

//       const quizeFunc = () => {
//         navigate('/employeeQuizes');
//       }

//       const certificateFunc = () => {
//         navigate('/employeeCertificateList');
//       }

//   return (
//     <div>
//         <section className="left-Dashboard">
//             <div className="dashboard-list">
//                           <div className="title-div">
//                               <img scr="" />
//                               <h5 onClick={() => window.location.reload()} style={{cursor:"pointer"}}>DASHBOARD </h5>
//                           </div>
//                           <div className="list-options" >
//                              <div className="accordion accordion-flush" id="accordionFlushExample" >
//                                   <div class="item" >
//                                   <h2 class="accordion-header" id="flush-headingOne">
//                                   <button
//                                       className="accordion-button collapsed"
//                                           type="button"
//                                           data-bs-toggle="collapse"
//                                           data-bs-target="#flush-collapseOne"
//                                           aria-expanded="false"
//                                           aria-controls="flush-collapseOne"
//                                           style={{ '--bs-accordion-btn-icon': 'none' }} /* Removes the arrow icon */
//                                           >
                                              
//                                           Profile
//                                   </button>
//                                   </h2>
//                                   </div>
//                                   <div class="accordion-item">
//                                   <h2 class="accordion-header" id="flush-headingOne">
//                                       <button
//                                           class="accordion-button collapsed"
//                                               type="button"
//                                               data-bs-toggle="collapse"
//                                               data-bs-target="#flush-collapseOne"
//                                               aria-expanded="false"
//                                               aria-controls="flush-collapseOne"
//                                               style={{ '--bs-accordion-btn-icon': 'none' }} /* Removes the arrow icon */
//                                               onClick={courseFunc}
//                                               >
//                                               Course
//                                       </button>
//                                   </h2>
//                                   </div>
//                                   <div class="accordion-item">
//                                   <h2 class="accordion-header" id="flush-headingOne">
//                                   <button
//                                       class="accordion-button collapsed"
//                                           type="button"
//                                           data-bs-toggle="collapse"
//                                           data-bs-target="#flush-collapseOne"
//                                           aria-expanded="false"
//                                           aria-controls="flush-collapseOne"
//                                           style={{ '--bs-accordion-btn-icon': 'none' }} /* Removes the arrow icon */
//                                           onClick={trainingFunc}
//                                           >
//                                           Training
//                                   </button>
//                                   </h2>
//                                   </div>
//                                   <div class="accordion-item">
//                                   <h2 class="accordion-header" id="flush-headingOne">
//                                   <button
//                                       class="accordion-button collapsed"
//                                           type="button"
//                                           data-bs-toggle="collapse"
//                                           data-bs-target="#flush-collapseOne"
//                                           aria-expanded="false"
//                                           aria-controls="flush-collapseOne"
//                                           style={{ '--bs-accordion-btn-icon': 'none' }} /* Removes the arrow icon */
//                                           onClick={assessmentFunc}
//                                           >
//                                           Assessment
//                                   </button>
//                                   </h2>
//                                   </div>
//                                   <div class="accordion-item">
//                                   <h2 class="accordion-header" id="flush-headingOne">
//                                     {/* <NavLink to={'/employeeCATs'}> */}
//                                   <button
//                                       class="accordion-button collapsed"
//                                           type="button"
//                                           data-bs-toggle="collapse"
//                                           data-bs-target="#flush-collapseOne"
//                                           aria-expanded="false"
//                                           aria-controls="flush-collapseOne"
//                                           style={{ '--bs-accordion-btn-icon': 'none' }} /* Removes the arrow icon */
//                                           onClick={catFunc}
//                                   >
//                                       CAT
//                                   </button>
//                                   {/* </NavLink> */}
//                                   </h2>
//                                   </div>
//                                   <div class="accordion-item">
//                                   <h2 class="accordion-header" id="flush-headingOne">
//                                   <button
//                                       class="accordion-button collapsed"
//                                           type="button"
//                                           data-bs-toggle="collapse"
//                                           data-bs-target="#flush-collapseOne"
//                                           aria-expanded="false"
//                                           aria-controls="flush-collapseOne"
//                                           style={{ '--bs-accordion-btn-icon': 'none' }} /* Removes the arrow icon */
//                                           onClick={quizeFunc}
//                                           >
//                                           Quiz
//                                   </button>
//                                   </h2>
//                                   </div>
//                                   <div class="accordion-item">
//                                   <h2 class="accordion-header" id="flush-headingOne">
//                                   <button
//                                       class="accordion-button collapsed"
//                                           type="button"
//                                           data-bs-toggle="collapse"
//                                           data-bs-target="#flush-collapseOne"
//                                           aria-expanded="false"
//                                           aria-controls="flush-collapseOne"
//                                           style={{ '--bs-accordion-btn-icon': 'none' }} /* Removes the arrow icon */
//                                           onClick={certificateFunc}
//                                           >
//                                           Certificate
//                                   </button>
//                                   </h2>
//                                   </div>
//                               </div>
//                           </div>
      
//                           <div className="logout-section">
//                               <button onClick={logOut}
//                               style={{
//                                   backgroundColor: '#2C073C', // Dark purple background
//                                   color: 'white',             // White text
//                                   borderColor: '#4B0082',     // Border matches background
//                                   padding: '12px 24px',       // Increases button size
//                                   fontSize: '14px',           // Larger text size
//                                   borderRadius: '5px',        // Optional: rounded corners
//                                   cursor: 'pointer',          // Pointer cursor
                          
//                                 }}
                              
//                               > Log out <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
//                           </div>
//             </div>
//         </section>  
//     </div>
//   )
// }

// export default EmployeeSidebar



  import React, { useEffect, useState } from 'react'
  import { useNavigate, useLocation } from 'react-router-dom'
  import { toast } from 'react-toastify';

  function EmployeeSidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [employeeId, setEmployeeId] = useState(null);
    const [activeRoute, setActiveRoute] = useState('');

    // Get employee ID on component mount and set initial active route
    useEffect(() => {
      const employeeData = JSON.parse(localStorage.getItem('employeeData'));
      if (employeeData && employeeData._id) {
        setEmployeeId(employeeData._id);
        // Set active route based on current path
        const currentPath = location.pathname.split('/')[1];
        setActiveRoute(currentPath);
      } else {
        navigate('/');
      }
    }, [navigate, location]);

    const logOut = () => {
      localStorage.removeItem('employeeData');
      toast.warning('You logged out successfully');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }

    // Navigation functions with employee ID
    const navigateToRoute = (route) => {
      if (employeeId) {
        navigate(`${route}/${employeeId}`);
        setActiveRoute(route.substring(1)); // Remove the leading slash
      } else {
        toast.error('Session expired. Please login again');
        navigate('/');
      }
    }

    // Style for active button
    const getButtonStyle = (route) => {
      const isActive = activeRoute === route.substring(1);
      return {
        '--bs-accordion-btn-icon': 'none',
        backgroundColor: isActive ? '#4B0082' : 'transparent',
        color: isActive ? 'white' : 'inherit',
        transition: 'all 0.3s ease',
        borderRadius: '4px',
        margin: '2px 0',
        ':hover': {
          backgroundColor: '#380061',
          color: 'white',
        }
      };
    };

    return (
      <div>
        <section className="left-Dashboard">
          <div className="dashboard-list">
            <div className="title-div">
              <img src="" alt="" />
              <h5 
                onClick={() => navigateToRoute('/employeeDashboard')} 
                style={{
                  cursor: "pointer",
                  color: activeRoute === 'employeeDashboard' ? '#4B0082' : 'inherit'
                }}
              >
                DASHBOARD
              </h5>
            </div>
            <div className="list-options">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                      style={getButtonStyle('/employeeDashboard')}
                      onClick={() => navigateToRoute('/employeeDashboard')}
                    >
                      Profile
                    </button>
                  </h2>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      style={getButtonStyle('/employeeCourse')}
                      onClick={() => navigateToRoute('/maincourse')}
                    >
                      Course
                    </button>
                  </h2>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      style={getButtonStyle('/employeeTraining')}
                      onClick={() => navigateToRoute('/employeeTraining')}
                    >
                      Training
                    </button>
                  </h2>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      style={getButtonStyle('/employeeAssessments')}
                      onClick={() => navigateToRoute('/employeeAssessments')}
                    >
                      Assessment
                    </button>
                  </h2>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      style={getButtonStyle('/employeeCATs')}
                      onClick={() => navigateToRoute('/employeeCATs')}
                    >
                      CAT
                    </button>
                  </h2>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      style={getButtonStyle('/employeeQuizes')}
                      onClick={() => navigateToRoute('/employeeQuizes')}
                    >
                      Quiz
                    </button>
                  </h2>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      style={getButtonStyle('/employeeCertificateList')}
                      onClick={() => navigateToRoute('/employeeCertificateList')}
                    >
                      Certificate
                    </button>
                  </h2>
                </div>
              </div>
            </div>

            <div className="logout-section">
              <button 
                onClick={logOut}
                style={{
                  backgroundColor: '#2C073C',
                  color: 'white',
                  borderColor: '#4B0082',
                  padding: '12px 24px',
                  fontSize: '14px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  export default EmployeeSidebar