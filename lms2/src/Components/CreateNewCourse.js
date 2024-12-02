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
import axios from "axios";
import { base_url } from "./Utils/base_url";
import { useState } from "react";


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

  const[course, setCourse] = React.useState({
    course_title_main:"", add_main_category:"", add_sub_category:"", description:"",
    course_code:"", course_title:"", add_Content:[], pdf_file:[], word_file:[], image_file:[],
  });

  // const course_creation_infoget = async () => {
  //   try {
  //     const resp = await axios.post(`${base_url}/add_course_details`, course);
  //     if(resp.status === 200){
  //       toast.success("Course created successfully", {autoClose: 2000});
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handlePdfFile = (event) => {
    // Convert FileList to an array of files
    const files = Array.from(event.target.files);

    // Update the state by replacing the old files with the newly selected files
    setCourse((prevState) => ({
        ...prevState,
        pdf_file: files, // Replace the array with the new set of files
    }));
  }

    const handleWordFile = (event) => {
      // Convert FileList to an array of files
      const files = Array.from(event.target.files);
  
      // Update the state by replacing the old files with the newly selected files
      setCourse((prevState) => ({
          ...prevState,
          word_file: files, // Replace the array with the new set of files
      }));
    }

  const handledocumentpicchange = (event) => {
    // Convert FileList to an array of files
    const files = Array.from(event.target.files);

    // Update the state by replacing the old files with the newly selected files
    setCourse((prevState) => ({
        ...prevState,
        image_file: files, // Replace the array with the new set of files
    }));   
};

  const course_creation_infoget = async (e) => {
    e.preventDefault();
  
    try {
        const formData = new FormData();
  
        // Manually append all contact data (excluding files)
        for (let key in course) {
            if (Array.isArray(course[key])) {
              course[key].forEach((value) => {
                    formData.append(key, value);
                });
            } else if (course[key]) {
                formData.append(key, course[key]);
            }
        }
  
        // Append files (document_pic)
        if (course.image_file && course.image_file.length > 0) {
            // Loop through the files and append them to FormData
            course.image_file.forEach((file) => {
                // Ensure we don't append the same file multiple times
                formData.append('image_file', file);
            });
        }
  
        // Now submit the FormData with files included
        const resp = await axios.post(`${base_url}/add_course_details`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Ensure Content-Type is set correctly for file uploads
            },
        });
  
        if (resp.status === 200) {
            toast.success(resp.data.message, { autoClose: 2000 });
        
        }
    } catch (error) {
        toast.error(error.response?.data?.message || 'Error saving contact', { autoClose: 2000 });
    }
  };

  const[chapterMain, setchapterMain]=useState([]);
  const[chapter, setChapter]=useState({chapter_title:"",chapter_description:"", video_file:[]})

                                        const addChapter = () => {
                       
                                            if (chapter.chapter_title ) 
                                              {
                                                 
                                                const updateChapter = [...chapterMain, chapter];
                                                setchapterMain(updateChapter);
                                                setCourse(prevState => ({
                                                  ...prevState,
                                                  add_Content: updateChapter
                                                }));
                                              
                                                 } 
                                                 else
                                                   {
                                                       toast.error("Please fill out all fields.");
                                                   }
                                                 };
                                                
                                                 
                                    const deleteblock = (index) => {
                                    

                                      // Filter out the destination at the given index
                                      const newblocks = course.add_Content.filter((_, i) => i !== index);
                                      setchapterMain(newblocks)

                                      // Set the updated destination details
                                      setCourse(prevState => ({
                                        ...prevState,
                                        add_Content: newblocks
                                      }));
                                    };

                                    console.log(course.add_Content);

  function addLessons() {
    document.getElementById("add-lesson-div").style.display = "block"
  }

  function BasicContainer() {
    document.getElementById("customize-course").style.display = "block";
    document.getElementById("add-new-category").style.display = "none"
    document.getElementById("add-document-category").style.display = "none";
    document.getElementById("finish_div").style.display = "none";
  }

  function MediaContainer() {
    document.getElementById("customize-course").style.display = "none";
    document.getElementById("add-new-category").style.display = "block"
    document.getElementById("add-document-category").style.display = "none";
    document.getElementById("finish_div").style.display = "none";
  }

  function DocumentContainer() {
    document.getElementById("customize-course").style.display = "none";
    document.getElementById("add-new-category").style.display = "none"
    document.getElementById("add-document-category").style.display = "block";
    document.getElementById("finish_div").style.display = "none";
  }

  function FinishContainer() {
    document.getElementById("customize-course").style.display = "none";
    document.getElementById("add-new-category").style.display = "none"
    document.getElementById("add-document-category").style.display = "none";
    document.getElementById("finish_div").style.display = "block";
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
            
            <div className="finish-div" id="finish-div" onClick={FinishContainer}>
              <h6>Finish</h6>     
            </div>
          </div>
        </div>

        <div className="customize-course" id="customize-course">
          <div className="course-info-section">
            <div className="addcourse-div">
                <h5> <span><DashboardCustomizeIcon/></span> Customize your course</h5>
                <div className="inputs-items">
                  <div className="info-div-items">
                    <TextField
                      required
                      id="course_title_main"
                      name="course_title_main"
                      label="Course title"
                      defaultValue=""
                      className="input"
                      onChange={(e) => setCourse({...course, course_title_main: e.target.value})}
                    />
                  </div>
                  <div className="info-div-items">
                  <TextField
                      required
                      id="add_main_category"
                      name="add_main_category"
                      label="Add main category"
                      defaultValue=""
                      className="input"
                      onChange={(e) => setCourse({...course, add_main_category: e.target.value})}
                    />
                  </div>
                  <div className="info-div-items">
                  <TextField
                      required
                      id="add_sub_category"
                      name="add_sub_category"
                      label="Add sub category"
                      defaultValue=""
                      className="input"
                      onChange={(e) => setCourse({...course, add_sub_category: e.target.value})}
                    />
                     <div className="info-div-items">
                     <TextField
                        id="description"
                        name="description"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue=""
                        className="input"
                        onChange={(e) => setCourse({...course, description: e.target.value})}
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
                      id="course_code"
                      name="course_code"
                      label="Course code"
                      defaultValue=""
                      className="input"
                      onChange={(e) => setCourse({...course, course_code: e.target.value})}
                    />
                  </div>
                  <div className="info-div-items">
                  <TextField
                      required
                      id="course_title"
                      name="course_title"
                      label="Course title"
                      defaultValue=""
                      className="input"
                      onChange={(e) => setCourse({...course, course_title: e.target.value})}
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
                      name="video_file"
                      onChange={(e) => setChapter({...chapter, video_file: e.target.value})}
                      multiple
                      id="video_file"
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
                      id="chapter_title"
                      name="chapter_title"
                      label="Chapter title"
                      defaultValue=""
                      className="input"
                      onChange={(e) => setChapter({...chapter, chapter_title: e.target.value})}
                    />
                  </div>
                  <div className="info-div-items">
                    <TextField
                      required
                      id="chapter_description"
                      name="chapter_description"
                      label="Chapter description"
                      defaultValue=""
                      className="input"
                      maxRows={3}
                      onChange={(e) => setChapter({...chapter, chapter_description: e.target.value})}
                    />
                  </div>
            </div>
          </div>
          <div className="upload-btn-div" style={{marginTop:"1.5rem"}}>
            <button onClick={addChapter}> <UploadIcon/> Add Chapter</button>
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
                                <input type="file" id='file-upload' name="file-upload" style={{display: "none"}} />
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
                                <input type="file" id='file-upload' name="pdf_file" onChange={handlePdfFile} />
                                {/* <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p> */}
                            </div>
                        </div>
                        <div style={{width: "30%"}}>
                            <p style={{fontSize: "12px", fontWeight: "600"}}>Word file</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" id='file-upload' name="word_file" onChange={handleWordFile} />
                                {/* <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p> */}
                            </div>
                        </div>
                        <div style={{width: "30%"}}>
                            <p style={{fontSize: "12px", fontWeight: "600"}}>JPG file</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" id='file-upload' name="image_file" onChange={handledocumentpicchange} />
                                {/* <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p> */}
                            </div>
                        </div>
                    </div>
                       
                    <div className='content-div' style={{marginTop: "1rem"}}>
                        <button id='previous-btn' onClick={MediaContainer}> Previous </button>
                        <button id='next btn' style={{height: "3rem"}}>Next</button>
                    </div>
                    </div>

        </div>

        <div className="add-new-category" id="finish_div">
          <div className='adding-course-div' style={{width: "100%", height:"200px"}}> 
            <button onClick={course_creation_infoget}> <UploadIcon/> Upload Course</button>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </div>
    </div>
  );
}

export default CreateNewCourse;
