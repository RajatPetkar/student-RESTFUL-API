// import mongoose, { connect } from "mongoose";
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/students-api").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})
