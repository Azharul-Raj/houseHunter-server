const mongoose=require('mongoose');

const bookingSchema=new mongoose.Schema({
    ownerId:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    bedrooms:{
        type:String,
        required:true
    },
    bathrooms:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    rent:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})

module.exports.Booking=new mongoose.model("Booking",bookingSchema);