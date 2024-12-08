import Sidebar from "./Sidebar";
import Header from "./Header";
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

//   const[course, setCourse] = React.useState({
//     course_title_main:"", add_main_category:"", add_sub_category:"", description:"",
//     course_code:"", course_title:"", add_Content:[], pdf_file:[], word_file:[], image_file:[],
//   });

//   const handlePdfFile = (event) => {
//     const files = Array.from(event.target.files);
//     setCourse((prevState) => ({
//         ...prevState,
//         pdf_file: files, // Replace the array with the new set of files
//     }));
//   }

//     const handleWordFile = (event) => {
//       const files = Array.from(event.target.files);
//       setCourse((prevState) => ({
//           ...prevState,
//           word_file: files, // Replace the array with the new set of files
//       }));
//     }

//   const handledocumentpicchange = (event) => {
//     const files = Array.from(event.target.files);
//     setCourse((prevState) => ({
//         ...prevState,
//         image_file: files, // Replace the array with the new set of files
//     }));   
//   };

//   const handleVideo = (event) => {
//     const files = Array.from(event.target.files);
//     setCourse((prevState) => ({
//         ...prevState,
//         video_file: files, // Replace the array with the new set of files
//     }));   
//   };

//   const course_creation_infoget = async (e) => {
  
//     try {
//         const formData = new FormData();

//         for (let key in course) {
//           if (Array.isArray(course[key])) {
//               course[key].forEach((value, index) => {
//                   if (typeof value === "object") {
//                       // Convert object to JSON string
//                       formData.append(`${key}[${index}]`, JSON.stringify(value));
//                   } else {
//                       formData.append(`${key}[${index}]`, value);
//                   }
//               });
//           } else if (course[key]) {
//               formData.append(key, course[key]);
//           }
//       }
      
  
//         if (course.image_file && course.image_file.length > 0) {
//             course.image_file.forEach((file) => {
//                 formData.append('image_file', file);
//             });
//         }
//         if (course.pdf_file && course.pdf_file.length > 0) {
//           course.pdf_file.forEach((file) => {
//               formData.append('pdf_file', file);
//           });
//       }
//       if (course.word_file && course.word_file.length > 0) {
//         course.word_file.forEach((file) => {
//             formData.append('word_file', file);
//         });
//       }
//       if (course.add_Content.video_file && course.add_Content.video_file.length > 0) {
//         course.add_Content.video_file.forEach((file) => {
//             formData.append('video_file', file);
//         });
//       }

//         const resp = await axios.post(`${base_url}/add_course_details`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data', // Ensure Content-Type is set correctly for file uploads
//             },
//         }
//       );
  
//         if (resp.status === 200) {
//             toast.success(resp.data.message, { autoClose: 2000 });
        
//         }
//     } catch (error) {
//         toast.error(error.response?.data?.message || 'Error saving contact', { autoClose: 2000 });
//     }
//   };

//   const[chapterMain, setchapterMain]=useState([]);
//   const[chapter, setChapter]=useState({video_file:[], chapter_title:"",chapter_description:""})
//   const addChapter = () => {
//     if (chapter.chapter_title && chapter.chapter_description) {
//         // Add the current chapter to the main array
//         const updatedChapter = [...chapterMain, chapter];

//         // Update the state for chapters
//         setchapterMain(updatedChapter);

//         // Ensure `add_Content` is passed as an array of objects
//         setCourse((prevState) => ({ ...prevState, add_Content: updatedChapter }));

//         // Reset the chapter input fields if needed
//         setChapter({ video_file:[], chapter_title: "", chapter_description: "" });

//         // toast.success("Chapter added successfully!");
//     } else {
//         toast.error("Please fill out all fields before adding a chapter.");
//     }
// };


const [course, setCourse] = React.useState({
  course_title_main: "",
  add_main_category: "",
  add_sub_category: "",
  description: "",
  course_code: "",
  course_title: "",
  add_Content: [],
  pdf_file: [],
  word_file: [],
  image_file: [],
});

const [chapterMain, setchapterMain] = useState([]);
const [chapter, setChapter] = useState({
  video_file: [],
  chapter_title: "",
  chapter_description: "",
});

const handlePdfFile = (event) => {
  const files = Array.from(event.target.files);
  setCourse((prevState) => ({
      ...prevState,
      pdf_file: files,
  }));
};

const handleWordFile = (event) => {
  const files = Array.from(event.target.files);
  setCourse((prevState) => ({
      ...prevState,
      word_file: files,
  }));
};

const handledocumentpicchange = (event) => {
  const files = Array.from(event.target.files);
  setCourse((prevState) => ({
      ...prevState,
      image_file: files,
  }));
};

const handleVideo = (event) => {
  const files = Array.from(event.target.files);
  setChapter((prevState) => ({
      ...prevState,
      video_file: files,
  }));
};

const addChapter = () => {
  if (chapter.chapter_title && chapter.chapter_description) {
      const updatedChapter = [...chapterMain, chapter];

      setchapterMain(updatedChapter);

      setCourse((prevState) => ({
          ...prevState,
          add_Content: updatedChapter,
      }));

      setChapter({
          video_file: [],
          chapter_title: "",
          chapter_description: "",
      });

      // toast.success("Chapter added successfully!");
  } else {
      toast.error("Please fill out all fields before adding a chapter.");
  }
};

const course_creation_infoget = async (e) => {
  try {
      const formData = new FormData();

      for (let key in course) {
          if (Array.isArray(course[key])) {
              course[key].forEach((value, index) => {
                  if (typeof value === "object") {
                      formData.append(`${key}[${index}]`, JSON.stringify(value));
                  } else {
                      formData.append(`${key}[${index}]`, value);
                  }
              });
          } else if (course[key]) {
              formData.append(key, course[key]);
          }
      }

      if (course.image_file.length > 0) {
          course.image_file.forEach((file) => {
              formData.append("image_file", file);
          });
      }
      if (course.pdf_file.length > 0) {
          course.pdf_file.forEach((file) => {
              formData.append("pdf_file", file);
          });
      }
      if (course.word_file.length > 0) {
          course.word_file.forEach((file) => {
              formData.append("word_file", file);
          });
      }

      // Handle video files from each chapter
      if (course.add_Content.length > 0) {
          course.add_Content.forEach((chapter, chapterIndex) => {
              if (chapter.video_file && chapter.video_file.length > 0) {
                  chapter.video_file.forEach((file) => {
                      // formData.append(`add_Content[${chapterIndex}][video_file]`, file);
                      formData.append("video_file", file);
                  });
              }
              // formData.append(`add_Content[${chapterIndex}][chapter_title]`, chapter.chapter_title);
              // formData.append(`add_Content[${chapterIndex}][chapter_description]`, chapter.chapter_description);
          });
      }

      const resp = await axios.post(`${base_url}/add_course_details`, formData, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      });

      if (resp.status === 200) {
          toast.success(resp.data.message, { autoClose: 2000 });
      }
  } catch (error) {
      toast.error(
          error.response?.data?.message || "Error saving course details",
          { autoClose: 2000 }
      );
  }
};                                              
                                                 
  const deleteblock = (index) => {
                                    
    const newblocks = course.add_Content.filter((_, i) => i !== index);
    setchapterMain(newblocks)

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
        padding: 2.2rem 1rem;
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
                      onChange={handleVideo}
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
                      multiline
                      rows={4}
                      onChange={(e) => setChapter({...chapter, chapter_description: e.target.value})}
                    />
                  </div>
            </div>
          </div>
          <div className="upload-btn-div" style={{marginTop:"1.5rem"}}>
            <button onClick={addChapter}> <UploadIcon/> Add Chapter</button>
          </div>

          </div>

          <div className='content-div' style={{marginTop: "2rem"}}>
              <button id='next btn' style={{height: "3rem"}} onClick={MediaContainer}>Next </button>
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
                        <button id='next btn' style={{height: "3rem"}} onClick={FinishContainer}>Next</button>
                    </div>
                    </div>

        </div>

        <div className="add-new-category" id="finish_div">
          <div className='adding-course-div' style={{width: "100%"}}> 
            <button onClick={course_creation_infoget}> <UploadIcon/> Upload Course</button>

            <div className='content-div' style={{marginTop: "2rem"}}>
              <button id='previous-btn' onClick={DocumentContainer}> Previous </button>
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
