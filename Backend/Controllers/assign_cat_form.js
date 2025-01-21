const AssignedCAT = require('../Modal/assigned_cat');
const CATResponse = require('../Modal/cat_response');
const mongoose = require('mongoose');

// Assign CAT to multiple employees
const assignCAT = async (req, res) => {
  try {
    const { catId, employeeIds } = req.body;

    if (!catId || !employeeIds || !Array.isArray(employeeIds)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid input data'
      });
    }

    // Create assignments for each employee
    const assignments = employeeIds.map(employeeId => ({
      catId,
      employeeId
    }));

    // Check for existing assignments
    const existingAssignments = await AssignedCAT.find({
      catId,
      employeeId: { $in: employeeIds }
    });

    if (existingAssignments.length > 0) {
      const assignedEmployees = existingAssignments.map(a => a.employeeId.toString());
      // Filter out already assigned employees
      const newAssignments = assignments.filter(
        a => !assignedEmployees.includes(a.employeeId.toString())
      );
      
      if (newAssignments.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'All selected employees are already assigned this CAT'
        });
      }
      
      await AssignedCAT.insertMany(newAssignments);
    } else {
      await AssignedCAT.insertMany(assignments);
    }

    return res.status(200).json({
      success: true,
      message: 'CAT assigned successfully'
    });
  } catch (error) {
    console.error('Error assigning CAT:', error);
    return res.status(500).json({
      success: false,
      message: 'Error assigning CAT',
      error: error.message
    });
  }
};

// Get assigned CATs for an employee
const getAssignedCATs = async (req, res) => {
    try {
        const { userId } = req.params;

        // Validate userId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid user ID format'
            });
        }

        // Find all assignments for this employee
        const assignments = await AssignedCAT.find({ 
            employeeId: userId,
            status: 'pending' // Only get pending assignments
        }).populate({
            path: 'catId',
            select: 'title code timeLimit validTill' // Select only needed fields
        });

        console.log('Found assignments:', assignments);

        // Get completed CATs
        const completedResponses = await CATResponse.find({ 
            userId,
            status: 'completed'
        });
        
        const completedCATIds = new Set(
            completedResponses.map(r => r.catId.toString())
        );

        // Filter out completed CATs and transform data
        const availableCATs = assignments
            .filter(assignment => 
                assignment.catId && // Ensure catId exists
                !completedCATIds.has(assignment.catId._id.toString()) &&
                new Date(assignment.catId.validTill) > new Date() // Check if CAT is still valid
            )
            .map(assignment => ({
                _id: assignment.catId._id,
                title: assignment.catId.title,
                code: assignment.catId.code,
                timeLimit: assignment.catId.timeLimit,
                assignedDate: assignment.assignedDate
            }));

        console.log('Available CATs:', availableCATs);

        return res.status(200).json({
            success: true,
            data: availableCATs
        });
    } catch (error) {
        console.error('Error fetching assigned CATs:', error);
        return res.status(500).json({
            success: false,
            message: 'Error fetching assigned CATs',
            error: error.message
        });
    }
};

module.exports = {
  assignCAT,
  getAssignedCATs
};