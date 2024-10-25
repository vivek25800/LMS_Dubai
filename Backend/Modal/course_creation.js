const mongoose = require('mongoose');

const course_creation = new mongoose.Schema({
    course_title:{type:String},
    course_category:{type:String},
    course_code:{type:String},
    course_content:{type:String},
    organization:{type:String},
    instructor:{type:String},
    course_label:{type:String},
    course_duration:{type:String},
});

const course_creation_modal = mongoose.model('course_creation_info', course_creation);

module.exports = course_creation_modal;