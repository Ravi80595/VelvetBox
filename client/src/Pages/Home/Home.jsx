import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer/Footer'
import AboutUs from './AboutUs'
import Carousal from './Carousal'
import Category from './Category'
import Hero from './Hero'
import ProductIcons from './ProductIcons'

const Home = () => {


return (
    <Box>
      <Hero/>
      <ProductIcons/>
      <AboutUs/>
      <Category/>
      <Carousal/>
      <Footer/>
    </Box>
  )
}

export default Home
