const express = require('express');
const router = new express.Router();
const Student = require('../modals/student');

// CREATE A NEW STUDENT
router.post("/students", async (req,res)  => {
    try{
        console.log(req.body); 
        const user = new Student(req.body)
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){
        throw new Error('Invalid 404');
    }
})

router.get('/students', async(req,res) =>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})
router.get('/students/:name',async(req,res)=>{
    try {
        const name = req.params.name;
        const stud_Data = await Student.find({name:name});
        console.log(stud_Data);
        if(!stud_Data){
            return res.status(404).send();
        }
        res.send(stud_Data);
    } catch (error) {
        res.send(error)
    }
})
router.patch('/students/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const updatedData = await Student.findByIdAndUpdate({_id},req.body,{new:true});
        res.send(updatedData);
        console.log(updatedData)
    }
    catch(e){
        res.status(404).send(e);
    }
})
router.delete('/students/:id', async(req,res)=>{
    try {
        const _id = req.params.id;
        const deletedData = await Student.findByIdAndDelete({_id},{new:true})
        res.send(deletedData);
    } catch (error) {
        res.status(404).send(e);
    }
})

module.exports = router;