const OJAAssignment = require('../Modal/oja_Assignment');

const postOJAAssignment = async (req, res) => {
    try {
      const { oja_title, oja_code, employees, activities, schedule } = req.body;
  
      // Validate required fields
      if (!oja_title || !oja_code || !Array.isArray(employees) || !schedule) {
        return res.status(400).json({ error: 'All fields are required, including schedule details.' });
      }
  
      const { dateFrom, dateTo, timeFrom, timeTo } = schedule;
  
      // Validate schedule dates (ignore time)
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to the start of today for comparison
      const scheduleStart = new Date(dateFrom);
      const scheduleEnd = new Date(dateTo);
  
      if (scheduleStart < today || scheduleEnd < today) {
        return res.status(400).json({ error: 'You cannot assign past dates.' });
      }
  
      if (scheduleStart > scheduleEnd) {
        return res.status(400).json({ error: 'End date must be later than start date.' });
      }
  
      // Check for existing assignment
      const existingAssignment = await OJAAssignment.findOne({
        oja_code,
        'employees.employeeId': { $in: employees.map((e) => e.employeeId) },
      });
  
      if (existingAssignment) {
        return res.status(400).json({ message: 'Some employees are already assigned to this OJA!' });
      }
  
      // Save the new assignment
      const assignment = new OJAAssignment({
        oja_title,
        oja_code,
        employees,
        activities,
        schedule: {
          dateFrom,
          dateTo,
          timeFrom,
          timeTo,
        },
      });
  
      await assignment.save();
      res.status(201).json({ message: 'OJA Assignment created successfully!', assignment });
    } catch (error) {
      console.error('Error assigning OJA:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const getOJAAssignedEmployee = async (req, res) => {
    try {
      const { oja_code } = req.params;
  
      // Fetch the OJT assignment by OJT code
      const assignment = await OJAAssignment.findOne({ oja_code });
  
      // Check if the assignment exists
      if (!assignment) {
        return res.status(404).json({ message: 'No assignments found for this OJT!' });
      }
  
      // Prepare the response
      const response = {
        oja_title: assignment.oja_title,
        oja_code: assignment.oja_code,
        employees: assignment.employees,
        schedule: assignment.schedule,
        activities: assignment.activities,
      };
  
      res.status(200).json(response); // Return the assignment details
    } catch (error) {
      console.error('Error fetching assigned employees:', error);
      res.status(500).json({ error: 'Internal Server Error' }); // Handle server errors
    }
  };


  const checkEmployeeAssignmentOJA = async (req, res) => {
    try {
      const { oja_code, employees } = req.body;
  
      if (!oja_code || !Array.isArray(employees)) {
        return res.status(400).json({ error: 'OJA code and employee list are required.' });
      }
  
      const existingAssignment = await OJAAssignment.findOne({
        oja_code,
        'employees.employeeId': { $in: employees },
      });
  
      if (existingAssignment) {
        return res.status(200).json({ alreadyAssigned: true });
      }
  
      res.status(200).json({ alreadyAssigned: false });
    } catch (error) {
      console.error('Error checking employee assignment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = { postOJAAssignment, checkEmployeeAssignmentOJA, getOJAAssignedEmployee };