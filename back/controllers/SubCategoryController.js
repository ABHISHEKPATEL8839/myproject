import SubCate from '../models/SubCategory.js';
import Product from '../models/Product.js'

let GetAllSubCateByCateId = async(req, res)=>{
    // console.log(req.params);
    let cid = req.params.id;
    let result = await SubCate.find({categoryId : cid});
    res.send({success: true, result});
}

let SaveSubCategory = async(req, res)=>{
    // console.log(req.body);return;
    let result = await SubCate.create(req.body);
    res.send({success: true, result});
}
let GetAllSubCategory = async(req, res)=>{
    let result = await SubCate.find().populate("categoryId").exec();
    res.send({success: true, result});
}
let GetAllSubCategoryById = async(req, res)=>{
    let id = req.params.id;
    let result = await SubCate.find({_id : id });
    res.send({success: true, result : result[0]});
}
let UpdateSubCategory = async(req, res)=>{
    let id = req.params.id;
    let result = await SubCate.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let DeleteSubCategory = async(req, res)=>{
    let id = req.params.id;
    let result = await SubCate.deleteMany({_id : id});
    await Product.deleteMany({subcategoryId : id});
    res.send({success: true, result});
}

let DeleteAllSubCate = async(req, res)=>{
    let result = await SubCate.deleteMany();
    res.send({success: true, result});
}

export {SaveSubCategory, DeleteAllSubCate, GetAllSubCateByCateId, UpdateSubCategory, DeleteSubCategory, GetAllSubCategory, GetAllSubCategoryById};