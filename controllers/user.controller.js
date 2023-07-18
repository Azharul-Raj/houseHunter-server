const bcrypt=require("bcrypt");
const Jwt =require("jsonwebtoken");
require("dotenv").config();

const {signUpService, getUserByEmailService}=require("../services/user.service");


exports.signup=async(req,res)=>{
    try {
    const {password,email,name,role,phone}=req.body;
    const hashedPass=bcrypt.hashSync(password,10);
    const modifiedData={name,email,password:hashedPass,role,phone}
    const isExist=await getUserByEmailService(email);
    if(isExist){
        res.status(200).json({
            data:null,
            message:"user already exist with this email.",
            token:null
        })
        return
    }
    const user=await signUpService(modifiedData);
    
    const token=Jwt.sign({email:user.email},process.env.SECRET,{expiresIn:"1d"})
    res.status(200).json({
        data:user,
        message:"successfully logged in.",
        token
    })
    return;
    } catch (error) {
        console.log(error)
        res.status(500).json({
            data:null,
            message:`something went wrong.${error.message}`,
            token:null
        })
    }
}

exports.login=async(req,res)=>{
    try {
        const {email}=req.body;
        const user=await getUserByEmailService(email);
        if(!user){
            res.status(404).json({
                data:null,
                message:"no user found with this credentials.",
                token:null
            })
            return;
        }
        const token=Jwt.sign({email},process.env.SECRET,{expiresIn:"2d"})
        res.status(200).json({
            data:user,
            message:"successfully logged in.",
            token
        })
    } catch (error) {
        res.status(500).json({
            data:null,
            message:`something went wrong.${error.message}`,
            token:null
        })
    }
}

