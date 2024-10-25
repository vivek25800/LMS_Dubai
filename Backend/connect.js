const mongoose = require('mongoose');
URL="mongodb://localhost:27017/lms"

const connect = () => {
    try {
        const respone = mongoose.connect(URL);
        console.log("Database connect");
        
        
    } catch (error) {
       console.log(error);
        
    }

}

module.exports = connect;