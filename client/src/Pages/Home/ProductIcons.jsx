import { Flex,Box,Image,Text } from '@chakra-ui/react'
import React from 'react'

const ProductIcons = () => {


return (
    <Flex w='80%' m='auto' pt={20} justifyContent='space-around'>
    <Box>
        <Image w="120px" p={5} borderRadius="100%" border='2px solid red' src="https://4qozi.csb.app/assets/img/svg_rings/diamon_ring.svg"/>
        <Text fontSize='30px' pt={2}>Diamonds</Text>
        <Text>38 items</Text>
    </Box>
    <Box>
        <Image w="120px" p={5} borderRadius="100%" border='2px solid red' src="https://4qozi.csb.app/assets/img/svg_rings/svg-ring.svg"/>
        <Text fontSize='30px' pt={2}>Rings</Text>
        <Text>80 items</Text>
    </Box>
    <Box>
        <Image w="120px" p={5} borderRadius="100%" border='2px solid red' src="https://4qozi.csb.app/assets/img/svg_rings/watch.svg"/>
        <Text fontSize='30px' pt={2}>Watches</Text>
        <Text>38 items</Text>
    </Box>
    <Box>
        <Image w="120px" p={5} borderRadius="100%" border='2px solid red' src="https://4qozi.csb.app/assets/img/svg_rings/neckles.svg"/>
        <Text fontSize='30px' pt={2}>Neckless</Text>
        <Text>38 items</Text>
    </Box>
    <Box>
        <Image w="120px" p={5} borderRadius="100%" border='2px solid red' src="https://4qozi.csb.app/assets/img/svg_rings/tiara.svg"/>
        <Text fontSize='30px' pt={2}>Tiara</Text>
        <Text>38 items</Text>
    </Box>
    </Flex>
  )
}

export default ProductIcons
