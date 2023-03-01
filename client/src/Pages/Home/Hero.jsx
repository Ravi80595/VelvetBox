import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';


const BrandsData = [
    {
      img: "https://4qozi.csb.app/assets/img/slider/slider3.jpg",
      heading: "Glucon-D",
    },
    {
      img: "https://4qozi.csb.app/assets/img/slider/slider1.jpg",
      heading: "Himalaya",
    },
    {
        img:'https://4qozi.csb.app/assets/img/slider/slider2.jpg',
        heading:"r"
    }
  ];

  var items = [
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing  ",
      img_src: "./assets/img/slider/slider1.jpg"
    },
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      img_src: "./assets/img/slider/slider2.jpg"
    },
    {
      name: "Designer Jewellery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      img_src: "./assets/img/slider/slider3.jpg"
    }
  ];

const Hero = () => {
  
  
return (
    <Box pt={75}>
      <Flex justifyContent="space-between" position='relative'>
        <Swiper     
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper">
        {BrandsData.map((el, i) => (
              <SwiperSlide>
                <Box key={i} height="600px">
                <Box textAlign='left' top='30%' left='10%' color='#fff' position='absolute'>
                   <Heading fontSize='50px' mb={3}>Designer Jewellery</Heading>
                   <Text mb={3}>Here you can get best deals for you.</Text>
                   <Button borderRadius={0} color='black'>SHOP NOW</Button>
                </Box>
                  <Image maxHeight="600px" w='100%' src={el.img} alt=""/>
                </Box>
              </SwiperSlide>
            ))}
        </Swiper>
      </Flex>
    </Box>
  )
}

export default Hero
