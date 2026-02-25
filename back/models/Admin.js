import mongoose from '../config/db.js'

let AdminSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    status : {type : Number, default : 2}
    // status = 1 means super-admin
    // status = 2 means sub-admin

}, {timestamps : true});

let Admin = mongoose.model("admin", AdminSchema);

export default Admin;