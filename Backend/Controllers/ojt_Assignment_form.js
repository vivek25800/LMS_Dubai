const OJTAssignment = require('../Modal/ojt_Assignment');

const postOjtAssignment = async (req, res) => {
    try {
      const { ojt_title, ojt_code, employees, activities, schedule } = req.body;
  
      // Validate required fields
      if (!ojt_title || !ojt_code || !Array.isArray(employees) || !schedule) {
        return res.status(400).json({ error: 'All fields are required, including schedule details.' });
      }
  
      const { dateFrom, dateTo, timeFrom, timeTo } = schedule;
  
      // Validate schedule dates and times
      const now = new Date();
      const scheduleStart = new Date(dateFrom + 'T' + timeFrom);
      const scheduleEnd = new Date(dateTo + 'T' + timeTo);
  
      if (scheduleStart < now || scheduleEnd < now) {
        return res.status(400).json({ error: 'You cannot assign past dates or times.' });
      }
  
      if (scheduleStart > scheduleEnd) {
        return res.status(400).json({ error: 'End date/time must be later than start date/time.' });
      }
  
      // Check for existing assignment
      const existingAssignment = await OJTAssignment.findOne({
        ojt_code,
        'employees.employeeId': { $in: employees.map((e) => e.employeeId) },
      });
  
      if (existingAssignment) {
        return res.status(400).json({ message: 'Some employees are already assigned to this OJT!' });
      }
  
      // Save the new assignment
      const assignment = new OJTAssignment({
        ojt_title,
        ojt_code,
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
      res.status(201).json({ message: 'OJT Assignment created successfully!', assignment });
    } catch (error) {
      console.error('Error assigning OJT:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  

  const getOjtAssignedEmployee = async (req, res) => {
    try {
      const { ojt_code } = req.params;
  
      // Fetch the OJT assignment by OJT code
      const assignment = await OJTAssignment.findOne({ ojt_code });
  
      // Check if the assignment exists
      if (!assignment) {
        return res.status(404).json({ message: 'No assignments found for this OJT!' });
      }
  
      // Prepare the response
      const response = {
        ojt_title: assignment.ojt_title,
        ojt_code: assignment.ojt_code,
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
  

module.exports = { postOjtAssignment, getOjtAssignedEmployee };