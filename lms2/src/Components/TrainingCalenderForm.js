import React, { useEffect, useState } from "react";
import '../StyleCode/TrainingCalendar.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { base_url } from "./Utils/base_url";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

function TrainingCalenderForm() {

 const navigate=useNavigate()

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

  const [show,setshow]=useState(false)
  const handleclose=()=>
  {
      setshow(false)
  }
  const handleshow=()=>
  {
      setshow(true)

  }

  const fieldStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ced4da', // Light gray border
    borderRadius: '4px',         // Rounded corners
    fontSize: '1rem',            // Font size for consistency
  };

  const[trainer,settrainer]=useState({first_name:"",last_name:"",specialization:"",experience:"",email_id:"",phone_no:""})
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    settrainer({ ...trainer, [name]: value });
  };

  const addtrainer = async () => {
    try {
      const resp = await axios.post(`${base_url}/addtrainer`, trainer);
      if(resp.status === 200){
        toast.success("Trainer details saved successfuly",{autoClose:2000});
        setTimeout(() => {
          navigate('/createtraining')
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

   const[trainers,settrainers]=useState([])
  const trainersdetails=async()=>
  {
    try {
      const resp = await axios.get(`${base_url}/trainer`);
      settrainers(resp.data.trainer)
    } catch (error) {
      console.log(error);
    }
  }
  //  console.log(trainers);
  React.useEffect(() => {
    // Your code to run when the component mounts
    trainersdetails(); // Assuming this is a function
  }, []);
  console.log(trainers);


  // const [event, setEvent] = useState({ from_date: "", to_date: "" });

  // Function to format the date as "dd-mm-yyyy"
  const formatDate = (dateString) => {
    if (!dateString) return ""; // Handle empty input
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  // Function to handle the "from_date" input
  const handleFromDateChange = (e) => {
    const isoDate = e.target.value; // yyyy-mm-dd format from the input
    const formattedDate = formatDate(isoDate);
    setevent({ ...event, from_date: formattedDate });
  };

  // Function to handle the "to_date" input
  const handleToDateChange = (e) => {
    const isoDate = e.target.value; // yyyy-mm-dd format from the input
    const formattedDate = formatDate(isoDate);
    setevent({ ...event, to_date: formattedDate });
  };
  
  
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
          <button className="save-btn" style={{width:"200px"}} onClick={handleshow}> Add New Trainer </button>
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
                {/* <input type='text' placeholder="Enter Trainer name" id="trainer_name" style={{width:"100%", height:"3rem", padding:"0 1rem"}} onChange={(e) => {setevent({...event, trainer_name:e.target.value})}}  /> */}
                <select name="training-name"  id="trainer_name" onChange={(e) => {setevent({...event, trainer_name:e.target.value})}}>
                    <option >---Select---</option>
                    {
                      trainers.map((trainer)=>
                      (
                        <option>{trainer.first_name} {trainer.last_name}</option>
                      ))
                    }
                
                  </select>
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
              {/* <div className="form-item">
              <label for='from-date'>From</label>
              <input type="date" name="from-date" id="from_date"  onChange={(e) => {setevent({...event, from_date:e.target.value})}} />
              </div>
              <div className="form-item">
              <label for='to-date'>To</label>
              <input type="date" name="to-date" id="to_date"  onChange={(e) => {setevent({...event, to_date:e.target.value})}} />
              </div> */}

                  <div className="form-item">
                  <label htmlFor="from-date">From</label>
                  <input
                    type="date"
                    name="from-date"
                    id="from_date"
                    onChange={handleFromDateChange}
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="to-date">To</label>
                  <input
                    type="date"
                    name="to-date"
                    id="to_date"
                    onChange={handleToDateChange}
                  />
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
                <label htmlFor="participents">No of participants</label>

                {/* Dropdown for selection */}
                <select
                  name="participents"
                  id="participents"
                  onChange={(e) => {
                    const value = e.target.value;
                    setevent({
                      ...event,
                      participentsType: value,
                      
                      participents: value === "Define" ? "" : value, // Set to empty if "Define" is selected
                    });
                  }}
                >
                  <option>---Select---</option>
                  <option>Open</option>
                  <option>Define</option>
                </select>

                {/* Conditionally render the input field when "Define" is selected */}
                      {event.participentsType === "Define" && (
                        <input
                          type="num"
                          name="participents-input"
                          id="participents-input"
                          placeholder="Enter number of participants"
                          style={{ width: "100%", height: "3rem", padding: "0 1rem", marginTop: "0.5rem" }}
                          onChange={(e) => {
                            setevent({
                              ...event,
                              participents: e.target.value, // Update the participants in the state
                            });
                          }}
                        />
                      )}
                </div>

                <div className="form-item">
                <label htmlFor="venue">Venue</label>

                {/* Dropdown for selection */}
                <select
                  name="venue"
                  id="venue_name"
                  onChange={(e) => {
                    const value = e.target.value;
                    setevent({
                      ...event,
                      venuetype: value,
                      venue_name: value === "Define" ? "" : value, // Set to empty if "Define" is selected
                    });
                  }}
                >
                  <option>---Select---</option>
                  <option>Open</option>
                  <option>Define</option>
                </select>

                {/* Conditionally render the input field when "Define" is selected */}
                      {event.venuetype === "Define" && (
                        <input
                          type="text"
                          name="venue-input"
                          id="venue-input"
                          placeholder="Enter Venue"
                          style={{ width: "100%", height: "3rem", padding: "0 1rem", marginTop: "0.5rem" }}
                          onChange={(e) => {
                            setevent({
                              ...event,
                              venue_name: e.target.value, // Update the participants in the state
                            });
                          }}
                        />
                      )}
                </div>
              {/* <div className="form-item">
              <label for='venue'>Venue</label>
              <input type="text" name="venue" id="venue_name" placeholder="Enter venue name" style={{width:"100%", height:"3rem", padding:"0 1rem"}}  onChange={(e) => {setevent({...event, venue_name:e.target.value})}}  />
              </div> */}

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

       <Modal show={show} onHide={handleclose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <u>Add Trainer</u> 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter First Name"
              style={fieldStyle}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter Last Name"
              style={fieldStyle}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Specialization</label>
            <select
              name="specialization"
              style={fieldStyle}
              onChange={handleInputChange}
            >
              <option>---Select---</option>
              <option>Job Training</option>
              <option>Motivation</option>
              <option>HVAC</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Years of Experience</label>
            <input
              type="number"
              name="experience"
              placeholder="Enter Years of Experience"
              style={fieldStyle}
              onChange={handleInputChange}
            />
          </div>

        

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Email Address</label>
            <input
              type="email"
              name="email_id"
              placeholder="Enter Email"
              style={fieldStyle}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone_no"
              placeholder="Enter Phone Number"
              style={fieldStyle}
              onChange={handleInputChange}
            />
          </div>

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="save-btn" style={{backgroundColor:"red"}} onClick={handleclose}>
          Close
        </Button>
        <Button className="save-btn" onClick={addtrainer}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>


      <ToastContainer/>
    </div>
  );
}

export default TrainingCalenderForm;
