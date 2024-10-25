const register_modal = require("../Modal/employee_register");

const employee_details = async (req, res) => {
    try {
        const {employee_id, employee_name, employee_email, employee_password, job_title, date_of_join, project_code, project_name, 
            region, project_manger, employee_id_two, name, designation} = req.body;
        
        const employee_data = new register_modal({employee_id, employee_name, employee_email, employee_password, job_title, date_of_join, project_code, project_name, 
            region, project_manger, employee_id_two, name, designation})

        const resp = await employee_data.save();

            res.status(200).send({message: "Hello data is save", employee: resp})
    } catch (error) {
        console.log(error);
        
    }
}

const employeebulkregistration = async (req, res) => {
    try {
        const employees = req.body.employees1

        if (!Array.isArray(employees)) {
        return res.status(400).send({ message: 'Invalid data format. Expected an array of employees.' });
        }

         // Iterate over each employee and save to the database
         const savedEmployees = [];
        for (const employee of employees) {
        const { employee_id, employee_name, employee_email, employee_password, job_title, date_of_join, project_code, project_name, 
            region, project_manger, employee_id_two, name, designation } = employee;

        const employee_data = new register_modal({employee_id, employee_name, employee_email, employee_password, job_title, date_of_join, project_code, project_name, 
            region, project_manger, employee_id_two, name, designation})

        const savedEmployee = await employee_data.save();  // Save each employee
        savedEmployees.push(savedEmployee);
        }

    res.status(200).send({ message: 'Employees registered successfully', employees: savedEmployees });

    } catch (error) {
        console.error('Error occurred during registration:', error);
        res.status(500).send({ message: 'An error occurred while saving employee data', error });
    }
}

const remove_data_two = async (req, res) => {
    try {
       const _id = req.params._id;
       const resp = await register_modal.findByIdAndDelete(_id);
        res.status(200).send({message2: "data deleted success", employee: resp});
    } catch (error) {
        console.log(error);
        
    }
}

const get_data_employee = async (req, res) => {
    try {
        const resp = await register_modal.find();
        res.status(200).send({message3: "data get sucessfuly", employee: resp});
    } catch (error) {
        console.log(error);
    }
}

const update_data_employee = async (req, res) => {
    try {
        const _id = req.params._id;
        const resp = await register_modal.findByIdAndUpdate(_id, req.body);
        res.status(200).send({message3: "data update sucessfuly", employee: resp});
    } catch (error) {
        console.log(error);
    }
}

const employee_login = async (req, res) => {
    try {
        const{email_id,password}=req.body
       const user = await register_modal.findOne({employee_email:email_id});
       if(!user)
       {
        res.status(404).send({message:"email id not registered"})
        return
       }
       if(user.employee_password===password)
        {
         res.status(200).send({message: "login success", employee: user});
    
        }
        else
        {
            res.status(400).send("password not match")
        }
       
    } catch (error) {
        console.log(error);
    }
}

module.exports = {employee_details, remove_data_two, get_data_employee, update_data_employee,employeebulkregistration, employee_login};