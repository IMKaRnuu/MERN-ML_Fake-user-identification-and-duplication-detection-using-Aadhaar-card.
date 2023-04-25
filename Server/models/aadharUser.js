const mongoose = require('mongoose');

const aadharUser = new mongoose.Schema({

    aadharnumber:{
        type:String,
        required: [true, "Please enter your aadhar number"]
    },
   
    fullname:{
        type:String,
        required: [true, "Please enter the name"]
    },

    dob:{
        type:Date,
        required: [true, "Please enter the Date of Birth"]
    },

    email:{
        type:String,
    },

    phone:{
        type:Number,
        required: [true, "Please enter your Phone number"]
    },

    address:{
        type:String,
    },
    hasCompletedExam:{
        type: Boolean,

    },
    inValidationProcess:{
        type: Boolean,

    },
    profileImage: {
        type: String,
      },

})

const aadhar = mongoose.model("STUDENT", aadharUser);

module.exports = aadhar;