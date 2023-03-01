import { Box, Flex,Image,Heading,Text } from '@chakra-ui/react'
import React from 'react'

const AboutUs = () => {


return (
    <Flex w='90%' m='auto' pt={20} justifyContent='space-between'> 
      {/* <Box  border='2px solid blue'> */}
        <Image w='40%' src='https://m.media-amazon.com/images/I/71pGbJUnCqL._AC_UX466_.jpg'/>
      {/* </Box> */}
      <Box w='50%'>
        <Heading pb={10}>About Us</Heading>
        <Text>We Shine Jewellers, situated at Malad west, Mumbai, Maharashtra, are one of the leading exclusively designed jewellery showroom, focusing giving you an awsome jewellery buying experience. We strive to provide you with possibly the largest collection of curated designs for every occasion. We are grateful to be trusted by a number of happy customers.</Text>
      </Box>
    </Flex>
  )
}

export default AboutUs
