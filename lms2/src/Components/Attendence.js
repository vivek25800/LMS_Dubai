import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import "../StyleCode/Attendence.css";
import "./DemoComponent/Loader";
import Loader from "./DemoComponent/Loader";
import { toast, ToastContainer } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FileUpload from "./DemoComponent/FileUpload";
import { base_url } from "./Utils/base_url";
import $ from "jquery";
import "select2";
import "select2/dist/css/select2.css"; // Optional: Include Select2 CSS
import Select from "react-select";


function Attendence() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const initialAttendenceState = {
    training_name_attendence: "",
    training_type_attendence: "",
    training_category_attendence: "",
    date_from_atten: "",
    date_to_atten: "",
    time_from_atten: "",
    time_to_atten: "",
    training_venue_atten: "",
    trainer: "",
    trainer_emp_id: "",
    employee_id_atten: [],
    service_provider: "",
  };

  const [attendence, setattendence] = useState(initialAttendenceState);

  const attendence_details_infoget = async () => {
    try {
      const resp = await axios.post(
        `${base_url}/add_attendence_details`,
        attendence
      );
      if (resp.status === 200) {
        toast.success("Attendence is marked.", { autoClose: 2000 });
        setattendence(initialAttendenceState); // Reset the form fields
        setSelectedEmployees([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   get_emp_data();
  // }, []);

  // const [data, setdata] = useState([]);
  // const get_emp_data = async () => {
  //   try {
  //     const resp = await axios.get(
  //       `${base_url}/employee_details_get`
  //     );
  //     setdata(resp.data.employee);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  function getTrainer() {
    const trainerId = document.getElementById("trainer").value;

    if (trainerId === "If Internal") {
      setattendence({ ...attendence, trainer: "Internal" });
      document.getElementById("employee-div").style.display = "block";
      document.getElementById("service-provider").style.display = "none";
    } else if (trainerId === "If External") {
      setattendence({ ...attendence, trainer: "External" });
      document.getElementById("service-provider").style.display = "block";
      document.getElementById("employee-div").style.display = "none";
    }
  }

  // function Loader2() {
  //     <Loader/>
  // }


  // const [inputValue, setInputValue] = useState("");
  // const [employeeIds, setEmployeeIds] = useState([]);

  // const handleChange = (e) => {
  //   setInputValue(e.target.value); // Keep track of the current input value
  //   // Also update your attendance state with the current value
  //   setattendence((prevAttendance) => ({
  //     ...prevAttendance,
  //     employee_id_atten: e.target.value,
  //   }));
  // };

  // // const handleKeyDown = (e) => {
  // //   if (e.key === "Enter" || e.key === ",") {
  // //     e.preventDefault();
  // //     if (inputValue.trim()) {
  // //       const updatedIds = [...employeeIds, inputValue.trim()];
  // //       setEmployeeIds(updatedIds);
  // //       setInputValue(""); // Clear the input field

  // //       // Update attendance state with the list of employee IDs
  // //       setattendence((prevAttendance) => ({
  // //         ...prevAttendance,
  // //         employee_id_atten: updatedIds.join(","), // Save IDs as a comma-separated string or however you need for the database
  // //       }));
  // //     }
  // //   }
  // // };

  // const removeId = (indexToRemove) => {
  //   const updatedIds = employeeIds.filter((_, index) => index !== indexToRemove);
  //   setEmployeeIds(updatedIds);
  //   setattendence((prevAttendance) => ({
  //     ...prevAttendance,
  //     employee_id_atten: updatedIds.join(","), // Update the state after removing
  //   }));
  // };


  // Get training details
  const[details, setdetails] = useState([]);
  const get_details = async () => {
      try {
          const resp = await axios.get(`${base_url}/event_details_get`);      
          setdetails(resp.data)
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
    get_details();
  }, []);


  // // Add employee to the table
  // const [employee, setemployee] = useState([]);
  // function EmployeeList(event) {
  //   const selectedEmployee = JSON.parse(event.target.value);
  //   setemployee([...employee,selectedEmployee]);
  //   console.log(selectedEmployee); // Logs the full object
  //   setattendence({
  //     ...attendence,
  //     employee_id_atten:[...employee,selectedEmployee] ,
  //   });
  // }

  // function DeleteEmployee(item) {
  //   const updatedEmployees = employee.filter((item1) => item1._id !== item._id);
  //   setemployee(updatedEmployees); // Update the state with the new array
  // }


  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  // Fetch options from the backend
  const fetchOptions = async () => {
    try {
      const response = await axios.get(`${base_url}/employee_details_get`);
      const formattedOptions = response.data.employee.map((emp) => ({
        value: emp.employee_id,
        label: `${emp.employee_id} - ${emp.employee_name}`,
        details: emp, // Add full details to use later
      }));
      setOptions(formattedOptions);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  // Add selected employee to the table
  const handleAddEmployee = (event) => {
    if (selectedOption) {
      const employeeExists = selectedEmployees.some(
        (emp) => emp.value === selectedOption.value
      );
      if (!employeeExists) {
        setSelectedEmployees([...selectedEmployees, selectedOption]);
        setattendence({
              ...attendence,
              employee_id_atten:[...selectedEmployees,selectedOption] ,
            });
      }
    }
  };

  // Remove employee from the table
  const handleRemoveEmployee = (id) => {
    setSelectedEmployees(selectedEmployees.filter((emp) => emp.value !== id));
  };

  return (
    <div style={{ backgroundColor: "rgba(46, 7, 63, 0.1)", padding: "20px" }}>
      <Sidebar />

      <section className="main-content-section">
        <Header />

        <div className="header-div header-two">
          <div className="title-name">
            <h5>Upload Attendence</h5>
            <p>
              <a
                onClick={() => window.location.reload()}
                style={{ cursor: "pointer", color: "#099ded" }}
              >
                Home
              </a>{" "}
              <i class="fa-solid fa-caret-right"></i>Upload Attendence
            </p>
          </div>
        </div>

        <div className="attendene-list">
          <div className="title-div-two">
            <h2>
              Upload <span style={{ fontWeight: "300" }}>Attendence</span>
            </h2>
          </div>

          <div className="upload-attendene" style={{ fontSize: "14px" }}>
            <div className="info-div-item">
              <label>Training Name</label>
              <select
                className="training-name"
                name="training-name"
                id="training_name_attendence"
                onChange={(e) => {
                  setattendence({
                    ...attendence,
                    training_name_attendence: e.target.value,
                  });
                }}
              >
               <option>-- Select Name --</option>
                {details.map((item) => (
                        <option key={item.training_name}>
                          {item.training_name}
                        </option>
                      ))}
              </select>
            </div>
            <div className="info-div-item">
              <label>Training Type</label>
              {/* <input
                type="text"
                id="training_type_attendence"
                onChange={(e) => {
                  setattendence({
                    ...attendence,
                    training_type_attendence: e.target.value,
                  });
                }}
              /> */}
              <select id="training_type_attendence" 
                onChange={(e) => {
                  setattendence({
                    ...attendence,
                    training_type_attendence: e.target.value,
                  });
                }}>
                <option>-- Select Type --</option>
                <option>Type - 1</option>
                <option>Type - 1</option>
                <option>Type - 1</option>
                <option>Type - 1</option>
              </select>
            </div>
            <div className="info-div-item">
              <label>Training Category</label>
              {/* <input
                type="text"
                id="training_category_attendence"
                onChange={(e) => {
                  setattendence({
                    ...attendence,
                    training_category_attendence: e.target.value,
                  });
                }}
              /> */}
              <select id="training_category_attendence"
                onChange={(e) => {
                  setattendence({
                    ...attendence,
                    training_category_attendence: e.target.value,
                  });
                }}>
                <option>-- Select Category --</option>
                {details.map((item) => (
                        <option key={item.training_category}>
                          {item.training_category}
                        </option>
                      ))}
              </select>
            </div>
            <div className="date-div">
              <div className="info-div-item">
                <label>Date from</label>
                <input
                  type="date"
                  id="date_from_atten"
                  onChange={(e) => {
                    setattendence({
                      ...attendence,
                      date_from_atten: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="info-div-item">
                <label>Date to</label>
                <input
                  type="date"
                  id="date_to_atten"
                  onChange={(e) => {
                    setattendence({
                      ...attendence,
                      date_to_atten: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="time-div">
              <div className="info-div-item">
                <label>Time from</label>
                <input
                  type="time"
                  id="time_from_atten"
                  onChange={(e) => {
                    setattendence({
                      ...attendence,
                      time_from_atten: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="info-div-item">
                <label>Time to</label>
                <input
                  type="time"
                  id="time_to_atten"
                  onChange={(e) => {
                    setattendence({
                      ...attendence,
                      time_to_atten: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div className="info-div-item">
              <label>Training Venue</label>
              <select
                className="training-venue"
                name="training-venue"
                id="training_venue_atten"
                onChange={(e) => {
                  setattendence({
                    ...attendence,
                    training_venue_atten: e.target.value,
                  });
                }}
              >
                <option>-- Select Venue --</option>
                {details.map((item) => (
                        <option key={item.venue_name}>
                          {item.venue_name}
                        </option>
                      ))}
              </select>
            </div>
            
            <div>
            <div className="info-div-item">
              <label>Trainer</label>
              <select
                className="trainer"
                name="trainer"
                id="trainer"
                onChange={getTrainer}
              >
                <option>-- Select Trainer --</option>
                <option>If Internal</option>
                <option>If External</option>
              </select>
            </div>
            <div
              className="info-div-item trainer-div"
              style={{ display: "none" }}
              id="employee-div"
            >
              <label>Trainer Employee Id</label>
              <input type="text" id="trainer_emp_id" placeholder="Trainer employee Id" onChange={(e) => {
                  setattendence({
                    ...attendence,
                    trainer_emp_id: e.target.value,
                  });
                }} />
              <label>Employee's Id</label>
                    {/* <select onChange={ EmployeeList } id="employee_id_atten">
                      <option>Select Employee</option>
                      {data.map((item) => (
                        <option key={item.employee_id} value={JSON.stringify(item)}>
                          {item.employee_id} - {item.employee_name}
                        </option>
                      ))}
                    </select> */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Select
                        options={options}
                        value={selectedOption}
                        id="employee_id_atten"
                        onChange={(selected) => setSelectedOption(selected)}
                        placeholder="Search Employee"
                        isSearchable
                        styles={{
                          container: (base) => ({
                            ...base,
                            flex: 1,
                          }),
                        }}
                      />
                      <button onClick={handleAddEmployee} style={{ padding: "8px 12px" }}>
                        Add
                      </button>
                    </div>
              {/* <input
                type="text"
                id="employee_id_atten"
                placeholder="Enter employee Ids..."
                value={inputValue}
                onChange={handleChange} // Handle change for both input value and attendance state       
              />
              <div style={{ marginTop: "10px" }}>
                {employeeIds.map((id, index) => (
                  <div key={index} style={{ display: "inline-block", margin: "5px" }}>
                    <span style={{ padding: "5px", backgroundColor: "#e0e0e0", borderRadius: "5px" }}>
                      {id}
                      <button
                        onClick={() => removeId(index)}
                        style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}
                      >
                        x
                      </button>
                    </span>
                  </div>
                ))}
              </div> */}
              <label>Upload bulk employee</label>
              <FileUpload/>

              <div className='all-added-employee-list'>
                  <h5 style={{marginBottom:"1.5rem"}}>All added employee's list</h5>

                  <div className='employee-lists'>
                    <table id="employeeTable" className="table table-striped table-bordered" style={{ fontSize: '14px' }}>
                      <thead>
                        <tr>
                          <th>Sr. No.</th>
                          <th>Employee Name</th>
                          <th>Employee ID</th>
                          <th>Date of join</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                    {selectedEmployees.map((emp, index) => (
                      <tr key={emp.value}>
                        <td>{index + 1}</td>
                        <td>{emp.details.employee_name}</td>
                        <td>{emp.details.employee_id}</td>
                        <td>{emp.details.date_of_join}</td>
                        <td>
                          <button onClick={() => handleRemoveEmployee(emp.value)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                    </table>
                  </div>
              </div>
            </div>
            <div
              className="info-div-item trainer-div"
              style={{ display: "none" }}
              id="service-provider"
            >
              <label>Service Provider Name</label>
              <select
                className="service-provider"
                name="service-provider"
                id="service_provider"
                onChange={(e) => {
                  setattendence({
                    ...attendence,
                    service_provider: e.target.value,
                  });
                }}
              >
                <option>-- Select Service Provider --</option>
                <option>Provider 1</option>
                <option>Provider 2</option>
                <option>Provider 3</option>
                <option>Provider 4</option>
              </select>
            </div>
            </div>

            {/* <div className="info-div-item" id="">
              <label>Employee Id</label>
              <select
                className="employee-id"
                name="employee-id"
                id="employee_idtwo_atten"
                onChange={(e) => {
                  setattendence({
                    ...attendence,
                    employee_idtwo_atten: e.target.value,
                  });
                }}
              >
                {data.map((emp) => (
                  <option>{emp.employee_id}</option>
                ))}
              </select>
            </div>       */}
          </div>

          <div className="upload-btn" style={{ width: "5rem" }}>
            <button
              className="form-control form-control-sm"
              style={{
                backgroundColor: "#7A1CAC",
                color: "#ffffff",
                height: "3rem",
              }}
              onClick={attendence_details_infoget}
            >
              Upload
            </button>
          </div>
        </div>
      </section>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
      <ToastContainer />
    </div>
  );
}

export default Attendence;
