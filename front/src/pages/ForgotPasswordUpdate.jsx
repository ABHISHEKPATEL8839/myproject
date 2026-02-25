import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'

const ForgotPasswordUpdate = () => {

    let navigate = useNavigate();

    if(! localStorage.getItem("efp")){
            return <Navigate to="/login" />
        }

    let updatePassFrm = useFormik({
        initialValues : {
            password : "",
            repassword : ""
        },
        onSubmit : (formData)=>{
            formData.email = localStorage.getItem("efp");
            axios
            .post(`${import.meta.env.VITE_API_URL}/forgotpassword/update`, formData)
            .then(response=>{
                localStorage.removeItem("efp");
                navigate("/login");
            })
            
        }
    })
    
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-3">
                <form onSubmit={updatePassFrm.handleSubmit}>
                <div className="card border boder-dark my-5">
                    <div className="card-header bg-dark-blue">
                        <h4 className='text-light'>Change Password</h4>
                    </div>
                    <div className="card-body">
                        <div className="my-4">

                        <label>New Password</label>
                        <input name='password' onChange={updatePassFrm.handleChange} type='password' className='form-control' />
                        </div>
                        <div className="my-4">

                        <label>Confirm New Password</label>
                        <input name='repassword' onChange={updatePassFrm.handleChange} type='password' className='form-control' />
                        </div>
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

export default ForgotPasswordUpdate