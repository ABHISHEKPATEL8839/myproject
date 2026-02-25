import React from 'react'
import {ToastContainer, toast} from 'react-toastify'

const Notification = ({msg}) => {

    toast(msg);

  return (
    <ToastContainer />
  )
}

export default Notification