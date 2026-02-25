import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config/API'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import SubCateSchema from '../../schema/SubCategorySchema'

const AddSubCategory = () => {
    let param = useParams();
    let navigate = useNavigate();
    let [allCate, setAllCate] = useState([]);
    let [subCate, setSubCate] = useState({});
    useEffect(()=>{
        if(param.id){
            axios
            .get(`${import.meta.env.VITE_API_URL}/subcategory/${param.id}`)
            .then(response=>{
                // console.log(response.data)
                setSubCate(response.data.result);
            })
        }
    },[])
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/category`)
        .then(response=>{
            setAllCate(response.data.result);
        })
    },[])

    let SubCateFrm = useFormik({
        enableReinitialize : true,
        validationSchema : SubCateSchema,
        initialValues : subCate,
        onSubmit : (formData)=>{
            if(param.id){
                axios
                .put(`${import.meta.env.VITE_API_URL}/subcategory/${param.id}`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
                .then(response=>{
                    
                    navigate("/subcategory/list")
                    
                })
            }else{

                axios
                .post(`${import.meta.env.VITE_API_URL}/subcategory`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
                .then(response=>{
                    
                    navigate("/subcategory/list")
                    
                })
            }
        }
    })


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <form onSubmit={SubCateFrm.handleSubmit}>
            <div className="page-header flex-wrap">
              <div className="col-md-6 col-lg-6 col-sm-6 stretch-card grid-margin">
                <div className="card">
                    <div className="card-header">
                        <h4>{param.id ? "Update" : "Add New"} Sub-Category</h4>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label>Name {SubCateFrm.errors.name && SubCateFrm.touched.name ? <small className='text-danger'>{SubCateFrm.errors.name}</small> : ''}</label>                            
                            <input value={SubCateFrm.values.name} name='name' onChange={SubCateFrm.handleChange} type='text' className={'form-control '+(SubCateFrm.errors.name && SubCateFrm.touched.name ? 'is-invalid' : '')} />
                        </div>
                        <div className="my-3">
                            <label>Category {SubCateFrm.errors.categoryId && SubCateFrm.touched.categoryId ? <small className='text-danger'>{SubCateFrm.errors.categoryId}</small> : ''}</label>
                            <select value={SubCateFrm.values.categoryId} name='categoryId' onChange={SubCateFrm.handleChange} className={'form-control '+(SubCateFrm.errors.categoryId && SubCateFrm.touched.categoryId ? 'is-invalid' : '')}>
                                <option>Select</option>
                                {
                                    allCate.map(item=>{
                                        return(
                                            <option value={item._id}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
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

export default AddSubCategory
/*

let [x, setX] = useState()
let [x, setX] = useState({})



{x.name}


*/