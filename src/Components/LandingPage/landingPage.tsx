import { Box, Center , Text, Image, Button, Stack} from "@chakra-ui/react";
import React from "react";


const LandingPage = () => {
    const outerBoxStyles = {
        background:
            'url(https://media1.giphy.com/media/mj4ruS6mHkdKEdmwc1/giphy.gif?cid=ecf05e4774gqiwzecwxiwtz6mln1kify7i4aork274x7fmsw&rid=giphy.gif&ct=g) center/cover no-repeat',
      }
      const innerBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: 'full',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
      }
    return (
        
<Center sx={outerBoxStyles}  color='white' h="100vh"  w="auto"  mx="auto"  >
<Stack spacing={4} direction="row">
<Box  w="50vh">
        <Box sx={innerBoxStyles} backdropContrast='30%' ml="20px" >
          BIENVENIDO A ANIMEFLIX
          </Box>
          
<Button
    sx={innerBoxStyles}
  size='sm'
  
  display="flex"
  justifyContent="center"
  color="black"
  
>
<a href="/home">Ingresar</a>
</Button>

        
        </Box>
        </Stack>
</Center>
        


    );
    }
export default LandingPage;