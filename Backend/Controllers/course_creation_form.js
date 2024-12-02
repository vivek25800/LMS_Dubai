const Course = require('../Modal/course_creation');
const cloudinary = require('cloudinary').v2;

require('dotenv').config()
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

const post_course_creation = async (req, res) => {
    try {
       const{ course_title_main, add_main_category, add_sub_category, description, course_code, course_title,
        add_Content } = req.body;

        // 'req.files' will contain the uploaded files
        const images = [];
        const pdfFile = [];
        const wordFile = [];

        // Loop through each file in 'req.files' and upload them to Cloudinary
        if (req.files.image_file) {
            for (let file of req.files.image_file) {
                const result = await cloudinary.uploader.upload(file.path);
                images.push(result.secure_url);
            }
        }

        if (req.files.pdf_file) {
            for (let file of req.files.pdf_file) {
                const result = await cloudinary.uploader.upload(file.path);
                pdfFile.push(result.secure_url);
            }
        }

        if (req.files.word_file) {
            for (let file of req.files.word_file) {
                const result = await cloudinary.uploader.upload(file.path);
                wordFile.push(result.secure_url);
            }
        }

        const add_course_creation = new Course({ course_title_main, add_main_category, add_sub_category, 
            description, course_code, course_title, add_Content, image_file:images, pdf_file:pdfFile, word_file:wordFile });

        const resp = await add_course_creation.save();
        res.status(200).send({message:"course data save", course_data: resp});
    } catch (error) {
        console.log(error);
    }
}

module.exports = post_course_creation;