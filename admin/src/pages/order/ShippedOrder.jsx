import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'

const ShippedOrder = () => {

   let [allOrder, setAllOrder] = useState([])
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/order/getallshipped`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
            // console.log(response.data)
            setAllOrder(response.data.result);
        })
    },[])


    let changeStatus = (order)=>{
      axios
      .put(`${import.meta.env.VITE_API_URL}/order/changestatus/${order._id}`, {status:3}, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
      .then(response=>{
        setAllOrder(prev=>prev.filter(item=>item._id != order._id))
      })
    }

  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <h2>Orders : Shipped</h2>
            <div className="page-header flex-wrap">
               <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>D. Charge</th>
                        <th>Change Status</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.user_id ? item.user_id.name : ''}</td>
                                        <td>{item.product_id ? item.product_id.title : ''}</td>
                                        <td>{item.createdAt}</td>
                                        <td><span className='badge rounded-pill shipped'>Shipped</span></td>
                                        <td>{item.amount}</td>
                                        <td>{item.charge}</td>
                                        <td><button onClick={()=>changeStatus(item)} className='btn btn-sm btn-primary'>Out Develiery</button> </td>
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

export default ShippedOrder