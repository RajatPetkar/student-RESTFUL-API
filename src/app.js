const express = require('express');
require("./db/conn");
const Student = require('./modals/student');
const app = express();
const studentRouter = require('./routers/student')
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(studentRouter);


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});