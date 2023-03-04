import { Box, Flex,Image,Text,Input } from '@chakra-ui/react'
import React from 'react'
import Logo from "../images/Logo.jpg"
import { Link } from 'react-router-dom'
import {BsCart2} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'

const Navbar = () => {

const {id,username}=JSON.parse(localStorage.getItem("velvetToken")) || []

const handleLogout=()=>{
  localStorage.setItem("velvetToken",null)
}

return (
    <Flex justifyContent='space-between' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' position='fixed' w='100%' zIndex={9999} bg='white'>
      <Box w='15%' pl={5}>
        <Link to="/">
        <Image  w={120} src={Logo}/>
        </Link>
      </Box>
      <Box w="30%">
      <Input mt={7} placeholder='search on velvet'/>
      </Box>
      <Flex fontSize='20px' pt={8} w='50%' justifyContent='space-around'>
        <Link to="/">
        <Text>Home</Text>
        </Link>
        <Link to="/products">
        <Text>Shop</Text>
        </Link>
        <Link to="/about">
        <Text>About Us</Text>
        </Link>
          <Flex gap={10}>
            <Link to="/user/login">
          {
            username!=null? <Text onClick={handleLogout}>Logout</Text>:<BiUserCircle fontSize='30px'/>
          }
            </Link>
            <Link to="/cart">
          <BsCart2 fontSize='30px'/>
            </Link>
          </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
