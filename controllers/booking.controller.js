const { createBookingService, removeBookingService } = require("../services/booking.service")

//CREATE BOOKING
exports.createBooking=async(req,res)=>{
   try {
    const data=req.body;
    const booking=await createBookingService(data);
    res.status(200).json({
        data:booking,
        message:"booking created successfully."
    })
   } catch (error) {
    res.status(500).json({
        data:null,
        message:"booking created successfully."
    })
   }
}

exports.removeBooking=async(req,res)=>{
    try {
        const {id,ownerId}=req.body;
    const result= await removeBookingService(id,ownerId);
    res.status(200).json({
        data:result,
        message:"booking removed successfully."
    })
    } catch (error) {
        res.status(500).json({
            data:null,
            message:"booking removed successfully."
        })
    }
}