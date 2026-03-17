//   http://localhost:3000/api/v1/filter?color=Red
import Product from '../models/Product.js'
import Category from '../models/Category.js'
import SubCate from '../models/SubCategory.js'
let GetAllProduct = async(req, res)=>{
    // console.log(req.query);
    let where = {};
    if(Object.keys(req.query).length == 0){ // if query string is empty
        where = {};
    }
    if(req.query.color){
        where.color = req.query.color;
        // {color : "red"}
    }
    if(req.query.discount){
        where.discount = {$gte : req.query.discount};

    }
    if(req.query.size){
        where.size = req.query.size;
    } // { color : "red", size : "M"}
    
    if(req.query.category){
        // console.log(req.query.category)
        let result_cate = await Category.find({name : req.query.category});
        
        where.categoryId = result_cate[0]._id;

    }
    if(req.query.subcategory){
        let result_cate = await Category.find({name : req.query.category});
        let result_subcate = await SubCate.find({name : req.query.subcategory});
        where.categoryId = result_cate[0]._id;
        where.subcategoryId = result_subcate[0]._id;

    }
    if(req.query.min && req.query.max){
        let temp = {...where};
        where = {$and : [{price : {$gte : req.query.min}}, {price : {$lte : req.query.max}}, temp]};
        
    }
    
    let result = await Product.find(where).populate("categoryId").populate("subcategoryId").exec();
    res.send({success:true, result : result});

}

export {GetAllProduct}
