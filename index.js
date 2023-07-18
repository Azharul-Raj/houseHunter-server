const express=require("express");
const cors=require("cors");
const { connectDB } = require("./config/config");
const userRoutes=require("./routes/user.route");
const listingRoutes=require("./routes/listing.route");
const bookingRoutes=require("./routes/booking.route")


const app=express();
app.use(cors());
app.use(express.json())
const PORT=process.env.PORT||4001
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
connectDB();

app.get("/",(req,res)=>{
    res.send(`YOUR SERVER IS CORRECTLY RUNNING.`)
})

app.use("/api/v1/signup",userRoutes)
app.use("/api/v1/login",userRoutes)
app.use("/api/v1/listing",listingRoutes)
// app.use("/api/v1/booking",bookingRoutes)