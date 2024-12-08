// const multer = require('multer');
// // const upload = multer({ dest: 'uploads/' }); 

// // const storage=multer.diskStorage({
// //     filename:(req,file,cb)=>{
// //         cb(null,file.originalname);
// //     }
// // })

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 10000000 }, // 10MB limit (optional)
//     fileFilter: (req, file, cb) => {
//       // Accept only PDF, image, and video files
//       const fileTypes = /pdf|jpg|jpeg|png|mp4|mkv|avi/;
//       const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//       const mimetype = fileTypes.test(file.mimetype);
  
//       if (extname && mimetype) {
//         return cb(null, true);
//       } else {
//         cb(new Error('Only PDF, images, and videos are allowed.'));
//       }
//     }
//   });

// // const upload= multer({storage:storage});

// // Define fields for multer to handle
// const uploadFields = upload.fields([
//     { name: 'image_file', maxCount: 5 }, // Accept up to 5 image files
//     { name: 'pdf_file', maxCount: 5 },   // Accept up to 5 PDF files
//     { name: 'word_file', maxCount: 5 }   // Accept up to 5 Word files
// ]);

// module.exports= uploadFields;




const multer = require('multer');
const path = require('path');

// Define storage configuration
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// File filter to validate file types
const fileFilter = (req, file, cb) => {
    const fileTypes = /pdf|jpg|jpeg|png|mp4|mkv|avi|doc|docx/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Only PDF, images, videos, and Word files are allowed.'));
    }
};

// Initialize multer
const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit for each file
    fileFilter: fileFilter,
});

// Define fields for multer to handle
const uploadFields = upload.fields([
    { name: 'image_file', maxCount: 5 }, // Up to 5 image files
    { name: 'pdf_file', maxCount: 5 },   // Up to 5 PDF files
    { name: 'word_file', maxCount: 5 },  // Up to 5 Word files
    { name: 'video_file', maxCount: 5 }, // Up to 5 video files
]);

module.exports = uploadFields;
