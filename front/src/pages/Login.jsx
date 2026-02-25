import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import LoginSchema from '../schema/LoginSchema'
import {API_URL} from '../config/API'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'

const Login = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("access_user")){
            navigate("/myprofile")
        }
    },[])


    let [errMsg, setErrMsg] = useState("");

    


    let LoginFrm = useFormik({
        validationSchema : LoginSchema,
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : (formData)=>{
            // console.log(formData)
            axios
            .post(`${import.meta.env.VITE_API_URL}/auth`, formData)
            .then(response=>{
                // console.log(response.data);return;
                if(response.data.success==true){
                    // {success:true, name : "", token : ""}
                    localStorage.setItem("name", response.data.name);
                    localStorage.setItem("access_user", response.data.token);
                    toast("You are successful Logged In ....", {
                        onClose : ()=>navigate("/")
                    })
                    // navigate("/");
                }
                else{
                    if(response.data.errType==1){
                        // {success:false, errType=1}
                        setErrMsg("This Email Id and Password is Incorrect")
                    }if(response.data.errType==2){
                        // {success:false, errType=2}
                        setErrMsg("This Password is Incorrect")

                    }
                    if(response.data.errType==3){
                        // {success:false, errType=2}
                        setErrMsg("You are Deactive Now, Please Contact Your Team ... !")

                    }
                }
            })
        }
    })

  
  return (
    <div className="container my-5">


        <ToastContainer type="success" theme='dark'/>



            <form onSubmit={LoginFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 mt-3 offset-md-3">
                <div className="card mt-5 border border-dark">
                    <div className="card-header bg-dark-blue">
                        <h4 className='text-light'>User Login</h4>
                        <small className='text-light'>If you a new user, <NavLink to="/signup" className="text-orange">click here</NavLink></small>
                    </div>
                    <div className="card-body">
                        <div className='my-4'>
                            <label>Username/Email</label>
                            <input type='text' name="email" onChange={LoginFrm.handleChange} className={'form-control ' + (LoginFrm.errors.email && LoginFrm.touched.email ? 'is-invalid' : '')} placeholder='Username/Email' />
                        </div>    
                        <div className='my-4'>
                            <label>Password</label>
                            <input type='password' name="password" onChange={LoginFrm.handleChange} className={'form-control ' + (LoginFrm.errors.password && LoginFrm.touched.password ? 'is-invalid' : '')} placeholder='Password' />
                        </div>   
                        <p className='text-danger m-0 text-center'>{errMsg}</p> 
                    </div>
                    <div className="card-footer bg-dark-blue">
                        <button type='submit' className='btn btn-light'>Login</button>
                        <br />
                        <br />
                    <NavLink className='text-light' to='/forgot-password'>Forgot Your Password</NavLink>
                    </div>
                </div>
            </div>
        </div>
            </form>
    </div>
  )
}

export default Login