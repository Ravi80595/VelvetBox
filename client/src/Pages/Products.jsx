import React,{useEffect, useState} from "react";
// import {useSelector,useDispatch} from 'react-redux'
// import {GetHealthyFoodDrinksCategory,GetBabyHelthCategory, GetFacecareCategory, GetProducts } from "../Redux/Product/Product.action";
import {Box,Text,SimpleGrid,Image,Heading,Flex,Select,Spacer,Radio, Divider,Checkbox,Drawer,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button,useDisclosure, RadioGroup, Stack, DrawerBody} from "@chakra-ui/react";
import Style from "./ProductPage.module.css";
import {useNavigate} from 'react-router-dom'
import Navbar from "../Components/Navbar"
// import { FETCH_PRODUCT_SUCCESS } from "../Redux/Product/Product.types";

const ProductsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [value, setValue] = React.useState('1')
  const [data,setData]=useState([])

 
  // const data = useSelector((state) => state.product.data);
  // const dispatch = useDispatch();
  const navigate =useNavigate() 
  
  useEffect(() => {
    // dispatch(GetProducts());
  }, []);
  
  // ..........Single Product Route............
 
  const handleClick=(el)=>{
     navigate(`/singleProduct`)
  }

  // ............. Face care category function............

  const handleFaceCareCat=(e)=>{
  //  dispatch(GetFacecareCategory())
}

// .........Baby Health Care catogory function..................
  const handleBabyCat=(e)=>{
  //  dispatch(GetBabyHelthCategory())
}


// ...........Healthy Food And Drinks Category function...........

const handleHealthyAndFoodCat=(e)=>{
//  dispatch(GetHealthyFoodDrinksCategory())
}
  

// .........Sorting method .............

const handleSortData = (value) => {

}
 
  return (
    <>
    <Navbar/>
  <Box pt='110px' bg='#e7e7e7'>
    <Box gap={10} display="flex" w="90%" m="auto" className={Style.main}>
      <Box bg='white' borderRadius={10} w="30%" box-shadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' padding='25px' className={Style.main1}>
        <Box w='90%'>
      <Heading size="sm" fontSize="30px" color='rgb(79,88,104)'>Filter</Heading>
              <Text mt='20px' mb='15px' fontSize='20px'>Category</Text>
              <RadioGroup onChange={setValue} value={value}>
              <Flex onClick={handleBabyCat} mb='10px'>
              <Text>Neckles</Text>
               <Spacer />
              <Radio  value='1'></Radio>
              </Flex>
              <Flex onClick={handleHealthyAndFoodCat} mb='10px'>
              <Text>Rings</Text>
               <Spacer />
              <Radio  value='2'></Radio>
              </Flex>
              <Flex onClick={handleFaceCareCat} mb='10px'>
              <Text>Daimonds</Text>
               <Spacer />
              <Radio  value='3'></Radio>
              </Flex>
              <Flex onClick={handleFaceCareCat} mb='10px'>
              <Text>Tiara</Text>
               <Spacer />
              <Radio  value='4'></Radio>
              </Flex>
              <Flex onClick={handleFaceCareCat}>
              <Text>Bangles</Text>
               <Spacer />
              <Radio  value='5'></Radio>
              </Flex>
              </RadioGroup>
              <Divider mt='30px' />
              <Text mt='20px' mb='15px' fontSize='20px'>Sub category</Text>
              <Divider mt='30px' />
              <Text mt='20px' mb='15px' fontSize='20px'>Price</Text>

              <Flex mt='20px' mb='20px'>
                <Text>Below 99</Text>
                <Spacer/>
              <Text mr='15px'>(10)</Text>
              <Checkbox size='md' colorScheme='green' ></Checkbox>
              </Flex>
             
              <Flex mt='20px' mb='20px'>
                <Text>100 199</Text>
                <Spacer/>
              <Text mr='15px'>(8)</Text>
              <Checkbox size='md' colorScheme='green' ></Checkbox>
              </Flex>
             
              <Flex mt='20px' mb='20px'>
                <Text>200 299</Text>
                <Spacer/>
              <Text mr='15px'>(2)</Text>
              <Checkbox size='md' colorScheme='green' ></Checkbox>
              </Flex>
             
              <Flex mt='20px' mb='20px'>
                <Text>300 399</Text>
                <Spacer/>
              <Text mr='15px'>(1)</Text>
              <Checkbox size='md' colorScheme='green' ></Checkbox>
              </Flex>
              <Flex mt='20px' mb='20px'>
                <Text>Above 500</Text>
                <Spacer/>
              <Text mr='15px'>(1)</Text>
              <Checkbox size='md' colorScheme='green' ></Checkbox>
              </Flex>
              </Box>
      </Box>
      <Box w="70%" borderRadius='10px' bg='white' box-shadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' padding='10px' className={Style.data_box} >
        <Box h="50px"  mb="30px">
          <Flex mt='15px'>
            <Box>
              <Heading size="sm" fontSize="30px" color='rgb(79,88,104)' className={Style.heading}>
                Products
              </Heading>
            </Box>
            <Spacer/>
            <Box>
              <Flex className={Style.select}>
                <Text fontSize='18px' mr='20px' mt='5px' className={Style.sortBy}>Sort By:</Text>
               
                <Select placeholder="Popularity" w='250px' onClick={(e)=>handleSortData(e.target.value)}>
                  <option value="option1">Relevance</option>
                  <option value="asc">Price high to low</option>
                  <option value="dsc">Price low to high</option>
                </Select>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box  m='auto' className={Style.sort_filter}>
    <Button w='50%' ref={btnRef}  borderColor="gray.600" onClick={onOpen}>
        Sort 
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Sort</DrawerHeader>
             <Divider/>
             <DrawerBody>
             <RadioGroup onChange={setValue} value={value} w='90%' m='auto'>
      <Stack direction='column'>
        <Flex mt='10px' >
          <Text>Popularity</Text>
          <Spacer/>
          <Radio value='1'></Radio>
        </Flex>
       
        <Flex mb='15px'>
          <Text>Price low to high</Text>
          <Spacer/>
          <Radio value='2'></Radio>
        </Flex>
       
        <Flex mb='15px'>
          <Text>Price high to low</Text>
          <Spacer/>
          <Radio value='3'></Radio>
        </Flex>
       
        <Flex mb='15px'>
          <Text>Discount</Text>
          <Spacer/>
          <Radio value='4'></Radio>
        </Flex>
       
       
      </Stack>
    </RadioGroup>
    </DrawerBody>
          <DrawerFooter>
           
            <Button colorScheme='teal' w='100%'>APPLY</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    
    </Box>
  
        <SimpleGrid columns={[1, 2, 3]} spacing="10px">
        {/* {
           data.map((el)=>( */}
        
          <Box
            border="1px"
            borderColor="gray.300"
            padding="8px"
            borderRadius="6px"
            mt="10px"
            className={Style.main2}
            onClick={()=>handleClick()}
          >
            <Image
              m="auto"
              mt="5px"
              height="200px"
              src={'https://m.media-amazon.com/images/I/51kar4MuOGL._UY500_.jpg'}
              alt="Vicks"
            />
            <Heading size="sm" fontSize="17px" fontWeight="bold" mt="6px" color='rgb(79,88,104)'>
              {'CaratLane Yellow Gold Ring for men'}
            </Heading>
            <Flex mt="10px">
              <Text color='gray.500' textDecoration="line-through">MRP ₹{'1599'}</Text>
              <Text
                ml="10px"
                bg="rgb(249,140,142)"
                pl="5px"
                pr="5px"
                color="white"
              >
                {'20%'}
              </Text>
            </Flex>

            <Heading size="sm">₹{'1699'}</Heading>
          </Box>
               {/* ) )}  */}
        </SimpleGrid>
      </Box>
    </Box>
</Box>
</>
);
};

export default ProductsPage;