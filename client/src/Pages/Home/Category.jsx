import { Box, Grid, GridItem,Text,Image, Heading } from '@chakra-ui/react'
import React from 'react'

const Category = () => {


return (
    <Box w='80%' m='auto'>
      <Heading pb={5} pt={10}>Category</Heading>
      <Grid templateColumns='repeat(3,1fr)' gap={10}>
        <GridItem>
            <Image h={400} src="https://m.media-amazon.com/images/I/81LWpXfWICL._UL1500_.jpg"/>
            <Text>Bangels</Text>
        </GridItem>
        <GridItem>
            <Image h={400} src="https://kinclimg6.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIDG0396D05_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-31382.png"/>
            <Text>Earings</Text>
        </GridItem>
        <GridItem>
            <Image h={400} src="https://thelittlejewelboxonline.com/wp-content/uploads/2021/12/nnn4-864x1068.jpg"/>
            <Text>Neckless</Text>
        </GridItem>
        <GridItem>
            <Image h={350} src="https://images.jdmagicbox.com/quickquotes/images_main/heart-diamond-silver-pendent-chain-383623124-yzm64.jpeg"/>
            <Text>pendent</Text>
        </GridItem>
        <GridItem>
            <Image h={350} src="https://media.istockphoto.com/id/1195942083/photo/woman-neck-with-hand-with-many-bracelets.jpg?s=612x612&w=0&k=20&c=QYn_gwsnn3Nn6o8IoqVDMsg894rxdruQwddrCN9xZ2k="/>
            <Text>Braclets</Text>
        </GridItem>
        <GridItem>
            <Image h={350} src="https://rukminim1.flixcart.com/image/832/832/kkcwo7k0/ring/x/h/h/adjustable-kjrg224-ring-kanak-jewels-original-imafzq3k3n7ks8ah.jpeg?q=70"/>
            <Text>Rings</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Category
