import { Box, color, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/bundle";

const BrandsData = [
    {
      img: "https://4qozi.csb.app/assets/img/category/categorie1.png",
      heading: "Glucon-D",
      price:'$1000.00'
    },
    {
      img: "https://4qozi.csb.app/assets/img/category/categorie2.png",
      heading: "Himalaya",
    },
    {
      img: "https://4qozi.csb.app/assets/img/category/categorie4.png",
      heading: "Sugerfree",
    },
    {
      img: "https://4qozi.csb.app/assets/img/category/categorie3.png",
      heading: "LivEasy",
    },
    {
      img: "https://cms-contents.pharmeasy.in/carousel_item/201210bc27d-App_Huggies.jpg?dim=1440x0",
      heading: "Huggies",
    },
    {
      img: "https://cms-contents.pharmeasy.in/carousel_item/d6726e69b22-04.jpg?dim=1440x0",
      heading: "Wellbeing Nutrition",
    },
    {
      img: "https://cms-contents.pharmeasy.in/carousel_item/c9fc0cd6ef6-Revital-min.png?dim=1440x0",
      heading: "Revital",
    },
    {
      img: "https://cms-contents.pharmeasy.in/carousel_item/e8a5cabe9f3-Volini-min.png?dim=1440x0",
      heading: "Volini",
    },
    {
      img: "https://cms-contents.pharmeasy.in/carousel_item/c774461a093-Pentasure_App.jpg?dim=1440x0",
      heading: "Pentasure",
    }
  ];

const Carousal = () => {
    const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
    const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  


return (
      <Box p={5} pt={20}  textAlign={"center"}>
        <Text color='red'>Special offers</Text>
        <Text pb={2} fontSize="30px" color={"#30363C"}> Special Products</Text>
        <hr />
        <Text w='40%' m='auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
        <Flex justifyContent={"space-between"} p={5} w={"90%"} m='auto'>
          <Swiper
            slidesPerView={isBigScreen ? 4 : isTablet ? 3 : isMobile ? 2 : 4}
            spaceBetween={0}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {BrandsData.map((el, i) => (
              <SwiperSlide >
                <Box key={i} textAlign='center' width="350px" height="400px">
                  <Image borderRadius="5px" width="270px"  height= "300px" cursor= "pointer"
                    src={el.img}/>
                  <Text>{el.heading}</Text>
                  <Text>{el.price}</Text>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Box>
    );
  };
  

export default Carousal
