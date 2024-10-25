// import "../StyleCode/CreateCategoryList.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import Textedit from "./Textedit";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { base_url } from "./Utils/base_url";

function CreateNewCourse() {

  const[course, setCourse] = useState({
    course_title:"", course_category:"", course_code:"", course_content:"",
            organization:"", instructor:"", course_label:"", course_duration:"",
  });

  const course_creation_infoget = async () => {
    try {
      const resp = await axios.post(`${base_url}/add_course_details`, course);
      if(resp.status === 200){
        toast.success("course created successfully", {autoClose: 2000});
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ backgroundColor: "rgba(46, 7, 63, 0.1)", padding: "20px" }}>
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
            >
              <h6>Basic</h6>
            </div>
            <NavLink to={"/Media"}>
              <div className="media-option">
                <h6>
                  Media <br />
                  (.mp4, .mp3)
                </h6>
              </div>
            </NavLink>
            <NavLink to={"/document"}>
              <div className="document-option">
                <h6>
                  Document <br />
                  (.pdf, .word, .jpg)
                </h6>
              </div>
            </NavLink>
            <div className="finish-div">
              <h6>Finish</h6>
            </div>
          </div>
        </div>

        <div className="add-new-Catgory">
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
                    {/* <img src="desc.png" style={{width: "100%"}} /> */}
                    <Textedit/>
                </div>

            <div className="content-div" style={{ float: "right" }}>
              <button onClick={course_creation_infoget}> <NavLink to={'/Media'}>Next</NavLink> </button>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </div>
  );
}

export default CreateNewCourse;
