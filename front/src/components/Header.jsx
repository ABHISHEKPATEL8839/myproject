
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../config/API';
import { useState } from 'react';
import { useEffect } from 'react';


import './Header.css'

const Header = () => {

   let [allCate, setAllCate] = useState([])

   useEffect(() => {
      console.log(import.meta.env.VITE_API_URL)
      axios

         .get(import.meta.env.VITE_API_URL + "/category/subcate")
         .then(response => {
            console.log(response.data.result);
            setAllCate(response.data.result);
         })
   }, [])



   return (
      <header className="header_section">
         <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
               <a className="navbar-brand" href="index.html"><img width="250" src="/images/logo.png" alt="#" /></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                     </li>
                     
                     <li className='nav-item dropdown'>
                        <a className="dropdown-toggle nav-link" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Categories
                        </a>
                        <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                           {
                              allCate.map(item1=>{
                                 return(
                                    <li className="dropdown-submenu">
                              <a className="dropdown-item" href="#">{item1.category ? item1.category.name : ''}</a>
                              <ul className="dropdown-menu">
                                 {
                                    item1.info.map(item2=>{
                                       return(
                                          <li className="dropdown-item"><a href="#">{item2.name}</a></li>
                                       )
                                    })
                                 }                                 
                              </ul>
                           </li>
                                 )
                              })
                           }
                        </ul>
                     </li>
                     
                    
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                     </li>
                     {
                        localStorage.getItem("access_user")
                        ?
                        <li className="nav-item dropdown user-dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">{localStorage.getItem("name")} <span className="caret"></span></span></a>
                        <ul className="dropdown-menu">   
                           <li><NavLink to='/myprofile'>My Profile</NavLink></li>
                           <li><NavLink to='/myorders'>My Orders</NavLink></li>
                           <li><NavLink href=''>Wishlist</NavLink></li>
                           <li><NavLink to='/logout'>Logout</NavLink></li>
                           
                        </ul>
                        </li>
                        :
                        <>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/Login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" to="/signup">Signup</NavLink>
                        </li>
                        </>
                     }   

                  </ul>
               </div>
            </nav>
         </div>
      </header>

   )
}

export default Header