import Cate from '../models/Category.js';
import SubCate from '../models/SubCategory.js'
import Product from '../models/Product.js'
import jwt from 'jsonwebtoken'


let SaveCategory = async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY)
        if(obj){
            let result = await Cate.create(req.body);
            res.send({success: true, result});
        }else{

            res.send({success:false})
        }
    }else{
        res.send({success:false})
    }
    
}
let GetAllCategory = async(req, res)=>{
    let result = await Cate.find();
    res.send({success: true, result});
}
let GetAllCategoryAndSubCate = async(req, res)=>{
    let result = await Cate.find();
    // let arr = result.map(async(item)=>{
    //     let result2 = await SubCate.find({categoryId : item._id});
    // })

    let allresult = await Promise.all(
        result.map(async(item)=>{
            let result2 = await SubCate.find({categoryId : item._id});
            return { category : item, info : result2 }
        })
    )
    res.send({success: true, result:allresult});
}


let GetAllCategoryById = async(req, res)=>{
    let id = req.params.id;
    let result = await Cate.find({_id : id });
    res.send({success: true, result : result[0]});
}
let UpdateCategory = async(req, res)=>{
    let id = req.params.id;
    let result = await Cate.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let DeleteCategory = async(req, res)=>{
    let id = req.params.id;
    await Product.deleteMany({categoryId : id});
    await SubCate.deleteMany({categoryId : id});
    let result = await Cate.deleteMany({_id : id});
    res.send({success: true, result});
}

export {SaveCategory, GetAllCategoryAndSubCate, UpdateCategory, DeleteCategory, GetAllCategory, GetAllCategoryById};


/*

await Promiose.all(
    
array.map(async(item)=>{
    await
    
    })
    
    )

*/