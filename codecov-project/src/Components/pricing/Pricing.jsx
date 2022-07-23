import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./pricingStyle.module.css"

const dataInit=[
    {
        imgUrl:"	https://about.codecov.io/wp-content/uploads/2022/05/umbrella.png",
        title:"OPEN SOURCE",
        price:"Free",
        btn:"Get Started"
    },
    {
          imgUrl:"	https://about.codecov.io/wp-content/uploads/2022/05/parasol.png",
        title:"BASIC",
        price:"Free",
        btn:"Get Started"
    },
    {
         imgUrl:"https://about.codecov.io/wp-content/uploads/2022/05/partytent.png",
        title:"PRO",
        price:"$10/user/month",
        btn:"Get Started"
    },
    {
         imgUrl:"https://about.codecov.io/wp-content/uploads/2022/05/gazebo.png",
        title:"ENTERPRISE",
        price:"Custom Pricing",
        btn:"Contact Sales"
    }
]
const Pricing = () => {
  return (
    <>
    <div className={style.PricingHeading}>
        <h2>Compare Plans</h2>
    </div>
    <div className={style.PricingContainer}>
     {dataInit.map((item)=>{
       return  <>
        <div className={style.pricingBox}>
            <img alt="logo" src={item.imgUrl}/>
            <p>{item.title}</p>
            <h2>{item.price}</h2>
            <Button><Link to="/signup">{item.btn}</Link></Button>
        </div>
        </>
     })}
    </div>
    </>
  )
}

export default Pricing