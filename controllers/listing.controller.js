const { createListingService } = require("../services/listing.service")



exports.createListing=async(req,res)=>{
    try {
        const data=req.body;
        const listing=await createListingService(data);
        res.status(200).json({
            data:listing,
            message:"listing created successfully."
        })
    } catch (error) {
        res.status(200).json({
            data:null,
            message:`something went wrong. ${error.message}`
        })
    }
}