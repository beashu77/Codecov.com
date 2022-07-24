import React, { useEffect, useState } from "react";
import style from "./OurCusStyle.module.css";
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
import { BsSearch } from "react-icons/bs";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const OurCustomer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
   const [jsonData,setJsonData] = useState([]); 
   const [query,setQuery] = useState(null);
   const [loading, setLoding] = useState(false);
   const [error, setError] = useState(false);
  useEffect(() => {
    setLoding(true);
    setError(false);
    axios("http://localhost:8080/OurCustomerData")
    .then((res)=>{
      setJsonData(res.data)
      setLoding(false);
    })
    .catch((err)=>{
      setLoding(false)
      setError(true)
    })

  }, [])

  console.log(jsonData);


  const handleCustomer=(e)=>{
      console.log(e.target.value);
      setQuery(e.target.value);
      setLoding(true);
      setError(false);
      axios(`http://localhost:8080/OurCustomerData/?Category=${query}`)
      .then((res)=>{
        setJsonData(res.data)
        setLoding(false);
      })
      .catch((err)=>{
        setLoding(false)
        setError(true)
      })
  }

  return (
    <>
      <div className={style.OurCustomerConatiner}>
        <div className={style.OurCustomerHeading}>Our Customers</div>
      </div>
      <div className={style.outerframework}>
        <>
        {OurCustomerData.map((item) => {
          return item.id === 2 ? two(item) : one(item);
        })}
        </>

{/* ExploreContainer div */}
<div className={style.ExploreContainer}>
        <div className={style.ExploreHeading}>
          <h2> Explore our Customers</h2>
        </div>
        <div className={style.ExploreInputs}>
          <div>
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
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} onClick={handleCustomer}>
              <MenuItem value="Technology">
                  {" "}
                 
                  Technology
                </MenuItem>
                <MenuItem value="Finance">
                  {" "}
                  Finance
                </MenuItem>

            
                <MenuItem value="Software">
                  {" "}
                 
                  Software
                </MenuItem>
                
               
                <MenuItem value="Healthcare">
                  {" "}
                 
                  Healthcare
                </MenuItem>
                <MenuItem value="Bussiness Service">
                Bussiness Service
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
            <div>
            <input  type="text" />
            <BsSearch style={{marginTop:"10px"}}/>
            </div>
        </div>



         {/* Mapping div */}
        <div className={style.MapContainer}>
        {loading && <img style={{height:"400px",marginLeft:'40%', width:"1540px",marginLeft:'400px' ,padding:'-15px',marginTop:'20%'}}
          alt="pic" src="https://c.tenor.com/NcJk17_d4R0AAAAC/tenor.gif"/>}
          {error && <img style={{height:"400px",marginLeft:'40%', width:"1540px",marginLeft:'400px' ,padding:'-15px',marginTop:'20%'}}
          alt="pic" src="https://gifimage.net/wp-content/uploads/2018/11/something-went-wrong-gif-7.gif"/>}
          {jsonData?.map((elem)=>{
            return <div>
               <a href={elem.href}><img alt="logo" src={elem.name}/></a>
            </div>
          })}
        </div>
      </div>
      </div>

      
    </>
  );
};

export default OurCustomer;

const OurCustomerData = [
  {
    imgUrl: "OurCustomer1.PNG",
    LogoUrl:
      "https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/enterprise.svg",
    title: "Enterprise",
    para: "Over 29k enterprises across the globe rely on Codecov's code coverage insights to ensure the code they are producing meets quality standards.",
    btn1: "Get Started",
    btn2: "Learn More",
    id: 1,
  },
  {
    imgUrl: "OurCustomer2.PNG",
    LogoUrl:
      "https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/open-source.svg",
    title: "Open Source",
    para: "Codecov believes in supporting the open source community. That is why Codecov will always be free for open source projects.",
    btn1: "Get Started for Free",
    btn2: "Learn More",
    id: 2,
  },
  {
    imgUrl: "OurCustomer3.PNG",
    LogoUrl:
      "https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/startups.svg",
    title: "Startups",
    para: "Moving fast is critical, but the velocity at which you ship code shouldn't have an inverse relationship with code quality.Codecov is perfect for startups that want to move fast, and avoid breaking things.",
    btn1: "Get Started",
    btn2: "Learn More",
    id: 3,
  },
];

function one(item) {
  return (
    <>
      <div className={style.OurCustomerBox}>
        <div className={style.OurCustomerBoxLeft}>
          <img alt="logo" src={item.imgUrl} />
        </div>
        <div className={style.OurCustomerBoxRight}>
          <img alt="logo" src={item.LogoUrl} />
          <h2>{item.title}</h2>
          <p>{item.para}</p>
          <div>
            <p style={{ color: "#f07" }}>{item.btn1}</p>
            <BiRightArrowAlt
              style={{ marginTop: "4px", fontSize: "16px", color: "#f07" }}
            />
            {"  "}
            <p>{item.btn2}</p>
            <BiRightArrowAlt style={{ marginTop: "4px", fontSize: "16px" }} />
          </div>
        </div>
      </div>
    </>
  );
}

function two(item) {
  return (
    <>
      <div className={style.OurCustomerBox}>
        <div className={style.OurCustomerBoxRight}>
          <img alt="" src={item.LogoUrl} />
          <h2>{item.title}</h2>
          <p>{item.para}</p>
          <div>
            <p style={{ color: "#f07" }}>{item.btn1}</p>
            <BiRightArrowAlt
              style={{ marginTop: "4px", fontSize: "16px", color: "#f07" }}
            />
            {"  "}
            <p>{item.btn2}</p>
            <BiRightArrowAlt style={{ marginTop: "4px", fontSize: "16px" }} />
          </div>
        </div>
        <div className={style.OurCustomerBoxLeft}>
          <img alt="" src={item.imgUrl} />
        </div>
      </div>
    </>
  );
}
