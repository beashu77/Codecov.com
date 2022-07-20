import React from 'react';
import style from "./style.module.css";
import { AiFillLinkedin,AiOutlineInstagram,AiOutlineTwitter,AiFillGithub ,AiFillYoutube} from "react-icons/ai";
import { FaHandPeace } from "react-icons/fa";
import { TbMessageCircle2 } from "react-icons/tb";
const Footer = () => {
  return (
    <div>
        <div className={style.FooterContainer}>
             
             <div className={style.fottericons}>
                <img src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/codecov/codecov-circle.svg" alt='logo'/>
                <div><AiFillLinkedin /></div>
                <div><AiOutlineTwitter /></div>
                <div><AiFillGithub /></div>
                <div><AiFillYoutube /></div>
                <div><TbMessageCircle2 /></div>
                <div><FaHandPeace /></div>
                <div><AiOutlineInstagram /></div>
             </div>
             <div className={style.fottermain}>
                <div><h3>PRODUCT</h3>
                   <ul>
                    <li>Features</li>
                    <li>Integration</li>
                    <li>Documentation</li>
                    <li>API</li>
                    <li>Status</li>
                   </ul>
                </div>
                <div><h3>SOLUTIONS</h3>
                   <ul>
                    <li>Open Source</li>
                    <li>Enterprise</li>
                    <li>Startups</li>
                    <li>Education</li>
                   </ul>
                </div>
                <div><h3>CUSTOMERS</h3>
                   <ul>
                    <li>Customers</li>
                    <li>Case Studies</li>
                    <li>Connunity</li>
                   </ul>
                </div>
                <div><h3>RESOURCES</h3>
                   <ul>
                    <li>Webiners</li>
                    <li>Blog</li>
                    <li>Documentation</li>
                   </ul>
                </div>
                <div><h3>COMPANY</h3>
                   <ul>
                    <li>Team</li>
                    <li>Press</li>
                    <li>Careers</li>
                    <li>Write for us</li>
                   </ul>
                </div>
                <div><h3>CONTACT US</h3>
                   <ul>
                    <li>Contact</li>
                    <li>Demo</li>
                    <li>Support</li>
                   </ul>
                </div>
             </div>
             <div className={style.fotterend}>
                <div className={style.fotterend1}><p>Select Language |</p></div>
                <div className={style.fotterend2}>
                  <div className={style.fotterend2Mid}>
                  <p>Terms & Conditions</p>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>EULA</p>
                    <p>GDPR</p>
                  </div>
                </div>
                <div className={style.fotterend3}><p>© Codecov 2022</p></div>
             </div>
        </div>
    </div>
  )
}

export default Footer