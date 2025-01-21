// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { toast, ToastContainer } from "react-toastify";
// import TextField from '@mui/material/TextField';
// import * as React from 'react';
// import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
// import DesignServicesIcon from '@mui/icons-material/DesignServices';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import UploadIcon from '@mui/icons-material/Upload';
// import axios from "axios";
// import { base_url } from "./Utils/base_url";
// import { useState } from "react";


// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });


// function CreateNewCourse() {

// //   const[course, setCourse] = React.useState({
// //     course_title_main:"", add_main_category:"", add_sub_category:"", description:"",
// //     course_code:"", course_title:"", add_Content:[], pdf_file:[], word_file:[], image_file:[],
// //   });

// //   const handlePdfFile = (event) => {
// //     const files = Array.from(event.target.files);
// //     setCourse((prevState) => ({
// //         ...prevState,
// //         pdf_file: files, // Replace the array with the new set of files
// //     }));
// //   }

// //     const handleWordFile = (event) => {
// //       const files = Array.from(event.target.files);
// //       setCourse((prevState) => ({
// //           ...prevState,
// //           word_file: files, // Replace the array with the new set of files
// //       }));
// //     }

// //   const handledocumentpicchange = (event) => {
// //     const files = Array.from(event.target.files);
// //     setCourse((prevState) => ({
// //         ...prevState,
// //         image_file: files, // Replace the array with the new set of files
// //     }));   
// //   };

// //   const handleVideo = (event) => {
// //     const files = Array.from(event.target.files);
// //     setCourse((prevState) => ({
// //         ...prevState,
// //         video_file: files, // Replace the array with the new set of files
// //     }));   
// //   };

// //   const course_creation_infoget = async (e) => {
  
// //     try {
// //         const formData = new FormData();

// //         for (let key in course) {
// //           if (Array.isArray(course[key])) {
// //               course[key].forEach((value, index) => {
// //                   if (typeof value === "object") {
// //                       // Convert object to JSON string
// //                       formData.append(`${key}[${index}]`, JSON.stringify(value));
// //                   } else {
// //                       formData.append(`${key}[${index}]`, value);
// //                   }
// //               });
// //           } else if (course[key]) {
// //               formData.append(key, course[key]);
// //           }
// //       }
      
  
// //         if (course.image_file && course.image_file.length > 0) {
// //             course.image_file.forEach((file) => {
// //                 formData.append('image_file', file);
// //             });
// //         }
// //         if (course.pdf_file && course.pdf_file.length > 0) {
// //           course.pdf_file.forEach((file) => {
// //               formData.append('pdf_file', file);
// //           });
// //       }
// //       if (course.word_file && course.word_file.length > 0) {
// //         course.word_file.forEach((file) => {
// //             formData.append('word_file', file);
// //         });
// //       }
// //       if (course.add_Content.video_file && course.add_Content.video_file.length > 0) {
// //         course.add_Content.video_file.forEach((file) => {
// //             formData.append('video_file', file);
// //         });
// //       }

// //         const resp = await axios.post(`${base_url}/add_course_details`, formData, {
// //             headers: {
// //                 'Content-Type': 'multipart/form-data', // Ensure Content-Type is set correctly for file uploads
// //             },
// //         }
// //       );
  
// //         if (resp.status === 200) {
// //             toast.success(resp.data.message, { autoClose: 2000 });
        
// //         }
// //     } catch (error) {
// //         toast.error(error.response?.data?.message || 'Error saving contact', { autoClose: 2000 });
// //     }
// //   };

// //   const[chapterMain, setchapterMain]=useState([]);
// //   const[chapter, setChapter]=useState({video_file:[], chapter_title:"",chapter_description:""})
// //   const addChapter = () => {
// //     if (chapter.chapter_title && chapter.chapter_description) {
// //         // Add the current chapter to the main array
// //         const updatedChapter = [...chapterMain, chapter];

// //         // Update the state for chapters
// //         setchapterMain(updatedChapter);

// //         // Ensure `add_Content` is passed as an array of objects
// //         setCourse((prevState) => ({ ...prevState, add_Content: updatedChapter }));

// //         // Reset the chapter input fields if needed
// //         setChapter({ video_file:[], chapter_title: "", chapter_description: "" });

// //         // toast.success("Chapter added successfully!");
// //     } else {
// //         toast.error("Please fill out all fields before adding a chapter.");
// //     }
// // };


// const [course, setCourse] = React.useState({
//   course_title_main: "",
//   add_main_category: "",
//   add_sub_category: "",
//   description: "",
//   course_code: "",
//   course_title: "",
//   add_Content: [],
//   pdf_file: [],
//   word_file: [],
//   image_file: [],
// });

// const [chapterMain, setchapterMain] = useState([]);
// const [chapter, setChapter] = useState({
//   video_file: [],
//   chapter_title: "",
//   chapter_description: "",
// });

// const handlePdfFile = (event) => {
//   const files = Array.from(event.target.files);
//   setCourse((prevState) => ({
//       ...prevState,
//       pdf_file: [...prevState.pdf_file, ...files],
//   }));
// };


// const handleWordFile = (event) => {
//   const files = Array.from(event.target.files);
//   setCourse((prevState) => ({
//       ...prevState,
//       word_file: [...prevState.word_file, ...files],
//   }));
// };

// const handledocumentpicchange = (event) => {
//   const files = Array.from(event.target.files);
//   setCourse((prevState) => ({
//       ...prevState,
//       image_file: [...prevState.image_file, ...files],
//   }));
// };

// const handleVideo = (files) => {
//   const fileArray = Array.from(files); // Convert to an array
//   setChapter((prevState) => ({
//     ...prevState,
//     video_file: fileArray,
//   }));
// };


// const addChapter = () => {
//   if (chapter.chapter_title && chapter.chapter_description) {
//       const updatedChapter = [...chapterMain, chapter];

//       setchapterMain(updatedChapter);

//       setCourse((prevState) => ({
//           ...prevState,
//           add_Content: updatedChapter,
//       }));

//       setChapter({
//           video_file: [],
//           chapter_title: "",
//           chapter_description: "",
//       });

//       // toast.success("Chapter added successfully!");
//   } else {
//       toast.error("Please fill out all fields before adding a chapter.");
//   }
// };

// const course_creation_infoget = async (e) => {
//   try {
//       const formData = new FormData();

//       for (let key in course) {
//           if (Array.isArray(course[key])) {
//               course[key].forEach((value, index) => {
//                   if (typeof value === "object") {
//                       formData.append(`${key}[${index}]`, JSON.stringify(value));
//                   } else {
//                       formData.append(`${key}[${index}]`, value);
//                   }
//               });
//           } else if (course[key]) {
//               formData.append(key, course[key]);
//           }
//       }

//       if (course.image_file.length > 0) {
//           course.image_file.forEach((file) => {
//               formData.append("image_file", file);
//           });
//       }
//       if (course.pdf_file.length > 0) {
//           course.pdf_file.forEach((file) => {
//               formData.append("pdf_file", file);
//           });
//       }
//       if (course.word_file.length > 0) {
//           course.word_file.forEach((file) => {
//               formData.append("word_file", file);
//           });
//       }

//       // Handle video files from each chapter
//       if (course.add_Content.length > 0) {
//         course.add_Content.forEach((chapter, chapterIndex) => {
//             formData.append(`add_Content[${chapterIndex}][chapter_title]`, chapter.chapter_title);
//             formData.append(`add_Content[${chapterIndex}][chapter_description]`, chapter.chapter_description);
    
//             if (Array.isArray(chapter.video_file)) {
//                 chapter.video_file.forEach((file, fileIndex) => {
//                     formData.append(`add_Content[${chapterIndex}][video_file][${fileIndex}]`, file);
//                 });
//             }
//         });
//       }
    
    

//       const resp = await axios.post(`${base_url}/add_course_details`, formData, {
//           headers: {
//               "Content-Type": "multipart/form-data",
//           },
//       });

//       if (resp.status === 200) {
//           toast.success(resp.data.message, { autoClose: 2000 });
//       }
//   } catch (error) {
//       toast.error(
//           error.response?.data?.message || "Error saving course details",
//           { autoClose: 2000 }
//       );
//   }
// };  
                                                 
//   const deleteblock = (index) => {
                                    
//     const newblocks = course.add_Content.filter((_, i) => i !== index);
//     setchapterMain(newblocks)

//     setCourse(prevState => ({
//       ...prevState,
//       add_Content: newblocks
//     }));
//   };

//   console.log(course.add_Content);

//   function addLessons() {
//     document.getElementById("add-lesson-div").style.display = "block"
//   }

//   function BasicContainer() {
//     document.getElementById("customize-course").style.display = "block";
//     document.getElementById("add-new-category").style.display = "none"
//     document.getElementById("add-document-category").style.display = "none";
//     document.getElementById("finish_div").style.display = "none";
//   }

//   function MediaContainer() {
//     document.getElementById("customize-course").style.display = "none";
//     document.getElementById("add-new-category").style.display = "block"
//     document.getElementById("add-document-category").style.display = "none";
//     document.getElementById("finish_div").style.display = "none";
//   }

//   function DocumentContainer() {
//     document.getElementById("customize-course").style.display = "none";
//     document.getElementById("add-new-category").style.display = "none"
//     document.getElementById("add-document-category").style.display = "block";
//     document.getElementById("finish_div").style.display = "none";
//   }

//   function FinishContainer() {
//     document.getElementById("customize-course").style.display = "none";
//     document.getElementById("add-new-category").style.display = "none"
//     document.getElementById("add-document-category").style.display = "none";
//     document.getElementById("finish_div").style.display = "block";
//   }

//   return (
//     <div>
//       <style>
//         {`
//          body{
//             background-color: rgba(46, 7, 63, 0.1);
//             padding: 1.5rem;
//             }
//         .customize-course{
//         background-color: #ffffff;
//         padding: 2rem;
//         border-radius: 10px;
//         }
//         .info-div-items{
//         margin: 1rem 0;
//         }
//         .info-div-items .input{
//         width: 100%;
//         outline-color: #7A1CAC;
//         }
//         .course-info-section, .lessons-section{
//         display: flex;
//         justify-content: space-between;
//         }
//         .addcourse-div, .create-lessons{
//         width: 49%;
//         }
//         .inputs-items{
//         padding: 1.5rem;
//         border: 2px solid rgba(0,0,0,0.2);
//         border-radius: 10px;
//         }
//         .lessons-section{
//         border: 2px solid rgba(0,0,0,0.2);
//         padding: 1.5rem;
//         border-radius: 10px;
//         }
//         .upload-video{
//         border: 1px solid rgba(0,0,0,0.2);
//         padding: 2.2rem 1rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         border-radius: 3px;
//         }
//         .upload-video svg{
//         height: 3rem;
//         width: 4rem;
//         }
//         .upload-video-btn{
//         background-color: #ffffff;
//         color: blue;
//         box-shadow: none;
//         }
//         .add-lessons{
//         margin-top: 2rem;
//         display: none;
//         }
//         button{
//         background-color: #7A1CAC;
//         padding: 10px 1rem;
//         }
//         button:hover{
//         background-color: #2E073F;
//         }
//         .add-new-category{
//         display: none; 
//         }
//         .addStyle{
//         background-color: #7A1CAC;
//         color: #ffffff;
//         }
//         .removeStyle{
//         background-color: #ffffff;
//         color: #000;
//         }
//         .added-chapter{
//         // border: 1px solid #000;
//         padding: 1rem;
//         width: 70%;
//         border-radius: 10px;
//         margin-top: 1.5rem;
//         background-color: rgba(46, 7, 63, 0.2);
//         }
//         .chapters-title{
//         // border: 1px solid #000;
//         display: flex;
//         justify-content: space-between;
//         padding: 5px 14px;
//         border-radius: 5px;
//         background-color: #fff;
//         }
//         .edit-delete-chapters i{
//         margin-left: 14px;
//         cursor: pointer;
//         }
//         `}
//       </style>
//     <div>
//       <Sidebar />

//       <section className="main-content-section">
//         <Header />

//         <div
//           className="header-div header-two"
//           style={{ padding: "2rem", height: "8rem" }}
//         >
//           <div className="create-options-course">
//             <div
//               className="basic-option"
//               style={{ backgroundColor: "#7A1CAC", color: "white" }}
//               onClick={BasicContainer}
//             >
//               <h6>Basic</h6>
//             </div>
            
//               <div className="media-option" id="media-option-id" onClick={MediaContainer}>
//                 <h6>
//                   Media <br />
//                   (.mp4, .mp3)
//                 </h6>
//               </div>
           
            
//               <div className="document-option addStyle" id="document-option-id" onClick={DocumentContainer}>
//                 <h6>
//                   Document <br />
//                   (.pdf, .word, .jpg)
//                 </h6>
//               </div>
            
//             <div className="finish-div" id="finish-div" onClick={FinishContainer}>
//               <h6>Finish</h6>     
//             </div>
//           </div>
//         </div>

//         <div className="customize-course" id="customize-course">
//           <div className="course-info-section">
//             <div className="addcourse-div">
//                 <h5> <span><DashboardCustomizeIcon/></span> Customize your course</h5>
//                 <div className="inputs-items">
//                   <div className="info-div-items">
//                     <TextField
//                       required
//                       id="course_title_main"
//                       name="course_title_main"
//                       label="Course title"
//                       defaultValue=""
//                       className="input"
//                       onChange={(e) => setCourse({...course, course_title_main: e.target.value})}
//                     />
//                   </div>
//                   <div className="info-div-items">
//                   <TextField
//                       required
//                       id="add_main_category"
//                       name="add_main_category"
//                       label="Add main category"
//                       defaultValue=""
//                       className="input"
//                       onChange={(e) => setCourse({...course, add_main_category: e.target.value})}
//                     />
//                   </div>
//                   <div className="info-div-items">
//                   <TextField
//                       required
//                       id="add_sub_category"
//                       name="add_sub_category"
//                       label="Add sub category"
//                       defaultValue=""
//                       className="input"
//                       onChange={(e) => setCourse({...course, add_sub_category: e.target.value})}
//                     />
//                      <div className="info-div-items">
//                      <TextField
//                         id="description"
//                         name="description"
//                         label="Description"
//                         multiline
//                         rows={4}
//                         defaultValue=""
//                         className="input"
//                         onChange={(e) => setCourse({...course, description: e.target.value})}
//                       />
//                      </div>
//                   </div>
//                 </div>
//             </div>

//             <div className="addcourse-div">
//                 <h6> <span><DesignServicesIcon/></span> Course Design</h6>
//                 <div className="inputs-items">
//                   <div className="info-div-items">
//                     <TextField
//                       required
//                       id="course_code"
//                       name="course_code"
//                       label="Course code"
//                       defaultValue=""
//                       className="input"
//                       onChange={(e) => setCourse({...course, course_code: e.target.value})}
//                     />
//                   </div>
//                   <div className="info-div-items">
//                   <TextField
//                       required
//                       id="course_title"
//                       name="course_title"
//                       label="Course title"
//                       defaultValue=""
//                       className="input"
//                       onChange={(e) => setCourse({...course, course_title: e.target.value})}
//                     />
//                   </div>
//                   <div className="info-div-items">
//                     <button onClick={addLessons}>Add Chapters</button>
//                   </div>
//                 </div>
//             </div>
//           </div>

//           <div className="add-lessons" id="add-lesson-div">
//             <h5> <span><AddCircleIcon /></span> Add Lessons</h5>
//           <div className="lessons-section">
//             <div className="create-lessons">
//                   <div className="info-div-items">
//                     <TextField
//                       required
//                       id="chapter_title"
//                       name="chapter_title"
//                       label="Chapter title"
//                       defaultValue=""
//                       className="input"
//                       onChange={(e) => setChapter({...chapter, chapter_title: e.target.value})}
//                     />
//                   </div>
//                   <div className="info-div-items">
//                     <TextField
//                       required
//                       id="chapter_description"
//                       name="chapter_description"
//                       label="Chapter description"
//                       defaultValue=""
//                       className="input"
//                       multiline
//                       rows={4}
//                       onChange={(e) => setChapter({...chapter, chapter_description: e.target.value})}
//                     />
//                   </div>
//             </div>
//             <div className="create-lessons">
//                 <div className="info-div-items upload-video">
//                   <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
//                   <CloudUploadIcon />
//                   <div
//     onDragOver={(e) => e.preventDefault()}
//     onDrop={(e) => {
//       e.preventDefault();
//       handleVideo(e.dataTransfer.files); // Pass FileList directly
//     }}
//   >
//     <Button
//       component="label"
//       role={undefined}
//       variant="contained"
//       className="upload-video-btn"
//     >
//       Choose files or drag and drop
//       <VisuallyHiddenInput
//         type="file"
//         name="video_file"
//         multiple
//         onChange={(e) => handleVideo(e.target.files)} // Pass FileList directly
//         id="video_file"
//       />
//     </Button>
//   </div>

//                   <p>Video (512GB)</p>
//                   </div>
//                 </div>
//             </div>
//           </div>
//           <div className="upload-btn-div" style={{marginTop:"1.5rem"}}>
//             <button onClick={addChapter}> <UploadIcon/>Upload Chapter</button>
//           </div>

//           <div className="added-chapter">
//             <h6>Course chapters</h6>
//             <div className="chapters-title">
//               <p style={{margin:"0px"}}>Chapter Title</p>             
//               <div className="edit-delete-chapters">
//                 <i class="fa-regular fa-pen-to-square"></i>
//                 <i class="fa-regular fa-trash-can"></i>
//               </div>
//             </div>
//           </div>
//           </div>

//           <div className='content-div' style={{marginTop: "2rem"}}>
//               <button id='next btn' style={{height: "3rem"}} onClick={MediaContainer}>Next </button>
//           </div>
            
//         </div>


//         <div className='add-new-category' id="add-new-category">
//                     <div className='adding-course-div' style={{width: "100%"}}> 
//                     <h5 style={{marginBottom: "1.5rem"}}>Add media files</h5>
//                     <div className='upload-options' style={{display: "flex", justifyContent: "space-between"}}>
//                         <div style={{width: "30%"}}>
//                             <p style={{fontSize: "12px", fontWeight: "600"}}>Thumbnail (548 x 234)</p>
//                             <div className="upload-div" style={{marginTop: "1rem"}}>
//                                 <input type="file" id='file-upload' name="file-upload" style={{display: "none"}} />
//                                 <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p>
//                             </div>
//                         </div>
//                         <div style={{width: "30%"}}>
//                             <p style={{fontSize: "12px", fontWeight: "600"}}>Main course file</p>
//                             <div className="upload-div" style={{marginTop: "1rem"}}>
//                                 <input type="file" id='file-upload' style={{display: "none"}} />
//                                 <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p>
//                             </div>
//                         </div>
//                         <div style={{width: "30%"}}>
//                             <p style={{fontSize: "12px", fontWeight: "600"}}>Introduction file</p>
//                             <div className="upload-div" style={{marginTop: "1rem"}}>
//                                 <input type="file" id='file-upload' style={{display: "none"}} />
//                                 <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p>
//                             </div>
//                         </div>
//                     </div>
                       
//                     <div className='content-div' style={{ marginTop: "1rem"}}>
//                         <button id='previous-btn' onClick={BasicContainer}> Previous </button>
//                         <button id='next btn' style={{height: "3rem"}} onClick={DocumentContainer}>Next </button>
//                     </div>
//                     </div>

//         </div>

//         <div className='add-new-category' id="add-document-category">
//                     <div className='adding-course-div' style={{width: "100%"}}> 
//                     <h5 style={{marginBottom: "1.5rem"}}>Add Documnet files</h5>
//                     <div className='upload-options' style={{display: "flex", justifyContent: "space-between"}}>
//                         <div style={{width: "30%"}}>
//                             <p style={{fontSize: "12px", fontWeight: "600"}}>PDF file</p>
//                             <div className="upload-div" style={{marginTop: "1rem"}}>
//                                 <input type="file" id='file-upload' name="pdf_file" onChange={handlePdfFile} />
//                                 {/* <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p> */}
//                             </div>
//                         </div>
//                         <div style={{width: "30%"}}>
//                             <p style={{fontSize: "12px", fontWeight: "600"}}>Word file</p>
//                             <div className="upload-div" style={{marginTop: "1rem"}}>
//                                 <input type="file" id='file-upload' name="word_file" onChange={handleWordFile} />
//                                 {/* <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p> */}
//                             </div>
//                         </div>
//                         <div style={{width: "30%"}}>
//                             <p style={{fontSize: "12px", fontWeight: "600"}}>JPG file</p>
//                             <div className="upload-div" style={{marginTop: "1rem"}}>
//                                 <input type="file" id='file-upload' name="image_file" onChange={handledocumentpicchange} />
//                                 {/* <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p> */}
//                             </div>
//                         </div>
//                     </div>
                       
//                     <div className='content-div' style={{marginTop: "1rem"}}>
//                         <button id='previous-btn' onClick={MediaContainer}> Previous </button>
//                         <button id='next btn' style={{height: "3rem"}} onClick={FinishContainer}>Next</button>
//                     </div>
//                     </div>

//         </div>

//         <div className="add-new-category" id="finish_div">
//           <div className='adding-course-div' style={{width: "100%"}}> 
//             <button onClick={course_creation_infoget}> <UploadIcon/> Upload Course</button>

//             <div className='content-div' style={{marginTop: "2rem"}}>
//               <button id='previous-btn' onClick={DocumentContainer}> Previous </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ToastContainer/>
//     </div>
//     </div>
//   );
// }

// export default CreateNewCourse;


import Sidebar from "./Sidebar";
import Header from "./Header";
import { toast } from "react-toastify";
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
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import SellIcon from '@mui/icons-material/Sell';
import PPTPreview from "./PPTPreview";


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

  const [course, setCourse] = useState({
    course_title_main: "",
    add_main_category: "",
    add_sub_category: "",
    creation_date: "",
    description: "",
    course_price: "",
    course_code: "",
    sections: [],
    thumbnail_upload: [],
    file_upload: [],
    video_upload: [],
    image_file: [],
    pdf_file: [],
    word_file: [],
  });

  // State for new section and chapter
const [newSection, setNewSection] = useState({
  section_title: "",
  add_Content: [],
});


const [pdfPreviews, setPdfPreviews] = useState([]);
const [wordPreviews, setWordPreviews] = useState([]);
const [imagePreviews, setImagePreviews] = useState([]);
const [pptFiles, setPPTFiles] = useState([]);

const [thumbnail, setThumbnail] = useState([]);
const [fileUpload, setFileUpload] = useState([]);

const handlePdfFile = (event) => {
  const files = Array.from(event.target.files);
  setCourse((prevState) => ({
      ...prevState,
      pdf_file: files,
  }));
  const previews = files.map((file) => URL.createObjectURL(file));
  setPdfPreviews(previews);
};

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files);
  setCourse((prevState) => ({
      ...prevState,
      file_upload: files
  }));
  const previews = files.map((file) => URL.createObjectURL(file));
  setFileUpload(previews)
};

const handleWordFile = (event) => {
  const files = Array.from(event.target.files);
  setCourse((prevState) => ({
      ...prevState,
      word_file: files,
  }));
  const previews = files.map((file) => file.name); // Only show file names for Word files
  setWordPreviews(previews);
};

const handledocumentpicchange = (event) => {
  const files = Array.from(event.target.files);
  setCourse((prevState) => ({
      ...prevState,
      image_file: files,
  }));
  const previews = files.map((file) => URL.createObjectURL(file));
  setImagePreviews(previews);
};

const handledthumbnailUpload = (event) => {
  const files = Array.from(event.target.files);
  setCourse((prevState) => ({
      ...prevState,
      thumbnail_upload: files,
  }));
  const previews = files.map((file) => URL.createObjectURL(file));
  setThumbnail(previews);
};

const [videoPreviews, setVideoPreviews] = useState([]); 
// Handle video file upload
const handleVideo = (event) => {
  const files = Array.from(event.target.files);
  setChapter({ ...chapter, video_file: files });
  setVideoPreviews(files.map((file) => URL.createObjectURL(file)));
};

const handlePPTFile = (event) => {
  const files = Array.from(event.target.files);
  setChapter({ ...chapter, ppt_file: files });
  setPPTFiles(files);  // Store the actual files for preview
};

useEffect(() => {
  return () => {
    pdfPreviews.forEach((url) => URL.revokeObjectURL(url));
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    videoPreviews.forEach((url) => URL.revokeObjectURL(url));

    thumbnail.forEach((url) => URL.revokeObjectURL(url));
    fileUpload.forEach((url) => URL.revokeObjectURL(url));
  };
}, [pdfPreviews, imagePreviews, videoPreviews, thumbnail, fileUpload]);


const [chapterMain, setchapterMain] = useState([]);
const [chapter, setChapter] = useState({
  chapter_title: "",
  chapter_description: "",
  youtube_link: "",
  video_file: [],
  ppt_file: [],
});

// Adding Chapter to Section
const addChapter = () => {
  if (chapter.chapter_title && chapter.chapter_description) {
    const updatedContent = [...newSection.add_Content, chapter];

    setNewSection({ ...newSection, add_Content: updatedContent });

    setChapter({
      chapter_title: "",
      chapter_description: "",
      youtube_link: "",
      video_file: [],
      ppt_file: [],
    });

    setVideoPreviews([]);
    toast.success("Chapter added successfully!");
  } else {
    Swal.fire("Error", "Please fill out all fields for the chapter.", "error");
  }
};

// Adding Section to Course
const addSection = () => {
  if (newSection.section_title && newSection.add_Content.length > 0) {
    const updatedSections = [...course.sections, newSection];
    setCourse({ ...course, sections: updatedSections });

    setNewSection({ section_title: "", add_Content: [] });
    toast.success("Section added successfully!");
  } else {
    Swal.fire("Error", "Please fill section title and add chapters.", "error");
  }
};


const handleSubmit = async (e) => {
  try {
    const formData = new FormData();
    formData.append("course_title_main", course.course_title_main);
    formData.append("add_main_category", course.add_main_category);
    formData.append("add_sub_category", course.add_sub_category);
    formData.append("creation_date", course.creation_date);
    formData.append("description", course.description);
    formData.append("course_price", course.course_price);
    formData.append("course_code", course.course_code);

    // Append sections and their chapters
    course.sections.forEach((section, secIndex) => {
      formData.append(`sections[${secIndex}].section_title`, section.section_title);
      section.add_Content.forEach((chapter, chapIndex) => {
        formData.append(`sections[${secIndex}].add_Content[${chapIndex}].chapter_title`, chapter.chapter_title);
        formData.append(`sections[${secIndex}].add_Content[${chapIndex}].chapter_description`, chapter.chapter_description);
        formData.append(`sections[${secIndex}].add_Content[${chapIndex}].youtube_link`, chapter.youtube_link);
        
        chapter.video_file.forEach((file) => {
          formData.append(`sections[${secIndex}].add_Content[${chapIndex}].video_file`, file);
        });
        chapter.ppt_file.forEach((file) => {
          formData.append(`sections[${secIndex}].add_Content[${chapIndex}].ppt_file`, file);
        });
      });
    });

    // Append files
    ["thumbnail_upload","file_upload","image_file", "pdf_file", "word_file"].forEach((field) => {
      course[field].forEach((file) => formData.append(field, file));
    });

    const response = await axios.post(`${base_url}/add_course_details`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    Swal.fire("Success", "Course created successfully!", "success");
    setPdfPreviews([]);
    setImagePreviews([]);
    setWordPreviews([]);
    setVideoPreviews([]);
    setCourse({
      course_title_main: "",
      add_main_category: "",
      add_sub_category: "",
      creation_date: "",
      description: "",
      course_price: "",
      course_code: "",
      sections: [],
      thumbnail_upload: [],
      file_upload: [],
      video_upload: [],
      image_file: [],
      pdf_file: [],
      word_file: [],
    });

    console.log([...formData]);
    

  } catch (error) {
    toast.error("Error saving course details");
  }
};


                                                
const deletechapter = (index) => {
  const updatedChapters = newSection.add_Content.filter((_, i) => i !== index);

  setNewSection({ ...newSection, add_Content: updatedChapters });
  setchapterMain(updatedChapters); // If chapterMain is required for another reason
  toast.success('Chapter deleted successfully!', { autoClose: 1000 });
};



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
        .added-chapter{
         // border: 1px solid #000;
        padding: 1rem;
        width: 70%;
        border-radius: 10px;
        margin-top: 1.5rem;
        background-color: rgba(46, 7, 63, 0.2);
        }
        .chapter-item{
        // border: 1px solid #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 14px;
        border-radius: 5px;
        background-color: #fff;
        margin: 10px 0px;
        }
        i{
        margin-left: 14px;
        cursor: pointer;
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
                   <br />
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
                    </div>
                    <div className="info-div-items">
                    <input
                      type="date"
                        required
                        id="creation_date"
                        name="creation_date"
                        defaultValue=""
                        className="input"
                        onChange={(e) => setCourse({...course, creation_date: e.target.value})}
                      />
                    </div>
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

            <div className="addcourse-div">
              <div className="add-price-div" style={{marginBottom:"1rem"}}>
                <h6> <span><SellIcon/></span> Add price</h6>
                <div className="inputs-items">
                  <div className="info-div-items">
                      <TextField
                          required
                          id="course_price"
                          name="course_price"
                          label="Course price"
                          defaultValue=""
                          className="input"
                          onChange={(e) => setCourse({...course, course_price: e.target.value})}
                        />
                    </div>
                  </div>
              </div>

              <div className="add-section-div">
                <h6> <span><DesignServicesIcon/></span> Add Section</h6>
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
                      id="section_title"
                      name="section_title"
                      label="Course Section title"
                      value={newSection.section_title}
                      defaultValue=""
                      className="input"
                      onChange={(e) => setNewSection({ ...newSection, section_title: e.target.value })}
                    />
                  </div>
                  <div className="info-div-items">
                    <button onClick={addLessons}>Add Chapters</button>
                  </div>
                </div>
              </div>
            </div>            
          </div>

          <div className="add-lessons" id="add-lesson-div">
            <h5> <span><AddCircleIcon /></span> Add Chapters</h5>
            <div className="lessons-section">
            <div className="create-lessons">
              <div className="info-div-items upload-video">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CloudUploadIcon />
                  <Button
                    component="label"
                    variant="contained"
                    className="upload-video-btn"
                  >
                    Choose files or drag and drop
                    <VisuallyHiddenInput
                      type="file"
                      name="video_file"
                      accept="video/*" // Accept only video files
                      multiple // Allow multiple file uploads
                      onChange={handleVideo}
                      id="video_file"
                      style={{ display: "none" }}
                    />
                  </Button>
                  <p>Video (512GB)</p>
                </div>
                  {videoPreviews.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {videoPreviews.map((preview, index) => (
                      <video key={index} src={preview} controls className="video-preview" style={{width:"200px", height:"100px"}}>
                        Your browser does not support the video tag.
                      </video>
                    ))}
                  </div>
                  )}
              </div>
              <div className="info-div-items" style={{border:"1px solid rgba(0,0,0,0.2)", padding:"1rem"}}>
                <p style={{fontSize:"12px", fontWeight:"600"}}>Upload PPT</p>
                <input 
                  type="file" 
                  name="ppt_file" 
                  accept=".ppt,.pptx" 
                  onChange={handlePPTFile} 
                  multiple 
                />
                <PPTPreview files={pptFiles} />
              </div>
            </div>

    <div className="create-lessons">
      <div className="info-div-items">
        <TextField
          required
          id="chapter_title"
          name="chapter_title"
          label="Section Chapter title"
          className="input"
          value={chapter.chapter_title} // Bind value to chapter state
          onChange={(e) =>
            setChapter({ ...chapter, chapter_title: e.target.value })
          }
        />
      </div>
      <div className="info-div-items">
        <TextField
          required
          id="chapter_description"
          name="chapter_description"
          label="Chapter description"
          className="input"
          multiline
          rows={4}
          value={chapter.chapter_description} // Bind value to chapter state
          onChange={(e) =>
            setChapter({ ...chapter, chapter_description: e.target.value })
          }
        />
      </div>
      <div className="info-div-items">
        <TextField
          id="youtube_link"
          label="Youtube Video Link"
          name="youtube_link"
          className="input"
          value={chapter.youtube_link}
          onChange={(e) =>
            setChapter({ ...chapter, youtube_link: e.target.value })
          }
        />  
      </div>
    </div>
  </div>
  <div style={{display:"flex"}}>
          <div className="upload-btn-div" style={{marginTop:"1.5rem", marginRight:"1.5rem"}}>
            <button onClick={addChapter}> Upload Chapter</button>
          </div>
          <div className="upload-btn-div" style={{marginTop:"1.5rem"}}>
            <button onClick={addSection}>Add Section</button>
          </div>
  </div>
          <div className="added-chapter">
          <h6>Course Chapters</h6>
          {newSection.add_Content && newSection.add_Content.length > 0 ? (
            newSection.add_Content.map((chap, index) => (
              <div key={index} className="chapter-item">
                <p style={{marginBottom:"0px"}}>
                  <strong>{chap.chapter_title}</strong>: {chap.chapter_description}
                </p>
                {/* <button >Delete Chapter</button> */}
                <i onClick={() => deletechapter(index)} class="fa-regular fa-trash-can"></i>
              </div>
            ))
          ) : (
            <p>No chapters added yet.</p>
          )}
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
                            <p style={{fontSize: "12px", fontWeight: "600"}}>Thumbnail</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" id='thumbnail_upload' name="thumbnail_upload" onChange={handledthumbnailUpload} accept="image/*" />
                                {thumbnail.map((preview, index) => (
                                  <img
                                    key={index}
                                    src={preview}
                                    alt={`img-preview-${index}`}
                                    style={{ width: "100%", height: "auto", marginTop: "10px" }}
                                  />
                                ))}
                                {/* <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p> */}
                            </div>
                        </div>
                        <div style={{width: "30%"}}>
                            <p style={{fontSize: "12px", fontWeight: "600"}}>Main course file</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" name='file_upload' onChange={handleFileUpload} accept="application/pdf" />
                                {fileUpload.map((preview, index) => (
                                  <iframe
                                    key={index}
                                    src={preview}
                                    title={`pdf-preview-${index}`}
                                    style={{ width: "100%", height: "150px", marginTop: "10px" }}
                                  ></iframe>
                                ))}
                                {/* <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p> */}
                            </div>
                        </div>
                        <div style={{width: "30%"}}>
                            <p style={{fontSize: "12px", fontWeight: "600"}}>Upload video</p>
                            <div className="upload-div" style={{marginTop: "1rem"}}>
                                <input type="file" id='video_upload' name='video_upload' />
                                {/* <p><label htmlFor="file-upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></label></p> */}
                            </div>
                        </div>
                    </div>
                       
                    <div className='content-div' style={{ marginTop: "1rem"}}>
                        <button id='previous-btn' onClick={BasicContainer}> Previous </button>
                        <button id='next btn' style={{height: "3rem"}} onClick={DocumentContainer}>Next </button>
                    </div>
                    </div>

        </div>

    <div className="add-new-category" id="add-document-category">
      <div className="adding-course-div" style={{ width: "100%" }}>
        <h5 style={{ marginBottom: "1.5rem" }}>Add Document Files</h5>
        <div
          className="upload-options"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* PDF Upload */}
          <div style={{ width: "30%" }}>
            <p style={{ fontSize: "12px", fontWeight: "600" }}>PDF File</p>
            <div className="upload-div" style={{ marginTop: "1rem" }}>
              <input
                type="file"
                name="pdf_file"
                onChange={handlePdfFile}
                accept="application/pdf"
              />
              {pdfPreviews.map((preview, index) => (
                <iframe
                  key={index}
                  src={preview}
                  title={`pdf-preview-${index}`}
                  style={{ width: "100%", height: "150px", marginTop: "10px" }}
                ></iframe>
              ))}
            </div>
          </div>

          {/* Word Upload */}
          <div style={{ width: "30%" }}>
            <p style={{ fontSize: "12px", fontWeight: "600" }}>Word File</p>
            <div className="upload-div" style={{ marginTop: "1rem" }}>
              <input
                type="file"
                name="word_file"
                onChange={handleWordFile}
                accept=".doc,.docx"
              />
              {wordPreviews.map((preview, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "12px",
                    marginTop: "10px",
                    overflowWrap: "break-word",
                  }}
                >
                  {preview}
                </p>
              ))}
            </div>
          </div>

          {/* Image Upload */}
          <div style={{ width: "30%" }}>
            <p style={{ fontSize: "12px", fontWeight: "600" }}>JPG File</p>
            <div className="upload-div" style={{ marginTop: "1rem" }}>
              <input
                type="file"
                name="image_file"
                onChange={handledocumentpicchange}
                accept="image/*"
              />
              {imagePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`img-preview-${index}`}
                  style={{ width: "100%", height: "auto", marginTop: "10px" }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="content-div" style={{ marginTop: "4rem" }}>
          <button id="previous-btn" onClick={MediaContainer}>
            Previous
          </button>
          <button id="next btn" style={{ height: "3rem" }} onClick={FinishContainer}>
            Next
          </button>
        </div>
      </div>
    </div>

        <div className="add-new-category" id="finish_div">
          <div className='adding-course-div' style={{width: "100%"}}> 
            <button onClick={handleSubmit}> <UploadIcon/> Upload Course</button>

            <div className='content-div' style={{marginTop: "2rem"}}>
              <button id='previous-btn' onClick={DocumentContainer}> Previous </button>
            </div>
          </div>
        </div>
      </section>
      {/* <ToastContainer/> */}
    </div>
    </div>
  );
}

export default CreateNewCourse;

