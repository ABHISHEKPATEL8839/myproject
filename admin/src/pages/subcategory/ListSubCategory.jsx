import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config/API'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import {ToastContainer, toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const ListSubCategory = () => {
    let navigate = useNavigate();
    let [allSubCate, setAllSubCate] = useState([]);
    let [subCate, setSubCate] = useState({});
    let [show, setShow] = useState(false)
    let [preloader, setPreLoader] = useState(false)

    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/subcategory`)
        .then(response=>{
            setAllSubCate(response.data.result)
        })
    },[])

    let askDelete = (obj)=>{
        setSubCate(obj);
        setShow(true);
    }

    let confDelete = ()=>{
        setPreLoader(true)
        axios
        .delete(`${import.meta.env.VITE_API_URL}/subcategory/${subCate._id}`)
        .then(response=>{
            setPreLoader(false);
            setShow(false);
            setAllSubCate(curr=>curr.filter(item=>item._id != subCate._id))
            toast("Sub-Category Deleted Successfuly.....")
        })
    }


    let goToEdit = (obj)=>{
        navigate("/subcategory/edit/"+obj._id)
    }

  return (
    <>
    <ToastContainer />
    <Modal show={show}>
        <Modal.Header>
            <Modal.Title>Delete Sub-Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Are you sure want to Delete <b>{subCate.name}</b> !</p>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={confDelete} className='btn btn-danger'>Confirm { preloader ? <span className='spinner-border spinner-border-sm'></span> : '' }</button>
            <button className='btn btn-info' onClick={()=>setShow(false)}>Close</button>
        </Modal.Footer>
    </Modal>


    <div className="main-panel">
          <div className="content-wrapper pb-0">
    
                <h2>Sub Category</h2>
            <div className="page-header flex-wrap">
                
                {
                    allSubCate.length > 0
                    ?
                    <>
                <h3>List of All Sub-Category</h3>
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sub-Category Name</th>
                            <th>Category Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            allSubCate.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.categoryId.name}</td>
                                        <td>
                                            <button onClick={()=>goToEdit(item)} className='btn btn-info btn-sm'>
                                                <i className='fa fa-pencil-square'></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={()=>askDelete(item)} className='btn btn-danger btn-sm'>
                                                <i className='fa fa-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                  </table>
                </div>
                </>
                :
                <div className='alert alert-warning'>No Data Found</div>
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default ListSubCategory