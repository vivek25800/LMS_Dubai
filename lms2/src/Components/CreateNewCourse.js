// import "../StyleCode/CreateCategoryList.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import TextField from '@mui/material/TextField';
import * as React from 'react';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UploadIcon from '@mui/icons-material/Upload';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


function CreateNewCourse() {

  // const[course, setCourse] = useState({
  //   course_title:"", course_category:"", course_code:"", course_content:"",
  //           organization:"", instructor:"", course_label:"", course_duration:"",
  // });

  // const course_creation_infoget = async () => {
  //   try {
  //     const resp = await axios.post(`${base_url}/add_course_details`, course);
  //     if(resp.status === 200){
  //       toast.success("course created successfully", {autoClose: 2000});
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  function addLessons() {
    document.getElementById("add-lesson-div").style.display = "block"
  }

  function BasicContainer() {
    document.getElementById("customize-course").style.display = "block";
    document.getElementById("add-new-category").style.display = "none"
    document.getElementById("add-document-category").style.display = "none";
  }

  function MediaContainer() {
    document.getElementById("customize-course").style.display = "none";
    document.getElementById("add-new-category").style.display = "block"
    document.getElementById("add-document-category").style.display = "none";
  }

  function DocumentContainer() {
    document.getElementById("customize-course").style.display = "none";
    document.getElementById("add-new-category").style.display = "none"
    document.getElementById("add-document-category").style.display = "block";
  }

  return (
    <div>
      <style>
        {`
         body{
            background-color: rgba(46, 7, 63, 0.1);
            padding: 1.5rem;
            }
        .customize-course{
        background-color: #ffffff;
        padding: 2rem;
        border-radius: 10px;
        }
        .info-div-items{
        margin: 1rem 0;
        }
        .info-div-items .input{
        width: 100%;
        outline-color: #7A1CAC;
        }
        .course-info-section, .lessons-section{
        display: flex;
        justify-content: space-between;
        }
        .addcourse-div, .create-lessons{
        width: 49%;
        }
        .inputs-items{
        padding: 1.5rem;
        border: 2px solid rgba(0,0,0,0.2);
        border-radius: 10px;
        }
        .lessons-section{
        border: 2px solid rgba(0,0,0,0.2);
        padding: 1.5rem;
        border-radius: 10px;
        }
        .upload-video{
        border: 1px solid rgba(0,0,0,0.2);
        padding: 2rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        }
        .upload-video svg{
        height: 3rem;
        width: 4rem;
        }
        .upload-video-btn{
        background-color: #ffffff;
        color: blue;
        box-shadow: none;
        }
        .add-lessons{
        margin-top: 2rem;
        display: none;
        }
        button{
        background-color: #7A1CAC;
        padding: 10px 1rem;
        }
        button:hover{
        background-color: #2E073F;
        }
        .add-new-category{
        display: none; 
        }
        .addStyle{
        background-color: #7A1CAC;
        color: #ffffff;
        }
        .removeStyle{
        background-color: #ffffff;
        color: #000;
        }
        `}
      </style>
    <div>
      <Sidebar />

      <section className="main-content-section">
        <Header />

        <div
          className="header-div header-two"
          style={{ padding: "2rem", height: "8rem" }}
        >
          <div className="create-options-course">
            <div
              className="basic-option"
              style={{ backgroundColor: "#7A1CAC", color: "white" }}
              onClick={BasicContainer}
            >
              <h6>Basic</h6>
            </div>
            
              <div className="media-option" id="media-option-id" onClick={MediaContainer}>
                <h6>
                  Media <br />
                  (.mp4, .mp3)
                </h6>
              </div>
           
            
              <div className="document-option addStyle" id="document-option-id" onClick={DocumentContainer}>
                <h6>
                  Document <br />
                  (.pdf, .word, .jpg)
                </h6>
              </div>
            
            <div className="finish-div">
              <h6>Finish</h6>     
            </div>
          </div>
        </div>

        {/* <div className="add-new-Catgory">
          <div className="adding-course-div" style={{ width: "100%" }}>
            <h5 style={{ marginBottom: "1rem" }}>Add New course</h5>
            <div className="inputs-div">
              <div className="info-div">
                <label htmlFor="title">How about a course title</label>
                <input type="text" id="course_title" placeholder="Course Title" onChange={(e) => {setCourse({...course, course_title:e.target.value})}} />
              </div>
              <div className="info-div">
                <label htmlFor="parent-category">Course Category</label>
                <select
                  name="parent-category"
                  id="course_category"
                  placeholder="Select none for parent"
                  onChange={(e) => {setCourse({...course, course_category:e.target.value})}}
                >
                  <option value="programming">Programming</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="web-dev">Web Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="cyber-security">Cyber Security</option>
                </select>
              </div>
              <div className="info-div">
                <label htmlFor="course-code">Course Code</label>
                <input type="text" id="course_code" placeholder="Enter course code" onChange={(e) => {setCourse({...course, course_code:e.target.value})}} />
              </div>
              <div className="info-div">
                <label htmlFor="content">Content</label>
                <input type="text" id="course_content" placeholder="Enter content" onChange={(e) => {setCourse({...course, course_content:e.target.value})}} />
              </div>
              <div className="info-div">
                <label htmlFor="organization">Organization</label>
                <input type="text" id="organization" placeholder="Organization name" onChange={(e) => {setCourse({...course, organization:e.target.value})}} />
              </div>
              <div className="info-div">
                <label htmlFor="category">Instructor</label>
                <input type="text" id="instructor" placeholder="Enter Instructor name" onChange={(e) => {setCourse({...course, instructor:e.target.value})}} />
              </div>
              <div className="info-div">
                <label htmlFor="meta-title">Courses Label</label>
                <input type="text" id="course_label" placeholder="Enter meta title" onChange={(e) => {setCourse({...course, course_label:e.target.value})}} />
              </div>
              
              <div className="info-div">
                <label htmlFor="course-duration">Courses duaration</label>
                <input type="text" id="course_duration" placeholder="00:00:00" onChange={(e) => {setCourse({...course, course_duration:e.target.value})}} />
                <p style={{ opacity: "0.7", fontSize: "12px" }}>
                  Please follow the pattern <b>(hh:mm:ss)</b>
                </p>
              </div>
            </div>

                <div className="meta-description">
                    <label htmlFor="meta-desc">Meta Description</label>
                    <Textedit/>
                </div>

            <div className="content-div" style={{ float: "right" }}>
              <button onClick={course_creation_infoget}> <NavLink to={'/Media'}>Next</NavLink> </button>
            </div>
          </div>
        </div> */}

        <div className="customize-course" id="customize-course">
          <div className="course-info-section">
            <div className="addcourse-div">
                <h5> <span><DashboardCustomizeIcon/></span> Customize your course</h5>
                <div className="inputs-items">
                  <div className="info-div-items">
                    <TextField
                      required
                      id=""
                      label="Course title"
                      defaultValue=""
                      className="input"
                    />
                  </div>
                  <div className="info-div-items">
                  <TextField
                      required
                      id="outlined-required"
                      label="Add main category"
                      defaultValue=""
                      className="input"
                    />
                  </div>
                  <div className="info-div-items">
                  <TextField
                      required
                      id="outlined-required"
                      label="Add sub category"
                      defaultValue=""
                      className="input"
                    />
                     <div className="info-div-items">
                     <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue=""
                        className="input"
                      />
                     </div>
                  </div>
                </div>
            </div>

            <div className="addcourse-div">
                <h6> <span><DesignServicesIcon/></span> Course Design</h6>
                <div className="inputs-items">
                  <div className="info-div-items">
                    <TextField
                      required
                      id="outlined-required"
                      label="Course code"
                      defaultValue=""
                      className="input"
                    />
                  </div>
                  <div className="info-div-items">
                  <TextField
                      required
                      id="outlined-required"
                      label="Course title"
                      defaultValue=""
                      className="input"
                    />
                  </div>
                  <div className="info-div-items">
                    <button onClick={addLessons}>Add Chapters</button>
                  </div>
                </div>
            </div>
          </div>

          <div className="add-lessons" id="add-lesson-div">
            <h5> <span><AddCircleIcon /></span> Add Lessons</h5>
          <div className="lessons-section">
          <div className="create-lessons">
                <div className="info-div-items upload-video">
                  <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <CloudUploadIcon />
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    className="upload-video-btn"
                    // startIcon={<CloudUploadIcon />}
                  >
                    Choose files or drag and drop
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(event) => console.log(event.target.files)}
                      multiple
                    />
                  </Button>
                  <p>Video (512GB)</p>
                  </div>
                </div>
            </div>

            <div className="create-lessons">
                  <div className="info-div-items">
                    <TextField
                      required
                      id="outlined-required"
                      label="Chapter title"
                      defaultValue=""
                      className="input"
                    />
                  </div>
                  <div className="info-div-items">
                    <TextField
                      required
                      id="outlined-required"
                      label="Chapter description"
                      defaultValue=""
                      className="input"
                    />
                  </div>
            </div>
          </div>
          <div className="upload-btn-div" style={{marginTop:"1.5rem"}}>
            <button> <UploadIcon/> Upload Chapter</button>
          </div>
          </div>
            
        </div>


        <div className='add-new-category' id="add-new-category">
                    <div className='adding-course-div' style={{width: "100%"}}> 
                    <h5 style={{marginBottom: "1.5rem"}}>Add media files</h5>
                    <div className='upload-options' style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{width: "30%"}}>
                            <p style={{fontSize: "12px", fontWeight: "600"}}>Thumbnail (548 x 234)</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" id='file-upload' style={{display: "none"}} />
                                <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p>
                            </div>
                        </div>
                        <div style={{width: "30%"}}>
                            <p style={{fontSize: "12px", fontWeight: "600"}}>Main course file</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" id='file-upload' style={{display: "none"}} />
                                <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p>
                            </div>
                        </div>
                        <div style={{width: "30%"}}>
                            <p style={{fontSize: "12px", fontWeight: "600"}}>Introduction file</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" id='file-upload' style={{display: "none"}} />
                                <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p>
                            </div>
                        </div>
                    </div>
                       
                    <div className='content-div' style={{ marginTop: "1rem"}}>
                        <button id='previous-btn' onClick={BasicContainer}> Previous </button>
                        <button id='next btn' style={{height: "3rem"}} onClick={DocumentContainer}>Next </button>
                    </div>
                    </div>

        </div>

        <div className='add-new-category' id="add-document-category">
                    <div className='adding-course-div' style={{width: "100%"}}> 
                    <h5 style={{marginBottom: "1.5rem"}}>Add Documnet files</h5>
                    <div className='upload-options' style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{width: "30%"}}>
                            <p style={{fontSize: "12px", fontWeight: "600"}}>PDF file</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" id='file-upload' style={{display: "none"}} />
                                <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p>
                            </div>
                        </div>
                        <div style={{width: "30%"}}>
                            <p style={{fontSize: "12px", fontWeight: "600"}}>Word file</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" id='file-upload' style={{display: "none"}} />
                                <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p>
                            </div>
                        </div>
                        <div style={{width: "30%"}}>
                            <p style={{fontSize: "12px", fontWeight: "600"}}>JPG file</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" id='file-upload' style={{display: "none"}} />
                                <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p>
                            </div>
                        </div>
                    </div>
                       
                    <div className='content-div' style={{marginTop: "1rem"}}>
                        <button id='previous-btn' onClick={MediaContainer}> Previous </button>
                        <button id='next btn' style={{height: "3rem"}}>Next</button>
                    </div>
                    </div>

        </div>
      </section>
      <ToastContainer/>
    </div>
    </div>
  );
}

export default CreateNewCourse;
