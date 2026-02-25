import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import {API_URL} from '../../config/API'
import './Order.css'
import {NavLink} from 'react-router-dom'
import useUserDateTime from '../../hooks/useUserDateTime'

const ListOrder = () => {

    let [allOrder, setAllOrder] = useState([])
    let [totalAll, setTotalAll] = useState(0)
    let [totalShipped, setTotalShipped] = useState(0)
    let [totalPlaced, setTotalPlaced] = useState(0)
    let [totalOut, setTotalOut] = useState(0)
    let [totalDelivered, setTotalDelivered] = useState(0)

    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/order/gettotalallorder`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
            setTotalAll(response.data.total)
            
        })
    },[])
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/order/gettotalpalced`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
            setTotalPlaced(response.data.total)
            
        })
    },[])
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/order/gettotaldevelivered`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
            setTotalDelivered(response.data.total)
            
        })
    },[])
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/order/gettotalout`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
            setTotalOut(response.data.total)
            
        })
    },[])
    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/order/gettotalshipped`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
            setTotalShipped(response.data.total)
            
        })
    },[])
    


    useEffect(()=>{
        axios
        .get(`${import.meta.env.VITE_API_URL}/order/getallorder`, {headers : {Authorization : localStorage.getItem("sseccanimda")}})
        .then(response=>{
            console.log(response.data)
            setAllOrder(response.data.result);
        })
    },[])


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <h2>Orders : All <span className='badge bg-dark text-light rounded-pill'>{totalAll}</span></h2>
            <NavLink to="/order/placed" className='btn btn-info m-2'>Placed <span className='badge rounded-pill bg-light text-dark'>{totalPlaced}</span></NavLink>
            <NavLink to="/order/shipped" className='btn btn-warning m-2'>Shipped <span className='badge rounded-pill bg-light text-dark'>{totalShipped}</span></NavLink>
            <NavLink to="/order/outfor" className='btn btn-primary m-2'>Out For Develivery <span className='badge rounded-pill bg-light text-dark'>{totalOut}</span></NavLink>
            <NavLink to="/order/delivered" className='btn btn-danger m-2'>Delivered <span className='badge rounded-pill bg-light text-dark'>{totalDelivered}</span></NavLink>
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
                        <th>Print</th>
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
                                        <td>{useUserDateTime(item.createdAt)}</td>
                                        <td>{item.status == 1 ? <span className='badge rounded-pill placed'>Placed</span> : item.status==2 ? <span className='badge rounded-pill shipped'>Shipeed</span> : item.status==3 ? <span className='badge rounded-pill out'>Out For Delivery</span> : <span className='badge rounded-pill delivered'>Delivered</span>}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.charge}</td>
                                        <td><button className='btn btn-sm btn-primary'>Print</button> </td>
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

export default ListOrder
