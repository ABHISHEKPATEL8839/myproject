import mongoose from "../config/db.js";

let OrderSchema = mongoose.Schema({
    user_id : {type : mongoose.Schema.Types.ObjectId, ref : "user"},
    product_id : {type : mongoose.Schema.Types.ObjectId, ref : "product"},
    razorpay_order_id : String,
    razorpay_payment_id : String,
    razorpay_signature : String,
    status : {type : Number, default : 1},
    price : Number,
    address : String,
    discount : Number,
    charge : Number,
    amount : Number,
    payment_mode : { type : Number, default : 1}
}, {timestamps : true});

let Order = mongoose.model("order", OrderSchema);

export default Order;

/*
    payment_mode
        1----- Online
        2----- cod
*/

/*
status : 
    1 --- ordered
    2 --- shipped
    3 --- out of deliery
    4  -- delivered
*/