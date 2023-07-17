const mongoose=require("mongoose");
require('dotenv').config()
exports.connectDB=async()=>{
    try {
      await mongoose.connect(`${process.env.DB_URL}`)
      console.log('Databse is connected.')
    } catch (error) {
        console.log(error);
    }
}