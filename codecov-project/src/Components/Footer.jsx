import React from "react";
import style from "./style.module.css";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { FaHandPeace } from "react-icons/fa";
import { TbMessageCircle2 } from "react-icons/tb";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className={style.FooterContainer}>
        <div className={style.fottericons}>
          <Link to="/">
            {" "}
            <img
              src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/codecov/codecov-circle.svg"
              alt="logo"
            />
          </Link>
          <div>
            <a href="https://www.linkedin.com/company/codecov/">
              <AiFillLinkedin />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/codecov">
              <AiOutlineTwitter />
            </a>
          </div>
          <div>
            <a href="https://github.com/codecov">
              <AiFillGithub />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCj-fJuvXv-m05HkSNn0OS9g/featured">
              <AiFillYoutube />
            </a>
          </div>
          <div>
            <a href="https://angel.co/company/codecov">
              <TbMessageCircle2 />
            </a>
          </div>
          <div>
            <a href="https://community.codecov.com/">
              <FaHandPeace />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/codecov/">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <div className={style.fottermain}>
          <div>
            <h3 style={{ fontWeight: "400", fontSize: "16px" }}>PRODUCT</h3>
            <ul>
              <li>Features</li>
              <li>Integration</li>
              <li>Documentation</li>
              <li>API</li>
              <li>Status</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontWeight: "400", fontSize: "16px" }}>SOLUTION</h3>
            <ul>
              <li>Open Source</li>
              <li>Enterprise</li>
              <li>Startups</li>
              <li>Education</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: "800", fontSize: "16px" }}>
              <Link to="/ourCustomer">CUSTOMER</Link>
            </h3>
            <ul>
              <li>Customers</li>
              <li>Case Studies</li>
              <li>Connunity</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: "800", fontSize: "16px" }}>
              <Link to="/resources">RESOURCES</Link>
            </h3>
            <ul>
              <li>Webiners</li>
              <li>Blog</li>
              <li>Documentation</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontWeight: "400", fontSize: "16px" }}>COMPANY</h3>
            <ul>
              <li>Team</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Write for us</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: "800", fontSize: "16px" }}>
              <Link to="/contact">CONTACT US</Link>
            </h3>
            <ul>
              <li>Contact</li>
              <li>Demo</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className={style.fotterend}>
          <div className={style.fotterend1}>
            <p>Select Language |</p>
          </div>
          <div className={style.fotterend2}>
            <div className={style.fotterend2Mid}>
              <p>Terms & Conditions</p>
              <p>Privacy</p>
              <p>Security</p>
              <p>EULA</p>
              <p>GDPR</p>
            </div>
          </div>
          <div className={style.fotterend3}>
            <p>© Codecov 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
