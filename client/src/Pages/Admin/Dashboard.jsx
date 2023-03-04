import { Box,Text,Flex,Button,Image, Heading} from '@chakra-ui/react'
import React from 'react'
import "./Dashboard.css"
import {BsTagsFill} from 'react-icons/bs'
import {FaRupeeSign,FaUserAlt} from 'react-icons/fa'
import {CiDiscount1} from 'react-icons/ci'
import {FcSalesPerformance} from "react-icons/fc"
import {SiSimpleanalytics} from "react-icons/si"
import { useEffect } from 'react'
import {IoBarChartSharp} from "react-icons/io5"
import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineTeam} from 'react-icons/ai'
import axios from "axios"
import {RiAdminFill} from "react-icons/ri"
import UsersPage from './UsersPage'
import { baseUrl } from '../../Utils/BaseUrl'
import AllOrders from './AllOrders'
import AllProducts from './AllProducts'
import Logo from "../../images/Logo.jpg"
// import ProductPage from './ProductPage'
// import OrdersPage from './OrdersPage'
// import AllAdminPage from './AllAdminPage'
// import SalesTeam from './SalesTeam'
// import Discounts from './Discounts'
// import { BaseUrl } from '../../Utils/APIurl'


const Dashboard = () => {
  const [adminProfile,setAdminProfile]=useState("")
  const [show,setShow]=useState("Users")
  const navigate = useNavigate()
  const [usershow,setUserShow]=useState("")
  let r=`Bearer ${localStorage.getItem("admintoken")}`



  const getShow=()=>{
    if(r=="Bearer null"){
      setUserShow("show")
    }else{
      setUserShow("Hide")
    }
  }
  // useEffect(()=>{
  //   getShow()
  // },[])

  
  // Fetching Admin Profile data from here

  const getProfile=()=>{
    axios.get(`${baseUrl}adminDetails`,{
      headers:{
        authorization:`Bearer ${localStorage.getItem("admintoken")}`
      }
    })
    .then((res)=>{
      console.log(res.data.Data)
      setAdminProfile(res.data.Data)
    })
    .catch(function (err){
      console.log(err)
    })
  }
  
  useEffect(()=>{
    getShow()
    getProfile()
  },[])
  
//   if(usershow=="show"){
//     return(
//       <Box w="30%" m='auto'>
//       <Heading p={10}>Please Login</Heading>
//       <Link to="/admin">
//       <Button ml={5}>Login</Button>
//       </Link>
//       </Box>
//     )
//   }


  const handleLogout=()=>{
    localStorage.setItem("admintoken",null)
    navigate("/adminlogin")
  }



  return (
    <Flex w='100%'>
      <Box id='lhsBox' w={["5%","10%","16%"]} h='100vh' p={["0px","0px",'20px']}>
      <Image w='90%' textAlign='center' h={100} mb={10} src={Logo} />
        <Box id='linkBox'>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow("Users")}>
          <FaUserAlt/>
          <Text pl={["0px","5px",'15px']} className="lhsName">Users</Text>
          </Flex>
          <hr />
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(3)}>
          <BsTagsFill />  
          <Text pl={["0px","5px",'15px']} className="lhsName">Products</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(2)}>
          <FaRupeeSign/>  
          <Text pl={["0px","5px",'15px']} className="lhsName">Teams</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow('Discounts')}>
          <CiDiscount1/>
          <Text pl={["0px","5px",'15px']} className="lhsName">Discounts</Text>
          </Flex>
        </Box>
      </Box>  
      <Box id='rhsBox' w='84%' ml='16%' h='auto'> 
        <Box id='navbarBox'  p='0px 40px'>
          <Flex justifyContent='space-between' pt={3} mb={3}>
            <Text fontWeight='bold'>Welecom to Admin Dashboard.</Text>
            <Button onClick={handleLogout} _hover={{bg:"rgb(134, 130, 238)",color:"white"}} mb={2} >Log Out</Button>
          </Flex>
        </Box>
      <Box id='rhsBody' m='30px' p='30px'>
        {
          show==="Users"?<UsersPage/>:show==2?<AllOrders/>:show==3?<AllProducts/>:<h1>r</h1>
        }
        
      </Box>
      </Box>
    </Flex>
  )
}

export default Dashboard