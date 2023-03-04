import React from 'react'
import { Navigate } from 'react-router-dom'



const AdminPrivateRoute = ({children}) => {
    const isAuth = localStorage.getItem('AdminToken');


if(isAuth=="" || isAuth=="undefined" || isAuth==null){
    return <Navigate to="/user/signup"/>
}
  return children
}

export default AdminPrivateRoute

