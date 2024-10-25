import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../StyleCode/calaender.css'
import AddNomination from './AddNomination';
import { base_url } from "./Utils/base_url";

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
            </div>
        )}

        </div>
    );
};

export default TrainingCalendar;