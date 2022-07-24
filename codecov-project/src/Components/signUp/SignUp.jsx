import React from 'react';
import style from "./signStyle.module.css";
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

const SignUp = () => {
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
              <h2>Create a culture of coverage with Codecov<span style={{color:'#f07'}}>.</span></h2>
              <p>The world’s best open source projects and companies use Codecov to ensure they’re shipping product everyone is proud of.</p>
     
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
           
            <div className={style.ReadyBottom}>
            <h2>SIGN IN WITH CODE HOST</h2>
              <div>
                <img
                  alt="pic"
                  src="https://tse4.mm.bing.net/th?id=OIP.NGIDdVP6vw9ue_D-mrEVFQHaHa&pid=Api&P=0"
                />

                <a href="https://app.codecov.io/login/gh?utm_department=marketing&utm_medium=referral&utm_source=https%3A%2F%2Fabout.codecov.io%2Fschedule-demo%2F">
                  <h2 style={{ fontWeight: "bold" }}>GitHub</h2>
                </a>
              </div>
              <div>
                <img
                  alt="pic"
                  src="https://tse4.mm.bing.net/th?id=OIP.M33soXqtWpiLgkMWCUmtYQHaHa&pid=Api&P=0"
                />

                <a href="https://app.codecov.io/login/gl?utm_department=marketing&utm_medium=referral&utm_source=https%3A%2F%2Fabout.codecov.io%2F">
                  <h2 style={{ fontWeight: "bold" }}>GitLab</h2>
                </a>
              </div>
              <div>
                <img
                  alt="pic"
                  src="https://tse1.mm.bing.net/th?id=OIP.1r-Ecwo8q9SQ3mpEllcoxQHaHa&pid=Api&P=0"
                />

                <a href="https://app.codecov.io/login/bb?utm_department=marketing&utm_medium=referral&utm_source=https%3A%2F%2Fabout.codecov.io%2F">
                  <h2 style={{ fontWeight: "bold" }}>Bitbucket</h2>
                </a>
              </div>
            </div>
            </div>
          </div>
      </div>
    )
  }
  

export default SignUp
