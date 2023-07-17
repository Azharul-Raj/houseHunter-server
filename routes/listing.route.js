const express=require("express");
const userController=require("../controllers/user.controller");
const middleware=require("../middleware/jwtVerify");

const router=express.Router();

router.route("/")
.post(userController.signup)
.get(middleware.verifyJWT,userController.login)

module.exports=router;