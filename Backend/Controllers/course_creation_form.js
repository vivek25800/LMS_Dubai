const Course = require('../Modal/course_creation');
const cloudinary = require('cloudinary').v2;

require('dotenv').config()
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})  

// const post_course_creation = async (req, res) => {
//     try {
//        const{ course_title_main, add_main_category, add_sub_category, description, course_code, course_title,
//         add_Content } = req.body;

//         const parsedBody = {};
//         for (let key in req.body) {
//             try {
//                 parsedBody[key] = JSON.parse(req.body[key]);
//             } catch (e) {
//                 parsedBody[key] = req.body[key];
//             }
//         }

//         // 'req.files' will contain the uploaded files
//         const images = [];
//         const pdfFile = [];
//         const wordFile = [];

//         // Loop through each file in 'req.files' and upload them to Cloudinary
//         if (req.files?.image_file) {
//             for (let file of req.files.image_file) {
//                 const result = await cloudinary.uploader.upload(file.path);
//                 images.push(result.secure_url);
//             }
//         }

//         if (req.files?.pdf_file) {
//             for (let file of req.files.pdf_file) {
//                 const result = await cloudinary.uploader.upload(file.path);
//                 pdfFile.push(result.secure_url);
//             }
//         }

//         if (req.files?.word_file) {
//             for (let file of req.files.word_file) {
//                 const result = await cloudinary.uploader.upload(file.path);
//                 wordFile.push(result.secure_url);
//             }
//         }

//         const add_course_creation = new Course({ course_title_main, add_main_category, add_sub_category, 
//             description, course_code, course_title, add_Content:parsedContent, image_file:images, pdf_file:pdfFile, word_file:wordFile });

//         const resp = await add_course_creation.save();
//         res.status(200).send({message:"course data save", course_data: resp});
//     } catch (error) {
//         console.log(error);
//     }
// }

const post_course_creation = async (req, res) => {
    try {
        const parsedBody = {};
        for (let key in req.body) {
            try {
                parsedBody[key] = JSON.parse(req.body[key]);
            } catch (e) {
                parsedBody[key] = req.body[key];
            }
        }

        // Destructure fields from parsedBody
        const {
            course_title_main,
            add_main_category,
            add_sub_category,
            description,
            course_code,
            course_title,
            add_Content
        } = parsedBody;

        const images = [];
        const pdfFile = [];
        const wordFile = [];
        const videoFile = [];

        // Process image files
        if (req.files?.image_file) {
            for (let file of req.files.image_file) {
                const result = await cloudinary.uploader.upload(file.path);
                images.push(result.secure_url);
            }
        }

        // Process PDF files
        if (req.files?.pdf_file) {
            for (let file of req.files.pdf_file) {
                const result = await cloudinary.uploader.upload(file.path);
                pdfFile.push(result.secure_url);
            }
        }

        // Process Word files
        if (req.files?.word_file) {
            for (let file of req.files.word_file) {
                const result = await cloudinary.uploader.upload(file.path);
                wordFile.push(result.secure_url);
            }
        }

        // Process Video files
        if (req.files?.video_file) {
            for (let file of req.files.video_file) {
                const result = await cloudinary.uploader.upload(file.path, {
                    resource_type: "video"
                });
                videoFile.push(result.secure_url);
            }
        }

        // Create a new course instance
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
            video_file: videoFile, // Include video files
        });

        // Save the course data to the database
        const resp = await add_course_creation.save();
        res.status(200).send({ message: "Course data saved", course_data: resp });
    } catch (error) {
        console.error("Error in post_course_creation:", error);
        res.status(500).send({ message: "An error occurred", error: error.message });
    }
};

module.exports = post_course_creation;


// const Course = require('../Modal/course_creation');
// const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' }); // Temporary storage

// require('dotenv').config();
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

// const post_course_creation = async (req, res) => {
//     try {
//         const {
//             course_title_main,
//             add_main_category,
//             add_sub_category,
//             description,
//             course_code,
//             course_title,
//             add_Content,
//         } = req.body;

//         // Validate and parse `add_Content`
//         let parsedAddContent = [];
//         if (add_Content) {
//             try {
//                 parsedAddContent = Array.isArray(add_Content) ? add_Content : JSON.parse(add_Content);
//             } catch (error) {
//                 return res.status(400).send({ message: 'Invalid add_Content format' });
//             }
//         }

//         // File arrays
//         const images = [];
//         const pdfFile = [];
//         const wordFile = [];

//         // Handle image files
//         if (req.files?.image_file) {
//             for (const file of req.files.image_file) {
//                 try {
//                     const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image' });
//                     images.push(result.secure_url);
//                 } catch (err) {
//                     console.error('Image upload error:', err);
//                     return res.status(500).send({ message: 'Image upload failed', error: err.message });
//                 }
//             }
//         }

//         // Handle PDF files
//         if (req.files?.pdf_file) {
//             for (const file of req.files.pdf_file) {
//                 try {
//                     const result = await cloudinary.uploader.upload(file.path, { resource_type: 'raw' });
//                     pdfFile.push(result.secure_url);
//                 } catch (err) {
//                     console.error('PDF upload error:', err);
//                     return res.status(500).send({ message: 'PDF upload failed', error: err.message });
//                 }
//             }
//         }

//         // Handle Word files
//         if (req.files?.word_file) {
//             for (const file of req.files.word_file) {
//                 try {
//                     const result = await cloudinary.uploader.upload(file.path, { resource_type: 'raw' });
//                     wordFile.push(result.secure_url);
//                 } catch (err) {
//                     console.error('Word file upload error:', err);
//                     return res.status(500).send({ message: 'Word file upload failed', error: err.message });
//                 }
//             }
//         }

//         // Create and save course data
//         const courseData = new Course({
//             course_title_main,
//             add_main_category,
//             add_sub_category,
//             description,
//             course_code,
//             course_title,
//             add_Content: parsedAddContent,
//             image_file: images,
//             pdf_file: pdfFile,
//             word_file: wordFile,
//         });

//         const response = await courseData.save();
//         res.status(200).send({ message: 'Course data saved successfully', course_data: response });
//     } catch (error) {
//         console.error('Server error:', error);
//         res.status(500).send({ message: 'Server error', error: error.message });
//     }
// };

// module.exports = post_course_creation;

