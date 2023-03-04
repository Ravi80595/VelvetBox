import { Box,Flex,FormControl,Input,Button,FormLabel,Image,Text, Heading, color,InputGroup,InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import { baseUrl } from '../../Utils/BaseUrl'
import axios from 'axios'


const Login = () => {
  const navigate=useNavigate()
  const [show,setShow]=useState(false)
  const [values,setValues]=useState({
    username:"",
    password:"",
  })
  const {id}=JSON.parse(localStorage.getItem("velvetId")) || []


  const handleClick = () => setShow(!show);

  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  const handleLogin=()=>{
    let payload={
      username:values.username,
      password:values.password
    }
    if(payload.email=="" || payload.password==""){
      alert("Please fill All Madentory fields")
    }else{  
      axios.post(`${baseUrl}/login`,payload)
      .then((res)=>{
        console.log(res)
        localStorage.setItem('velvetToken',JSON.stringify(res.data))
        alert('Login Success')
        navigate('/')
      })
  }
  }

  return (
    <>
    <Navbar/>
    <Box pt={20}>
    <Box width={["90%","90%","30%"]} m="auto" >
        <Box p={10} m={[0,0,10]} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
          <Heading textAlign="center" mb={10} fontFamily="cursive">Velvet Box</Heading>
            <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="username" placeholder='Enter username' name='username' onChange={handleChange}/>
                    <FormLabel>Password</FormLabel>
                   <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                          name="password"
                          onChange={handleChange}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                   </InputGroup>
                    <Button mt={4} width="100%" onClick={handleLogin}>Login</Button>
                    <Text textAlign="center" m={3}>OR</Text>
                    <Text textAlign='center' color="blue">Forget Password?</Text>
                    <Text p={2} textAlign='center'>Don't have an account? 
                    <Link to="/user/signup">
                     <span style={{color:"blue"}}> Sign up</span>
                    </Link>
                     </Text>
            </FormControl>
        </Box>
</Box>
</Box>
</>
  )
}

export default Login
