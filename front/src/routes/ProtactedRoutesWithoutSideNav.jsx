import { useEffect } from 'react'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtactedRoutesWithoutSideNav = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("access_user")){
            navigate("/login");
        }
    },[])
  return (
    <Outlet />
  )
}

export default ProtactedRoutesWithoutSideNav