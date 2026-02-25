import mongoose from "../config/db.js";

let SubCateSchema = mongoose.Schema({
    name : String,
    categoryId : { type : mongoose.Schema.Types.ObjectId, ref : "category"}
}, {timestamps : true})
// when we set timestamps : true, then its create 2 more prop
// createdAt, updateAt
let SubCate = mongoose.model("subcategory", SubCateSchema);
export default SubCate;