const { House } = require("../models/houseModel")

exports.createListingService=async(data)=>{
    const listing=await House.create(data);
    return listing;
}

exports.getListingsService=async()=>{
    const listings=await House.find({});
    return listings;
}

exports.getListingByIdService=async(id)=>{
    const listing=await House.findOne({_id:id});
    return listing;
}

exports.getListingByName=async(name)=>{
    const listing=await House.findOne({name});
    return listing;
}

exports.updateListingByIdService=async(id,data)=>{
    const listing=await House.findOneAndUpdate({_id:id},data);
    const result={modifiedCount:listing?1:0}
    return result
    return {listing,modifiedCount:listing.nModified};
}

exports.deleteListingService=async(id)=>{
    const listing=await House.findByIdAndDelete(id);
    return {deletedCount:listing?1:0}
}