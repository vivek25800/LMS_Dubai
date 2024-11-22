import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { base_url } from './Utils/base_url';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ViewOJTOJAINA() {

    useEffect(() => {
        fetchOjtData();
        fetchOjaData();
        fetchInaData();
    }, []);

    // OJT Integration Code
    const [ojtData, setOjtData] = useState([]);
    const fetchOjtData = async () => {
        try {
           const resp = await axios.get(`${base_url}/get_Ojt_info`);
        //    console.log(resp);
           setOjtData(resp.data.create_ojt);
        } catch (error) {
            console.log(error);
        }
    }
    
    const getOjtById = async (item) => {
        try {
           const id = item._id;
           const resp = await axios.get(`${base_url}/get_ojts_byid/${id}`);
           setOjtData(resp.data.create_ojt);
           setOjt(resp.data.create_ojt);
           setactivities(resp.data.create_ojt.activities)
           
           
        } catch (error) {
            console.log(error);
        }
    }
    
    
    const deleteOjtData = async (_id) => {
        try {
           const id = _id;
           const resp = await axios.delete(`${base_url}/ojt_data_delete/${id}`);
           setOjtData(resp.data.create_ojt);
           toast.success("OJT delete successfully", {autoClose:"2000"});
           setTimeout(() => {
            window.location.reload();
           }, 500);
        } catch (error) {
            console.log(error);
        }
    }

    const [ojt, setOjt] = useState({ojt_title:"", ojt_code:"", activity_ojt_title:"", addContent: { Srno: [], description: [] }});
    const [activities, setactivities] = useState([
        { activity_ojt_title: '', addContent: { Srno: [], description: [] } },
      ]);

      console.log(activities);
      const [ojtTitle, setOjtTitle] = useState('');
      const [ojtCode, setOjtCode] = useState('');

    const [ojtInfo, setOjtInfo] = useState([]);

    const editOjtDetails = async () => {
        const data = {
            ojt_title: ojtTitle,
            ojt_code: ojtCode,
            activities: activities.map((activity) => ({
              activity_ojt_title: activity.title, // Changed 'title' to 'activity_oja_title'
              content: activity.addContent.Srno.map((srno, index) => ({
                srno,
                description: activity.addContent.description[index],
              })),
            })),
          };

        try {
           const id = ojtInfo._id;
           const resp = await axios.put(`${base_url}/ojt_details_updated/${id}`, data); 
            if(resp.status == 200){
                toast.success("OJT data successfully updated", {autoClose: "2000"});
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const [show, setShow] = useState(false);
    const handleshow = (item) => { 
        setShow(true) 
        setOjt(item);
        setOjtInfo(item);
        getOjtById(item);
    }
    const handleclose = () => { setShow(false) }


    // OJA Integration Code
    const [ojaData, setOjaData] = useState([]);
    const fetchOjaData = async () => {
        try {
           const resp = await axios.get(`${base_url}/get_oja_info`);
        //    console.log(resp);
           setOjaData(resp.data.create_oja);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteOjaData = async (_id) => {
        try {
           const id = _id;
           const resp = await axios.delete(`${base_url}/oja_data_delete/${id}`);
           setOjaData(resp.data.create_oja);
           toast.success("OJA delete successfully", {autoClose:"2000"});
           setTimeout(() => {
            window.location.reload();
           }, 500);
        } catch (error) {
            console.log(error);
        }
    }


    // INA Integration Code
    const [inaData, setInaData] = useState([]);
    const fetchInaData = async () => {
        try {
           const resp = await axios.get(`${base_url}/get_ina_dataInfo`);
        //    console.log(resp);
           setInaData(resp.data.create_ina);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteINAData = async (_id) => {
        try {
           const id = _id;
           const resp = await axios.delete(`${base_url}/ina_data_delete/${id}`);
           setInaData(resp.data.create_ina);
           toast.success("INA delete successfully", {autoClose:"2000"});
           setTimeout(() => {
            window.location.reload();
           }, 500);
        } catch (error) {
            console.log(error);
        }
    }

    function ViewOJT() {
        document.getElementById('ojt-lists').style.display = 'block';
        document.getElementById('oja-lists').style.display = 'none';
        document.getElementById('ina-lists').style.display = 'none';
    }

    function ViewOJA() {
        document.getElementById('ojt-lists').style.display = 'none';
        document.getElementById('oja-lists').style.display = 'block';
        document.getElementById('ina-lists').style.display = 'none';
    }

    function ViewINA() {
        document.getElementById('ojt-lists').style.display = 'none';
        document.getElementById('oja-lists').style.display = 'none';
        document.getElementById('ina-lists').style.display = 'block';
    }
    
console.log(ojtData.activities
    );
 

  return (
    <div>

        <style>
            {`
                body {
                    background-color: rgba(46, 7, 63, 0.1);
                    padding: 20px;
                }
                .category-btn button{
                width: 200px;
                }
                .view-Ojt-lists, .view-oja-lists, .view-Ina-lists{
                // border: 2px solid #000;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                margin-bottom: 20px;
                }
                .actions-btn{
                width: 6rem;
                }
                #ojt-lists, #oja-lists, #ina-lists{
                display: none;
                }
            `}
        </style>

        <Sidebar/>

        <section className="main-content-section">
            <Header/>

            <div className='header-div header-two'>
                <div className='title-name'>
                    <h5>View OJT, OJA and INA Lists</h5>
                    <p><a onClick={() => window.location.reload()} style={{cursor:"pointer", color:"#099ded"}}>Home</a> <i class="fa-solid fa-caret-right"></i> View OJT, OJA and INA Lists </p>
                </div>
                <div className="category-btn">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" onClick={ViewOJT}>View OJT</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={ViewOJA}>View OJA</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" onClick={ViewINA}>View INA</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className='view-Ojt-lists' id='ojt-lists'>
                <h5 style={{marginBottom:"1.5rem"}}>Here's all OJT List</h5>

                <div className='all-ojt-list'>
                    <table id="example" class="table table-striped table-bordered" cellspacing="0" style={{fontSize:"14px"}} >
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>OJT Title</th>
                                <th>OJT Code</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(ojtData) ? ojtData.map((item, index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.ojt_title}</td>
                                        <td>{item.ojt_code}</td>
                                        <td>
                                        <Dropdown className='actions-btn'>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Action
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={()=>handleshow(item)}>Edit</Dropdown.Item>
                                                <Dropdown.Item onClick={() => {deleteOjtData(item._id)}}>Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </td>
                                    </tr>
                                )):[]
                            }
                        </tbody>
                    </table>
                </div>

                <Modal show={show} onHide={handleclose} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Edit OJT Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className='ojt_details'>
                            <div className="info-div-item">
                                <label>OJT Title</label>
                                <input type='text' placeholder='Enter the OJT title' id='ojt_title' defaultValue={ojtInfo.ojt_title} onChange={(e) => {setOjt((prevInfo) => ({...prevInfo, ojt_title:e.target.value}))}} />
                            </div>

                            <div className="info-div-item">
                            <label>OJT Code</label>
                            <input
                                type='text'
                                placeholder='OJT code'
                                id="ojt_code"
                                defaultValue={ojtInfo.ojt_code}
                                onChange={(e) => {setOjt((prevInfo) => ({...prevInfo, ojt_code:e.target.value}))}}
                            />
                            </div>

                            <div className='activities-div'>
                                <div className="info-div-item">
                                    <h4>Activity { 1}</h4> {/* Adding Activity title */}
                                </div>
                                <div className="info-div-item">
                                    <label>Title</label>
                                    <input
                                    type="text"
                                    placeholder="Enter activity title"
                                    id='activity_ojt_title'
                                    value={ojtData.activities
                                        
                                    }
                                   
                                    />
                                </div>

                                <div className="info-div-item" style={{ display: 'flex', justifyContent: 'space-between' }} >
                                  <div className="add-content-div" style={{ width: '86%' }}>
                                   <label>Content</label>

                                   <table className="table table-striped table-bordered" cellspacing="0">
                                        <thead>
                                        <tr>
                                            <th>Sr no.</th>
                                            <th>Description</th>
                                            <th style={{ textAlign: 'center' }}>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td></td>
                                            <td>
                                                <input
                                                className="desc-input"
                                                placeholder="Enter description"
                                                style={{
                                                    border: 'none',
                                                    backgroundColor: 'transparent',
                                                }}
                                                />
                                            </td>
                                            <td style={{ textAlign: 'center' }}>
                                                <button className="desc-del-btn" >
                                                <i className="fa-regular fa-trash-can"></i>
                                                </button>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div className='update-btn'>
                                    <button onClick={editOjtDetails}>Update</button>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleclose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>


            <div className='view-oja-lists' id='oja-lists'>
                <h5 style={{marginBottom:"1.5rem"}}>Here's all OJA List</h5>

                <div className='all-oja-list'>
                    <table id="example" class="table table-striped table-bordered" cellspacing="0" style={{fontSize:"14px"}} >
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>OJA Title</th>
                                <th>OJA Code</th>
                                <th>Rating range</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                Array.isArray(ojaData) ? ojaData.map((item, index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.oja_title}</td>
                                        <td>{item.oja_code}</td>
                                        <td>{item.rating_range_oja}</td>
                                        <td>
                                        <Dropdown className='actions-btn'>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Action
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                            <Dropdown.Item >Edit</Dropdown.Item>
                                                <Dropdown.Item onClick={() => {deleteOjaData(item._id)}}>Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </td>
                                    </tr>
                                )):[]
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='view-Ina-lists' id='ina-lists'>
                <h5 style={{marginBottom:"1.5rem"}}>Here's all INA List</h5>

                <div className='all-Ina-list'>
                    <table id="example" class="table table-striped table-bordered" cellspacing="0" style={{fontSize:"14px"}} >
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>INA Title</th>
                                <th>INA Code</th>
                                <th>Rating range</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                Array.isArray(inaData) ? inaData.map((item, index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.ina_title}</td>
                                        <td>{item.ina_code}</td>
                                        <td>{item.rating_range}</td>
                                        <td>
                                        <Dropdown className='actions-btn'>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Action
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                            <Dropdown.Item >Edit</Dropdown.Item>
                                                <Dropdown.Item onClick={() => {deleteINAData(item._id)}}>Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </td>
                                    </tr>
                                )):[]
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default ViewOJTOJAINA
