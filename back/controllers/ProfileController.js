import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import sha1 from 'sha1'
let MyProfile = async(req, res)=>{
    let result = await User.find({_id : req.userobj.id}, ["-password", "-image", "-status", "-updatedAt", "-createdAt"]);
    res.send({success:true, result : result[0]});
   
}
let MyProfilePic = async(req, res)=>{
    let result = await User.find({_id : req.userobj.id}, ["-password", "-status", "-_id", "-updatedAt", "-createdAt"]);
    res.send({success:true, result : result[0]});
    
}
let UpdateProfile = async(req, res)=>{
    let id = req.userobj.id;
    // console.log(req.body);
    await User.updateMany({_id : id}, req.body);
    res.send({success:true});

}

let ChangePassword = async(req, res)=>{
    let id = req.userobj.id;
    
    
    let result = await User.find({_id : id});
    
    
    if(result[0].password == sha1(req.body.curr_pass)){
        await User.updateMany({_id : id}, {password : sha1(req.body.new_pass)});
        res.send({success:true});
    }else{
        res.send({success:false});
    }
}

export {MyProfile, MyProfilePic,UpdateProfile, ChangePassword}