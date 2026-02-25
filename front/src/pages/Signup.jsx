import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import { API_URL } from '../config/API'
import SignupSchema from '../schema/SignupSchema'
const Signup = () => {
    let navigate = useNavigate();
    useEffect(()=>{
            if(localStorage.getItem("access_user")){
                navigate("/myprofile")
            }
        },[])

    let [pwdType, setPwdType] = useState("password");
    let [pwdClass, setPwdClass] = useState("fa-eye-slash")
    let [allCity, setAllCity] = useState([]);

    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/city`)
        .then(response=>{
            // console.log(response.data);
            setAllCity(response.data);
        })
    },[])


    let SignupFrm = useFormik({
        validationSchema : SignupSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            contact : "",
            city : "",
            address : "",
            gender : "",
            repassword : ""

        },
        onSubmit : (formData)=>{
            
            // we have to post this "formData" by axios
            axios
            .post(`${import.meta.env.VITE_API_URL}/user`, formData)
            .then(response=>{
                // console.log(response.data)
                navigate("/");
            })
        }
    })

    let showPass = ()=>{
        if(pwdType=="password")
        {
            setPwdType("text");
            setPwdClass("fa-eye")
        }else{
            
            setPwdClass("fa-eye-slash")
            setPwdType("password");
        }
    }


  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 mt-3 offset-md-3">
                <form onSubmit={SignupFrm.handleSubmit}>
                <div className="card my-5 border border-dark">
                    <div className="card-header bg-dark-blue">
                        <h4 className='text-light'>User Registration</h4>
                        <small className='text-light'>If you already a member, <NavLink className="text-orange" to="/login">click here</NavLink></small>
                    </div>
                    <div className="card-body">
                        <div className='mt-4'>
                            <label>Full Name</label>
                            <input name='name' onChange={SignupFrm.handleChange} type='text'className={ 'form-control ' + (SignupFrm.errors.name && SignupFrm.touched.name ? 'is-invalid' : '')} placeholder='Full Name' />
                            {
                                SignupFrm.errors.name && SignupFrm.touched.name
                                ?
                                <small className='text-danger'>{SignupFrm.errors.name}</small>
                                :
                                ''
                            }
                        </div> 
                        <div className='mt-4'>
                            <label>Username/Email</label>
                            <input name='email' onChange={SignupFrm.handleChange} type='text' className={'form-control '+(SignupFrm.errors.email && SignupFrm.touched.email ? 'is-invalid' : '')} placeholder='Username/Email' />
                            {
                                SignupFrm.errors.email && SignupFrm.touched.email
                                ?
                                <small className='text-danger'>{SignupFrm.errors.email}</small>
                                :
                                ''
                            }
                        </div>  
                        
                        <div className='mt-4'>
                            <label>Password</label>
                            <div className='input-group'>
                                <input name='password' onChange={SignupFrm.handleChange} type={pwdType} className={'form-control '+(SignupFrm.errors.password && SignupFrm.touched.password ? 'is-invalid' : '')} placeholder='Password' />
                                <div className='input-group-append'>
                                    <button type='button' onClick={showPass} className='btn btn-dark'><i class={"fa "+pwdClass} aria-hidden="true"></i></button>
                                </div>
                            </div>
                            {
                                SignupFrm.errors.password && SignupFrm.touched.password
                                ?
                                <small className='text-danger'>{SignupFrm.errors.password}</small>
                                :
                                ''
                            }
                        </div>    
                        <div className='mt-4'>
                            <label>Re-Password</label>
                            <input name='repassword' onChange={SignupFrm.handleChange} type='password' className={'form-control '+(SignupFrm.errors.repassword && SignupFrm.touched.repassword ? 'is-invalid' : '')} placeholder='Re-Password' />
                            {
                                SignupFrm.errors.repassword && SignupFrm.touched.repassword
                                ?
                                <small className='text-danger'>{SignupFrm.errors.repassword}</small>
                                :
                                ''
                            }
                        </div> 
                        <div className='mt-4'>
                            <label>Contact</label>
                            <input name='contact' onChange={SignupFrm.handleChange} type='text' className={'form-control '+(SignupFrm.errors.contact && SignupFrm.touched.contact ? 'is-invalid' : '')} placeholder='Contact' />
                            {
                                SignupFrm.errors.contact && SignupFrm.touched.contact
                                ?
                                <small className='text-danger'>{SignupFrm.errors.contact}</small>
                                :
                                ''
                            }
                        </div>    
                        <div className='mt-4'>
                            <label>Address</label>
                            <textarea name='address' onChange={SignupFrm.handleChange} className={'form-control '+(SignupFrm.errors.address && SignupFrm.touched.address ? 'is-invalid' : '')} placeholder='Address' ></textarea>
                            {
                                SignupFrm.errors.address && SignupFrm.touched.address
                                ?
                                <small className='text-danger'>{SignupFrm.errors.address}</small>
                                :
                                ''
                            }
                        </div>    
                        <div className='mt-4'>
                            <label>City</label>
                            <select name='city' onChange={SignupFrm.handleChange} className={'form-control '+(SignupFrm.errors.city && SignupFrm.touched.city ? 'is-invalid' : '')} >
                                <option>Select City</option>
                                {
                                    allCity.map(item=>{
                                        return(
                                            <option>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {
                                SignupFrm.errors.city && SignupFrm.touched.city
                                ?
                                <small className='text-danger'>{SignupFrm.errors.city}</small>
                                :
                                ''
                            }
                        </div> 
                        <div className='mt-4'>
                            <label>Gender</label><br />
                            Male <input value="male" type='radio' onChange={SignupFrm.handleChange}  name='gender'/> 
                            Female <input value="female" type='radio' onChange={SignupFrm.handleChange}  name='gender'/>
                            <br />
                            {
                                SignupFrm.errors.gender && SignupFrm.touched.gender
                                ?
                                <small className='text-danger'>{SignupFrm.errors.gender}</small>
                                :
                                ''
                            }
                        </div>   
                    </div>
                    <div className="card-footer bg-dark-blue">
                        <button type='submit' className='btn btn-light'>Registration</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup