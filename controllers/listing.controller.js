const { createListingService, updateListingByIdService, getListingsService, deleteListingService, getListingByName } = require("../services/listing.service")


//Listing creation
exports.createListing=async(req,res)=>{
    try {
        const data=req.body;
        const isExist=await getListingByName(data?.name);
        if(isExist){
            res.status(200).json({
                data:null,
                message:"listing already exist with this name."
            })
            return;
        }
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
    }}
//Listing update
exports.updateListing=async(req,res)=>{
    try {
        const {id}=req.params;
        const data=req.body;
        const listing=await updateListingByIdService(id,data);
        res.status(200).json({
            data:listing,
            message:"listing updated successfully."
        })
    } catch (error) {
        res.status(200).json({
            data:null,
            message:`something went wrong. ${error.message}`
        })
    }
}
//Get listings
exports.getListings=async(req,res)=>{
    try {
        const listings=await getListingsService();
        res.status(200).json({
            data:listings,
            message:"found listings successfully."
        })
    } catch (error) {
        res.status(200).json({
            data:null,
            message:`something went wrong. ${error.message}`
        })
    }
}
//Delete listings
exports.deleteListing=async(req,res)=>{
    try {
        const {id}=req.body;
        const listing=await deleteListingService(id);
        res.status(200).json({
            data:listing,
            message:"listings deleted successfully."
        })
    } catch (error) {
        res.status(200).json({
            data:null,
            message:`something went wrong. ${error.message}`
        })
    }
}