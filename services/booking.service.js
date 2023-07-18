const { Booking } = require("../models/bookingModel");
const { House } = require("../models/houseModel");


exports.createBookingService=async(data)=>{
    await House.findOneAndUpdate({ownerId:data.ownerId},{reserved:true})
    const reservedHouse=await Booking.create(data);
    return reservedHouse;
}

exports.removeBookingService=async(id,ownerId)=>{
    await House.findOneAndUpdate({ownerId:ownerId},{reserved:false})
    const reservedHouse=await Booking.findByIdAndDelete({_id:id});    
    return {deletedCount:reservedHouse?1:0}
}