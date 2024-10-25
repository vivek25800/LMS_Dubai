const mongoose=require('mongoose')

const employee_register = new mongoose.Schema({
    employee_id:{type:String},
    employee_name:{type:String},
    employee_email:{type:String},
    employee_password:{type:String},
    job_title:{type:String},
    date_of_join:{type:String},
    project_code:{type:String},
    project_name:{type:String},
    region:{type:String},
    project_manger:{type:String},
    employee_id_two:{type:String},
    name:{type:String},
    designation:{type:String}
});

const register_modal = mongoose.model('employee-info', employee_register);

module.exports = register_modal;