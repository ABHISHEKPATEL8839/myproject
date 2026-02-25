import City from "../models/City.js";
import Razorpay from 'razorpay'

import DoSendMail from '../helpers/SendMailHelper.js';

const RAZORPAY_KEY = "rzp_test_Rek8z2OtrReaiV";
const RAZORPAY_SECRET = "c3QZBCHSmaMmuLK9Gc9y1MtK";

let rzpy = new Razorpay({
    key_id : RAZORPAY_KEY,
    key_secret : RAZORPAY_SECRET
})


let GetAllCity = async(req, res)=>{
    let result = await City.find();
    res.send(result);
}
let SendMail = async(req, res)=>{
    await DoSendMail("james.steppingstone@gmail.com", "Hi", `<h2>Hi James....</h2>`);
    res.send({success:true});
}

let DoPayment = async(req, res)=>{
    let amount = 500;
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

export {GetAllCity, SendMail, DoPayment}