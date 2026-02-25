import Pro from '../models/Product.js';
import jwt from 'jsonwebtoken'

import PATH from 'path'

let SaveProduct = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY)
        if(obj){
            // console.log(req.body);return;
            let result = await Pro.create(req.body);
            res.send({success: true, result});
        }else{

            res.send({success:false})
        }
    }else{
        res.send({success:false})
    }
    
}
let GetAllProduct = async(req, res)=>{
    let result = await Pro.find().populate("categoryId").populate("subcategoryId").exec();
    res.send({success: true, result});
}



let GetAllProductById = async(req, res)=>{
    let id = req.params.id;
    let result = await Pro.find({_id : id }).populate("categoryId").populate("subcategoryId").exec();
    res.send({success: true, result : result[0]});
}
let GetAllProductByIdForEdit = async(req, res)=>{
    let id = req.params.id;
    let result = await Pro.find({_id : id });
    res.send({success: true, result : result[0]});
}


let UpdateProduct = async(req, res)=>{
    let id = req.params.id;
    let result = await Pro.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let DeleteProduct = async(req, res)=>{
    let id = req.params.id;
    let result = await Pro.deleteMany({_id : id});
    res.send({success: true, result});
}

let DeleteAllProduct = async(req, res)=>{
    await Pro.deleteMany();
    res.send({success:true});
}

let UploadImage = async(req, res)=>{
    // console.log(req.files);
    let pid = req.params.id;
    let image = req.files.photo;
    await Pro.updateMany({ _id : pid }, {image : image.name});
    image.mv(PATH.resolve()+"/assets/product_images/"+image.name,  (err)=>{
        if(err){
            console.log(err);
        }else{

            res.send({success:true});
        }
    });

}

export {SaveProduct, UpdateProduct, GetAllProductByIdForEdit, UploadImage, DeleteAllProduct, DeleteProduct, GetAllProduct, GetAllProductById};


/*
npm init --y
express
mongoose
cors  --------- app.js ---- cors import ----- app.use(cors())
sha1
jsonwebtoken
express-fileupload  -------- app.js ----- express-fileupload import ---- app.use(upload())






req.body
req.params 
req.headers 
req.files

*/