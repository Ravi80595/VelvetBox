import React, { useEffect, useState } from 'react'
import { Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Spinner,Image,Flex,Text,Input,Select } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {baseUrl} from "../../Utils/BaseUrl"

const UsersPage = () => {
    const [loading,setLoading]=useState(false)
    const [users,setUsers]=useState([])
    const navigate=useNavigate()
    const {email,jwtToken}=JSON.parse(localStorage.getItem('AdminToken')) || []
    let cookie=jwtToken.split(";")
    let cookies=cookie[0].split("=")
    let r=cookies[1]


useEffect(()=>{
    // setLoading(true)
axios.get(`${baseUrl}/allUsers`,{
  headers:{
    Authorization:`Bearer ${r}`
  }
})
.then((res)=>{
        console.log(res.data)
        setUsers(res.data)
        setLoading(false)   
    })
    .catch((err)=>{
        console.log(err)
        console.log(err.response.data)
        setUsers(err.response.data)
    })
    },[])

const handleChange = (e) => {
    axios.get(`${baseUrl}/user/search/${e.target.value}`)
.then((res)=>{
    console.log(res)
    setUsers(res.data)
    })
    .catch((err)=>{
    console.log(err)
    })
}


const handleNavigate=(ele)=>{
    navigate(`/singleuser/${ele._id}`)
  }

if(loading){
return <Spinner textAlign='center' mt={50} ml={50} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
}


return (
    <Box>
      <Flex justifyContent="space-between" pb={10}>
        <Text w={["30%","30%","30%","15%"]} fontSize={["10px","10px","10px","20px"]}>Total Users : {users.length}</Text>
        <Input fontSize={["10px","10px","10px","20px"]} onInput={handleChange} w={["30%","30%","30%","60%"]} placeholder="search user"/>
        <Text w={["30%","30%","30%","15%"]} fontSize={["10px","10px","10px","20px"]}>Verified Users : 0</Text>
      </Flex>
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr textAlign='center'>
                  <Th>Image</Th>
                  <Th>User-name</Th>
                  <Th>Full Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                </Tr>
              </Thead>
              <Tbody>
      {
        users && users.map(ele=>(
                <Tr key={ele.userId} cursor="pointer" _hover={{backgroundColor:"#f3f4f6"}}>
                  <Td><Image w={50} src={`https://www.freeiconspng.com/uploads/blank-face-person-icon-7.png`}/></Td>
                  <Td>{ele.username}</Td>
                  <Td>{ele.firstName} {ele.lastName}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.roles[0].name.split("_")[1]}</Td>
                </Tr>
                ))
              }
              </Tbody>
            </Table>
          </TableContainer>
    </Box>
  )
}

export default UsersPage
