import React from "react";
import style from "./style.module.css";
import { Button } from "@chakra-ui/react";
import { TbCircleCheck } from "react-icons/tb";

const GetStartBox = () => {
  return (
    <>
      <div>
        <div className={style.GetStartBox}>
          <div className={style.GetStartInnerBox}>
            <div className={style.GetStartBoxLeft}>
              <h1>
                Shipping reliable code doesn’t have to slow you down
                <span class="color-pink">.</span>
              </h1>
              <div className={style.GetStartBoxLeftmid}>
                <p>
                  Join 1M+ developers worldwide in developing stable software
                  faster with Codecov.
                </p>
              </div>
              <div className={style.GetStartBoxLeftbottom}>
                <Button
                  backgroundColor={"#f07"}
                  className={style.GetStartBoxLeftbottomButton}
                  marginTop={"-45px"}
                >
                  Get Started
                </Button>
                <Button
                  fontSize={"12.8px"}
                  backgroundColor={"#fff"}
                  className={style.GetStartBoxLeftbottomButton2}
                  marginTop={"-45px"}
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className={style.GetStartBoxRight}>
              <img
                alt="imag"
                src="https://about.codecov.io/wp-content/themes/codecov/assets/templates/home/pull-request-comments.svg"
              />
            </div>
          </div>
          <div className={style.GetStartBottom}>
            <h6 className={style.orgPtag}>
              29,000+ organizations are already using Codecov
            </h6>
            <div className={style.OrgLogo}>
              <span>
                <img
                  className={style.one}
                  alt="logo"
                  src="https://about.codecov.io/wp-content/uploads/2020/08/python-logo.svg"
                />
              </span>
              <span>
                <img
                  className={style.one}
                  alt="logo"
                  src="https://about.codecov.io/wp-content/uploads/2020/10/lyft.svg"
                />
              </span>
              <span>
                <img
                  className={style.one}
                  alt="logo"
                  src="https://about.codecov.io/wp-content/uploads/2021/06/hitachi.svg"
                />
              </span>
              <span>
                <img
                  className={style.one}
                  alt="logo"
                  src="https://about.codecov.io/wp-content/uploads/2021/06/gatspy.svg"
                />
              </span>
              <span>
                <img
                  className={style.one}
                  alt="logo"
                  src="https://about.codecov.io/wp-content/uploads/2020/08/grab.svg"
                />
              </span>
              <span>
                <img
                  className={style.one}
                  alt="logo"
                  src="https://about.codecov.io/wp-content/uploads/2020/08/the-washington-post.svg"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* // Development cycles are spinning faster than ever...///////////////////////////////////////////// */}

      <div className={style.CycleContainer}>
        <div className={style.CycletopCover}>
          <div className={style.Cycletop}>
            <h2>Development cycles are spinning faster than ever...</h2>
          </div>
        </div>
        <div className={style.CycleBottom}>
          <div className={style.CycleLeft}>
            <img src="https://about.codecov.io/wp-content/themes/codecov/assets/templates/home/devops.svg" />
          </div>
          <div className={style.CycleRight}>
            <div className={style.CycleOne}>
              <p>
                With everything from doorbells to rockets running on code, it's
                more important than ever to ensure quality code is being
                delivered with every release.
              </p>
            </div>
            <div className={style.CycleTwo}>
              <p>
                Code coverage is one of the most important metrics companies
                rely on to ship healthier code, faster, and with less risk.
              </p>
            </div>
            <div className={style.CycleThree}>
              <p>
                Codecov gives companies actionable coverage insights when and
                where they need them to ensure they are shipping quality code.
              </p>
            </div>
          </div>
        </div>
      </div>

   {/* How Codecov helps...********************************* */}
      <div className={style.HowContainer}>
        <div className={style.HowHeading}>
            <h2>How Codecov helps...</h2>
           <div > 
           <div className={style.Howleft}>
            <div className={style.Howleft1}>
                <div>
                    <img alt="logo" src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/flexible.svg"/>
                    <h2> Flexible / Unified Reporting</h2>
                </div>
            </div>
            <div className={style.Howleft2}>
                <div>
                    <img alt="logo" src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/seamless.svg"/>
                    <h2>Seamless Coverage Insights</h2>
                </div>
            </div>
            <div className={style.Howleft3}>
                <div>
                    <img alt="logo" src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/robust.svg"/>
                    <h2>Robust Coverage Controls</h2>
                </div>
            </div>
           </div>
            <div className={style.HowRight}>
                <p style={{marginBottom:"15px"}}>As long as your code has tests and your coverage tool can output coverage results in a compatible format, you can use Codecov.</p>
                 <ul>
                    <li><TbCircleCheck /><p>Source Code Coverage</p></li>
                    <li><TbCircleCheck /><p>20+ Languages and CI/CD Agnostic</p></li>
                    <li><TbCircleCheck /><p>Report Merging</p></li>
                    <li><TbCircleCheck /><p>Coverage Isolation</p></li>
                 </ul>
            </div>
           </div>
        </div>
        
      </div>
    </>
  );
};

export default GetStartBox;
