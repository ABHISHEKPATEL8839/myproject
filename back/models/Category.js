import mongoose from "../config/db.js";

let CateSchema = mongoose.Schema({
    name : String,
}, {timestamps : true})
// when we set timestamps : true, then its create 2 more prop
// createdAt, updateAt
let Cate = mongoose.model("category", CateSchema);
export default Cate;