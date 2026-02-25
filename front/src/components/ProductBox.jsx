import React from 'react'
import {NavLink} from 'react-router-dom'
import { API_PATH } from '../config/API'
const ProductBox = ({item}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4" >
                           <div className="box" style={{minHeight : "350px"}}>
                              <div className="option_container">
                                 <div className="options">
                                    <NavLink to={"/detail/"+item._id} className="option1">
                                       {item.categoryId ? item.categoryId.name : ''}
                                    </NavLink>
                                    <NavLink to={"/detail/"+item._id} className="option2">
                                       Detail
                                    </NavLink>
                                 </div>
                              </div>
                              <div className="img-box">
                                 
                                 <img style={{width : "300px", height : "270px"}} src={item.image ? `${import.meta.env.VITE_API_PATH}/product_images/${item.image}` : `${import.meta.env.VITE_API_PATH}/product_images/pro_avatar.jpg`} alt="" />
                              </div>
                              <div className="detail-box">
                                 <p style={{marginTop : 20, marginLeft : 20, fontSize : 19, fontWeight : "bold"}}>
                                    {item.title}
                                 </p>
                                 
                              </div>
                           </div>
                        </div>
  )
}

export default ProductBox