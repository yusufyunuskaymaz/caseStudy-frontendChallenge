import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import { LoginContext } from '../context/LoginContext'

const PrivateRouter = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    
    return (
        <>
        { user?.email ? <Outlet/> : <Navigate to="/login"/>}
        </>
      )
}

export default PrivateRouter