const bcrypt=require("bcrypt");
const Jwt =require("jsonwebtoken");
require("dotenv").config();

const {signUpService, getUserByEmailService}=require("../services/user.service");


exports.signup=async(req,res)=>{
    try {
    const {password,email,name,role,phone}=req.body;
    const hashedPass=bcrypt.hashSync(password,10);
    const modifiedData={name,email,password:hashedPass,role,phone}
    const isExist=await getUserByEmailService(data.email);
    if(isExist){
        res.status(200).json({
            data:null,
            message:"user already exist with this email.",
            token:null
        })
    }
    const user=await signUpService(modifiedData);
    const token=Jwt.sign({id:user.id},process.env.SECRET,{expiresIn:"1d"})
    res.status(200).json({
        data:user,
        message:"successfully logged in.",
        token
    })
    return;
    } catch (error) {
        res.status(500).json({
            data:null,
            message:"something went wrong.",
            token:null
        })
    }
}

exports.login=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

