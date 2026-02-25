import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useFormik} from 'formik'
import { API_URL } from '../../config/API';
import UpdateProfileSchema from '../../schema/UpdateProfileSchema';
const EditProfile = () => {
    let navigate = useNavigate();
    let [user, setUser] = useState({});
    let [allCity, setAllCity] = useState([])
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/profile`, {headers : {Authorization : localStorage.getItem("access_user")}})
        .then(response=>{
            console.log(response.data)
            setUser(response.data.result);
        })
    },[])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/city`).then(response=>{
            setAllCity(response.data)
        })
    },[])


    let updateFrm = useFormik({
        validationSchema : UpdateProfileSchema,
        initialValues : user,
        enableReinitialize : true,
        onSubmit : (formData)=>{
            // console.log(formData)
            axios
            .put(`${import.meta.env.VITE_API_URL}/profile`, formData, { headers : {Authorization : localStorage.getItem("access_user")}})
            .then(response=>{
                // console.log(response.data)
                localStorage.setItem("name", formData.name);
                navigate("/myprofile")
            })

        }
    })

    return (
        <div className="col-md-9">
            <div className="alert" style={{ backgroundColor: "#a5d4e7ff" }}>
                <h4>Update Your Profile Information</h4>
                <NavLink to='/myprofile'>Back</NavLink>
                <br />
                <br />
                    <form onSubmit={updateFrm.handleSubmit}>
                <div className="row">
                        <div className="col-md-8">
                        <div className='my-2'>
                            <label>Full Name</label>
                            <input type='text' value={updateFrm.values.name} name='name' onChange={updateFrm.handleChange} className={'form-control '+(updateFrm.errors.name && updateFrm.touched.name ? 'is-invalid' : '')} />
                             {
                                updateFrm.errors.name && updateFrm.touched.name
                                ?
                                <small className='text-danger'>{updateFrm.errors.name}</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-2'>
                            <label>Eamil</label>
                            <input type='text' disabled value={updateFrm.values.email} name='email' onChange={updateFrm.handleChange} className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>Contact</label>
                            <input value={updateFrm.values.contact} name='contact' onChange={updateFrm.handleChange} type='text' className='form-control' />
                             {
                                updateFrm.errors.contact && updateFrm.touched.contact
                                ?
                                <small className='text-danger'>{updateFrm.errors.contact}</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-2'>
                            <label>Address</label>
                            <textarea value={updateFrm.values.address} name='address' onChange={updateFrm.handleChange} className='form-control' ></textarea>
                            {
                                updateFrm.errors.address && updateFrm.touched.address
                                ?
                                <small className='text-danger'>{updateFrm.errors.address}</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-2'>
                            <label>Gender</label>
                            <br />
                            Male &nbsp;<input type='radio' checked={updateFrm.values.gender=="male"} onChange={updateFrm.handleChange} name='gender' value={'male'}/>
                            &nbsp;&nbsp;&nbsp;
                            Female &nbsp;<input type='radio' checked={updateFrm.values.gender=="female"} onChange={updateFrm.handleChange} name='gender' value={'female'}/>
                            <br />
                            {
                                updateFrm.errors.gender && updateFrm.touched.gender
                                ?
                                <small className='text-danger'>{updateFrm.errors.gender}</small>
                                :
                                ''
                            }
                        </div>
                        <div className='my-2'>
                            <label>City</label>
                            <select value={updateFrm.values.city} name='city' onChange={updateFrm.handleChange} className='form-control' >
                                <option>Select City</option>
                                {
                                    allCity.map(item=><option>{item.name}</option>)
                                }
                            </select>
                            {
                                updateFrm.errors.city && updateFrm.touched.city
                                ?
                                <small className='text-danger'>{updateFrm.errors.city}</small>
                                :
                                ''
                            }
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

export default EditProfile

/*

axios.get("url", {header....}).then
axios.post("url", formData, {header....}).then
axios.put("url", formData, {header....}).then
axios.delete("url", {header....})

*/