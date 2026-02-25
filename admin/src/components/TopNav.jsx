import React from 'react'
import {NavLink} from 'react-router-dom'

const TopNav = () => {
  return (
    <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
          <div className="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
            <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
            <button className="navbar-toggler navbar-toggler align-self-center mr-2" type="button" data-toggle="minimize">
              <i className="mdi mdi-menu"></i>
            </button>
            
            <ul className="navbar-nav navbar-nav-right ml-lg-auto">
              
              <li className="nav-item nav-profile dropdown border-0">
                <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown">
                  <img className="nav-profile-img mr-2" alt="" src="/assets/images/faces/face1.jpg" />
                  <span className="profile-name">{localStorage.getItem("admin_name")}</span>
                </a>
                <div className="dropdown-menu navbar-dropdown w-100" aria-labelledby="profileDropdown">
                  
                  <NavLink className="dropdown-item" to="/logout">
                    <i className="mdi mdi-logout mr-2 text-primary"></i> Logout </NavLink>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
  )
}

export default TopNav