const express=require("express");
const cors=require("cors");
const { connectDB } = require("./config/config");


const app=express();
app.use(cors());
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
connectDB();

app.get("/",(req,res)=>{
    console.log(`YOUR SERVER IS CORRECTLY RUNNING.`)
})