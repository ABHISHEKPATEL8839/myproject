import React, { useEffect } from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './MyProfile.css'
// http://localhost:3000/api/v1/profile
const MyProfile = () => {
  let [user, setUser] = useState({});
  useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_API_URL}/profile`, { headers : {Authorization : localStorage.getItem("access_user")}})
    .then(response=>{
      console.log(response.data.result);
      setUser(response.data.result);
    })
  },[])

  return (
   
        <div className="col-md-9">
          <div className="alert" style={{backgroundColor : "#a5d4e7ff"}}>
            <h4>Profile Information</h4>
            <NavLink to='/myprofile/edit' className="mx-3">Edit</NavLink>
            <NavLink to='/myprofile/change-password' className="mx-3">Change Password</NavLink>
            <br />
            <br />
            <div className="row">
              <div className="col-md-6">
                <input type='text' className='form-control' disabled value={user.name} />
                <br />
                Your Gender
                <br />
                <br />
                Male &nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' disabled className={user.gender=="male" ? 'radio-button-outline' : ''}  checked={user.gender=="male" ? true : false}/>&nbsp;&nbsp;&nbsp;&nbsp;


                Female &nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' disabled className={user.gender=="female" ? 'radio-button-outline' : ''} checked={user.gender=="female" ? true : false} />
                <br />
                <br />
                Email
                <br />
                <input type='text' className='form-control' disabled value={user.email} />
                <br />
                <br />
                Mobile Number
                <br />
                <input type='text' className='form-control' disabled value={user.contact} />
                <br />
                
              </div>
            </div>
            <h5>FAQs</h5>
            <p><b>What happens when I update my email address (or mobile number)?</b></p>
            <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
            <p><b>What happens when I update my email address (or mobile number)?</b></p>
            <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
            <p><b>What happens when I update my email address (or mobile number)?</b></p>
            <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>

          </div>
        </div>
      
  )
}

export default MyProfile