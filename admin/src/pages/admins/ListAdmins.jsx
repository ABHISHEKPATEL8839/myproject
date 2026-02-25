import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config/API';
import {useFormik} from 'formik'
import AdminSchema from '../../schema/AdminSchema';
import Modal from 'react-bootstrap/Modal'
import {ToastContainer, toast} from 'react-toastify'
const ListAdmins = () => {
    let [allAdmin, setAllAdmin] = useState([]);
    let [admin, setAdmin] = useState({})
    let [show, setShow] = useState(false);

    let [showEdit, setShowEdit] = useState(false);
    let [showPass, setShowPass] = useState(false);
    let [showAdd, setShowAdd] = useState(true);

    let [id, setId] = useState();
    let [passErr, setPassErr] = useState("");

    let [updateAdmin, setUpdateAdmin] = useState( {
            name : "",
            username : ""
        })

    useEffect(()=>{
        if(localStorage.getItem("admin_type")==1){

            axios
            .get(`${import.meta.env.VITE_API_URL}/admin`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
            .then(response=>{
                
                setAllAdmin(response.data.result)
            })
        }
        if(localStorage.getItem("admin_type")==2){
            axios
            .get(`${import.meta.env.VITE_API_URL}/admin/getadmin`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
            .then(response=>{
                console.log(response.data);
                setAllAdmin(response.data.result)
            })
        }
    },[])

    let updatePass = useFormik({
        initialValues : {
            password : "",
            repass : "",
            conf_repass : ""
        },
        onSubmit : (formData)=>{
            axios
            .put(`${import.meta.env.VITE_API_URL}/admin/updatepassword/${id}`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
            .then(response=>{
                if(response.data.success==true){

                    updatePass.resetForm({ password : "", repass : "", conf_repass : ""});
                    setShowAdd(true);
                    setShowEdit(false)
                    setShowPass(false)
                    setPassErr("");
                }else{
                    setPassErr("Current Password is not correct")
                }
            })
        }
    })

    let updateFrm = useFormik({
        initialValues : updateAdmin,
        enableReinitialize : true,
        onSubmit : (formData)=>{
            axios
            .put(`${import.meta.env.VITE_API_URL}/admin/${updateAdmin._id}`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
            .then(response=>{
                setAllAdmin(prev=>prev.map(item=>{
                    if(item._id == updateAdmin._id){
                        return formData
                    }else{
                        return item
                    }
                }))
                setUpdateAdmin({name : "", username : ""});
                setShowEdit(false);
            })
        }
    })

    let addFrm = useFormik({
        validationSchema : AdminSchema,
        initialValues : {
            name : "",
            username : "",
            password : "",
            repassword : ""
        },
        onSubmit : (formData)=>{
            axios
            .post(`${import.meta.env.VITE_API_URL}/admin`, formData, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
            .then(response=>{
                // console.log(response.data)
                setAllAdmin(prev=>[...prev, response.data.result]);
                addFrm.resetForm({name : "", username : "", password : "", repassword : ""})
                toast("New Admin Created")
            })
            
        }
    })

    let askDelete = (obj)=>{
        setAdmin(obj);
        setShow(true)
    }
    let hideDeleteBox = ()=>setShow(false)
    let confDelete = ()=>{
        axios
        .delete(`${import.meta.env.VITE_API_URL}/admin/${admin._id}`,{headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
            setShow(false);
            setAllAdmin(prev=>prev.filter(item=>item._id!=admin._id));
        })
    }

    let askEdit = (obj)=>{
        setShowAdd(false);
        setShowPass(false);
        setShowEdit(true)
        setUpdateAdmin(obj)
    }

    let updateCancle = ()=>{
         setUpdateAdmin({name : "", username : ""});
          setShowAdd(true);
        setShowEdit(false);
        setShowPass(false);
    }

    let askUpdatePassword = (obj)=>{
        setId(obj._id);
        setShowPass(true);
        setShowAdd(false);
        setShowEdit(false);
    }
    let canclePassword = ()=>{
        setShowPass(false);
        setShowAdd(true);
        setShowEdit(false);
    }
    return (
        <>
        <ToastContainer autoClose={2000} />
        <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Delete Admins</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure want to Delete <b>{admin.name}</b> !</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={confDelete} className='btn btn-danger'>Confirm 
          
        </button>
        <button className='btn btn-info' onClick={hideDeleteBox}>Close</button>
      </Modal.Footer>
    </Modal>
        <div className="main-panel">
            <div className="content-wrapper pb-0">

                <div className="page-header flex-wrap">
                    {
                        localStorage.getItem("admin_type")==1 && showAdd
                        ?
                        <div className="col-md-6 col-lg-6 col-sm-6 stretch-card grid-margin">
                        
                        
                        <div className="card">
                            <form onSubmit={addFrm.handleSubmit}>
                            <div className="card-header">
                                <h4>Add New Admin</h4>
                            </div>
                            <div className="card-body">
                                <div className="my-2">
                                    <label>Full Name {addFrm.errors.name && addFrm.touched.name ? <span className='text-danger'>{addFrm.errors.name}</span> : ''}</label>
                                    <input name='name' value={addFrm.values.name} onChange={addFrm.handleChange} type='text' className='form-control' />
                                </div>
                                <div className="my-2">
                                    <label>Username {addFrm.errors.username && addFrm.touched.username ? <span className='text-danger'>{addFrm.errors.username}</span> : ''}</label>
                                    <input name='username' value={addFrm.values.username} onChange={addFrm.handleChange} type='text' className='form-control' />
                                </div>
                                <div className="my-2">
                                    <label>Password  {addFrm.errors.password && addFrm.touched.password ? <span className='text-danger'>{addFrm.errors.password}</span> : ''}</label>
                                    <input name='password' value={addFrm.values.password} onChange={addFrm.handleChange} type='password' className='form-control' />
                                </div>
                                <div className="my-2">
                                    <label>Re-Password  {addFrm.errors.repassword && addFrm.touched.repassword ? <span className='text-danger'>{addFrm.errors.repassword}</span> : ''}</label>
                                    <input name='repassword' value={addFrm.values.repassword} onChange={addFrm.handleChange} type='password' className='form-control' />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-primary' type='submit'>Add</button>
                            </div>
                            </form>
                        </div>
                        
                        <br />
                        
                        
                    </div>
                    :
                    ''
                    }
                    
                    {
                        showEdit
                        ?
                        <div className="col-md-6 col-lg-6 col-sm-6 stretch-card grid-margin">
                            <div className="card">
                                <form onSubmit={updateFrm.handleSubmit}>
                                <div className="card-header">
                                    <h4>Update Admin</h4>
                                </div>
                                <div className="card-body">
                                    <div className="my-2">
                                    <label>Full Name</label>
                                    <input value={updateFrm.values.name} name='name' onChange={updateFrm.handleChange} type='text' className='form-control' />
                                    </div>
                                    <div className="my-2">
                                    <label>Username</label>
                                    <input value={updateFrm.values.username} name='username' onChange={updateFrm.handleChange} type='text' className='form-control' />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type='submit' className='btn btn-primary mx-2'>Update</button>
                                    <button onClick={updateCancle} type='button' className='btn btn-warning mx-2'>Cancle</button>
                                </div>
                                </form>
                            </div>
                        </div>
                        :
                        ''
                    }
                    {
                        showPass
                        ?
                        <div className="col-md-6 col-lg-6 col-sm-6 stretch-card grid-margin">
                            <div className="card">
                                <form onSubmit={updatePass.handleSubmit}>
                                    <div className="card-header">
                                        <h4>Update Password</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className='my-2'>
                                            <label>Current Password</label>
                                            <input name='password' onChange={updatePass.handleChange} type='password' className='form-control' />
                                            <small className='text-danger'>{passErr}</small>
                                        </div>
                                        <div className='my-2'>
                                            <label>New Password</label>
                                            <input name='repass' onChange={updatePass.handleChange}  type='password' className='form-control' />
                                        </div>
                                        <div className='my-2'>
                                            <label>Confirm New Password</label>
                                            <input name='conf_repass' onChange={updatePass.handleChange} type='password' className='form-control' />
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button className='btn btn-primary mx-2' type='submit'>Update</button>
                                        <button onClick={canclePassword} className='btn btn-warning mx-2' type='button'>Cancle</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        :
                        ''
                    }


                        <div className="table-responsive">
                            <table className="table table-dark table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Full Name</th>
                                        <th>Username</th>
                                        <th>Update</th>
                                        <th>Update Password</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allAdmin.map((item, index)=>{
                                            return(
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.username}</td>
                                                    <td>
                                                        
                                                            <button onClick={()=>askEdit(item)} className='btn btn-info btn-sm'>
                                                        <i className='fa fa-pencil'></i>
                                                        </button>
                                                        
                                                    </td>
                                                    <td>
                                                        <button onClick={()=>askUpdatePassword(item)} className='btn btn-secondary btn-sm'>
                                                            <i class="fa fa-key" aria-hidden="true"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        {
                                                            item.status==1
                                                            ?
                                                            'Not Deleteable'
                                                            :


                                                        <button onClick={()=>askDelete(item)} className='btn btn-danger btn-sm'>
                                                        <i className='fa fa-trash'></i>
                                                        </button>
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
            )
}

            export default ListAdmins