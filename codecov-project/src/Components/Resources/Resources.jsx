import React, { useState,useEffect} from "react";
import style from "./ResourcesStyle.module.css";

import { BiRightArrowAlt } from "react-icons/bi";
import axios from "axios";

//Menu input
import {
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Resources = () => {
  const { isOpen:isTypeOpen, onOpen: onTypeOpen, onClose: onTypeClose } = useDisclosure();
  const { isOpen: isLanguageOpen,  onOpen: onLanguageOpen,  onClose: onLanguageClose } = useDisclosure();
  const { isOpen: isToolOpen,  onOpen: onToolOpen,  onClose: onToolClose } = useDisclosure();
  
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  const [data,setData] = useState([]);
  const [query,setQuery] = useState(null);
  const [text,setText] = useState()


  const handleInput=()=>{
    console.log(text)
  }

//http://localhost:8080/ResourcesData/?type=Java
 const handleChange=(e)=>{
    setQuery(e.target.value);
    console.log(query);
    axios(`http://localhost:8080/ResourcesData/?type=${query}`)
    .then((res)=>setData(res.data))
 }

 useEffect(() => { 
    axios(`http://localhost:8080/ResourcesData?_page=1&_limit=12`)
     .then((res)=>setData(res.data))
}, []);
 
  return (
    <div className={style.ResourceContainer}>
      <div className={style.ResHeading}>
        <h2> Resources</h2>
      </div>

      <div className={style.BottomMain}>
        <div id={style.ResLeft}>
          <div id={style.ResLeftsticky}>
            <div className={style.ResInputs}>
            <div >
                <input type="text"  onChange={handleInput} value={text}/>
              </div>

              {/* Meanu 1******************************** */}
              <div>
                <Menu isOpen={isTypeOpen}>
                  <MenuButton
                    variant="ghost"
                    mx={1}
                    py={[1, 2, 2]}
                    px={4}
                    borderRadius={5}
                    aria-label="Courses"
                    fontWeight="normal"
                    onMouseEnter={onTypeOpen}
                    onMouseLeave={onTypeClose}
                  >
                    Any Type {isTypeOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList onMouseEnter={onTypeOpen} onMouseLeave={onTypeClose} onClick={handleChange}>
                    <MenuItem value="Blog Post" > Blog Post</MenuItem>
                    <MenuItem value="Tutorial"> Tutorial</MenuItem>

                    <MenuItem value="Media Coverage"> Media Coverage</MenuItem>

                    <MenuItem value="Artical"> Artical</MenuItem>
                    <MenuItem value="Video">Video</MenuItem>
                  </MenuList>
                </Menu>
              </div>
              
              {/* Meanu 2******************************** */}

              <div>
                <Menu isOpen={isLanguageOpen}>
                  <MenuButton
                    variant="ghost"
                    mx={1}
                    py={[1, 2, 2]}
                    px={4}
                    borderRadius={5}
                    aria-label="Courses"
                    fontWeight="normal"
                    onMouseEnter={onLanguageOpen}
                    onMouseLeave={onLanguageClose}
                  >
                    Any Language {isLanguageOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList onMouseEnter={onLanguageOpen} onMouseLeave={onLanguageClose} onClick={handleChange}>
                   
                    <MenuItem value="JavaScript">JavaScript</MenuItem>

                    <MenuItem value="Java">Java</MenuItem>

                    <MenuItem value="PHP"> PHP</MenuItem>
                    <MenuItem value="C++">C++</MenuItem>
                    <MenuItem value="Bash">Bash</MenuItem>
                  </MenuList>
                </Menu>
              </div>
               {/* Meanu 3******************************** */}
               <div>
                <Menu isOpen={isToolOpen}>
                  <MenuButton
                    variant="ghost"
                    mx={1}
                    py={[1, 2, 2]}
                    px={4}
                    borderRadius={5}
                    aria-label="Courses"
                    fontWeight="normal"
                    onMouseEnter={onToolOpen}
                    onMouseLeave={onToolClose}
                  >
                    Any Tool {isToolOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList onMouseEnter={onToolOpen} onMouseLeave={onToolClose} onClick={handleChange}>
                   
                    <MenuItem value="Codecov"> Codecov</MenuItem>

                    <MenuItem value="Github Actions"> Github Actions</MenuItem>

                    <MenuItem value="Jacoco"> Jacoco</MenuItem>
                    <MenuItem value="CircleCI">CircleCI</MenuItem>
                    <MenuItem value="PHPUnit">PHPUnit</MenuItem>
                  </MenuList>
                </Menu>
              </div>

            </div>
          </div>
        </div>
        <div className={style.ResRight}>

        <div className={style.ResourceChotu}>
          {data?.map((item) => {
            return (
              <div>
                <div className={style.Resource1}>
                  <img alt="pic" src={item.imgUrl} />
                </div>
                <div className={style.Resource2}>
                  <button>{item.type}</button>
                  <h2>{item.title}</h2>
                </div>
                <hr></hr>
                <div className={style.Resource3}>
                  <p>Learn More</p>
                  <BiRightArrowAlt
                    style={{ marginTop: "4px", fontSize: "20px" }}
                  />
                </div>
              </div>
            );
          })}
        </div>


        </div>
      </div>
    </div>
  );
};

export default Resources;
