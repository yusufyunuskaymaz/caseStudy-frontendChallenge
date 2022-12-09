import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import { LoginContext } from '../context/LoginContext'

const PrivateRouter = () => {
    const {user} = useContext(LoginContext)
    return (
        <>
        { user.email ? <Outlet/> : <Navigate to="/login"/>}
        </>
      )
}

export default PrivateRouter