var express = require("express");
require("./db")
const studentModel = require("./model/student");

var app = express();
app.use(express.json())
var PORT = 3000;

app.post("/",(req,res)=>{
    try {
        studentModel(req.body).save();
        res.send("data added sucessfully!!");
       } catch (error){
        res.send(error);
       }
});
app.get('/',async(req,res)=>{
    try {
    var data = await studentModel.find();
    res.send(data);
} catch (error){
    res.send(error);
   }
})

app.listen(PORT,(req,res) =>{
    console.log(`server is listening in port ${PORT}`);
});