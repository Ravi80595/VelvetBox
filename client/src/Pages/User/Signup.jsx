import { Box,Flex,HStack,FormControl,FormLabel,Input,Button,Text,Image,Heading,InputGroup,InputRightElement } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import { baseUrl } from '../../Utils/BaseUrl'


const Signup = () => {
    const initObj={
        username:"",
        firstName:"",
        lastName:"",
        password:"",
        address:'',
        mobileNumber:"",
        email:"",
        country:"",
    }
    const navigate=useNavigate()
    const [values,setValues]=useState(initObj)
    const [show,setShow]=useState(false)
    
    const handleClick = () => setShow(!show);
   
    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

const handleSubmit=()=>{
        const payload={
            firstName:values.firstName,
            lastName:values.lastName,
            username:values.username,
            email:values.email,
            password:values.password,
            location:values.location,
            occupation:values.occupation
        };
        console.log(payload)
if(payload.email=="" || payload.password=="" || payload.firstName=="" || payload.lastName==""){
        alert("Please fill All Madentory fields")
  }else{
axios.post(`${baseUrl}/auth/register`,payload)
.then((res)=>{
    console.log("Signup Success",res)
    alert("Signup Success")
    setValues(initObj)
    navigate("/userlogin")
})
.catch((err)=>{
    console.log(err)
    alert(err.response.data)
})
}
}

  return (
    <>
    <Navbar/>
    <Box w="100%" boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' overflow="hidden" position='fixed' backgroundColor="white">
    </Box>
    <Box width="30%" m="auto" pt={20} pb={20}>
            <Box p={5} mt={10}  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                <FormControl isRequired>
                    <HStack>
                        <Box>
                        <FormLabel isRequired>First Name</FormLabel>
                        <Input type="text" name='firstName' onChange={handleChange}/>
                        </Box>
                        <Box>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" name='lastName' onChange={handleChange}/>
                        </Box>
                    </HStack>
                    <FormLabel>Username</FormLabel>
                        <Input type="text" name='username' onChange={handleChange}/>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name='email' onChange={handleChange}/>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          name="password"
                          onChange={handleChange}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                   </InputGroup>
                   <FormLabel>Mobile No.</FormLabel>
                        <Input type="text" name='mobile' onChange={handleChange}/>
                   <FormLabel>Address</FormLabel>
                        <Input type="text" name='address' onChange={handleChange}/>
                        <FormLabel>Country</FormLabel>
                        <Input type="text" name='location' onChange={handleChange}/>
                        {/* <FormLabel>Occupation</FormLabel>
                        <Input type="text" name='occupation' onChange={handleChange}/> */}
                        <Button mt={2} width="100%" onClick={handleSubmit}>Signup</Button>
                        <Text textAlign="center">OR</Text>
                        <Link to="/user/login">
                        <Button mt={2} width="100%">Login</Button>
                        </Link>
                </FormControl>
            </Box>
        {/* </Flex> */}
    </Box>
    </>
  )
}

export default Signup
