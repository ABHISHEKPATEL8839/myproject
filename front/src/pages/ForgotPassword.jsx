import React, { useState } from 'react'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const ForgotPassword = () => {
    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");

    let forgotPass = useFormik({
        initialValues : {
            email : ""
        },
        onSubmit : (formData)=>{
            axios
            .post(`${import.meta.env.VITE_API_URL}/forgotpassword/checkemail`, formData)
            .then(response=>{
                
                if(response.data.success==true){
                    localStorage.setItem("efp", response.data.email)
                    navigate("/otp")
                }else{
                    setErrMsg("This Email id is not registered !")
                }
            })
        }
    })

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-3">
                <form onSubmit={forgotPass.handleSubmit}>
                <div className="card border boder-dark my-5">
                    <div className="card-header bg-dark-blue">
                        <h4 className='text-light'>Forgot Password</h4>
                    </div>
                    <div className="card-body">
                        <label className='my-4'>Registered Email Id</label>
                        <input type='text' name='email' onChange={forgotPass.handleChange} className='form-control' />
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

export default ForgotPassword