const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    studentname:String,
    studentage:Number,
});

const studentModel = mongoose.model("student",studentSchema);
module.exports = studentModel;