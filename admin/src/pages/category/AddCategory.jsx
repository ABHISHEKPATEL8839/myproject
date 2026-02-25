import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config/API'
import axios from 'axios'
import {useFormik} from 'formik'
import {useNavigate, useParams} from 'react-router-dom'
import CateSchema from '../../schema/CategorySchema'


const AddCategory = () => {
  let param = useParams();
  let [cate, setCate] = useState({
      name : ""
    })
  
  useEffect(()=>{
    if(param.id){
      axios
      .get(`${import.meta.env.VITE_API_URL}/category/${param.id}`)
      .then(response=>{
        // console.log(response.data)
        setCate(response.data.result)
      })
    }
  },[])

  let navigate = useNavigate();
  let CateFrm = useFormik({
    validationSchema : CateSchema,
    enableReinitialize : true,
    initialValues : cate,
    onSubmit : (formData)=>{
      if(param.id){
           axios
        .put(`${import.meta.env.VITE_API_URL}/category/${param.id}`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
          navigate("/category/list")  
        })
      }else{

        axios
        .post(`${import.meta.env.VITE_API_URL}/category`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
          navigate("/category/list")  
        })
      }
    }
  })


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
              <form onSubmit={CateFrm.handleSubmit}>                            
            <div className="page-header flex-wrap">
              <div className="col-md-6 col-lg-6 col-sm-6 stretch-card grid-margin">
                <div className="card">
                    <div className="card-header">
                        <h4>{param.id ? 'Update' : 'Add New'} Category</h4>
                    </div>
                    <div className="card-body">
                      <div className="my-2">
                        <label htmlFor="">Category Name</label>
                        <input value={CateFrm.values.name} name='name' onChange={CateFrm.handleChange} type='text' className={'form-control ' + (CateFrm.errors.name && CateFrm.touched.name ? 'is-invalid' : '') } />
                        {
                          CateFrm.errors.name && CateFrm.touched.name
                          ?
                          <small className='text-danger'>{CateFrm.errors.name}</small>
                          :
                          ''
                        }
                      </div>
                      
                    </div>
                    <div className="card-footer">
                      <button type='submit' className='btn btn-success'>{param.id ? 'Update' : 'Add'}</button>
                    </div>
                </div>
              </div>
            </div>
              </form>
        </div>
    </div>
  )
}

export default AddCategory