const cloudinary=require('cloudinary').v2
const fs=require('fs')
const path=require('path')
const Course = require('../Modal/course_creation')

require('dotenv').config()
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

const post_course_creation = async (req, res) => {
    try {
      const add_Content = [];
      let i = 0;
  
      // Loop to process add_Content fields
      while (req.body[`add_Content[${i}].chapter_title`]) {
        const chapter_title = req.body[`add_Content[${i}].chapter_title`];
        const chapter_description = req.body[`add_Content[${i}].chapter_description`];
  
        const video_files = [];
  
        // Process video files for each chapter (if present)
        if (req.files) {
          const videoField = req.files.filter(file => file.fieldname === `add_Content[${i}].video_file`);
          for (let file of videoField) {
            const result = await cloudinary.uploader.upload(file.path, { resource_type: 'video' });
            video_files.push(result.secure_url);
          }
        }
  
        // Push the chapter data with video files
        add_Content.push({
          chapter_title,
          chapter_description,
          video_file: video_files,
        });
  
        i++;
      }
  
      // Collect other form data
      const { course_title_main, add_main_category, add_sub_category, description, course_code, course_title } = req.body;
  
      const images = [];
      const pdfFile = [];
      const wordFile = [];
  
      // Process image files
      if (req.files) {
        const imageField = req.files.filter(file => file.fieldname === 'image_file');
        for (let file of imageField) {
          const result = await cloudinary.uploader.upload(file.path);
          images.push(result.secure_url);
        }
  
        // Process PDF files
        const pdfField = req.files.filter(file => file.fieldname === 'pdf_file');
        for (let file of pdfField) {
          const result = await cloudinary.uploader.upload(file.path);
          pdfFile.push(result.secure_url);
        }
  
        // Process Word files
        const wordField = req.files.filter(file => file.fieldname === 'word_file');
        for (let file of wordField) {
          const result = await cloudinary.uploader.upload(file.path);
          wordFile.push(result.secure_url);
        }
      }
  
      // Create a new course instance with the uploaded file URLs
      const add_course_creation = new Course({
        course_title_main,
        add_main_category,
        add_sub_category,
        description,
        course_code,
        course_title,
        add_Content,
        image_file: images,
        pdf_file: pdfFile,
        word_file: wordFile,
      });
  
      // Save the course data to the database
      const resp = await add_course_creation.save();
      res.status(200).send({ message: "Course data saved", course_data: resp });
    } catch (error) {
      console.error("Error in post_course_creation:", error);
      res.status(500).send({ message: "An error occurred", error: error.message });
    }
  };

  const viewcourse=async(req,res)=>
    {
      try {
        const resp=await Course.find()
        res.status(200).send({message:"course data fetch",course:resp})
      } catch (error) {
        console.log(error);
        
      }
    }
  
  module.exports = {post_course_creation, viewcourse};
  