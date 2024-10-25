import React, {useEffect, useState} from 'react'
import $ from 'jquery'; // Import jQuery
import 'datatables.net'; // Import DataTables
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify';
import { base_url } from "./Utils/base_url";

function AddNomination({selectedTraining}) {
  useEffect(() => {
    get_details();
  }, []);
  
  const [details, setdetails] = useState([]);

  const get_details = async () => {
    try {
      const resp = await axios.get(`${base_url}/event_details_get`);
      setdetails(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [options, setOptions] = useState([]);
  const fetchOptions = async () => {
    try {
      const response = await axios.get(`${base_url}/employee_details_get`, );
      setOptions(response.data.employee);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const delete_employee = async (employee) => {
    try {
      
      const id = employee._id;
      const resp = await axios.delete(`${base_url}/employee_deletes/${id}`);
      toast.success("Employee data deleted", {autoClose: "2000"});
      setOptions(resp.data.employee);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  const fetch_Students = async () => {
    try {
      const resp = await axios.get('');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOptions();
    delete_employee();
  }, []); // Fetch options on mount

  const [show, setshow] = useState(false);
  
  const handleClose = () => setshow(false);
  const handleshow = () => setshow(true);

  // Initialize DataTable when modal opens
  useEffect(() => {
    if (show) {
      const table = $('#employeeTable').DataTable({
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
          const footer = $('#employeeTable tfoot tr');
          $('#employeeTable thead').append(footer);
        },
      });

      $('#employeeTable thead').on('keyup', 'input', function () {
        table.column($(this).parent().index()).search(this.value).draw();
      });

      return () => {
        table.destroy(true); // Clean up
      };
    }
  }, [show]); // Re-run the effect when the modal is shown

  return (
    <div>
      <style>{`
        /* CSS styles go here */
        .calendar-view{
          border-radius: 10px
        }
        .add-employee{
          background-color: #ffffff;
          margin-bottom: 1.5rem;
          padding: 2rem 1.5rem;
          border-radius: 10px;
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
        }
        .button-div button,
        .send-mail-div button{
          background-color: #7A1CAC;
          height: 2.5rem;
          border: none;
          margin: 0 8px;
          color: #ffffff;
          font-weight: 500;
          border-radius: 1.5rem;
          transition: all 0.3s ease;
        }
        th{
          opacity: 0.7;
          font-weight: normal;
          font-size: 1rem;
        }
          td{
          font-size: 14px;
          }
        thead input {
          width: 100%;
          padding: 3px;
          box-sizing: border-box;
        }
        .nominee-data{
          background-color: #ffffff;
          padding: 2rem 1.5rem;
          border-radius: 10px;
          margin-top: 1.5rem;
          margin-bottom: 10px;
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
        }
        .send-mail-div{
          display: flex;
          justify-content: space-between;
          margin-top: 2rem; 
        }
          .send-mail-div input{
          border: 2px solid #7A1CAC;
          border-radius: 5px;
          padding-left: 10px;
          width: 32%;
          }
          #dt-length-0{
          width: 8%;
          }
          .dt-paging-button{
          background-color: #ffffff;
          box-shadow: inset 0 5px 10px rgba(0,0,0,.1), 0 2px 5px rgba(0,0,0,.5);
          color: #000;
          margin: 0 5px;
          width: 2.5rem;
          transition: 0.3s all ease;
          }
          .dt-paging-button:hover{
          background-color: #7A1CAC;
          color: #ffffff;
          }
          .dt-search{
          float: right;
          margin-bottom: 14px;
          }
          .dt-search #dt-search-0{
          height: 2.5rem;
          border-radius: 5px;
          border: none;
          border: 2px solid #7A1CAC;
          padding-left: 10px;
          }
          .dt-search #dt-search-0:focus{
          outline: none;
          }
          .button-div{
          margin-top: 1rem;
          width: 100%;
          padding-left: 74%;
          }
      `}</style>

      <button className='add_nominee'
        style={{
          backgroundColor: "#7A1CAC",
          height: "2.5rem",
          width:"10rem",
          border: "none",
          color: "#ffffff",
          fontWeight: "500",
          borderRadius: "5px",
          transition: "all 0.3s ease",
          marginBottom: "1.3rem"
        }}
        onClick={handleshow}
      >
        Add Nomination
      </button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title> <h5>Add Nomination for {selectedTraining?.training_name}</h5> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="add-employee">
            <h5>Training User Addition Details</h5>
            <table style={{width:"100%"}}>
              <thead>
                <tr>
                  <th>Employee ID / Employee Name</th>
                  <th>Training Name</th>
                  <th>Training Schedule Date From</th>
                  <th>Training Schedule Date To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select style={{width: "80%"}}>
                      <option>Select Employee</option>
                      {options.map((item) => (
                        <option key={item.employee_id}>
                          {item.employee_id} - {item.employee_name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{selectedTraining?.training_name}</td>
                  <td>{new Date(selectedTraining?.from_date).toLocaleString()}</td>
                  <td>{new Date(selectedTraining?.to_date).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
            <div className='button-div'>
                  <button style={{width:"5rem"}}>Back</button>
                  <button style={{width:"10rem"}}>Add Employee</button>
                </div>
          </div>

          <div className='nominee-data'>
              <h5 style={{marginBottom:"2rem"}}>Student's and Employee's data</h5>

              <table id="employeeTable" className="table table-striped table-bordered" style={{ fontSize: '14px' }}>
                <thead>
                  <tr>
                    <th><input type='checkbox' /> Select All</th>
                    <th>Event code</th>
                    <th>Employee name</th>
                    <th>Emp id</th>
                    <th>Emp email</th>
                    <th>Designation</th>
                    <th>Mail sent</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  Array.isArray(options) ?
                  options.map((employee, index) => (
                    <tr key={index}>
                      <td><input type='checkbox' /> {index + 1}</td>
                      <td>Event code</td>
                      <td>{employee.employee_name}</td>
                      <td>{employee.employee_id}</td>
                      <td>{employee.employee_email}</td>
                      <td>{employee.designation}</td>
                      <td>Mail Sent</td>
                      <td><button onClick={() =>delete_employee(employee)}>Delete</button></td>
                    </tr>
                  )):[]}
                </tbody>
              </table>

              <div className='send-mail-div'>
                <input type='text' />
                <div>
                  <button style={{width:"5rem"}}>Close</button>
                  <button style={{width:"10rem"}}>Send Email</button>
                </div>
              </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer/>
    </div>
  );
}

export default AddNomination;
