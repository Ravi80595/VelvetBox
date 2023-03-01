import { Box, Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../images/Logo.jpg"

const Navbar = () => {


return (
    <Flex justifyContent='space-around' position='fixed' w='100%' zIndex={9999} bg='white'>
      <Box w='30%'>
        <Image  w={120} src={Logo}/>
      </Box>
      <Flex fontSize='20px' pt={8} w='56%' justifyContent='space-around'>
        <Text>Home</Text>
        <Text>Category</Text>
        <Text>Products</Text>
        <Text>About Us</Text>
        <Text>Why us</Text>
        <Text>More</Text>
      </Flex>
    </Flex>
  )
}

export default Navbar
