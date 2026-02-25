import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {API_URL} from '../../config/API'
import {useNavigate, useParams} from 'react-router-dom'

const AddProducts = () => {
  let param = useParams();
  let navigate = useNavigate();
  let [allCate, setAllCate] = useState([])
  let [allSubCate, setAllSubCate] = useState([]);
  let [pro, setPro] = useState({
        title : "",
        price : "",
        categoryId : "",
        subcategoryId : "",
        brand : "",
        quantity : "",
        costprice : "",
        discount : "",
        color : "",
        size : "",
        detail : ""
    });

    useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_API_URL}/category`)
    .then(response=>{
     
      setAllCate(response.data.result);
      
    })
  },[])
  useEffect(()=>{
    if(param.id){
      axios
      .get(`${import.meta.env.VITE_API_URL}/product/edit/${param.id}`)
      .then(response=>{
        
        setPro(response.data.result)
        getSubCateById(response.data.result.categoryId)
      })
      
    }
  },[])

  

  let ProFrm = useFormik({
    enableReinitialize : true,
    initialValues : pro,
    onSubmit : (formData)=>{
     if(param.id){
      axios
       .put(`${import.meta.env.VITE_API_URL}/product/${param.id}`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
       .then(response=>{
         navigate("/product/list")
        })
     }else{

       axios
       .post(`${import.meta.env.VITE_API_URL}/product`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
       .then(response=>{
         navigate("/product/list")
        })
      }
    }
  })

  let getSubCateById = (cid)=>{
    
    axios
    .get(`${import.meta.env.VITE_API_URL}/subcategory/getsubcatebycateid/${cid}`)
    .then(response=>{
      // console.log(response.data)
      setAllSubCate(response.data.result);
    })
  }


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <form onSubmit={ProFrm.handleSubmit}>
            <div className="page-header flex-wrap">
              <div className="col-md-12 col-lg-12 col-sm-12 stretch-card grid-margin">
                <div className="card">
                    <div className="card-header">
                        <h4>{param.id ? 'Update' : "Add New"} Product</h4>
                    </div>
                    <div className="card-body">
                      <div className="my-4">
                        <label htmlFor="">Product Title</label>
                        <input value={ProFrm.values.title} name='title' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Product Cost Price</label>
                        <input value={ProFrm.values.costprice} name='costprice' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Product Selling Price (M.R.P.)</label>
                        <input value={ProFrm.values.price} name='price' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Category</label>
                        <select value={ProFrm.values.categoryId} className='form-control' name='categoryId' onChange={(e)=>{ProFrm.handleChange(e); getSubCateById(e.target.value)}}>
                          <option>Select</option>
                          {
                            allCate.map(item=><option value={item._id}>{item.name}</option>)
                          }
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Sub-Category</label>
                        <select value={ProFrm.values.subcategoryId} className='form-control' name='subcategoryId' onChange={ProFrm.handleChange}>
                          <option>Select</option>
                          {
                            allSubCate.map(item=><option value={item._id}>{item.name}</option>)
                          }
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Brand/Company</label>
                        <input value={ProFrm.values.brand} name='brand' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Size</label>
                        <select value={ProFrm.values.size} name='size' onChange={ProFrm.handleChange} className='form-control'>
                          <option>Select</option>
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                          <option>XXL</option>
                          <option>Free Size</option>
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Color</label>
                        <select value={ProFrm.values.color} name='color' onChange={ProFrm.handleChange} className='form-control'>
                          <option>Select</option>
                          <option>White</option>
                          <option>Black</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>Green</option>
                          <option>Brown</option>
                          <option>Yellow</option>
                        </select>
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Quantity</label>
                        <input value={ProFrm.values.quantity} name='quantity' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Discount(%)</label>
                        <input value={ProFrm.values.discount} name='discount' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Detail</label>
                        <textarea value={ProFrm.values.detail} name='detail' onChange={ProFrm.handleChange} className={'form-control'} ></textarea>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button type='submit' className='btn btn-success'>{param.id ? "Update" : "Add"}</button>
                    </div>
                </div>
              </div>
            </div>
            </form>  
        </div>
    </div>
  )
}

export default AddProducts

/*
   title : String,
    price : Number,
    categoryId : { type :  mongoose.Schema.Types.ObjectId, ref : "category"},
    subcategoryId : {type : mongoose.Schema.Types.ObjectId, ref : "subcategory"},
    brand : String,
    quantity : Number,
    costprice : Number,
    discount : Number,
    color : String,
    size : String,
    detail : String
*/

