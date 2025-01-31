var express = require("express");
require('./db')
var studentModel= require('./model/student')
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
app.delete('/remove/:id',async(req,res)=>{
    try {
    await studentModal.findByIdAndDelete(req.params.id);
    res.send("delete successfully!!");
    } catch (error) {
        res.send(error);
    } 
})
app.put('/edit/:id',async(req,res)=>{
    try {
        await studentModel.findByIdAndUpdate(req.params.id,req.body);
        res.send("updated sucessfully");
   } catch (error){
    res.send(error);
   }
});

app.listen(PORT,(req,res) =>{
    console.log(`server is listening in port ${PORT}`);
});