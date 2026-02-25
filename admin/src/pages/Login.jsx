import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import {Navigate, useNavigate} from 'react-router-dom'
import * as YUP from 'yup';
import axios from 'axios'
import { API_URL } from '../config/API';

let LoginSchema = YUP.object({
    username : YUP.string().required("Insert Your Username"),
    password : YUP.string().required("Insert Your Password"),
})

const Login = () => {
    let token = localStorage.getItem("sseccanimda");
    if(token){
        return <Navigate to="/dashboard" replace/>
    }


    let navigate = useNavigate();
    // useEffect(()=>{
    //     if(localStorage.getItem("sseccanimda")){
    //         navigate("/dashboard");
    //     }
    // },[])



    let [errMsg, setErrMsg] = useState("");
    let LoginFrm = useFormik({
        initialValues : {
            username : "",
            password : ""
        },
        validationSchema : LoginSchema,
        onSubmit : (formData)=>{
            // console.log(formData)
            axios
            .post(`${ import.meta.env.VITE_API_URL}/adminauth`, formData)
            .then(response=>{
                console.log(response.data)
                if(response.data.success==true){
                    // adminaccess
                    localStorage.setItem("sseccanimda", response.data.token);
                    localStorage.setItem("admin_name", response.data.name);
                    localStorage.setItem("admin_type", response.data.admintype);
                    navigate("/dashboard");

                }else{
                    setErrMsg("This Username and Password Incorrect !");
                }
            })
        }
    })


  return (
    <div className="container my-5">
            <form onSubmit={LoginFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-5">
                <div className="card  border border-dark">
                    <div className="card-header bg-dark">
                        <h3 className='text-light text-center'>Administrator</h3>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label>Username</label>
                            <input name='username' onChange={LoginFrm.handleChange} type='text' className={'form-control ' + (LoginFrm.errors.username && LoginFrm.touched.username ? 'is-invalid' : '') } placeholder='Username' />
                        </div>
                        <div className="my-2">
                            <label>Password</label>
                            <input name='password' onChange={LoginFrm.handleChange} type='password' className={'form-control ' + (LoginFrm.errors.password && LoginFrm.touched.password ? 'is-invalid' : '') } placeholder='Password' />
                        </div>
                    </div>
                    <div className="card-footer bg-dark">
                        <button type='submit' className='btn btn-info'>Login</button>
                        <p className='text-danger text-center'>{errMsg}</p>
                    </div>
                </div>
            </div>
        </div>
            </form>
    </div>
  )
}

export default Login