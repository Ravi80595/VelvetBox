import { Box,Text,Heading,UnorderedList,ListItem } from '@chakra-ui/react'
import React from 'react'

const AllOrders = () => {

return (
    <Box textAlign='left'>
        <b>All Sale Teams : 4</b>
        <Box pt={20} pb={3} w='90%' m='auto'>
            <Heading>Team 1</Heading>
            {/* <hr /> */}
            <Text pt={5}>Managed By Sachin Choudary. Working Area Delhi Haryana And Punjab.</Text>
            <UnorderedList>
            <ListItem>
                 Senior Manager : Yogesh Kumar
            </ListItem>
            <ListItem>
                 Advertiser : YRF Films
            </ListItem>
            <ListItem>
                Repersentive : Ankush Chinmai
            </ListItem>
            <ListItem>
                Work Handler : Anand 
            </ListItem>
            </UnorderedList>
        </Box>
            <hr />
        <Box pt={20} pb={3} w='90%' m='auto'>
            <Heading>Team 2</Heading>
            <Text pt={5}>Managed By Sachin Choudary. Working Area Delhi Haryana And Punjab.</Text>
            <UnorderedList>
            <ListItem>
                 Senior Manager : Yogesh Kumar
            </ListItem>
            <ListItem>
                 Advertiser : YRF Films
            </ListItem>
            <ListItem>
                Repersentive : Ankush Chinmai
            </ListItem>
            <ListItem>
                Work Handler : Anand 
            </ListItem>
            </UnorderedList>
        </Box>
            <hr />
        <Box pt={20} w='90%' m='auto' pb={3}>
            <Heading>Team 3</Heading>
            <Text pt={5}>Managed By Sachin Choudary. Working Area Delhi Haryana And Punjab.</Text>
            <UnorderedList>
            <ListItem>
                 Senior Manager : Yogesh Kumar
            </ListItem>
            <ListItem>
                 Advertiser : YRF Films
            </ListItem>
            <ListItem>
                Repersentive : Ankush Chinmai
            </ListItem>
            <ListItem>
                Work Handler : Anand 
            </ListItem>
            </UnorderedList>
        </Box>
            <hr />
        <Box pt={20} w='90%' m='auto'>
            <Heading>Team 4</Heading>
            <Text pt={5}>Managed By Sachin Choudary. Working Area Delhi Haryana And Punjab.</Text>
            <UnorderedList>
            <ListItem>
                 Senior Manager : Yogesh Kumar
            </ListItem>
            <ListItem>
                 Advertiser : YRF Films
            </ListItem>
            <ListItem>
                Repersentive : Ankush Chinmai
            </ListItem>
            <ListItem>
                Work Handler : Anand 
            </ListItem>
            </UnorderedList>
        </Box>
    </Box>
  )
}


export default AllOrders