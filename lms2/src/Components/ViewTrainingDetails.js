import React, {useEffect, useState} from 'react'
// import 'datatables.net';
import Sidebar from './Sidebar'
import Header from './Header'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { base_url } from "./Utils/base_url";

function ViewTrainingDetails() {

    useEffect(()=>{
        get_details();
    }, [])

    const navigate = useNavigate();

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

    const[event, setevent] = useState({training_category:"",  training_name:"", description:"",region:"",  project_title:"", 
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
        
     



  return (
    <div style={{ backgroundColor: "rgba(46, 7, 63, 0.1)", padding: "20px", height:"100vh" }}>

        <style>{`
        .all-training-details{
        padding: 2rem;
        // border: 2px solid #000;
        background-color: #ffffff;
        border-radius: 10px;
        }
        table tbody td button{
        height: 2rem;
        width: 2rem;
        margin-right: 3px;
        border: none;
        border-radius: 50%;
        color: #ffffff;
        }
        table tbody td .edit-btn{
            background-color: #2195f3cc;
        }
        table tbody td .delete-btn{
            background-color: rgba(255, 0, 0, 0.715);
        }
            .edit-delete{
            padding: 0;
            height: 2rem;
            font-size: 12px;
            width: 4rem;
            border-radius: 3px;
            }
            .edit-delete:focus{
            padding: 0;
            border-radius: 3px;
            }
            #add-event-btn a{
            text-decoration: none;
            color: #ffffff;
            }
            
        `}</style>


        <Sidebar/>

        <section className="main-content-section">
            <Header/>

            <div className='header-div header-two'>
                <div className='title-name'>
                    <h5>Training Details</h5>
                    <p><a onClick={() => window.location.reload()} style={{cursor:"pointer", color:"#099ded"}}>Home</a> <i class="fa-solid fa-caret-right"></i> Add Event</p>
                </div>
                <div className="category-btn">
                    <button id='add-event-btn'> <NavLink to={'/AddEvent'}>Add Event</NavLink> </button>
                </div>
            </div>

            <div className='all-training-details'>

            <table id="example" class="table table-striped table-bordered" cellspacing="0" style={{fontSize:"14px"}} >
	<thead>
		<tr>
			<th>Seq No.</th>
			<th>Training Category</th>
			<th>Training Name</th>
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

        </section>
        <ToastContainer/>
      
    </div>
  )
}

export default ViewTrainingDetails