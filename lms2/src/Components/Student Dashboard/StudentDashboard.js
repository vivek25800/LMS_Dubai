import Sidebar from "../Sidebar";
import Header from "../Header";
import '../Student Dashboard/Student Style/StudentDashboard.css';
import LineOne from "../LineOne";
import { NavLink, Link } from "react-router-dom";
import { Toast } from "bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {

    const navigate = useNavigate();

    const logOut = () => {
        toast.warning('You logged out successfully');
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }

    // function animationFun() {
    //     const main_section = document.querySelector('.main-content-section');
    //     const left_section = document.querySelector('.main-content-section');

    //     main_section.style.width = '88%';
    //     left_section.style.width = '10%';
    // }

    return ( 
        <div style={{backgroundColor: "rgba(46, 7, 63, 0.1)", padding: "20px", height: "100%"}}>
            <section class="left-Dashboard">
                <div className="dashboard-list">
                    <div className="title-div">
                        <img scr="" />
                        <h5 onClick={() => window.location.reload()} style={{cursor:"pointer"}}>DASHBOARD </h5>
                    </div>
                    <div className="list-options">
                       <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Course Category
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                    <li> <NavLink to={'/AllCourse'}>All Course Category</NavLink> </li>
                                    <li> <NavLink to={'/createCourse'}>Create Course Category</NavLink> </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Course Manage
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>
                                            <div class="accordion-item" style={{border: "none"}}>
                                                <h2 class="accordion-header" id="flush-headingTen">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen" style={{height: "2rem", padding: "5px"}}>
                                                    Subject
                                                </button>
                                                </h2>
                                                <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li><NavLink to={'/AllSubject'}>All Subject List</NavLink></li>
                                                        <li><NavLink to={'/createSubject'}>Create New Subject</NavLink></li>
                                                    </ul>
                                                </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{padding: "5px"}}> <NavLink to={'/tagCourse'}>Tag</NavLink>  </li>
                                        <li style={{padding: "5px"}}> <NavLink to={'/labelCourse'}>Label</NavLink> </li>
                                        <li style={{padding: "5px"}}>
                                            <div class="accordion-item" style={{border: "none"}}>
                                                <h2 class="accordion-header" id="flush-headingNine">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine" style={{height: "2rem", padding: "5px"}}>
                                                Course
                                                </button>
                                                </h2>
                                                <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li><NavLink to={'/AllCourseList'}>All Course List</NavLink></li>
                                                        <li><NavLink to={'/CreateNewCourse'}>Create New Course</NavLink></li>
                                                        <li>Edit Course</li>
                                                    </ul>
                                                </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li style={{padding: "5px"}}>Course Bundle</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Notice Board
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li> <NavLink to={'/Allnotice'}>All Notice</NavLink> </li>
                                        <li> <NavLink to={'/addnotice'}>Create Notice</NavLink> </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Users List
                                </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li> <NavLink to={'/AllEmployeList'}>Employee's List</NavLink> </li>
                                        <li> <NavLink to={'/AllStudentList'}>Student's List</NavLink> </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    Instructor Manage
                                </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>Instructor lsit</li>
                                        <li>Create Instructor</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    Testimonial
                                </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>List</li>
                                        <li>Create new</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingSeven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    Blog Manage
                                </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>Blogs</li>
                                        <li>Blog Category</li>
                                        <li>Create Blog</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingEight">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                    Authentication
                                </button>
                                </h2>
                                <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>Sign up</li>
                                        <li>Sign in</li>
                                        <li>Two step</li>
                                        <li>Forgot Password</li>
                                        <li>New Password</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="logout-section">
                        <button onClick={logOut}> Log out <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
                    </div>
                </div>
            </section>   

            <section className="main-content-section">
                <Header />

                <div className='header-div header-two'>
                    <div className='title-name'>
                        <h5>Student</h5>
                        <p><a onClick={() => window.location.reload()} style={{cursor:"pointer", color:"#099ded"}}>Home</a> <i class="fa-solid fa-caret-right"></i> Student Dashboard</p>
                    </div>
                </div>

                <div className="profile-section">
                    <div className="main-profile-div">
                        <div className="profile-image-div">
                            <div className="upper-image">
                                <img src="https://template.codexshaper.com/admin/lms-hub/assets/images/profile/cover.png" />
                            </div>
                            <div className="profile-picture">
                                <div class="profile-pic"> 
                                    <input id="file" type="file"/>
                                    <img src="bat.jpg" id="output" width="200" />
                                        <label class="-label" for="file">
                                            <span> <i class="fa-solid fa-camera"></i></span>
                                        </label>
                                </div>
                            </div>
                        </div>
                        <div className="info-div">
                            <h4 style={{color: "#170a7c", fontWeight: "600"}}>Vivek Gupta</h4>
                            <h6 style={{color: "#170a7c", fontSize: "15px"}}>Don't Care Everybody's Word</h6>
                            <p style={{fontSize: "14px", marginBottom: "5px"}}>UI/UX - Student st Edutech</p>
                        </div>
                        <div className="about-div">
                            <h6 style={{fontSize: "18px"}}>About</h6>
                            <p style={{color: "#170a7c", marginBottom: "5px" }}> <span style={{marginRight: "10px"}}><i class="fa-solid fa-house"></i></span> Lives in Sector 63, Noida</p>
                            <p style={{color: "#170a7c", marginBottom: "5px"}}> <span style={{marginRight: "10px"}}><i class="fa-solid fa-briefcase"></i></span> Works at LnBird</p>
                        </div>
                        <div className="about-div" style={{marginTop: "2rem"}}>
                            <h6 style={{fontSize: "18px"}}>Social</h6>
                            <p style={{color: "#170a7c", marginBottom: "5px" }}> <span style={{marginRight: "10px"}}><i class="fa-brands fa-linkedin"></i></span> Linkedin</p>
                            <p style={{color: "#170a7c", marginBottom: "5px"}}> <span style={{marginRight: "10px"}}><i class="fa-brands fa-twitter"></i></span> Twitter</p>
                        </div>
                    </div>
                    <div className="profile-content-div">
                        <div className="multiple-divs-option">
                            <div className="item-div">
                             <div className="item-content-div">
                                <span><img src="11675536.png" /></span>
                                <p>Course in <br /> progress</p>
                                <h2>09</h2>
                             </div>
                            </div>
                            <div className="item-div">
                                <div className="item-content-div">
                                    <span><img src="13409643.png" /></span>
                                    <p>Completed <br /> courses</p>
                                    <h2>07</h2>
                                </div> 
                            </div>
                            <div className="item-div">
                                <div className="item-content-div">
                                    <span><img src="11675606.png" /></span>
                                    <p>Course <br /> purchased</p>
                                    <h2>11</h2>
                                </div> 
                            </div>
                            <div className="item-div">
                                <div className="item-content-div">
                                    <span><img src="13072683.png" /></span>
                                    <p>Certificate</p>
                                    <h2>03</h2>
                                </div> 
                            </div>
                        </div>

                        <div className="average-learning">
                            <div className="heading-average-div">
                                <h4>Average Learning</h4>
                                <div className="duration-div">
                                    <select name="month-year-wise" id="duration" style={{padding:"0px", width: "8rem", height: "2.5rem"}}>
                                        <option value="year">This Year</option>
                                        <option value="month">This Month</option>
                                    </select>
                                </div>
                            </div>

                            <div className="graph-view">
                                <LineOne/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer/>
        </div>
     );
}

export default StudentDashboard;