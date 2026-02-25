import User from '../models/User.js'
import sha1 from 'sha1'
import { ENC_KEY } from '../config/config.js'
import jwt from 'jsonwebtoken'
let Auth = async(req, res)=>{
    // console.log(req.body);
    let {email, password} = req.body;
    
    let result = await User.find({email : email});
    if(result.length > 0){
            // that means "email" is correct
            if(result[0].password == sha1(password)){ // passwrod is correct
                if(result[0].status==1){

                    let userobj = { id : result[0]._id }
                    let token = jwt.sign(userobj, process.env.ENC_KEY);
                    res.send({success:true, name : result[0].name, token : token});
                }else{
                    res.send({success:false, errType : 3});
                }
            }else{
                res.send({success:false, errType : 2});
            }
    }else{
        // email is incorrect
        res.send({success:false, errType : 1})
    }

}

export {Auth}

/*
    let a = "rohit";
    let b = ["red", "green", "blue", "yellow"]

    a.length ================== 5
    b.length ================== 4



    let Abc = ()=>{
        
        }

    let Abc = function(){
    
    }

    
*/