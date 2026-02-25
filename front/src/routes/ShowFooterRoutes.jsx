import React from 'react'
import UpperFooter from '../components/UpperFooter'
import { Outlet } from 'react-router-dom'

const ShowFooterRoutes = () => {
  return (
    <>
    <Outlet />
    <UpperFooter />
    </>
  )
}

export default ShowFooterRoutes