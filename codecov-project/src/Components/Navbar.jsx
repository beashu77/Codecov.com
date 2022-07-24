import React from "react";
import { Box, Text, Button, useDisclosure, Image } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Link, Navigate } from "react-router-dom";
import { GrResources } from "react-icons/gr";
import { TiVideo } from "react-icons/ti";
import { FaPencilAlt, FaBoxes } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FcSettings } from "react-icons/fc";
import {
  BsFillPersonBadgeFill,
  BsBuilding,
  BsUmbrellaFill,
} from "react-icons/bs";
import { MdSource } from "react-icons/md";
import { ImRocket } from "react-icons/im";

import style from "./style.module.css";

//MOdel import
import { MenuItem, Menu, MenuButton, MenuList } from "@chakra-ui/react";

const Navbar = () => {
  // const { isOpen, onToggle } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isCustomerOpen,
    onOpen: onCustomerOpen,
    onClose: onCustomerClose,
  } = useDisclosure();
  const {
    isOpen: isResourceOpen,
    onOpen: onResourceOpen,
    onClose: onResourceClose,
  } = useDisclosure();
  const {
    isOpen: isProductOpen,
    onOpen: onProductOpen,
    onClose: onProductClose,
  } = useDisclosure();

  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  const handleResource = () => {
    <Navigate to="/resources" />;
  };
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
          
             {/* ***********************Product Box */}
             <Box marginTop={"-10px"}>
              <Menu isOpen={isProductOpen}>
                <MenuButton
                  variant="ghost"
                  py={[1, 2, 2]}
                  marginTop={"0.5"}
                  borderRadius={5}
                  aria-label="Courses"
                  fontWeight="700"
                  onMouseEnter={onProductOpen}
                  onMouseLeave={onProductClose}
                >
                  <Link to="/">
                  <Text fontWeight={"bold"} fontSize={"15px"}>
                    {" "}
                    Product
                  </Text>
                  </Link>
                </MenuButton>
                <MenuList
                  onClick={handleResource}
                  padding={"10px"}
                  onMouseEnter={onProductOpen}
                  onMouseLeave={onProductClose}
                >
                  Product
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "25px",
                    }}
                  >
                    <div
                      style={{ listStyleType: "none", marginTop: "30px" }}
                      className={style.DropResBox}
                    >
                      <li>
                        <GrDocumentText />
                        Features
                      </li>
                      <li>
                        <FcSettings />
                        Integration
                      </li>
                      <li>
                        <FaPencilAlt />
                        Documentation
                      </li>
                      <li>
                        <FaBoxes />
                        API
                      </li>
                      <li>
                        <BsFillPersonBadgeFill />
                        Status
                      </li>
                    </div>

                    <div
                      style={{ listStyleType: "none", marginTop: "30px" }}
                      className={style.DropResBox}
                    >
                      <li>
                        <MdSource />
                        Open Source
                      </li>
                      <li>
                        <BsBuilding />
                        Enterprise
                      </li>
                      <li>
                        <ImRocket />
                        Startups
                      </li>
                      <li>
                        <BsUmbrellaFill />
                        Education
                      </li>
                    </div>
                  </div>
                </MenuList>
              </Menu>
            </Box>

            {/* ***********************Documentation Box */}
            <Box>
              <a href="https://docs.codecov.com/docs">
                <Text fontWeight={"bold"} fontSize={"15px"}>
                  {" "}
                  Documentation{" "}
                </Text>
              </a>
            </Box>
            {/* ******************************** Coustmer Box*/}
            <Box marginTop={"-10px"}>
              <Menu isOpen={isCustomerOpen}>
                <MenuButton
                  variant="ghost"
                  py={[1, 2, 2]}
                  marginTop={"0.5"}
                  borderRadius={5}
                  aria-label="Courses"
                  fontWeight="700"
                  onMouseEnter={onCustomerOpen}
                  onMouseLeave={onCustomerClose}
                >
                  <Text fontWeight={"bold"} fontSize={"15px"}>
                    {" "}
                    Customer{" "}
                  </Text>
                </MenuButton>
                <MenuList
                  padding={"10px"}
                  onMouseEnter={onCustomerOpen}
                  onMouseLeave={onCustomerClose}
                >
                  Customer
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                    }}
                  >
                    <div
                      style={{ listStyleType: "none", marginTop: "20px" }}
                      className={style.DropResBox}
                    >
                      <li>
                        <GrResources />
                        <Link to="/ourCustomer">Webiner</Link>
                      </li>
                      <li>
                        <TiVideo />
                        <Link to="/ourCustomer">Blog</Link>
                      </li>
                      <li>
                        <FaPencilAlt />
                        <Link to="/ourCustomer">Documentation</Link>
                      </li>
                    </div>
                  </div>
                </MenuList>
              </Menu>
            </Box>
            {/* ****************************************** Resource Box*/}
            <Box marginTop={"-10px"}>
              <Menu isOpen={isResourceOpen}>
                <MenuButton
                  variant="ghost"
                  py={[1, 2, 2]}
                  marginTop={"0.5"}
                  borderRadius={5}
                  aria-label="Courses"
                  fontWeight="700"
                  onMouseEnter={onResourceOpen}
                  onMouseLeave={onResourceClose}
                >
                  <Link to="/resources">
                    <Text fontWeight={"bold"} fontSize={"15px"}>
                      {" "}
                      Resources
                    </Text>
                  </Link>
                </MenuButton>
                <MenuList
                  onClick={handleResource}
                  padding={"10px"}
                  onMouseEnter={onResourceOpen}
                  onMouseLeave={onResourceClose}
                >
                  Resource
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px",
                    }}
                  >
                    <div
                      style={{ listStyleType: "none", marginTop: "50px" }}
                      className={style.DropResBox}
                    >
                      <li>
                        <GrResources />
                        <Link to="/resources">Webiner</Link>
                      </li>
                      <li>
                        <TiVideo />
                        <Link to="/resources">Blog</Link>
                      </li>
                      <li>
                        <FaPencilAlt />
                        <Link to="/resources">Documentation</Link>
                      </li>
                      <li>
                        <GrDocumentText />
                        <Link to="/resources">Community</Link>
                      </li>
                      <li>
                        <HiOutlineUserGroup />
                        <Link to="/resources">All Resources</Link>
                      </li>
                    </div>
                    <div>
                      {" "}
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "15px",
                        }}
                      >
                        <Button
                          style={{
                            height: "15px",
                            backgroundColor: "#f07",
                            paddingBottom: "-5px",
                          }}
                        >
                          <p>Blog</p>
                        </Button>
                        <h2 style={{ fontSize: "16px", fontWeight: "500" }}>
                          What is code coverage?
                        </h2>
                      </span>
                      <img
                        style={{
                          height: "180px",
                          width: "300px",
                          marginRight: "10px",
                        }}
                        src="https://about.codecov.io/wp-content/uploads/2022/03/featured-image.png"
                        alt="pic"
                      />
                    </div>
                  </div>
                </MenuList>
              </Menu>
            </Box>

           
            {/* ****************************************** Pricing Box */}
            <Box>
              <Link to="/pricing">
              <Text fontWeight={"bold"} fontSize={"15px"}>
                Pricing
              </Text>
              </Link>
            </Box>
            {/* ****************************************** Contact Box */}
            <Box>
              <Link to="/contact">
                <Text fontWeight={"bold"} fontSize={"15px"}>
                  Contact
                </Text>
              </Link>
            </Box>
          </Box>

          {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Login Button */}
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

            {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%Get Demo Button */}
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
                <Link to={"/demo"}>Get Demo</Link>
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
