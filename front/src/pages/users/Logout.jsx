import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom';

const Logout = () => {
    
    localStorage.removeItem("name");
    localStorage.removeItem("access_user");
    
  return (
    <Navigate to="/login" />
  )
}

export default Logout


/*
    let navi = useNavigate();           Js
    navi("/login")


    <Navigate to="/login" />            JSX


*/