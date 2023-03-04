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

const AllRoutes = () => {

  
return (
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/user/signup" element={<Signup/>}></Route>
       <Route path="/products" element={<Products/>}></Route>
       <Route path="/user/login" element={<Login/>}></Route>
       <Route path="/cart" element={<Cartpage/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/singleProduct/:id" element={<SingleProduct/>}></Route>
       <Route path="/admin" element={<Dashboard/>}></Route>
       <Route path="/adminlogin" element={<AdminLogin/>}></Route>
       <Route path="/adminsign" element={<AdminSign/>}></Route>

    </Routes>
  )
}

export default AllRoutes
