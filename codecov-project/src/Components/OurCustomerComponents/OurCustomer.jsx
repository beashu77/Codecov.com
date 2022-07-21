import React from 'react';
import style from "./OurCusStyle.module.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { TbWoman } from 'react-icons/tb';

const OurCustomerData =[
    {
        imgUrl:"OurCustomer1.PNG",
        LogoUrl:"https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/enterprise.svg",
        title:"Enterprise",
        para:"Over 29k enterprises across the globe rely on Codecov's code coverage insights to ensure the code they are producing meets quality standards.",
        btn1:"Get Started",
        btn2:"Learn More",
        id: 1      
    },
    {
        imgUrl:"OurCustomer2.PNG",
        LogoUrl:"https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/open-source.svg",
        title:"Open Source",
        para:"Codecov believes in supporting the open source community. That is why Codecov will always be free for open source projects.",
        btn1:"Get Started for Free",
        btn2:"Learn More" ,
        id:2
    },
    {
        imgUrl:"OurCustomer3.PNG",
        LogoUrl:"https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/startups.svg",
        title:"Startups",
        para:"Moving fast is critical, but the velocity at which you ship code shouldn't have an inverse relationship with code quality.Codecov is perfect for startups that want to move fast, and avoid breaking things.",
        btn1:"Get Started",
        btn2:"Learn More" ,
        id:  3
    }
]

function one (item){
    return (
        <>
                  <div className={style.OurCustomerBox}>
                <div className={style.OurCustomerBoxLeft}>
                    <img alt='photo' src={item.imgUrl}/>
                </div>
                <div className={style.OurCustomerBoxRight}>
                   <img alt='photo' src={item.LogoUrl}/>
                   <h2>{item.title}</h2>
                   <p>{item.para}</p>
                  <div>
                  <p style={{color:"#f07"}}>{item.btn1}</p>
                  <BiRightArrowAlt
                    style={{ marginTop: "4px", fontSize: "16px" ,color:"#f07"}}
                  />
                  {"  "}
                   <p>{item.btn2}</p>
                  <BiRightArrowAlt
                    style={{ marginTop: "4px", fontSize: "16px" }}
                  />
                  </div>
                </div>

            </div>
                   </>
    )
}

function two (item){
    return (
             <>
                  <div className={style.OurCustomerBox}>
               
                <div className={style.OurCustomerBoxRight}>
                   <img alt='photo' src={item.LogoUrl}/>
                   <h2>{item.title}</h2>
                   <p>{item.para}</p>
                  <div>
                  <p style={{color:"#f07"}}>{item.btn1}</p>
                  <BiRightArrowAlt
                    style={{ marginTop: "4px", fontSize: "16px" ,color:"#f07"}}
                  />
                  {"  "}
                   <p>{item.btn2}</p>
                  <BiRightArrowAlt
                    style={{ marginTop: "4px", fontSize: "16px" }}
                  />
                  </div>
                </div>
                <div className={style.OurCustomerBoxLeft}>
                    <img alt='photo' src={item.imgUrl}/>
                </div>

            </div>
                   </>

    )
}

const OurCustomer = () => {
  return (
    <>
    <div className={style.OurCustomerConatiner}>
        <div className={style.OurCustomerHeading}>
        Our Customers
        </div>
    </div>
    <div className={style.outerframework}>
            {OurCustomerData.map((item)=>{
                return (item.id===2?two(item):one(item))
            })}
        </div>
    </>
  )
}

export default OurCustomer;





                                        //    'https://about.codecov.io/wp-content/uploads/2022/07/2560px-Slack_Technologies_Logo.svg.png'
                    
                
                                        //     "https://robinhood.com/us/en/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2022/05/Logo-Robinhood.png'
                    
                
                                        //     "https://www.usa.philips.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/07/philips.svg'
                    
                
                                        //     "https://www.kardia.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/07/alivecor.svg'
                    
                
                                        //     "https://truepill.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/truepill.svg'
                    
                
                                        //     "https://spothero.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/spothero-1.svg'
                    
                
                                        //     "https://www.gatsbyjs.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/gatspy.svg'
                    
                
                                        //     "https://substack.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/substack-1.svg'
                    
                
                                        //     "https://equityzen.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/EquityZen-Logo-2.svg'
                    
                
                                        //     "https://mux.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/mux.svg'
                    
                
                                        //     "https://www.butterflynetwork.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/butterfly_network-1.svg'
                    
                
                                        //     "https://www.geckoboard.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/geckoboard-logo-vector-1.svg'
                    
                
                                        //     "https://www.axios.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/Axios_logo_2020-1.svg'
                    
                
                                        //     "https://www.hpe.com/us/en/home.html" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/Hewlett_Packard_Enterprise_logo.svg'>
                
                                        //     "https://www.shieldpay.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/shieldpay.svg'

                
                                        //     "https://www.afterpay.com/en-US" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/afterpay.svg'
                    
                
                                        //     "https://www.nutrien.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/Nutrien_Logo.svg'
                    
                
                                        //     "https://www.ppg.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/ppg.svg'
                    
                
                                        //     "https://www.hitachi.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/hitachi.svg'>
                
                                        //     "https://www.wework.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/07/wework-logo.svg'
                    
                
                                        //     "https://us.nttdata.com/en" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/NTT-Data-Logo.svg'
                    
                
                                        //     "https://www.thiememeulenhoff.nl/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/thiememeulenhoff.svg'
                    
                
                                        //     "https://ring.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/ring-1.svg'
                    
                
                                        //     "https://www.broadinstitute.org/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/06/broad.svg'
                    
                
                                        //     "https://www.nyu.edu/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/02/nyu-logo.png'
                    
                
                                        //     "https://qcd.phys.cmu.edu/QCDcluster/intel/c++/main_cls/mergedProjects/optaps_cls/common/optaps_pgo_covr.htm" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/02/carnegie-mellon-university-logo.png'
                    
                
                                        //     "https://carleton.ca/scs/cu-events/codecov-online-workshop/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/02/carleton-logo-2.svg'
                    
                
                                        //     "https://harvard-iacs.github.io/2020-CS107/homework/HW4/notebook/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/02/harvard-logo.png'
                    
                
                                        //     "https://plushcare.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/02/plushcare-logo.svg'
                    
                
                                        //     "https://www.healthsherpa.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/02/healthsherpa-logo.png'
                    
                
                                        //     "https://www.oysterhr.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/02/oyster-logo.svg'
                    
                
                                        //     "https://ujet.co/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2021/02/ujet-logo.svg'
                    
                
                                        //     "" 
                                        //    'https://about.codecov.io/wp-content/uploads/2020/12/shipt.svg'
                    
                
                                        //     "https://cbsinteractive.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2020/10/cbs-interactive.svg'
                    
                
                                        //     "https://www.discovery.com/" 
                                        //    'https://about.codecov.io/wp-content/uploads/2020/10/discovery.svg'
                    
                