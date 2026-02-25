import User from "../models/User.js";
import sha1 from 'sha1'
import jwt from 'jsonwebtoken'
import Path from 'path'
import DoSendMail from "../helpers/SendMailHelper.js";
import WelcomeMailBody from "../email/WelcomeMail.js";

let SaveUser = async(req, res)=>{
    // console.log(req.body);
    delete req.body.repassword;
    
    req.body.password = sha1(req.body.password);
    
    let result = await User.create(req.body);
    await DoSendMail(req.body.email, "Successfuly Registered : Femma.com", WelcomeMailBody);
    res.send({success:true});
}
let GetAllUser = async(req, res)=>{
    let result = await User.find()
    res.send({success : true, result});
}

let DeleteAll = async(req, res)=>{
    await User.deleteMany();
    res.send({success:true});
}

let ProfilePic = async(req, res)=>{
    
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, "hello");
        if(obj){
            let photo = req.files.image;
            let name = photo.name;
            await User.updateMany({_id : obj.id }, {image : name})
            photo.mv(Path.resolve()+"/assets/user_images/"+name, (err)=>{
                res.send({success:true, name : name});
            });

        }else{

            res.send({success:false, msg : "Un-Authorized User"});
        }

    }else{
        res.send({success:false, msg : "Un-Authorized User"});
    }


}

let ChangeStatus = async(req, res)=>{
    await User.updateMany({_id : req.params.id}, req.body);
    res.send({success:true});
}

export {SaveUser, GetAllUser, ChangeStatus, DeleteAll, ProfilePic}