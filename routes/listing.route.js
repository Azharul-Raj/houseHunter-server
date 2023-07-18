const express=require("express");
const listingController=require("../controllers/listing.controller")
const middleware=require("../middleware/jwtVerify");

const router=express.Router();

router.route("/")
.post(listingController.createListing)
.get(listingController.getListings)
.put(listingController.updateListing)
.delete(listingController.deleteListing)

module.exports=router;