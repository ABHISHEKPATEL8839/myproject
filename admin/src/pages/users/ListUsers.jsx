import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../../config/API'
const ListUsers = () => {

    let [allUser, setAllUser] = useState([]);
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/user`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
            setAllUser(response.data.result);
        })
    },[])
    

    let changeStatus = (obj, s)=>{
        // console.log(obj)
        // console.log(s)
        axios
        .put(`${import.meta.env.VITE_API_URL}/user/changestatus/${obj._id}`, {status: s})
        .then(response=>{
            // console.log(response.data);
            setAllUser(curr=>curr.map(item=>{
                if(item._id == obj._id){
                    item.status=s;
                    return item;
                }else{
                    return item;
                }
            }))
        })
    }
  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <h2>Users</h2>
            <div className="page-header flex-wrap">
                <h3>List of All Users</h3>
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>City</th>
                            <th>Status</th>
                            <th>Active/Inactive</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.city}</td>
                                        <td>{item.status==1 ? 'Active' : 'Deactive'}</td>
                                        <td>
                                            {
                                                item.status==1
                                                ?
                                                <button onClick={()=>changeStatus(item, 0)} className='btn btn-danger btn-sm'>Deactive</button>
                                                :
                                                <button onClick={()=>changeStatus(item, 1)} className='btn btn-info btn-sm'>Active</button>

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
  )
}

export default ListUsers