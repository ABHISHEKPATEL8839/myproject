import User from '../models/User.js'
import UniqueOtp from 'random-int'
import DoSendMail from '../helpers/SendMailHelper.js';
import sha1 from 'sha1'
let CheckEmail = async(req, res)=>{
    let {email} = req.body;
    let result = await User.find({email : email});
    if(result.length == 1){
        let otp = UniqueOtp(100000, 1000000);
        await User.updateMany({email : email}, {otp : otp});
        DoSendMail(email, "OTP", `<h1>Your OTP for Change Password is ${otp} </h1>`);
        res.send({success:true, email : email});
    }
    else{
        res.send({success:false});
    }
}
let CheckOtp = async(req, res)=>{
    let {otp, email} = req.body;
    let result = await User.find({email : email});
    if(result[0].otp == otp){
        res.send({success:true})
    }else{
        res.send({success:false});
    }
}
let ChangePassword = async(req, res)=>{
    let {email, password} = req.body;
    await User.updateMany({email : email}, {password : sha1(password)});
    res.send({success:true});
}

export {CheckEmail, CheckOtp, ChangePassword}