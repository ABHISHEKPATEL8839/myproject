import Order from "../models/Order.js"

import pdf from "pdf-creator-node";
import Razorpay from 'razorpay'
import user from '../models/User.js'
import Product from '../models/Product.js'
import createoption from "../helpers/Createrecipt.js"

let rzpy = new Razorpay({
    key_id :process.env.RAZORPAY_KEY,
    key_secret : process.env.RAZORPAY_SECRET
})

let Payment = async(req, res)=>{
    let {amount} = req.body;
    try{
        const order = await rzpy.orders.create({
            amount : amount*100,
            currency : 'INR'
        });
        res.send({success:true, orderId : order.id})
    }catch(err){
        res.send({success:false})
    }
}

let Confirm = async(req, res)=>{



    let result_user=await user.find({_id:req.body.user_id})
    let result_Product=await Product.find({_id:req.body.Product_id})

let pdfdata=createoption(req.body,result_user[0],result_Product[0])


// console.log(req.body)
// console.log(result_user)
// console.log(result_Product)







    pdf
  .create(pdfdata.document, pdfdata.options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error("-----------", error);
  });
    await Order.create(req.body);
    res.send({success:true});

}

let GetAllOrderByUserId = async(req, res)=>{
    let id = req.userobj.id;
    let result = await Order.find({user_id : id}).populate("product_id").exec();
    res.send({success: true, result});
}
let GetAllOrder = async(req, res)=>{
    let id = req.userobj.id;
    let result = await Order.find({}).populate("user_id").populate("product_id").exec();
    res.send({success: true, result});
}



let GetAllPlacedOrder = async(req, res)=>{
    let id = req.userobj.id;
    let result = await Order.find({status:1}).populate("user_id").populate("product_id").exec();
    res.send({success: true, result});
}
let GetAllShipped = async(req, res)=>{
    let id = req.userobj.id;
    let result = await Order.find({status:2}).populate("user_id").populate("product_id").exec();
    res.send({success: true, result});
}
let GetAllOutForDel = async(req, res)=>{
    let id = req.userobj.id;
    let result = await Order.find({status:3}).populate("user_id").populate("product_id").exec();
    res.send({success: true, result});
}
let GetAllDelivered = async(req, res)=>{
    let id = req.userobj.id;
    let result = await Order.find({status:4}).populate("user_id").populate("product_id").exec();
    res.send({success: true, result});
}

let ChangeStatus = async(req, res)=>{
    let id = req.params.id;
    await Order.updateMany({_id : id}, req.body);
    res.send({success:true})
}

export {ChangeStatus, Payment, Confirm, GetAllOrderByUserId, GetAllOrder, GetAllDelivered, GetAllOutForDel, GetAllPlacedOrder, GetAllShipped}