import React, { useEffect } from 'react'
import SideNav from '../components/SideNav'
import TopNav from '../components/TopNav'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtactedRoutes = () => {
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("sseccanimda")){
      navigate("/");
    }
  },[])

  return (

     <div className="container-scroller">
        <SideNav />
        <div className="container-fluid page-body-wrapper">
            <TopNav />
            <Outlet />
        </div>
    </div>
  )
}

export default ProtactedRoutes