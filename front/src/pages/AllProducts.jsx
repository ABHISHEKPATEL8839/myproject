import React, {useEffect, useState} from 'react'
import "./AllProducts.css"

import ProductBox from '../components/ProductBox';
import axios from 'axios'
import Slider from '../components/Slider'
import WhyShopWithUs from '../components/WhyShopWithUs'
const AllProducts = () => {
    let [product, setProduct] = useState([]);

   useEffect(()=>{
      axios
         .get(`${import.meta.env.VITE_API_URL}/product`)
         .then(response => {
            // console.log(response.data);
            setProduct(response.data.result);
         })
   },[])
  return (
    <section className="product_section layout_padding">
    <div className="container my-5" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-3">
                <div className="card bg-dark">
                    <div className="card-header">
                        <h4 className='text-light'>Filters</h4>
                    </div>
                    <div className="card-body">
                        <h5 className='text-light'>Categories</h5>
                        <ul className='nav'>
                            <li className="nav-item">
                                <a href='' className='nav-link text-light'>Formal Shoes</a>
                            </li>
                            <li className="nav-item">
                                <a href='' className='nav-link text-light'>Formal Shoes</a>
                            </li>
                            <li className="nav-item">
                                <a href='' className='nav-link text-light'>Formal Shoes</a>
                            </li>
                        </ul>
                        <div className='saperator'></div>
                        <br />
                        <h5 className='text-light'>Price</h5>
                        <br />
                        <div className='saperator'></div>
                        <br />
                        <h5 className='text-light'>Color</h5>
                        <span className='color red'></span>
                        <span className='color black'></span>
                        <span className='color white'></span>
                        <span className='color yellow'></span>
                        <span className='color blue'></span>
                        <span className='color brown'></span>
                        <span className='color green'></span>
                        <br />
                        <div className='saperator'></div>
                        <br />
                        <h5 className='text-light'>Discount</h5>
                        <select className='form-control'>
                            <option>Select</option>
                            <option>10% and More</option>
                            <option>20% and More</option>
                            <option>30% and More</option>
                            <option>40% and More</option>
                            <option>50% and More</option>
                            
                        </select>
                        <br />
                        <div className='saperator'></div>
                        <br />
                        <h5 className='text-light'>Size</h5>
                        <select className='form-control'>
                            <option>All</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                            
                            
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <h3>All Products</h3>
                <div className="row">
                    {
                     product.map(item => {
                        return(
                           <ProductBox item={item} />
                        )
                     })
                  }
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default AllProducts