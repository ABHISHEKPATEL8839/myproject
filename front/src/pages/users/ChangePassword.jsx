import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import axios from 'axios'
import {API_URL} from '../../config/API'
import { useState } from 'react'
const ChangePassword = () => {
    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");
    let passFrm = useFormik({
        initialValues : {
            curr_pass : "",
            new_pass : "",
            confirm_new_pass : ""
        },
        onSubmit : (formData)=>{
            axios
            .put(`${import.meta.env.VITE_API_URL}/profile/changepassword`, formData, {headers : {Authorization : localStorage.getItem("access_user")}})
            .then(response=>{
                console.log(response.data);
                if(response.data.success==true){
                    navigate("/myprofile")
                }else{
                    setErrMsg("Your Current Password is not correct !")
                }
            })
        }
    })
  return (
    <div className="col-md-9">
            <div className="alert" style={{ backgroundColor: "#a5d4e7ff" }}>
                <h4>Change Your Password</h4>
                <NavLink to='/myprofile'>Back</NavLink>
                <br />
                <br />
                <form onSubmit={passFrm.handleSubmit}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="my-2">
                                <label>Current Password</label>
                                <input name='curr_pass' onChange={passFrm.handleChange} type='password' className='form-control' />
                                <span className='text-danger'>{errMsg}</span>
                            </div>
                            <div className="my-2">
                                <label>New Password</label>
                                <input name='new_pass' onChange={passFrm.handleChange} type='password' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Confirm New Password</label>
                                <input name='confirm_new_pass' onChange={passFrm.handleChange} type='password' className='form-control' />
                            </div>
                            <br />
                            <button type='submit' className='btn btn-success'>Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

  )
}

export default ChangePassword