import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import style from "./style.module.css";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
    <Box className={style.navTopOffer}>Introducing Codecov’s newest feature: Impact Analysis – now in Open Beta </Box>
    <div className={style.navbarContainer}>
      <Box className={style.navbarBox}>
        {/* <Flex  className={style.navFlex}
          color={useColorModeValue("gray.600", "white")}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          align={"center"}
        > */}
        <Box  className={style.navbar1}>
          <Image
            className={style.navbarImg}
            alt="Logo"
            src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg"
          />
        </Box>
        <Box  className={style.navbar2}>
          <Box>
            <Text fontWeight={"bold"} fontSize={"15px"}>
              Product
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize={"15px"}>
              Documentation
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize={"15px"}>
              Customer
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize={"15px"}>
              Resources
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize={"15px"}>
              Pricing
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize={"15px"}>
              Contact
            </Text>
          </Box>
        </Box>

        <Box  className={style.navbar3}>
        
            <Box  paddingTop={'25px'}>
            <Button
              as={"a"}
              fontWeight={"bold"} 
              fontSize={"15px"}
             variant={'unstyled'}
            >
              Login
            </Button>
            </Box>
           <Box paddingTop={'20px'}>
           <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"black"}
              _hover={{
                bg: "black.300",
              }}
            >
              Get Demo
            </Button>
           </Box>
      
        </Box>

        {/* </Flex> */}
      </Box>
    </div>
    </>
  );
};

export default Navbar;
