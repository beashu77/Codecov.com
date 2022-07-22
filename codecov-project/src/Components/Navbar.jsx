import React from "react";
import { Box, Text, Button, useDisclosure, Image } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {Link} from "react-router-dom";

import style from "./style.module.css";

//MOdel import
import { MenuItem, Menu, MenuButton, MenuList } from "@chakra-ui/react";

const Navbar = () => {
  // const { isOpen, onToggle } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <>
      <Box className={style.navTopOffer}>
        Introducing Codecov’s newest feature: Impact Analysis – now in Open Beta{" "}
      </Box>
      <div className={style.navbarContainer}>
        <Box className={style.navbarBox}>
          <Box className={style.navbar1}>
            <Link to="/">
            <Image
              className={style.navbarImg}
              alt="Logo"
              src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg"
            />
            </Link>
          </Box>
          <Box className={style.navbar2}>
            <Box>
              <Text fontWeight={"bold"} fontSize={"15px"}>
                Product
              </Text>
            </Box>
            <Box>
              <a href="https://docs.codecov.com/docs">
                <Text fontWeight={"bold"} fontSize={"15px"}>
                  {" "}
                  Documentation{" "}
                </Text>
              </a>
            </Box>
            
            <Box>
              <Link to="/ourCustomer">
              <Text fontWeight={"bold"} fontSize={"15px"}>
                Customer
              </Text>
              </Link>
            </Box>
            <Box>
              <Link to="/resources">
              <Text fontWeight={"bold"} fontSize={"15px"}>
                Resources
              </Text>
              </Link>
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
                  Login {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <MenuItem>
                    {" "}
                    <img
                      style={{
                        height: "17px",
                        width: "18px",
                        marginRight: "10px",
                      }}
                      src="https://tse4.mm.bing.net/th?id=OIP.NGIDdVP6vw9ue_D-mrEVFQHaHa&pid=Api&P=0"
                      alt="pic"
                    />
                    <a href="https://app.codecov.io/login/gh?utm_department=marketing&utm_medium=referral&utm_source=https%3A%2F%2Fin.search.yahoo.com%2F">
                      GitHub
                    </a>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <img
                      style={{
                        height: "17px",
                        width: "18px",
                        marginRight: "10px",
                      }}
                      src="https://tse4.mm.bing.net/th?id=OIP.M33soXqtWpiLgkMWCUmtYQHaHa&pid=Api&P=0"
                      alt="pic"
                    />
                    <a href="https://app.codecov.io/login/gl?utm_department=marketing&utm_medium=referral&utm_source=https%3A%2F%2Fabout.codecov.io%2F">
                      GitLab
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <img
                      style={{
                        height: "17px",
                        width: "18px",
                        marginRight: "10px",
                      }}
                      src="https://tse1.mm.bing.net/th?id=OIP.1r-Ecwo8q9SQ3mpEllcoxQHaHa&pid=Api&P=0"
                      alt="pic"
                    />
                    <a href="https://app.codecov.io/login/bb?utm_department=marketing&utm_medium=referral&utm_source=https%3A%2F%2Fabout.codecov.io%2F">
                      Bitbucket
                    </a>
                  </MenuItem>
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
