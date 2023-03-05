import React from 'react'
import { Flex,Box,Text,Button,Table,Tr,Th,Thead,Tbody,Td,Image, useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,Input,Select,Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DeleteIcon } from '@chakra-ui/icons'
import {baseUrl} from '../../Utils/BaseUrl'


const AllProducts = () => {
    const [products,setProducts] = useState([])
    const [productss,setProductss] = useState([])
    const [productName,setProductName]= useState("")
    const [salePrice,setSalePrice]= useState('')
    const [listPrice,setListPrice] = useState("")
    const [category,setCategory]= useState("")
    const [description,setDescription] = useState("")
    const {isOpen,onOpen,onClose} = useDisclosure()
    const [loading,setLoading] = useState(false)
    const [ctr,setCtr]=useState('')
    const {email,jwtToken}=JSON.parse(localStorage.getItem('AdminToken')) || []
    let cookie=jwtToken.split(";")
    let cookies=cookie[0].split("=")
    let r=cookies[1]


   {/* ..................  All Product Method Here ........................ */}

const getData=()=>{
  setLoading(true)
  axios.get(`${baseUrl}/search/category?categoryName=general`,{
    headers:{
      Authorization:`Bearer ${r}`
    }
  })
  .then((res)=>{
    // console.log(res)
    setLoading(false)
    setProducts(res.data)
  })
}


const getGold=()=>{
  axios.get(`${baseUrl}/search/category?categoryName=gold`,{
    headers:{
      Authorization:`Bearer ${r}`
    }
  })
  .then((res)=>{
    console.log(res)
    setLoading(false)
    setProductss(res.data)
  })
}

  useEffect(()=>{
    getData()
    getGold()
  },[])

   {/* ..................  Product Delete Method Here ........................ */}
console.log(r)
const handleDelete=(prodid)=>{
  axios.delete(`${baseUrl}/delete-product?productId=${prodid}`,{
    headers:{
      Authorization:`Bearer ${r}`
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
      productName,
      market_price:200, 
      sale_price:Number(salePrice),
      color:'blue',
      dimension:"2",
      specification:description,
      manufacturer:"Haryanvi",
      quantity:'50',
      imageUrl:[category]
    }
axios.post(`${baseUrl}/add-product/${ctr}`,payload,{
  headers:{
    authorization:`Bearer ${r}`
  }
})
.then((res)=>{
  alert('Product added')
  getData()
})
}

   {/* ..................  More Details Product ........................ */}

    const handleDetails=(ele)=>{
      const r=ele
      localStorage.setItem("product",JSON.stringify(r))
    }

    
   {/* ..................  Add Category Method........................ */}

const addcategory=()=>{
  const cat=prompt('Enter Category')
axios.post(`${baseUrl}/add-category`,{categoryName:cat},{
  headers:{
    Authorization:`Bearer ${r}`  
  }
})
.then((res)=>{
  // console.log(res)
  alert('Category added')
})
.catch((err)=>{
  if(err.response.message==null){
    alert("Something went wrong")
  }else{
    alert(err.response.message)
  }
})
}
  


  return (
    <Box>
      <Flex mb="30px" direction={['column','column','row']} justifyContent="space-between" alignItems="center" > 
          <Text fontWeight='bold' pb={5}>All Products : {products.length}</Text>
          <Flex gap={5}>
          <Button bg="white" border="1px solid grey" onClick={onOpen}>+ Add Product</Button>
          <Button bg="white" border="1px solid grey" onClick={addcategory}>+ Add Category</Button>
          </Flex>
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
                        <label>Image Url</label>
                        <Input type="text" placeholder="Image url" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                        <label>Category</label>
                        <Input placeholder="Category" value={ctr} onChange={(e)=>setCtr(e.target.value)}/>
                        <label>Descripition</label>
                        <Input type="text" placeholder="Descripition" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        <Button onClick={handleAdd} mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Add</Button>
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
                </Modal>
 {/* ..................  All Product UI Table Here ........................ */}

          <Table>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th className='productRow2'>Name</Th>
                  <Th className='productRow'>Price</Th>
                  <Th className='productRow'>Stock</Th>
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
                {products && products.map((ele)=>{
                  return(
                    <Tr key={ele.productId}>
                      <Td width="60px">
                        <Image src={ele.imageUrl[0]}/>
                      </Td>
                        <Td width="30%" padding="5px" className='productRow2'>
                        <p fontSize={15} >{ele.productName}</p>
                        </Td>
                        <Td width="20px" paddding-right="20px"  className='productRow'>
                        <p>₹{ele.sale_price}</p>
                        </Td>
                        <Td  className='productRow'>  
                        <p fontSize={20}>{ele.quantity}pcs</p>
                        </Td>
                        <Td fontSize='25px'  className='productRow' _hover={{color:"red",cursor:"pointer"}}>  
                        <DeleteIcon onClick={()=>handleDelete(ele.productId)} />
                        </Td>
                        <Td w='20%'>
                          <Text>{ele.specification}</Text>
                        </Td>
                    </Tr>
                  )
                })
                }
                 {productss && productss.map((ele)=>{
                  return(
                    <Tr key={ele.productId}>
                      <Td width="60px">
                        <Image src={ele.imageUrl[0]}/>
                      </Td>
                        <Td width="30%" padding="5px" className='productRow2'>
                        <p fontSize={15} >{ele.productName}</p>
                        </Td>
                        <Td width="20px" paddding-right="20px"  className='productRow'>
                        <p>₹{ele.sale_price}</p>
                        </Td>
                        <Td  className='productRow'>  
                        <p fontSize={20}>{ele.quantity}pcs</p>
                        </Td>
                        <Td fontSize='25px'  className='productRow' _hover={{color:"red",cursor:"pointer"}}>  
                        <DeleteIcon onClick={()=>handleDelete(ele.productId)} />
                        </Td>
                        <Td w='20%'>
                          <Text>{ele.specification}</Text>
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