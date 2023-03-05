import React,{useEffect,useState} from "react";
import axios from 'axios'
import Style from './SingleProduct.module.css'
import {Box,Text,Flex,Image,Heading,Spacer,Button,Select,UnorderedList,ListItem,Divider} from "@chakra-ui/react";
import { BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import { baseUrl } from "../../../Utils/BaseUrl";


const SingleProduct = () => {
  const property = {
    reviewCount: 242,
    rating: 3,
  };

  const [item,setItem]=useState([])
  const [qty,setQty]=useState()
  const {id}=useParams() 
  const navigate=useNavigate()
  const {jwtToken}=JSON.parse(localStorage.getItem('velvetToken')) || []
  let cookie=jwtToken.split(";")
  let cookies=cookie[0].split("=")
  let r=cookies[1]


const handlePrevPage=()=>{
  navigate('/products')
}

//  ............ Get Single Product data............

useEffect(() => {
axios.get(`${baseUrl}/searchById?productId=${id}`,{
  headers:{
    Authorization:`Bearer ${r}`
  }
})
  .then((res) => {
    console.log(res.data)
    setItem([res.data]);
  })
  .catch((err) => {
    console.log("err", err);
  });
}, []);


// //  .............Add To Cart method ...............

// const addToCart=()=>{
//   axios.post(`${baseUrl}/add-cart?productId=${"_TKj5SLoXA97Z_"}&quantity=2`,{
//     headers: {
//       Authorization : `Bearer ${r}`
//     }
//   })
// .then((res)=>{
//   console.log(res)
//   alert("item added to cart")
// })
// .catch((err)=>{
//   console.log(err)
// })     
// }

  const viewcart=()=>{
    navigate("/cart")
  }
 

const addCart=(ids)=>{
  fetch(`${baseUrl}/add-cart?productId=${ids}&quantity=${qty}`,
  {
    method:'POST',
    headers:{
      Authorization : `Bearer ${r}`
    }
  }).then(res=>{
    return res.json()
  }).then(res=>{
    console.log(res)
    alert("Product added to cart.")
  })
}


  return (
    <>
    <Navbar/>
    {
      item && item.map(el=>(      
      <Box  w="90%" key={el.productId} m="auto" pt='100px' className={Style.containter}>
        <Text className={Style.heading}>
        {el.productName} 
          </Text>
        <Box mt="30px" display='flex' className={Style.main_box}>
          <Box  w="70%" className={Style.main_box1}>
            <Box display='flex' className={Style.img_desc_box}>
              <Box w="30%" h="280px"  className={Style.img_box}>
                <Image className={Style.imgg}
                border="1px solid gray" 
                borderRadius='8px'
                p="10px"
                  h="100%"
                  src={el.imageUrl[0]}
                  alt="Dan Abramov"
                />
              </Box>
              <Box  w="70%" p="20px" ml='10px' className={Style.desc}>
                <Heading
                  size="sm"
                  fontSize="20px"
                  fontWeight="bold"
                  mt="6px"
                  color="rgb(79,88,104)"
                >
                       {el.productName} 
                </Heading>
                <Text mt="10px" mb="10px" color="teal" cursor='pointer' onClick={handlePrevPage}>
                  Visit {item?.type} store{" "}
                </Text>

                {/* Rating and price box */}
                <Box display='flex'  className={Style.rating_price}>
                  <Box >
                    <Box display="flex" mt="15px" mb="15px" alignItems="center">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <BsStarFill
                            fontSize="22px"
                            key={i}
                            color={
                              i < property.rating ? "teal.500" : "gray.300"
                            }
                          />
                        ))}
                      <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        ({property.reviewCount} ratings)
                      </Box>
                    </Box>

                    <Flex mt="10px">
                      <Heading size="sm" fontWeight="bold" fontSize="20px">
                      ₹{el.sale_price}
                      </Heading>
                      <Text color="gray.500" ml="10px">
                        MRP{el.sale_price}
                        {/* <span style={{ textDecoration: "line-through" }}>
                          ₹{el.sale_price}
                        </span> */}
                      </Text>
                      <Text
                        ml="10px"
                        bg="rgb(249,140,142)"
                        pl="5px"
                        pr="5px"
                        color="white"
                      >
                        {'10%'}
                      </Text>
                    </Flex>
                    <Text fontSize="13px" color="gray.500">
                      Inclusive of all taxes
                    </Text>
                    <Text fontSize="15px"> Delivery by 17 Mar - 18 Mar</Text>
                  </Box>
                  <Spacer />
                  <Box display="flex" className={Style.buttons}>
                    <Box mt='25px' className={Style.view_cart}>

                        {/* View cart button 1 */}
                   <Button colorScheme='teal'  fontSize='20px' w='100%' >View Cart    </Button> 
                   </Box>
                  <Box mt="25px" mr="100px"  className={Style.select_option}>
                   
                    <Select placeholder="Qty 1" w="100%"  onChange={(e)=>setQty(e.target.value)}>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                  </Select>
                    <Button colorScheme='teal'mt='15px'  fontSize='20px' onClick={()=>addCart(el.productId)} className={Style.addCartBtn1}>Add To Cart</Button>
                  </Box>
                 
                  </Box>
                  {/* <Button colorScheme='teal'  fontSize='20px' onClick={()=>addCart(el.productId)} className={Style.addCartBtn2}>Add To Cart</Button> */}
                </Box>
              </Box>
            </Box>
            <Divider mt='50px'/>
            <Box  p="20px" mt='50px'>
              <Heading
                size="sm"
                fontSize="18px"
                fontWeight="bold"
                mt="6px"
                mb='20px'
                color="rgb(79,88,104)"
              >
                Description
              </Heading>
              <Text>
                Horlicks Classic Malt Nutrition Drink is a health drink that has
                nutrients to support immunity. Horlicks is clinically proven to
                improve 5 signs of growth and to make kids taller, stronger and
                sharper. Scientifically proven to improve the power of milk,
                Horlicks products are available in many delicious flavours and
                can be consumed by people of all ages. Its unique formula is
                most useful for growing children as it helps in their overall
                development. The Horlicks Classic Malt Health Drink is perfect
                for every member of the family.
              </Text>
              <Heading
                size="sm"
                fontSize="18px"
                fontWeight="bold"
                mt="20px"
                mb='20px'
                color="rgb(79,88,104)"
              >
                Benefits
              </Heading>
              <UnorderedList>
                <ListItem mt='10px'>
                  It is a great health drink that has nutrients to support
                  immunity.
                </ListItem>
                <ListItem mt='10px'>
                  Horlicks Classic is clinically proven to improve 5 signs of
                  growth. Horlicks increase the density of minerals such as
                  calcium in bones to give children bigger and stronger bones.
                </ListItem>
                <ListItem mt='10px'>Horlicks Classic Malt is also clinically proven to make kids taller & stronger. It helps to increase lean tissue which makes children stronger. Horlicks contains important micronutrients (vitamin B6, B12, C, D, calcium, copper, folic acid, iron, selenium and zinc amongst others) and is clinically proven to help children grow taller and stronger when included as part of their regular diet</ListItem>
                <ListItem mt='10px'>Helps improve attention and concentration to make your child sharper</ListItem>
                <ListItem mt='10px'>Horlicks Nutrition Drink improves the power of milk</ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box  w="30%" p="20px" className={Style.view_cart2}>
            <Heading
              size="sm"
              fontSize="20px"
              fontWeight="bold"
              mt="6px"
              color="rgb(79,88,104)"
            >
           See Items in Cart
            </Heading>
            <Button onClick={viewcart} colorScheme="teal" w="100%" fontSize="20px" mt="20px" >
              View Cart{" "}
            </Button>
          </Box>
        </Box>
      </Box>
      ))}
    </>
  );
};

export default SingleProduct;