const mongoose = require("mongoose");

const students_register = new mongoose.Schema({
    email_id:{type:String},
    username:{type:String},
    first_name:{type:String},
    last_name:{type:String},
    country:{type:String},
    time_zone:{type:String},
    create_password:{type:String},
    confirm_password:{type:String},
    role:{type:String}

})

const students_modal = mongoose.model('student-info', students_register);

module.exports = students_modal;