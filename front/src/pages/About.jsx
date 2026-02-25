import React, { useState, useRef } from 'react'
import axios from 'axios'
import {API_URL} from '../config/API'
const About = () => {

  let [msg, setMsg] = useState("")
  let send = ()=>{
    axios
    .get(`${import.meta.env.VITE_API_URL}/city/sendmail`)
    .then(response=>{
      console.log(response.data)
      setMsg("Email Send Successfuly....")
    })
  }

  let order = ()=>{
    axios
    .get(`${import.meta.env.VITE_API_URL}/city/payment`)
    .then(response=>{
      if(response.data.success==true){
        let option = {
          key : "rzp_test_Rek8z2OtrReaiV",
          amount : 500*100,
          currency : "INR",
          order_id : response.data.orderId,
          handler : async(data)=>{
            console.log(data);
          }
        }

        let rzpy = window.Razorpay(option);
        rzpy.open();
      }
    })
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <br />
          <br />
          <button onClick={send} className='btn btn-primary'>Send</button>
          <p>{msg}</p>
          <br />
          <br />
          <button onClick={order} className='btn btn-primary'>Checkout 100.00</button>
        </div>
      </div>
    </div>
  )
}

export default About