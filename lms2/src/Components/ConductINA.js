import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { base_url } from "./Utils/base_url";

function ConductINA() {
  const [inaTitles, setInaTitles] = useState([]); // Stores all OJA titles
  const [selectedIna, setSelectedIna] = useState(null); // Stores selected OJA details
  const [finalScore, setFinalScore] = useState(null); // Stores the final overall score

  // Fetch all OJA titles when the component mounts
  useEffect(() => {
    const fetchInaTitles = async () => {
      try {
        const response = await axios.get(`${base_url}/get_ina_dataInfo`); 
        setInaTitles(response.data.create_ina); // Ensure correct response structure
      } catch (error) {
        console.error("Error fetching OJA titles:", error);
      }
    };

    fetchInaTitles();
  }, []);

  // Handle OJA selection and fetch its details
  const handleInaSelect = async (e) => {
    const inaId = e.target.value; // Get selected OJA ID

    try {
      const response = await axios.get(`${base_url}/get_ina_dataById/${inaId}`); 
      setSelectedIna(response.data.create_ina); // Save selected OJA details in state
    } catch (error) {
      console.error("Error fetching OJA details:", error);
    }
  };

  // Handle rating change for each activity description
  const handleRatingChange = (activityIndex, contentIndex, newRating) => {
    const updatedIna = { ...selectedIna };
    updatedIna.activities[activityIndex].content[contentIndex].rating = newRating;
    setSelectedIna(updatedIna); // Update the selected OJA with the new rating
  };

  // Function to calculate the average rating of each activity
  const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) return "N/A";
    const sum = ratings.reduce((total, rating) => total + Number(rating), 0);
    const avg = sum / ratings.length;
    const percentage = (avg / 5) * 100; // Assuming rating is out of 5
    return `${percentage.toFixed(2)}%`;
  };

  // Function to calculate the final overall score
  const calculateFinalScore = () => {
    if (!selectedIna || selectedIna.activities.length === 0) return "N/A";

    const allRatings = selectedIna.activities.flatMap(activity =>
      activity.content.map(content => content.rating)
    ).filter(rating => rating); // Remove any undefined ratings

    if (allRatings.length === 0) return "N/A";
    
    const sum = allRatings.reduce((total, rating) => total + Number(rating), 0);
    const avg = sum / allRatings.length;
    const percentage = (avg / 5) * 100; // Assuming rating is out of 5
    return `${percentage.toFixed(2)}%`;
  };

  // Handle form submission and save data to the database
  const handleSubmit = async () => {
    try {
      const updatedIna = { ...selectedIna, finalScore: calculateFinalScore() };
      const response = await axios.put(`${base_url}/update_ina_data/${selectedIna._id}`, updatedIna);
      toast.success('INA updated successfully');
    } catch (error) {
      console.error("Error updating INA:", error);
      toast.error('Failed to update INA');
    }
  };

  return (
    <div>
      <style>
        {`
        .oja-info-div{
        width: 90%;
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
        .rating-label{
        font-weight: 600;
        opacity: 1;
        }
        .finalscore-div{
        border: 1px solid rgba(0,0,0,0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        border-radius: 10px;
        box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
        }
        .finalscore-div button{
        height: 2.5rem;
        width: 7rem;
        background-color: #7A1CAC;
        }
        .finalscore-div button:hover{
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
      <div className="conducting-oja">
        <div className="title-div-two">
          <h2>
            Conduct <span style={{ fontWeight: "300" }}>INA</span>
          </h2>
        </div>

        <div className="oja-info-div">
          <div className="info-div-item">
            <label>Select INA Title</label>
            <select onChange={handleInaSelect}>
              <option value="">--Select INA--</option>
              {inaTitles.map((ina) => (
                <option key={ina._id} value={ina._id}>
                  {ina.ina_title}
                </option>
              ))}
            </select>
          </div>

          {selectedIna && (
            <>
              <div className="info-div-item ojt-code-div">
                <label>INA Code</label>
                <p>{selectedIna.ina_code}</p>
              </div>

              <div className='add-attendies'>
              <h5>Add Employee</h5>
              <div className="upload-attendene" style={{ fontSize: "14px" }}>
                <div className="info-div-item">
                <label>Employee ID</label>
                <input type="text" placeholder="Enter Employee Id" />
                </div>
                <div className="info-div-item">
              <label>Select INA</label>
              <select
                className="select-ina"
                name="select-ina"
                id="select-ina-item"
              >
                <option>100INA</option>
                <option>200INA</option>
                <option>300INA</option>
                <option>400INA</option>
              </select>
            </div>
            <div className="info-div-item">
            <label>Assessment Name</label>
            <input type='text' id='assessment-name' placeholder="Enter assessment name" />
            </div>
            {/* <table id="example" class="table table-striped table-bordered" cellspacing="0" style={{fontSize:"14px"}} >
                <thead>
                    <tr>
                        <td>Sr no.</td>
                        <td>Questions</td>
                        <td>Rating</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>What is Quantum Mechanics</td>
                        <td>
                          <select>
                            <option>Select</option>
                            <option> 1 </option>
                            <option> 2 </option>
                            <option> 3 </option>
                            <option> 4 </option>
                            <option> 5 </option>
                          </select>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>What is Motion of Inertia</td>
                        <td>
                          <select>
                            <option>Select</option>
                            <option> 1 </option>
                            <option> 2 </option>
                            <option> 3 </option>
                            <option> 4 </option>
                            <option> 5 </option>
                          </select>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <h6>Score Avg</h6>
                    <p>66%</p>
                </tfoot>
            </table> */}
            </div>
            </div>

              {selectedIna.activities.map((activity, activityIndex) => (
                <div key={activityIndex} className="activity-div">
                  <div className="info-div-item">
                    <h4>Activity {activityIndex + 1}</h4>
                  </div>

                  <div className="info-div-item">
                    <label>Title</label>
                    <p>{activity.activity_ina_title}</p>
                  </div>

                  <div className="info-div-item">
                    <label>Content</label>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Sr No.</th>
                          <th>Questions</th>
                          <th>Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activity.content.map((content, contentIndex) => (
                          <tr key={contentIndex}>
                            <td>{content.srno}</td>
                            <td>{content.description}</td>
                            <td>
                              <select
                                value={content.rating || ""}
                                onChange={(e) =>
                                  handleRatingChange(activityIndex, contentIndex, e.target.value)
                                }
                              >
                                <option value="">--Select Rating--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="info-div-item">
                    <label className="rating-label">Overall Score for this Activity</label>
                    <p>
                      {calculateAverageRating(
                        activity.content.map((c) => c.rating)
                      )}
                    </p>
                  </div>
                </div>
              ))}

                <div className="finalscore-div">
              <div className="info-div-item">
                <label className="rating-label">Final Overall Score</label>
                <p>{calculateFinalScore()}</p>
              </div>

              <button onClick={handleSubmit}>Submit</button>
              </div>
            </>
          )}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default ConductINA;
