import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { base_url } from "./Utils/base_url";

const GetOJTInfo = () => {
  const [ojtTitles, setOjtTitles] = useState([]); // Stores all OJT titles
  const [selectedOjt, setSelectedOjt] = useState(null); // Stores selected OJT details
  const [checkStates, setCheckStates] = useState({}); // Stores the state of checkboxes for each content item

  // Fetch all OJT titles when the component mounts
  useEffect(() => {
    const fetchOjtTitles = async () => {
      try {
        const response = await axios.get(`${base_url}/get_Ojt_info`); 
        setOjtTitles(response.data.create_ojt); // Ensure correct response structure
      } catch (error) {
        console.error("Error fetching OJT titles:", error);
      }
    };

    fetchOjtTitles();
  }, []);

  // Handle OJT selection and fetch its details
  const handleOjtSelect = async (e) => {
    const ojtId = e.target.value; // Get selected OJT ID

    try {
      const response = await axios.get(`${base_url}/get_ojts_byid/${ojtId}`); 
      console.log(response.data.create_ojt); // Check the structure of the response
      setSelectedOjt(response.data.create_ojt); // Save selected OJT details in state
      initializeCheckStates(response.data.create_ojt);
    } catch (error) {
      console.error("Error fetching OJT details:", error);
    }
  };

  // Initialize checkbox states for Trainer and Employee
  const initializeCheckStates = (ojt) => {
    const newCheckStates = {};
    ojt.activities.forEach((activity, activityIndex) => {
      activity.content.forEach((content, contentIndex) => {
        newCheckStates[`${activityIndex}-${contentIndex}`] = {
          trainerChecked: content.trainerChecked || false,
          employeeChecked: content.employeeChecked || false,
        };
      });
    });
    setCheckStates(newCheckStates);
  };

  // Handle checkbox change
  const handleCheckboxChange = (activityIndex, contentIndex, type) => {
    const key = `${activityIndex}-${contentIndex}`;
    setCheckStates((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [type]: !prev[key][type],
      },
    }));
  };

  // Handle update to database
  const updateCheckStatesInDatabase = async () => {
    try {
      await axios.post(`${base_url}/update_ojt_info`, {
        ojtId: selectedOjt._id,
        updatedActivities: selectedOjt.activities.map((activity, activityIndex) => ({
          ...activity,
          content: activity.content.map((content, contentIndex) => ({
            ...content,
            trainerChecked: checkStates[`${activityIndex}-${contentIndex}`]?.trainerChecked || false,
            employeeChecked: checkStates[`${activityIndex}-${contentIndex}`]?.employeeChecked || false,
          })),
        })),
      });
      toast.success('OJT data updated successfully!');
    } catch (error) {
      console.error('Error updating OJT data:', error);
    }
  };


// Get Employee Id's
  const [options, setOptions] = useState([]);
  const fetchOptions = async () => {
    try {
      const response = await axios.get(`${base_url}/employee_details_get`);
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

  useEffect(() => {
    fetchOptions();
    delete_employee();
  }, []);

  return (
    <div>
        <style>
            {`
            .oja-info-div{
            width: 100%;
            margin: 0 auto;
            }
            .activity-div{
            border: 1px solid rgba(0,0,0,0.2);
            padding: 10px 2rem;
            margin-bottom: 2rem;
            border-radius: 10px;
            box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
            }
            .table{
            border: 1px solid #000;
            }
            .sbmt-btn button{
            height: 2.5rem;
            width: 7rem;
            background-color: #7A1CAC;
            }
            .sbmt-btn button:hover{
            background-color: #7a1cacc6;
            }
            .add-attendies{
            border: 1px solid rgba(0,0,0,0.2);
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
            margin-bottom: 2rem;
            }
            .ojt-code-div{
            width: fit-content;
            border: 1px solid rgba(0,0,0,0.2);
            box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
            padding: 1rem 2rem;
            border-radius: 10px;
            }
            `}
        </style>
      <div className="conducting-ojt">

        <div className="oja-info-div">
          <div className="info-div-item">
            <label>Select OJT Title</label>
            <select onChange={handleOjtSelect}>
              <option value="">--Select OJT--</option>
              {ojtTitles.map((ojt) => (
                <option key={ojt._id} value={ojt._id}>
                  {ojt.ojt_title}
                </option>
              ))}
            </select>
          </div>

          {selectedOjt && (
            <>

              <div className="info-div-item ojt-code-div">
                <label>OJT Code</label>
                <p>{selectedOjt.ojt_code}</p>
              </div>

              <div className='add-attendies'>
                <h5>Add Employee</h5>
                <div className="upload-attendene" style={{ fontSize: "14px" }}>
                
                <div className="info-div-item">
                  <label>Employee ID</label>
                  <select style={{width: "80%"}}>
                      <option>Select Employee</option>
                      {options.map((item) => (
                        <option key={item.employee_id}>
                          {item.employee_id} - {item.employee_name}
                        </option>
                      ))}
                    </select>
                </div>

                <div className="date-div">
                  <div className="info-div-item">
                    <label>Date from</label>
                    <input type="date" id="date_from_atten" />
                  </div>
                  <div className="info-div-item">
                    <label>Date to</label>
                    <input type="date" id="date_to_atten" />
                  </div>
                </div>
                
                <div className="time-div">
                  <div className="info-div-item">
                    <label>Time from</label>
                    <input type="time" id="time_from_atten" />
                  </div>
                  <div className="info-div-item">
                    <label>Time to</label>
                    <input type="time" id="time_to_atten" />
                  </div>
                </div>

                {/* <div className="info-div-item">
                  <label>Select OJT</label>
                  <select
                    className="select-ojt"
                    name="select-ojt"
                    id="select-ojt-id"
                    onChange={handleOjtSelect}
                    // onChange={handleOJTChange}
                  >
                    <option value="">-- Select OJT--</option>
                    {ojtTitles.map((ojt) => (
                      <option key={ojt._id} value={ojt._id}>
                        {ojt.ojt_title}
                      </option>
                    ))}
                  </select>
                </div> */}
                
              </div>
              </div>

              {selectedOjt.activities.map((activity, activityIndex) => (
                <div key={activityIndex} className="activity-div">
                  <div className="info-div-item">
                    <h4>Activity {activityIndex + 1}</h4>
                  </div>

                  <div className="info-div-item">
                    <label>Title</label>
                    <p>{activity.activity_ojt_title}</p>
                  </div>

                  <div className="info-div-item">
                    <label>Content</label>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Sr No.</th>
                          <th>Description</th>
                          <th>Trainer Check</th>
                          <th>Employee Check</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activity.content.map((content, contentIndex) => (
                          <tr key={contentIndex}>
                            <td>{content.srno}</td>
                            <td>{content.description}</td>
                            <td>
                              <input
                                type="checkbox"
                                checked={checkStates[`${activityIndex}-${contentIndex}`]?.trainerChecked || false}
                                onChange={() => handleCheckboxChange(activityIndex, contentIndex, 'trainerChecked')}
                              />
                            </td>
                            <td>
                              <input
                                type="checkbox"
                                checked={checkStates[`${activityIndex}-${contentIndex}`]?.employeeChecked || false}
                                onChange={() => handleCheckboxChange(activityIndex, contentIndex, 'employeeChecked')}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              <div className="info-div-item sbmt-btn">
                <button onClick={updateCheckStatesInDatabase}>Submit</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetOJTInfo;
