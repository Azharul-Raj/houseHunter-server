const { User } = require("../models/userModel")

exports.signUpService=async(data)=>{
    const user=await User.create(data);
    return user;
}
exports.getUserByEmailService=async(email)=>{
    const user=await User.findOne({email:email});
    // console.log(user)
    return user;
}