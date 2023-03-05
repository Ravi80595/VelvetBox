import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AdminLogin from '../Pages/Admin/AdminLogin'
import Dashboard from '../Pages/Admin/Dashboard'
import Home from '../Pages/Home/Home'
import SingleProduct from '../Pages/Home/SingleProduct/SingleProduct'
import Products from '../Pages/Products'
import About from '../Pages/User/About'
// import Cart from '../Pages/User/Cart'
import Cartpage from '../Pages/User/Cart/Cartpage'
import Login from '../Pages/User/Login'
import Signup from '../Pages/User/Signup'
import AdminSign from '../Pages/Admin/AdminSign'
import PrivateRoute from './PrivateRoute'
import AdminPrivateRoute from './AdminPrivateRoute'

const AllRoutes = () => {

  
return (
    <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/user/signup" element={<Signup/>}></Route>
<Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>}></Route>
<Route path="/user/login" element={<Login/>}></Route>
<Route path="/cart" element={<PrivateRoute><Cartpage/></PrivateRoute>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/singleProduct/:id" element={<PrivateRoute><SingleProduct/></PrivateRoute>}></Route>
<Route path="/admin" element={<AdminPrivateRoute><Dashboard/></AdminPrivateRoute>}></Route>
<Route path="/adminlogin" element={<AdminLogin/>}></Route>
<Route path="/adminsign" element={<AdminSign/>}></Route>
    </Routes>
  )
}

export default AllRoutes
