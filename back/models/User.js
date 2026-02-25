import mongoose from '../config/db.js';

let UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    city : String,
    address : String,
    gender : String,
    contact : String,
    image : {type : String, default : ""},
    status : { type : Number, default : 1},
    otp : Number
}, { timestamps : true });
// users
let User = mongoose.model("user", UserSchema)

export default User;