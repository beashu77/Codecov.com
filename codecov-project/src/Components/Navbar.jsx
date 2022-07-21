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
  ChevronUpIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

import style from "./style.module.css";

 //MOdel import
 import {
 
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react"

const Navbar = () => {
  // const { isOpen, onToggle } = useDisclosure();
const { isOpen, onOpen, onClose } = useDisclosure()
  
const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];
  return (
    <>
      <Box className={style.navTopOffer}>
        Introducing Codecov’s newest feature: Impact Analysis – now in Open Beta{" "}
      </Box>
      <div className={style.navbarContainer}>
        <Box className={style.navbarBox}>
          <Box className={style.navbar1}>
            <Image
              className={style.navbarImg}
              alt="Logo"
              src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg"
            />
          </Box>
          <Box className={style.navbar2}>
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

          <Box className={style.navbar3}>
            <Box paddingTop={"25px"}>

<Menu isOpen={isOpen}>
<MenuButton
    variant="ghost"
    mx={1}
    py={[1, 2, 2]}
    px={4}
    borderRadius={5}
   
    aria-label="Courses"
    fontWeight="normal"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
>
    More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
</MenuButton>
<MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
    <MenuItem> <img style={{height:"17px" ,width:"18px"}} src="https://tse4.mm.bing.net/th?id=OIP.NGIDdVP6vw9ue_D-mrEVFQHaHa&pid=Api&P=0"/>GitHub</MenuItem>
    <MenuItem>  <img  style={{height:"17px" ,width:"18px"}}src="https://tse4.mm.bing.net/th?id=OIP.M33soXqtWpiLgkMWCUmtYQHaHa&pid=Api&P=0" />GitLab</MenuItem>
    <MenuItem><img style={{height:"17px" ,width:"18px"}} src="https://tse1.mm.bing.net/th?id=OIP.1r-Ecwo8q9SQ3mpEllcoxQHaHa&pid=Api&P=0" />Bitbucket</MenuItem>
</MenuList>
</Menu>
      

            </Box>
           <Box paddingTop={"20px"}>
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




























// // import { useDisclosure } from "@chakra-ui/react"
// import {
//   useDisclosure,
//   MenuItem,
//   Menu,
//   MenuButton,
//   MenuList,
// } from "@chakra-ui/react"
// import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

// export default function Navbar() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//       <Menu isOpen={isOpen}>
//           <MenuButton
//               variant="ghost"
//               mx={1}
//               py={[1, 2, 2]}
//               px={4}
//               borderRadius={5}
             
//               aria-label="Courses"
//               fontWeight="normal"
//               onMouseEnter={onOpen}
//               onMouseLeave={onClose}
//           >
//               More {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
//           </MenuButton>
//           <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
//               <MenuItem> <img style={{height:"17px" ,width:"18px"}} src="https://tse4.mm.bing.net/th?id=OIP.NGIDdVP6vw9ue_D-mrEVFQHaHa&pid=Api&P=0"/>GitHub</MenuItem>
//               <MenuItem>  <img  style={{height:"17px" ,width:"18px"}}src="https://tse4.mm.bing.net/th?id=OIP.M33soXqtWpiLgkMWCUmtYQHaHa&pid=Api&P=0" />GitLab</MenuItem>
//               <MenuItem><img style={{height:"17px" ,width:"18px"}} src="https://tse1.mm.bing.net/th?id=OIP.1r-Ecwo8q9SQ3mpEllcoxQHaHa&pid=Api&P=0" />Bitbucket</MenuItem>
//           </MenuList>
//       </Menu>
//   )
// }