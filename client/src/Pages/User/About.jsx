import { Tabs,Tab,TabPanels,TabList,TabPanel,FormControl,Input,Button,Textarea,Heading,FormLabel} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Text
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'

const About = () => {
  const [username,setUsername]=useState('')
  const [msg,setMsg]=useState('')


const handlePost=()=>{
  const payload={
    username,
    msg
  }
  alert(`Thanks,${username} your valuable feedback is saved.`)
}


return (
  <>
  <Navbar/>
  <Box pt={20}>
  <Tabs p={5} w="70%" m="auto" mt={10} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
<TabList>
  <Tab>About us</Tab>
  <Tab>Documentation Help</Tab>
  <Tab>Contact Us</Tab>
</TabList>

<TabPanels>
  <TabPanel p={10}>
    <p>We Shine Jewellers, situated at Malad west, Mumbai, Maharashtra, are one of the leading exclusively designed jewellery showroom, focusing giving you an awsome jewellery buying experience. We strive to provide you with possibly the largest collection of curated designs for every occasion. We are grateful to be trusted by a number of happy customers.
      <a href="https://github.com/Ravi80595/socialPshycho"> Click Here</a>
      <br /> <br /> 
      This whole website is created using MERN stack. To create this website i use mongodb, express nodejs in the backend. And for the frontend part i use react and redux for functionality and structure. And for the designing part is use chakra ui css laibrary. 
      <br />
      <br /><br />
      The backend of the website is deployed on render and the frontend of the website is deployed on vercel. For frontend you can visit to this link https://socialpshycho.vercel.app/ or <a href="https://socialpshycho.vercel.app/"> Click here.</a>
    </p>
    <br />
    <Button mt={20} w='100%' m='auto'>Code </Button>
  </TabPanel>
  <TabPanel p={10}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur animi culpa modi maiores voluptas excepturi adipisci porro neque numquam obcaecati. Similique culpa placeat incidunt explicabo eligendi consectetur quia molestias a?</p>
    <br />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas libero illum nam facere asperiores neque, adipisci pariatur deleniti iure enim tempora nisi. Odit aspernatur temporibus dolorem eaque tenetur quibusdam?</p>
  </TabPanel>
  <TabPanel>
  <Box width={["90%","90%","90%"]} m="auto">
      <Box p={10} m={[0,0,0]}>
    <Text pb={10} textAlign='center'>Please Enter your query and suggestion here.</Text>
          <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Email'/>
                  <FormLabel>Message</FormLabel>
                  <Textarea value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Enter Your Message Here' />
                  <Button mt={4} width="100%" onClick={handlePost}>POST</Button>
          </FormControl>
      </Box>
</Box>
  </TabPanel>
</TabPanels>
</Tabs>
</Box>
<Heading pt={100} textAlign="center">Here are some frequently asked questions.</Heading>
    <Box pt={20} w="80%" m='auto' pb={20}>
    <Accordion allowToggle p={10} boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" fontSize={["15px","10px","25px"]} textAlign='center' flex='1'>
            What is VelvetBox?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      Socialpshycho is a social media website. Here users can share posts can manage their own social media account.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            Who Created velvet Box?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        SocailPshycho is created by Ravi Sharma. A Full-Stack Web Developer. 
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            How To Create Account?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        To create account in Socialpshycho.Go to this <Link to="/usersign"><span>  Page </span> </Link>and just enter your details to create an account. After creating account you can visit to login page and login to your account.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            How to upload Post?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      To upload post you can go to your main account page and just click on plus icon to add new post. After clicking on this post you will redirect to post upload page. Here you can drag and drop your image and write caption. Also you can add location to your post.
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' fontSize={["15px","10px","25px"]} textAlign='center'>
            How To check account status?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
  </Box>
</>
)
}

export default About