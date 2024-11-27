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
        // fetchOjtData();
        fetchOjaData();
        fetchInaData();
    }, []);

    // ---------------------------------------- OJT Integration Code ------------------------------------- //
    // const [ojtData, setOjtData] = useState([]);
    // const fetchOjtData = async () => {
    //     try {
    //        const resp = await axios.get(`${base_url}/get_Ojt_info`);
    //        setOjtData(resp.data.create_ojt);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const [show, setShow] = useState(false);
    // const handleshow = (id) => { 
    //     setShow(true);
    //     fetchOjtById(id);
    // }
    // const handleclose = () => { setShow(false) }

    // const [editData, setEditData] = useState({
    //     _id: '',
    //     ojt_title: '',
    //     ojt_code: '',
    //     activities: [],
    //   });

    //   const fetchOjtById = async (id) => {
    //     try {
    //       const resp = await axios.get(`${base_url}/get_ojts_byid/${id}`);
    //       setEditData(resp.data.create_ojt);
    //       setShow(true);
    //     } catch (error) {
    //       console.error('Error fetching OJT by ID:', error);
    //     }
    //   };

    //   const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setEditData({ ...editData, [name]: value });
    //   };
      
    //   const handleActivityChange = (index, field, value) => {
    //     const updatedActivities = [...editData.activities];
    //     updatedActivities[index][field] = value;
    //     setEditData({ ...editData, activities: updatedActivities });
    //   };

    //   const updateOjtData = async () => {
    //     try {
    //       await axios.put(`${base_url}/ojt_details_updated/${editData._id}`, editData);
    //       toast.success('OJT updated successfully!', { autoClose: 2000 });
    //       fetchOjtData(); // Refresh the OJT list
    //       setShow(false);
    //     } catch (error) {
    //       console.error('Error updating OJT:', error);
    //     }
    //   };

    const [ojtData, setOjtData] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedOJT, setSelectedOJT] = useState(null);

    useEffect(() => {
        fetchOjtData();
    }, []);

    const fetchOjtData = async () => {
        try {
            const resp = await axios.get(`${base_url}/get_Ojt_info`);
            setOjtData(resp.data.create_ojt);
        } catch (error) {
            console.error(error);
        }
    };

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

    const handleEditOJT = async (_id) => {
        try {
            const resp = await axios.get(`${base_url}/get_ojts_byid/${_id}`);
            setSelectedOJT(resp.data.create_ojt);
            setShow(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = () => {
        setSelectedOJT(null);
        setShow(false);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${base_url}/ojt_details_updated/${selectedOJT._id}`, selectedOJT);
            toast.success("OJT updated successfully", { autoClose: 2000 });
            fetchOjtData();
            handleClose();
        } catch (error) {
            console.error(error);
        }
    };

    const addContent = (activityIndex) => {
        const updatedOJT = { ...selectedOJT };
        updatedOJT.activities[activityIndex].content.push({
            srno: updatedOJT.activities[activityIndex].content.length + 1,
            description: "",
        });
        setSelectedOJT(updatedOJT);
    };

    const deleteContent = (activityIndex, contentIndex) => {
        const updatedOJT = { ...selectedOJT };
        updatedOJT.activities[activityIndex].content.splice(contentIndex, 1);
        setSelectedOJT(updatedOJT);
    };

    const addActivity = () => {
        const updatedOJT = { ...selectedOJT };
        updatedOJT.activities.push({
            activity_ojt_title: `New Activity ${updatedOJT.activities.length + 1}`,
            content: [],
        });
        setSelectedOJT(updatedOJT);
    };
      
      


    // ----------------------------------------------- OJA Integration Code ---------------------------------------
    const [ojaData, setOjaData] = useState([]);
    const [show2, setshow2] = useState(false);
    const [selectedOJA, setSelectedOJA] = useState(null);

    const fetchOjaData = async () => {
        try {
           const resp = await axios.get(`${base_url}/get_oja_info`);
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
           toast.success("OJA delete successfully", {autoClose:"3000"});
           setTimeout(() => {
            window.location.reload();
           }, 500);
        } catch (error) {
            console.log(error);
        }
    }

    
    const handleshow2 = () => {
        setshow2(true);
    }
    const handleclose2 = () => { setshow2(false) }


    // --------------------------------------------- INA Integration Code ------------------------------------------
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
           toast.success("INA delete successfully", {autoClose:"3000"});
           setTimeout(() => {
            window.location.reload();
           }, 500);
        } catch (error) {
            console.log(error);
        }
    }

    const [show3, setshow3] = useState(false);
    const handleshow3 = () => {
        setshow3(true);
    }
    const handleclose3 = () => { setshow3(false) }

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
    
    // console.log(ojtData.activities);
 

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
                .ojt_details{
                // border: 1px solid rgba(0,0,0,0.2);
                padding: 1rem 1.5rem;
                border-radius: 5px;
                }
                .ojt_details .info-div-item{
                margin-bottom: 1rem;
                }
                .activities-div{
                border: 1px solid rgba(0,0,0,0.2);
                padding: 1rem;
                border-radius: 5px;
                }
                .activity-block{
                border: 1px solid rgba(0,0,0,0.2);
                border-radius: 8px;
                padding: 14px;
                margin-bottom: 1rem;
                position: relative;
                }
                .btn-primary{
                background-color: #7A1CAC;
                width: fit-content;
                border: none;
                padding: 4px 12px !important;
                }
                .btn-success{
                background-color: #fff;
                border: 1px solid #7A1CAC;
                color: #7A1CAC;
                width: fit-content;
                padding: 4px 12px !important;
                font-weight: 400;
                }
                .btn-success:hover{
                border: 1px solid #2E073F;
                }
                .btn:hover{
                background-color: #2E073F;
                }
                .modal-header{
                background-color: #2E073F;
                color: #fff;
                }
                .modal-header button .btn-close{
                color: #fff;
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

            {/* <div className='view-Ojt-lists' id='ojt-lists'>
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
                                            <Dropdown.Item onClick={() => handleshow(item._id)}>Edit</Dropdown.Item>
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

                <Modal show={show} onHide={handleclose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Edit OJT Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ojt_details'>
                    <div className="info-div-item">
                        <label>OJT Title</label>
                        <input
                        type="text"
                        name="ojt_title"
                        value={editData.ojt_title}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="info-div-item">
                        <label>OJT Code</label>
                        <input
                        type="text"
                        name="ojt_code"
                        value={editData.ojt_code}
                        onChange={handleInputChange}
                        />
                    </div>
                    {editData.activities.map((activity, index) => (
                        <div className='activities-div' key={index}>
                        <h5>Activity {index + 1}</h5>
                        <div className="info-div-item">
                        <label>Title</label>
                        <input
                            type="text"
                            value={activity.activity_ojt_title}
                            onChange={(e) => handleActivityChange(index, 'activity_ojt_title', e.target.value)}
                        />
                        </div>
                        <div className="info-div-item" style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <div className="add-content-div" style={{ width: '86%' }}>
                        <label>Content</label>
                        {activity.content.map((content, contentIndex) => (
                            <div key={contentIndex}>
                            <input
                                type="text"
                                value={content.description}
                                onChange={(e) =>
                                handleActivityChange(index, `content.${contentIndex}.description`, e.target.value)
                                }
                            />
                            </div>
                        ))}
                        </div>
                        </div>
                    </div>
                    ))}    
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={updateOjtData}>
                    Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleclose}>
                    Close
                    </Button>
                </Modal.Footer>
                </Modal>

            </div> */}
             <div className="view-Ojt-lists" id="ojt-lists">
            <h5 style={{ marginBottom: "1.5rem" }}>Here's all OJT List</h5>

            <div className="all-ojt-list">
                <table className="table table-striped table-bordered" style={{ fontSize: "14px" }}>
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
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.ojt_title}</td>
                                <td>{item.ojt_code}</td>
                                <td>
                                    {/* <button className="btn btn-primary" onClick={() => handleEditOJT(item._id)}>
                                        Edit
                                    </button> */}
                                    <Dropdown className='actions-btn'>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Action
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditOJT(item._id)}>Edit</Dropdown.Item>
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

            {selectedOJT && (
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header className='modal-header' closeButton >
                        <Modal.Title>Edit OJT Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='ojt_details'>
                            <div className="info-div-item">
                            <label>OJT Title</label> 
                            <input
                                type="text"
                                value={selectedOJT.ojt_title}
                                onChange={(e) => setSelectedOJT({ ...selectedOJT, ojt_title: e.target.value })}
                                placeholder="Enter OJT Title"
                                className="form-control"
                            />
                            </div>
                            <div className="info-div-item">
                            <label>OJT Code</label>
                            <input
                                type="text"
                                value={selectedOJT.ojt_code}
                                onChange={(e) => setSelectedOJT({ ...selectedOJT, ojt_code: e.target.value })}
                                placeholder="Enter OJT Code"
                                className="form-control"
                            />
                            </div>

                            {selectedOJT.activities.map((activity, activityIndex) => (
                                <div key={activityIndex} className="activity-block">
                                    <button
                                        style={{
                                        position: 'absolute',
                                        top: '5px',
                                        right: '10px',
                                        backgroundColor: '#ffffff',
                                        color: 'red',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        width: '24px',
                                        height: '24px',
                                        }}
                                        // onClick={() => handleRemoveActivity(activityIndex)}
                                        onClick={() => {
                                            const updatedActivities = [...selectedOJT.activities];
                                            updatedActivities.splice(activityIndex, 1); // Remove the activity at activityIndex
                                            setSelectedOJT({ ...selectedOJT, activities: updatedActivities });
                                        }}
                                    >
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>

                                    <h5>Activity {activityIndex + 1}</h5>
                                    <div className="info-div-item">
                                    <label>Activity title</label>
                                    <input
                                        type="text"
                                        value={activity.activity_ojt_title}
                                        onChange={(e) => {
                                            const updatedActivities = [...selectedOJT.activities];
                                            updatedActivities[activityIndex].activity_ojt_title = e.target.value;
                                            setSelectedOJT({ ...selectedOJT, activities: updatedActivities });
                                        }}
                                        placeholder="Activity Title"
                                        className="form-control"
                                    />
                                    </div>

                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {activity.content.map((content, contentIndex) => (
                                                <tr key={contentIndex}>
                                                    <td>{contentIndex + 1}</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={content.description}
                                                            onChange={(e) => {
                                                                const updatedContent = [...activity.content];
                                                                updatedContent[contentIndex].description = e.target.value;
                                                                const updatedActivities = [...selectedOJT.activities];
                                                                updatedActivities[activityIndex].content = updatedContent;
                                                                setSelectedOJT({ ...selectedOJT, activities: updatedActivities });
                                                            }}
                                                            placeholder="Enter Description"
                                                            className="form-control"
                                                        />
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => deleteContent(activityIndex, contentIndex)}
                                                        >
                                                            delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <button className="btn btn-primary" onClick={() => addContent(activityIndex)}>
                                        Add Content
                                    </button>
                                </div>
                            ))}

                            <button className="btn btn-success mt-3" onClick={addActivity}>
                                Add Activity
                            </button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleUpdate}>
                            Update
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>  
                    </Modal.Footer>
                </Modal>
            )}
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
                                            <Dropdown.Item onClick={ handleshow2 }>Edit</Dropdown.Item>
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

                <Modal show={show2} onHide={handleclose2} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Edit OJA Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className='ojt_details'>
                            <div className="info-div-item">
                                <label>OJA Title</label>
                                <input type='text' id=''  />
                            </div>

                            <div className="info-div-item">
                                <label>OJA Code</label>
                                <input type='text' id="" />
                            </div>

                            <div className="info-div-item">
                                <label>Selected rating range </label>
                                <input type='text' id="" />
                            </div>

                            <div className='activities-div'>
                                <div className="info-div-item">
                                    <h4>Activity { 1}</h4> {/* Adding Activity title */}
                                </div>
                                <div className="info-div-item">
                                    <label>Title</label>
                                    <input
                                    type="text"
                                    id='activity_ojt_title'
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
                                    <button>Update</button>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleclose2}>Close</Button>
                    </Modal.Footer>
                </Modal>
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
                                            <Dropdown.Item onClick={ handleshow3 }>Edit</Dropdown.Item>
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

                <Modal show={show3} onHide={handleclose3} size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Edit INA Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className='ojt_details'>
                            <div className="info-div-item">
                                <label>INA Title</label>
                                <input type='text' id=''  />
                            </div>

                            <div className="info-div-item">
                                <label>INA Code</label>
                                <input type='text' id="" />
                            </div>

                            <div className="info-div-item">
                                <label>Selected rating range </label>
                                <input type='text' id="" />
                            </div>

                            <div className='activities-div'>
                                <div className="info-div-item">
                                    <h4>Activity { 1}</h4> {/* Adding Activity title */}
                                </div>
                                <div className="info-div-item">
                                    <label>Title</label>
                                    <input
                                    type="text"
                                    id='activity_ojt_title'
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
                                    <button>Update</button>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleclose3}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </section>
      
    </div>
  )
}

export default ViewOJTOJAINA
