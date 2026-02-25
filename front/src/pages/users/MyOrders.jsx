import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useDateView from '../../hooks/useDateView';


const MyOrders = () => {

  let [allOrder, setAllOrder] = useState([]);
  useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_API_URL}/order/getall`, { headers : {Authorization : localStorage.getItem("access_user")}})
    .then(response=>{
      // console.log(response.data)
      setAllOrder(response.data.result)
    })
  },[])


 return (
    
            <div className="col-md-9">
              <div className="alert" style={{backgroundColor : "#a5d4e7ff"}}>

                <h2>Your Orderes</h2>
                {
                  allOrder.length > 0
                  ?
                  <table className="table table-light table-bordered table-striped my-4">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Payment</th>
                      <th>Payment Mode</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      allOrder.map((item, index)=><tr>
                          <td>{index+1}</td>
                          <td>{item.product_id.title}</td>
                          <td>{item.amount}</td>
                          <td>{item.payment_mode == 1 ? 'Online' : 'COD'}</td>
                          <td>{item.status == 1 ? 'Ordered' : item.status==2 ? 'Shipped' : item.status==3 ? 'Out of Develiery' : 'Delivered'}</td>
                          <td>{useDateView(item.updatedAt)}</td>
                        </tr>)
                    }
                  </tbody>
                </table>
                :
                <p>No Data Found</p>

                }
              </div>
            </div>
    
  )
}

export default MyOrders

/*




*/