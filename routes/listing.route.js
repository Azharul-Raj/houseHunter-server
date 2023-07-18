const express=require("express");
const listingController=require("../controllers/listing.controller")
const middleware=require("../middleware/jwtVerify");

const router=express.Router();

router.route("/")
.post(listingController.createListing)
.get(listingController.getListings)
.delete(middleware.verifyJWT,listingController.deleteListing)

router.route("/:id")
.put(listingController.updateListing)

module.exports=router;