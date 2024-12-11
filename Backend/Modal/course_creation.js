// const mongoose = require('mongoose');

// const addContent = new mongoose.Schema({
//     video_file:{type:Array},
//     chapter_title:{type:String},
//     chapter_description:{type:String}
// }) 

// const createCourse = new mongoose.Schema({
//     course_title_main:{type:String},
//     add_main_category:{type:String},
//     add_sub_category:{type:String},
//     description:{type:String},
//     course_code:{type:String},
//     course_title:{type:String},
//     add_Content:[addContent],
//     image_file:{type:Array},
//     pdf_file:{type:Array},
//     word_file:{type:Array},
// })

// const Course = mongoose.model('createCourse', createCourse);
// module.exports = Course;



const mongoose = require('mongoose');

const createCourse = new mongoose.Schema({
    course_title_main:{type:String},
    add_main_category:{type:String},
    add_sub_category:{type:String},
    description:{type:String},
    course_code:{type:String},
    course_title:{type:String},
    add_Content: [{
        chapter_title: String,
        chapter_description: String,
        video_file: [String], // or any other type if you're uploading files
    }],
    image_file:{type:Array},
    pdf_file:{type:Array},
    word_file:{type:Array},
})

const Course = mongoose.model('createCourse', createCourse);
module.exports = Course;