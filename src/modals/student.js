const mongoose = require('mongoose'); 
const validator = require('validator');

// Declare the Schema of the Mongo model
var studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                return 'Please enter a valid email address';
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        min:10,
        max:10
    },
    password:{
        type:String,
        required:true,
    },
});

const Student = new mongoose.model("Student",studentSchema);

module.exports = Student;