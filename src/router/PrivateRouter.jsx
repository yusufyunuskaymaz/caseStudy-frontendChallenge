import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'

const PrivateRouter = () => {
    const user = false
    return (
        <>
        { user ? <Outlet/> : <Navigate to="/login"/>}
        </>
      )
}

export default PrivateRouter