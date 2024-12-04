const multer = require('multer');
// const upload = multer({ dest: 'uploads/' }); 

const storage=multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload= multer({storage:storage});

// Define fields for multer to handle
const uploadFields = upload.fields([
    { name: 'image_file', maxCount: 5 }, // Accept up to 5 image files
    { name: 'pdf_file', maxCount: 5 },   // Accept up to 5 PDF files
    { name: 'word_file', maxCount: 5 }   // Accept up to 5 Word files
]);

module.exports= uploadFields;