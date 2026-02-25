import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper">
          <h3 className='text-center mt-3 mb-0 brand-logo'>Administrator</h3>
          <h3 className='text-center mt-3 mb-0 brand-logo-mini'>A</h3>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img src="/assets/images/faces/face1.jpg" alt="profile" />
                <span className="login-status online"></span>
                
              </div>
              <div className="nav-profile-text d-flex flex-column pr-3">
                <span className="font-weight-medium mb-2">{localStorage.getItem("admin_name")}</span>
                
              </div>
              
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#cate" aria-expanded="false" aria-controls="ui-basic">
              <i className="mdi mdi-view-list menu-icon"></i>
              <span className="menu-title">Category</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="cate">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category">Add</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category/list">List</NavLink>
                </li>
                
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#subcate" aria-expanded="false" aria-controls="ui-basic">
              <i className="mdi mdi-format-list-checkbox menu-icon"></i>
              <span className="menu-title">Sub Category</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="subcate">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/subcategory">Add</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/subcategory/list">List</NavLink>
                </li>
                
              </ul>
            </div>
          </li>

           <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#pro" aria-expanded="false" aria-controls="ui-basic">
              <i className="mdi mdi-store menu-icon"></i>
              <span className="menu-title">Product</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="pro">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/product">Add</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/product/list">List</NavLink>
                </li>
                
              </ul>
            </div>
          </li>

           <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#user" aria-expanded="false" aria-controls="ui-basic">
              <i className="mdi mdi-account menu-icon"></i>
              <span className="menu-title">User</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="user">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users/list">List</NavLink>

                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/dropdowns.html">List</a>
                </li>
                
              </ul>
            </div>
          </li>
           <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#setting" aria-expanded="false" aria-controls="ui-basic">
              <i className="mdi mdi-tune menu-icon"></i>
              <span className="menu-title">Settings</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="setting">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admins/list">Add New Admin</NavLink>

                </li>
                
                
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#order" aria-expanded="false" aria-controls="ui-basic">
              
              <span class="mdi mdi-cart-arrow-down menu-icon"></span>
               &nbsp;&nbsp;&nbsp;&nbsp;<span className="menu-title">Orders</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="order">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/order/list">All Orders</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/order/placed">Placed</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/order/shipped">Shipped</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/order/outfor">Out For Develivery</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/order/delivered">Delivered</NavLink>
                </li>
                
                
              </ul>
            </div>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              <i className="mdi mdi-logout menu-icon"></i>
              <span className="menu-title">Logout</span>
            </NavLink>
          </li>
          
          
        </ul>
      </nav>
  )
}

export default SideNav