import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer/Footer'
import AboutUs from './AboutUs'
import Carousal from './Carousal'
import Category from './Category'
import Hero from './Hero'
import ProductIcons from './ProductIcons'
import Reviews from './Reviews'
import Navbar from "./../../Components/Navbar"

const Home = () => {


return (
    <Box>
      <Navbar/>
      <Hero/>
      <ProductIcons/>
      <AboutUs/>
      <Category/>
      <Carousal/>
      <Reviews/>
      <Footer/>
    </Box>
  )
}

export default Home
