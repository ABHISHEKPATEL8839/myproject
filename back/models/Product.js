import mongoose from '../config/db.js'

let ProSchema = mongoose.Schema({
    title : String,
    price : Number,
    categoryId : { type :  mongoose.Schema.Types.ObjectId, ref : "category"},
    subcategoryId : {type : mongoose.Schema.Types.ObjectId, ref : "subcategory"},
    brand : String,
    quantity : Number,
    costprice : Number,
    discount : Number,
    color : String,
    size : String,
    image : String,
    detail : String,
}, {timestamps : true})

let Pro = mongoose.model("product", ProSchema);

export default Pro;