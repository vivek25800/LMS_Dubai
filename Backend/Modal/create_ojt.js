const mongoose = require('mongoose');

// const create_ojt = new mongoose.Schema({
//     ojt_title:{type:String},
//     ojt_code:{type:String},
//     activity_title:{type:Array},
//     desc_description:{type:Array}
// });

// const activitySchema = new mongoose.Schema({
//     activity_ojt_title:{type:String},
//     content: [
//         {
//             srno: { type: Number, required: true },
//             description: { type: String, required: true }, 
//             trainerChecked: {type: Boolean, default: false},
//             employeeChecked: {type: Boolean, default: false},
//         }
//     ]
// })

// const create_ojt = new mongoose.Schema({
//     ojt_title: { type: String, required: true },
//     ojt_code: { type: String, required: true },
//     activities: [activitySchema],
// }, { timestamps: true });


const contentSchema = new mongoose.Schema({
    srno: {type: Number},
    description: {type: String},
    trainerChecked: { type: Boolean, default: false },
    employeeChecked: { type: Boolean, default: false }
  });
  
  const activitySchema = new mongoose.Schema({
    activity_ojt_title: {type: String},
    content: [contentSchema]
  });
  
  const create_ojt = new mongoose.Schema({
    ojt_title: {type: String},
    ojt_code: {type: String},
    activities: [activitySchema]
  });

const create_ojt_modal = mongoose.model('create_ojt', create_ojt);

module.exports = create_ojt_modal;