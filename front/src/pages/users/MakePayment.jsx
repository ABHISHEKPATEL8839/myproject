import React from 'react'

const MakePayment = () => {
  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-8">
                <div className="card p-4" style={{backgroundColor : "#a5d4e7ff"}}>
                    <h5 className='p-2 bg-dark text-white'><span className='badge bg-light text-dark'>1</span> Login</h5>
                    <p className='py-2 my-0 mx-2'><i className='fa fa-user'></i> Viay Sahu</p>
                    <p className='py-2 my-0 mx-2'><i className='fa fa-phone'></i> 584571254</p>

                    <h5 className='p-2 bg-dark text-white'><span className='badge bg-light text-dark'>2</span> Address</h5>
                    <p className='py-2 my-0 mx-2'><i className='fa fa-book'></i> 201, M. G. Road, TI Mall, Indore</p>
                    
                </div>
            </div>
            <div className="col-md-4">
                <div className='card p-4' style={{backgroundColor : "#a5d4e7ff"}}>
                    <h6>Price Detail</h6>
                    <div className='card p-3' style={{backgroundColor : "#ccc"}}>
                        <div className='d-flex justify-content-between'>
                        <p>Price</p>
                        <p>1000.00</p>

                        </div>
                        <div className='d-flex justify-content-between'>
                        <p>Discount(15%)</p>
                        <p>-150.00</p>

                        </div>
                        <div className='d-flex justify-content-between'>
                        <p>Delivery</p>
                        <p>+100.00</p>

                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                        <p><b>Payble Amount</b></p>
                        <p><b>1200.00</b></p>

                        </div>
                    </div>
                    <button onClick={makePayment} className='btn btn-warning m-2'>Continue</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MakePayment