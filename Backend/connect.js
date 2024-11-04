const mongoose = require('mongoose');
URL="mongodb://localhost:27017/lms"
//URL = "mongodb+srv://vg4213274:vg25800@cluster0.raclu.mongodb.net/Lms";
// URL="mongodb+srv://vg4213274:vg25800@cluster0.yisihts.mongodb.net/Lms"

const connect = () => {
    try {
        const respone = mongoose.connect(URL);
        console.log("Database connect");
        
        
    } catch (error) {
       console.log(error);
        
    }

}

module.exports = connect;