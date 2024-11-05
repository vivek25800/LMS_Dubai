import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../StyleCode/calaender.css'
import AddNomination from './AddNomination';
import { base_url } from "./Utils/base_url";
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import $ from 'jquery'; // Import jQuery
import 'datatables.net'; // Import DataTables

const TrainingCalendar = () => {
    const [trainingData, setTrainingData] = useState({
        training_category: '',
        training_name: '',
        description: '',
        region: '',
        project_title: '',
        job_title: '',
        from_date: new Date(),
        to_date: new Date(),
        from_time: '',
        to_time: '',
        participants: '',
        venue_name: '',
        status: ''
    });
    const [trainings, setTrainings] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTraining, setSelectedTraining] = useState([]);

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const trainingsOnDate = trainings.filter((training) => {
            const trainingDate = new Date(training.from_date);
            return trainingDate.toDateString() === date.toDateString();
        });
        setSelectedTraining(trainingsOnDate);
    };

    useEffect(() => {
        const fetchTrainings = async () => {
            try {
                const response = await axios.get(`${base_url}/event_details_get`);
                setTrainings(response.data);
            } catch (error) {
                console.error('Error fetching trainings:', error);
            }
        };

        fetchTrainings();
    }, []);





    useEffect(()=>{
        get_details();
    }, [])

    const[details, setdetails] = useState([]);

    const get_details = async () => {
        try {
            const resp = await axios.get(`${base_url}/event_details_get`);
            console.log(resp);
            
            setdetails(resp.data)
        } catch (error) {
            console.log(error);
        }
    }

    const delete_events = async (_id) => {

        try {
            const id = _id;
            const resp = await axios.delete(`${base_url}/trainingevent_delete/${id}`);
            setdetails(resp.data.event);
            toast.success("Event deleted successfuly",{autoClose:"2000"});
            setTimeout(() => {
                window.location.reload();
            }, 500);
        } catch (error) {
           console.log(error); 
        }
    }

    const[event, setevent] = useState({training_category:"",  training_name:"", trainer_name:"", description:"",region:"",  project_title:"", 
        job_title:"", from_date:new Date(), to_date:new Date(), from_time:"", to_time:"", participents:"", venue_name:"", status:""})
    const[training,settraining]=useState([])
    const [show,setshow]=useState(false)
    const handleclose=()=>
    {
        setshow(false)
    }
    const handleshow=(item)=>
    {
        setshow(true)
        setevent(item)
        settraining(item)
    }

   
    
        const editevent = async () => {
            try {
                const id=training._id
              const resp = await axios.put(`${base_url}/event_details_updated/${id}`, event);
              if(resp.status === 200){
                toast.success("Event details edit successfuly");
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
                
              }
            } catch (error) {
              console.log(error);
            }
          }


          useEffect(() => {
            if (details.length > 0) {
              // Initialize DataTable
              const table = $('#trainingTable').DataTable({
                dom: '<"dt-buttons"Bf><"clear">lirtp',
                paging: true,
                autoWidth: true,
                buttons: [
                  'colvis',
                  'copyHtml5',
                  'csvHtml5',
                  'excelHtml5',
                  'pdfHtml5',
                  'print',
                ],
                initComplete: function () {
                  const footer = $('#trainingTable tfoot tr');
                  $('#trainingTable thead').append(footer);
                },
              });
        
              // Apply search functionality
              $('#trainingTable thead').on('keyup', 'input', function () {
                table.column($(this).parent().index()).search(this.value).draw();
              });
        
              // Cleanup on component unmount
              return () => {
                table.destroy(true);
              };
            }
          }, [details]);

    return (
        <div>

            <style>
                {`
                .hide-view-btn{
                background-color: #7A1CAC;
                }
                .hide-view-btn:hover{
                background-color: #7a1cacc6;
                }
                `}
            </style>
          
            <button  onClick={toggleCalendar} className='hide-view-btn' >
                {showCalendar ? 'Hide Calendar' : 'View Calendar'}
            </button>
            {showCalendar && (
            <div style={{ width: "100%", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Calendar 
                    onClickDay={handleDateClick}
                    tileContent={({ date }) => {
                        const trainingOnDate = trainings.filter(training =>
                            new Date(training.from_date).toDateString() === date.toDateString()
                        );

                        const isPastDate = date < new Date(); // Check if the date is in the past

                        if (trainingOnDate.length > 0) {
                            return (
                                <span className={isPastDate ? "blink-red" : "blink"}>
                                    🟢
                                </span>
                            ); // Use red blinking for past dates
                        }

                        return null;
                    }}
                    tileClassName={({ date }) => {
                        const fromDate = new Date(trainingData.from_date);
                        const toDate = new Date(trainingData.to_date);

                        // Check if the date is within the training date range
                        if (date >= fromDate && date <= toDate) {
                            return 'highlight'; // Apply highlight class
                        }
                        return null;
                    }}
                />
                <div style={{ marginTop: '20px' }}>
                    <h3>Training Details for {selectedDate.toDateString()}</h3>
                    {selectedTraining.length > 0 ? (
                        <table className="table table-striped table-bordered" style={{ width: '100%', borderCollapse: 'collapse',marginBottom:"100px" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Training Name</th>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Category</th>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Project Title</th>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>From Date</th>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>To Date</th>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>From Time</th>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>To Time</th>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Participants</th>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Venue Name</th>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Status</th>
                                    <th style={{ border: '1px solid #ccc', padding: '10px' }}>Add Nomination</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedTraining.map((training, index) => (
                                    <tr key={index} style={{ border: '1px solid #ccc' }}>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>{training.training_name}</td>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>{training.training_category}</td>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>{training.project_title}</td>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>{new Date(training.from_date).toDateString()}</td>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>{new Date(training.to_date).toDateString()}</td>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>{training.from_time}</td>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>{training.to_time}</td>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>{training.participants}</td>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>{training.venue_name}</td>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}>{training.status}</td>
                                        <td style={{ border: '1px solid #ccc', padding: '10px' }}> <AddNomination selectedTraining={training} /> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No training scheduled for this date.</p>
                    )}
                </div>

                <div className='training-details-list'>
                    <h3>All Training Details list here.</h3>

                    <div className='details-list'>
                    <table id="trainingTable" class="table table-striped table-bordered" style={{fontSize:"14px"}} >
	<thead>
		<tr>
			<th>Seq No.</th>
			<th>Training Category</th>
			<th>Training Name</th>
      <th>Trainer Name</th>
			<th>Region</th>
			<th>Project</th>
            <th>Date (from - to)</th>
            <th>Time (from - to)</th>
            <th>Total Participents</th>
            <th>Venue</th>
            <th>Status</th>
            <th>Action</th>
		</tr>
	</thead>
	<tbody>  
		{
            Array.isArray(details) ? details.map((item,index)=>
            (
                <tr>
                <td >{index+1}</td>
                <td >{item.training_category}</td>
                <td >{item.training_name}</td>
                <td >{item.trainer_name}</td>
                <td >{item.region}</td>
                <td >{item.project_title}</td>
                <td >{item.from_date} - {item.to_date}</td>
                <td >{item.from_time} - {item.to_time}</td>
                <td >{item.participents}</td>
                <td >{item.venue_name}</td>
                <td >{item.status}</td>
                <td>
                
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={()=>handleshow(item)}>Edit</Dropdown.Item>
        <Dropdown.Item  onClick={() => {delete_events(item._id)}}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </td>
                </tr>
            )):[]
        }

	</tbody>
	
			      </table>


                  <Modal show={show} onHide={handleclose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Training Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
      <div className="training-container">
          <div className="">
          <div className="form-item">
                <label>Training Category</label>
                <select name="training-category" id="training_category" onChange={(e) => {setevent((prevprofile)=>({...prevprofile, training_category:e.target.value}))}}>
                <option >{training.training_category}</option>
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
                  <select name="training-name" id="training_name" onChange={(e) => {setevent((prevprofile)=>({...prevprofile, training_name:e.target.value}))}}>
                    <option >{training.training_name}</option>
                    <option >Value1</option>
                    <option >Value2</option>
                    <option >Value3</option>
                    <option >Value4</option>
                    <option >Value5</option>
                    <option >Value6</option>
                  </select>
              </div>
              <div className="form-item">
                <label for='desription'>Description</label>
                <textarea name="description" id="description" defaultValue={training.description}  onChange={(e) => {setevent((prevprofile)=>({...prevprofile, description:e.target.value}))}}></textarea>
              </div>
              <div className="form-item">
              <label for='region'>Region</label>
              <select name="region" id="region"  onChange={(e) => {setevent((prevprofile)=>({...prevprofile, region:e.target.value}))}}>
                    <option >{training.region}</option> 
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
                <select name="project" id="project_title"   onChange={(e) => {setevent((prevprofile)=>({...prevprofile, project_title:e.target.value}))}}>
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
                <select name="job-title" id="job_title"   onChange={(e) => {setevent((prevprofile)=>({...prevprofile, job_title:e.target.value}))}}>
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
              <input type="date" name="from-date" id="from_date"   onChange={(e) => {setevent((prevprofile)=>({...prevprofile, from_date:e.target.value}))}}/> 
              </div>
              <div className="form-item">
              <label for='to-date'>To</label>
              <input type="date" name="to-date" id="to_date"   onChange={(e) => {setevent((prevprofile)=>({...prevprofile, to_date:e.target.value}))}}/>
              </div>
              </div>

              <div className="date-setion">
              <div className="form-item">
              <label for='from-time'>From</label>
              <input type="time" name="from-time" id="from_time"   onChange={(e) => {setevent((prevprofile)=>({...prevprofile, from_time:e.target.value}))}}/> 
              </div>
              <div className="form-item">
              <label for='to-time'>To</label>
              <input type="time" name="to-time" id="to_time"   onChange={(e) => {setevent((prevprofile)=>({...prevprofile, to_time:e.target.value}))}}/>
              </div>
              </div>
              
              <div className="form-item">
              <label for='participents'>No of participents</label>
              <input type="text" name="participents" id="participents" placeholder="No. of participents" defaultValue={training.participents} style={{width:"100%", height:"3rem", padding:"0 1rem"}}   onChange={(e) => {setevent((prevprofile)=>({...prevprofile, participents:e.target.value}))}}/>
              </div>
              <div className="form-item">
              <label for='venue'>Venue</label>
              <input type="text" name="venue" id="venue_name" placeholder="Enter venue name" style={{width:"100%", height:"3rem", padding:"0 1rem"}}  onChange={(e) => {setevent((prevprofile)=>({...prevprofile, venue_name:e.target.value}))}}/>
              </div>

              <div className="form-item">
              <label for='status'>Status</label>
              <select id='status_info'  onChange={(e) => {setevent((prevprofile)=>({...prevprofile, status:e.target.value}))}}>
                <option >Upcoming</option>
                <option >Complete</option>
                <option >Uncomplete</option>
              </select>
              </div>

              <div className="save-btn-div">
                <button className="save-btn" onClick={editevent}> Save </button>
              </div>

            
            {/* <div className="training-form-left"></div>
            <div className="training-form-right"></div> */}
          </div>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleclose}>Close</Button>
      </Modal.Footer>
    </Modal>
                    </div>
                </div>
            </div>
        )}

<ToastContainer/>

        </div>
    );
};

export default TrainingCalendar;