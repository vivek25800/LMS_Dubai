import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { base_url } from "./Utils/base_url";

function ConductingOJA() {
  const [ojaTitles, setOjaTitles] = useState([]); // Stores all OJA titles
  const [selectedOja, setSelectedOja] = useState(null); // Stores selected OJA details
  const [finalScore, setFinalScore] = useState(null); // Stores the final overall score
  const [ratingRange, setRatingRange] = useState([]);

  // Fetch all OJA titles when the component mounts
  useEffect(() => {
    const fetchOjaTitles = async () => {
      try {
        const response = await axios.get(`${base_url}/get_oja_info`); 
        setOjaTitles(response.data.create_oja); // Ensure correct response structure
      } catch (error) {
        console.error("Error fetching OJA titles:", error);
      }
    };

    fetchOjaTitles();
  }, []);

  // Handle OJA selection and fetch its details
  const handleOjaSelect = async (e) => {
    const ojaId = e.target.value; // Get selected OJA ID

    try {
      const response = await axios.get(`${base_url}/get_oja_info_byids/${ojaId}`); 
      const selectedOjaData = response.data.create_oja;
      setSelectedOja(selectedOjaData); // Save selected OJA details in state
      
      // Set the rating range based on the selected OJA's rating range
      if (selectedOjaData.ratingRange === "1 -- 5") {
        setRatingRange([1, 2, 3, 4, 5]);
      } else if (selectedOjaData.ratingRange === "1 -- 10") {
        setRatingRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      } else {
        setRatingRange([]); // Clear the range if it's not valid
      }
    } catch (error) {
      console.error("Error fetching OJA details:", error);
    }
  };

  // Handle rating change for each activity description
  const handleRatingChange = (activityIndex, contentIndex, newRating) => {
    const updatedOja = { ...selectedOja };
    updatedOja.activities[activityIndex].content[contentIndex].rating = newRating || "";
    setSelectedOja(updatedOja); // Update the selected OJA with the new rating
    console.log(`Rating for activity ${activityIndex + 1} is set to ${newRating}`);
  };

  // Function to calculate the average rating of each activity
  const calculateAverageRating = (ratings) => {
    if (ratings.length === 0) return "N/A";
    const sum = ratings.reduce((total, rating) => total + Number(rating), 0);
    const avg = sum / ratings.length;
    const percentage = (avg / ratingRange.length) * 100; // Adjust based on range
    return `${percentage.toFixed(2)}%`;
  };

  // Function to calculate the final overall score
  const calculateFinalScore = () => {
    if (!selectedOja || selectedOja.activities.length === 0) return "N/A";

    const allRatings = selectedOja.activities.flatMap(activity =>
      activity.content.map(content => content.rating)
    ).filter(rating => rating); // Remove any undefined ratings

    if (allRatings.length === 0) return "N/A";
    
    const sum = allRatings.reduce((total, rating) => total + Number(rating), 0);
    const avg = sum / allRatings.length;
    const percentage = (avg / ratingRange.length) * 100; // Adjust based on range
    return `${percentage.toFixed(2)}%`;
  };

  // Handle form submission and save data to the database
  const handleSubmit = async () => {
    try {
      const updatedOja = { ...selectedOja, finalScore: calculateFinalScore() };
      await axios.put(`${base_url}/update_oja_info/${selectedOja._id}`, updatedOja);
      toast.success('OJA updated successfully');
    } catch (error) {
      console.error("Error updating OJA:", error);
      toast.error('Failed to update OJA');
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
        .finalscore-div{
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
        `}
      </style>
      <div className="conducting-oja">
        <div className="title-div-two">
          <h2>
            View <span style={{ fontWeight: "300" }}>OJA</span>
          </h2>
        </div>

        <div className="oja-info-div">
          <div className="info-div-item">
            <label>Select OJA Title</label>
            <select onChange={handleOjaSelect}>
              <option value="">--Select OJA--</option>
              {ojaTitles.map((oja) => (
                <option key={oja._id} value={oja._id}>
                  {oja.oja_title}
                </option>
              ))}
            </select>
          </div>

          {selectedOja && (
            <>
              <div className="info-div-item ojt-code-div">
                <label>OJA Code</label>
                <p>{selectedOja.oja_code}</p>
              </div>

              
<div className='add-attendies'>
<h5>Add Employee</h5>
<div className="upload-attendene" style={{ fontSize: "14px" }}>
<div className="info-div-item">
<label>Employee ID</label>
<input type="text" placeholder="Enter Employee Id" />
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
</div>
</div>

              {selectedOja.activities.map((activity, activityIndex) => (
                <div key={activityIndex} className="activity-div">
                  <div className="info-div-item">
                    <h4>Activity {activityIndex + 1}</h4>
                  </div>

                  <div className="info-div-item">
                    <label>Title</label>
                    <p>{activity.activity_oja_title}</p>
                  </div>

                  <div className="info-div-item">
                    <label>Content</label>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Sr No.</th>
                          <th>Description</th>
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
                              value={content.rating || ""} // Set a default value if rating is undefined
                              onChange={(e) =>
                                handleRatingChange(activityIndex, contentIndex, e.target.value)
                              }
                            >
                              <option value="">--Select Rating--</option>
                              {ratingRange.map((rating) => (
                                <option key={rating} value={rating}>
                                  {rating}
                                </option>
                              ))}
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
      <ToastContainer />
    </div>
  );
}

export default ConductingOJA;
