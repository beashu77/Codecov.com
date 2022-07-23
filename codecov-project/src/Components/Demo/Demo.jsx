import React from 'react';
import style from "./DemoStyle.module.css";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Image,
  InputGroup,
  HStack,

  Stack,
  Button,

  useColorModeValue,

} from '@chakra-ui/react';
import { useState } from 'react';


const Demo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick=()=>{
    alert("we will reach out shortly.")
  }
  return (
    <div className={style.ContactContainer}>
  
         
        <div className={style.ConatctLeft} >
       
      
        <Image
              className={style.navbarImg}
              alt="Logo"
              src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg"
            />
      
          <div>
            <h2>Schedule a Demo<span style={{color:'#f07'}}>.</span></h2>
            <p>Fill out the form to immediately schedule a demo with our team.</p>
   
          </div>
          <div>
          <div className={style.OrgLogo}
  
            
        >
              <div><span>
                <img
                  className={style.one}
                  alt="logo"
                  src="https://about.codecov.io/wp-content/uploads/2020/08/tile.svg"
                />
              </span>
              </div>
              <div><span>
                <img
                  className={style.one}
                  alt="logo"
                  src="https://about.codecov.io/wp-content/uploads/2020/10/lyft.svg"
                />
              </span>
              </div>
              <div><span>
                <img
                  className={style.one}
                  alt="logo"
                  src="https://about.codecov.io/wp-content/uploads/2021/02/ujet-logo.svg"
        
                />
              </span>
              </div>
              <div><span>
                <img
                  className={style.one}
                  alt="logo"
             
                  src="	https://about.codecov.io/wp-content/uploads/2021/06/afterpay.svg"
                />
              </span>
              </div>
            </div>
          </div>
        </div>



        <div className={style.ConatctRight}>
          <div>
          <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
       
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              
            </HStack>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Contact Reason</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>How did you hear about Codecov?</FormLabel>
              <InputGroup>
                <Input size={"lg"} type={showPassword ? 'text' : 'password'} />
              
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleClick}
                loadingText="Submitting"
                size="lg"
                bg={'#f07'}
                color={'white'}
                _hover={{
                  bg: '#f07',
                  
                }}>
                  Schedule Demo
              </Button>
            </Stack>
        
          </Stack>
        </Box>
      </Stack>
    </Flex>
          </div>
        </div>
    </div>
  )
}

export default Demo;