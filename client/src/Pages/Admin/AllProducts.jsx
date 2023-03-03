import React from 'react'
import { Flex,Box,Text,Button,Table,Tr,Th,Thead,Tbody,Td,Image, useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,Input,Select,Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DeleteIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import {baseUrl} from '../../Utils/BaseUrl'


const AllProducts = () => {
    const [products,setProducts] = useState([])
    const [productName,setProductName]= useState("")
    const [salePrice,setSalePrice]= useState('')
    const [listPrice,setListPrice] = useState("")
    const [category,setCategory]= useState("")
    const [type,setType]= useState("")
    const [description,setDescription] = useState("")
    const {isOpen,onOpen,onClose} = useDisclosure()
    const [loading,setLoading] = useState(false)
    const [sort,setSort]=useState("")
    // const {isOpen:isOpenReport,onOpen:onOpenReport,onClose:onCloseReport}=useDisclosure()
    // const cancelRef=useRef()
    const [filter,setFilter]= useState("")

console.log(filter)
   {/* ..................  All Product Method Here ........................ */}

const getData=()=>{
  setLoading(true)
  axios.get(`${baseUrl}product/getproducts`)
  .then((res)=>{
    console.log(res.data)
    setProducts(res.data)
    setLoading(false)
  })
}

  useEffect(()=>{
    getData()
  },[])

   {/* ..................  Product Delete Method Here ........................ */}

const handleDelete=(prodid)=>{
  axios.delete(`${baseUrl}Dashproduct/delproduct/${prodid}`,{
    headers:{
      authorization:`Bearer ${localStorage.getItem("admintoken")}`
    }
  })
  .then((res)=>{
    alert(res.data.msg)
    getData()
  })
}

   {/* ..................  Add Product Method Here ........................ */}

const handleAdd=()=>{
    const payload={
      productName,salePrice,listPrice,category,type,description
    }
axios.post(`${baseUrl}Dashproduct/addproduct`,payload,{
  headers:{
    authorization:`Bearer ${localStorage.getItem("admintoken")}`
  }
})
.then((res)=>{
  // console.log(res)
  getData()
  setProductName("") 
  setSalePrice("")
  setListPrice("")
  setCategory("")
  setType("")
})
}

   {/* ..................  More Details Product ........................ */}

    const handleDetails=(ele)=>{
      const r=ele
      localStorage.setItem("product",JSON.stringify(r))
    }

    
  {/* ..................  Filter by Fatching ........................ */}

const handleFilter=(e)=>{
    setFilter(e.target.value)
  axios.get(`${baseUrl}product/getproducts?type=${filter}`)
  .then((res)=>{
    setProducts(res.data)
  })
}

 {/* ..................  Handle Active Method........................ */}

const handleActive=(id,status)=>{
  console.log(id,status)
  axios.patch(`${baseUrl}Dashproduct/edite/${id}`,{status:!status},{
    headers:{
      authorization:`Bearer ${localStorage.getItem("admintoken")}`
    }
  })
  .then((res)=>{
    console.log(res)
    getData()
  })
  .catch((err)=>{
    console.log(err.message)
  })
}

 {/* ..................  Handle Womans........................ */}

const handleWomens=()=>{
  axios.get(`${baseUrl}product/getproducts?type=facecare&category=woman`)
  .then((res)=>{
    console.log(res.data)
    setProducts(res.data)
  })
}
// ...................... Sorting Functionallity Here ..........................

const handleSort=(e)=>{
    setSort(e.target.value)
    console.log(sort)
    axios.get(`${baseUrl}product/getproducts?price=${sort}`)
    .then((res)=>{
      console.log(res)
      setProducts(res.data)
    }) 
    .catch((err)=>{
      console.log(err)
    })
}


  return (
    <Box>
      <Flex mb="30px" direction={['column','column','row']} justifyContent="space-between" alignItems="center" > 
          <Text fontWeight='bold' pb={5}>All Products : {products.length}</Text>
          <Button bg="white" border="1px solid grey" onClick={onOpen}>+ Add Product</Button>
          </Flex>

   {/* ..................  Add Product UI Here ........................ */}

   <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Add New Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                        <Flex direction="column" gap="10px" mt="50px">
                        <label>Product Name</label>
                        <Input type="text" placeholder="Product Name" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                        <label>Sale Price</label>
                        <Input type="text" placeholder="Sale Price" value={salePrice} onChange={(e)=>setSalePrice(e.target.value)}/>
                        <label>List Price</label>
                        <Input type="text" placeholder="List Price" value={listPrice} onChange={(e)=>setListPrice(e.target.value)}/>
                        <label>Category</label>
                        <Input type="text" placeholder="Category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                        <label>Type</label>
                        <Input type="text" placeholder="Type" value={type} onChange={(e)=>setType(e.target.value)}/>
                        <label>Descripition</label>
                        <Input type="text" placeholder="Descripition" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        <Button onClick={handleAdd} mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Add</Button>
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
                </Modal>
 {/* ..................  Filter functionallity ........................ */}

                <Flex justifyContent='space-between' direction={['column','column','row']} mb={10}>
              <div mb={[5,0,0]}>
                <Button bg="white" border="1px solid grey" mr="10px" onClick={getData} >All</Button>
                <Button bg="white" border="1px solid grey" mr="10px" className='productRow'>Mens</Button>
                <Button bg="white" border="1px solid grey" onClick={handleWomens}>Women</Button>
              </div>
              <Flex gap="10px" mt={[5,0,0]}>
                <Select placeholder='Type' onChange={handleFilter}>
                    <option value='babyhelth'>Baby Health</option>
                    <option value='facecare'>Face Care</option>
                    <option value='healthyFoodsAndDrinks'> Food & Drinks</option>
                </Select>
                <Select onClick={handleSort} placeholder='Sort by'>
                    <option value='desc'>Low To High</option>
                    <option value='asc'>High To Low</option>
                </Select>
              </Flex>
            </Flex>

 {/* ..................  All Product UI Table Here ........................ */}

          <Table>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th className='productRow2'>Name</Th>
                  <Th className='productRow'>Price</Th>
                  <Th className='productRow'>Stock</Th>
                  {/* <Th className='productRow'>Status</Th> */}
                  <Th className='productRow'>Remove</Th>
                  <Th>Details</Th>
                </Tr>
              </Thead>
              <Tbody id="product_tbody">

 {/* ................... Loading Functionallity Here .................. */}

 {loading&&<Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    ml={200}
                    mt={50}
/>}

                {/* <!-- items row comes here --> */}
                {products && products.map((ele)=>{
                  return(
                    <Tr key={ele._id}>
                      <Td width="60px">
                        <Image src={ele.productImage}/>
                      </Td>
                        <Td width="40%" padding="5px" className='productRow2'>
                        <p fontSize={15} >{ele.productName}</p>
                        </Td>
                        <Td width="20px" paddding-right="50px"  className='productRow'>
                        <p>{ele.listPrice}</p>
                        </Td>
                        <Td  className='productRow'>  
                        <p fontSize={20}>{ele.stocks}pcs</p>
                        </Td>
                        {/* <Td  className='productRow'>
                        {ele.status?
                            <Box onClick={()=>handleActive(ele._id,ele.status)} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(39, 177, 39);" borderRadius="30px" color="white">Block</Box>
                            :<Box onClick={()=>handleActive(ele._id,ele.status)} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(238, 68, 68);" borderRadius="30px" color="white">Unblock</Box>}
                        </Td> */}
                        <Td fontSize='25px'  className='productRow' _hover={{color:"red",cursor:"pointer"}}>  
                        <DeleteIcon onClick={()=>handleDelete(ele._id)} />
                        </Td>
                        <Td>
                          <Link to="/adminsingleP">
                          <Button onClick={()=>handleDetails(ele)} >More Details</Button>
                          </Link>
                        </Td>
                    </Tr>
                  )
                })
                }
              </Tbody>
            </Table>
    </Box>
  )
}

export default AllProducts