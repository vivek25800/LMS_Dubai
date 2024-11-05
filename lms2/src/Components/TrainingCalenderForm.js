import React, { useState } from "react";
import '../StyleCode/TrainingCalendar.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { base_url } from "./Utils/base_url";

function TrainingCalenderForm() {

  const[event, setevent] = useState({training_category:"",  training_name:"", trainer_name:"", description:"",region:"",  project_title:"", 
    job_title:"", from_date:new Date(), to_date:new Date(), from_time:"", to_time:"", participents:"", venue_name:"", status:"Upcoming"})

  const event_details_infoget = async () => {
    try {
      const resp = await axios.post(`${base_url}/add_events_data`, event);
      if(resp.status === 200){
        toast.success("Event details saved successfuly");
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

        <div className="header-div header-two">
          <div className="title-name">
            <h5>Create Training</h5>
            <p>
              <a href="#">Home</a> <i class="fa-solid fa-caret-right"></i>{" "}
              Create Training
            </p>
          </div>
        </div>

        <div className="training-container">
          <div className="form-section">
          <div className="form-item">
                <label>Training Category</label>
                <select name="training-category" id="training_category" onChange={(e) => {setevent({...event, training_category:e.target.value})}}>
                  <option >Value1</option>
                  <option >Value2</option>
                  <option>Value3</option>
                  <option >Value4</option>
                  <option >Value5</option>
                  <option >Value6</option>
                </select>
              </div>
              <div className="form-item">
                  <label>Training Name</label>
                  <select name="training-name" id="training_name" onChange={(e) => {setevent({...event, training_name:e.target.value})}}>
                    <option >Value1</option>
                    <option >Value2</option>
                    <option >Value3</option>
                    <option >Value4</option>
                    <option >Value5</option>
                    <option >Value6</option>
                  </select>
              </div>
              <div className="form-item">
                <label>Add Trainer</label>
                <input type='text' placeholder="Enter Trainer name" id="trainer_name" style={{width:"100%", height:"3rem", padding:"0 1rem"}} onChange={(e) => {setevent({...event, trainer_name:e.target.value})}}  />
              </div>
              <div className="form-item">
                <label for='desription'>Description</label>
                <textarea name="description" id="description"  onChange={(e) => {setevent({...event, description:e.target.value})}}></textarea>
              </div>
              <div className="form-item">
              <label for='region'>Region</label>
              <select name="region" id="region"  onChange={(e) => {setevent({...event, region:e.target.value})}}>
                    <option >UAE</option>
                    <option >Oman</option>
                    <option >KSA</option>
                    <option >Qatar</option>
                    <option >Bahrain</option>
                    <option >All</option>
                  </select>
              </div>
              <div className="form-item">
                <label for='project'>Project</label>
                <select name="project" id="project_title"  onChange={(e) => {setevent({...event, project_title:e.target.value})}}>
                    <option >Value1</option>
                    <option >Value2</option>
                    <option >Value3</option>
                    <option >Value4</option>
                    <option>Value5</option>
                    <option >Value6</option>
                  </select>
              </div>
              <div className="form-item">
                <label for='project'>Job title</label>
                <select name="job-title" id="job_title"  onChange={(e) => {setevent({...event, job_title:e.target.value})}}>
                    <option >Value1</option>
                    <option >Value2</option>
                    <option >Value3</option>
                    <option >Value4</option>
                    <option >Value5</option>
                    <option >Value6</option>
                  </select>
              </div>
              <div className="date-setion">
              <div className="form-item">
              <label for='from-date'>From</label>
              <input type="date" name="from-date" id="from_date"  onChange={(e) => {setevent({...event, from_date:e.target.value})}} />
              </div>
              <div className="form-item">
              <label for='to-date'>To</label>
              <input type="date" name="to-date" id="to_date"  onChange={(e) => {setevent({...event, to_date:e.target.value})}} />
              </div>
              </div>

              <div className="date-setion">
              <div className="form-item">
              <label for='from-time'>From</label>
              <input type="time" name="from-time" id="from_time"  onChange={(e) => {setevent({...event, from_time:e.target.value})}} />
              </div>
              <div className="form-item">
              <label for='to-time'>To</label>
              <input type="time" name="to-time" id="to_time"  onChange={(e) => {setevent({...event, to_time:e.target.value})}} />
              </div>
              </div>
              
              <div className="form-item">
              <label for='participents'>No of participents</label>
              <input type="text" name="participents" id="participents" placeholder="No. of participents" style={{width:"100%", height:"3rem", padding:"0 1rem"}}  onChange={(e) => {setevent({...event, participents:e.target.value})}} />
              </div>
              <div className="form-item">
              <label for='venue'>Venue</label>
              <input type="text" name="venue" id="venue_name" placeholder="Enter venue name" style={{width:"100%", height:"3rem", padding:"0 1rem"}}  onChange={(e) => {setevent({...event, venue_name:e.target.value})}}  />
              </div>

              <div className="form-item">
              <label for='status'>Status</label>
              <select id='status_info' value={"Upcoming"}>
                <option value="upcoming">Upcoming</option>
              </select>
              </div>

              <div className="save-btn-div">
                <button className="save-btn" onClick={event_details_infoget} > Save </button>
              </div>

            
            {/* <div className="training-form-left"></div>
            <div className="training-form-right"></div> */}
          </div>
        </div>
      </section>
      <ToastContainer/>
    </div>
  );
}

export default TrainingCalenderForm;
