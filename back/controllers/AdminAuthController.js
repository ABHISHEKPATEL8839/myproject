import Admin from '../models/Admin.js'
import sha1 from 'sha1'
import jwt from 'jsonwebtoken'
// import { ENC_KEY } from '../config/config.js'
let Auth = async(req, res)=>{
    let {username, password} = req.body;
    let result = await Admin.find({username : username});
    if(result.length > 0){
        if(result[0].password == sha1(password)){
            let obj = { id : result[0]._id};
            let token = jwt.sign(obj, process.env.ENC_KEY)
            res.send({success:true, name : result[0].name, token : token, admintype : result[0].status});
        }else{
            
            res.send({success:false})
        }
    }else{
        res.send({success:false})
    }
}

export {Auth};