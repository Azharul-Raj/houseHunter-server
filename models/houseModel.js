const mongoose=require('mongoose');

const houseSchema=new mongoose.Schema({
    ownerId:{
        type:mongoose.Schema.ObjectId,
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
    phone:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    reserved:{
        type:Boolean,
        default:false
    }
})

module.exports.House=new mongoose.model("House",houseSchema);