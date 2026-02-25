import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../config/API'
const Otp = () => {



    let navigate = useNavigate();

    
        if(! localStorage.getItem("efp")){
            return <Navigate to="/login" />
        }
    

    let [errMsg, setErrMsg] = useState("");

    let otpFrm = useFormik({
        initialValues : {
            otp : ""
        },
        onSubmit : (formData)=>{
            formData.email = localStorage.getItem("efp");
            axios.post(`${import.meta.env.VITE_API_URL}/forgotpassword/otp`, formData)
            .then(response=>{
              if(response.data.success==true){  
                    navigate("/update-password");
              }else{
                setErrMsg("OTP is Incorrect");
              }

            })
        }
    })

  return (
     <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-3">
                <form onSubmit={otpFrm.handleSubmit}>
                <div className="card border boder-dark my-5">
                    <div className="card-header bg-dark-blue">
                        <h4 className='text-light'>OTP</h4>
                    </div>
                    <div className="card-body">
                        <label className='my-4'>OTP</label>
                        <input name='otp' onChange={otpFrm.handleChange} type='text' className='form-control' />
                        <small className='text-danger'>{errMsg}</small>
                    </div>
                    <div className="card-footer bg-dark-blue">
                        <button type='submit' className='btn btn-light'>Next</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Otp