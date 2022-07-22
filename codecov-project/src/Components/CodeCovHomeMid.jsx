import React from "react";
import style from "./style.module.css";
import { Button } from "@chakra-ui/react";
import { BiRightArrowAlt } from "react-icons/bi";

const initLogos = [
  {
    url: "https://about.codecov.io/wp-content/uploads/2021/06/shieldpay.svg",
  },
  {
    url: "https://about.codecov.io/wp-content/uploads/2020/08/grab.svg",
  },

  {
    url: "https://about.codecov.io/wp-content/uploads/2020/12/the-washington-post-icon.svg",
  },
  {
    url: " https://about.codecov.io/wp-content/uploads/2020/08/tile.svg",
  },
  {
    url: " https://about.codecov.io/wp-content/uploads/2020/10/routable.svg",
  },
  {
    url: "https://about.codecov.io/wp-content/uploads/2020/10/goodrx.svg",
  },
  {
    url: " https://about.codecov.io/wp-content/uploads/2020/12/shipt-icon.svg",
  },
  {
    url: " https://about.codecov.io/wp-content/uploads/2021/02/ujet-logo.svg",
  },
  {
    url: " https://about.codecov.io/wp-content/uploads/2021/06/ring-1.svg",
  },
  {
    url: " https://about.codecov.io/wp-content/uploads/2021/07/wework-logo.svg",
  },
  {
    url: " https://about.codecov.io/wp-content/uploads/2021/06/hitachi.svg",
  },
  {
    url: " https://about.codecov.io/wp-content/uploads/2021/06/afterpay.svg",
  },
];

const ResourceData = [
  {
    url: "https://about.codecov.io/wp-content/uploads/2021/11/cover.jpg",
    title: "PAGE",
    btn: "Learn More",
    heading: "What should my code coverage goal be?",
  },
  {
    url: "https://about.codecov.io/wp-content/uploads/2021/02/2020-state-of-open-source-code-coverage.jpg",
    title: "INFOGRAPHIC",
    btn: "View Infographic",
    heading: "2020 State of Open Source Code Coverage",
  },
  {
    url: "https://about.codecov.io/wp-content/uploads/2021/02/8-factors-Influencing-768x402.png",
    title: "BLOG POST",
    btn: "Read Blog Post",
    heading: "8 Factors Influencing Your Approach to Code Coverage",
  },
];

const CodeCovHomeMid = () => {
  return (
    <>
      <div className={style.CCHMidContainer}>
        <div className={style.CCHMidHeading}>
          <h2>Code Coverage For Any Tech Stack</h2>
          <p>
            Codecov provides highly integrated tools for developers and
            engineering leaders to gain actionable visibility into their code
            coverage.
          </p>
        </div>
        <div className={style.CCHMidBox}>
          <div>
            <img
              alt="pic"
              src="https://about.codecov.io/wp-content/themes/codecov/assets/brand/features/multi.svg"
            />
          </div>
          <div>
            <img alt="pic" src="languages.PNG" />
          </div>
        </div>
      </div>

      <div className={style.WhoelseContainer}>
        <div className={style.WhoelseHeading}>
          <h2> Who else is covered?</h2>
          <p>
            Over 29K organizations and 1M+ developers trust Codecov to gain
            visibility into their code coverage.
          </p>
          <Button className={style.Whoelsebtn}>View Customer</Button>
        </div>
        <div className={style.circle}>
          <div className={style.Innercircle}>
            {initLogos.map((item) => {
              return (
                <div>
                  <img alt="logo" src={item.url} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={style.resourceContainer}>
        <div className={style.resourceTop}>
          <h2>Resources</h2>
          <p>
            Want to learn more about code coverage? View our library of
            resources to start building a culture of coverage at your company.
          </p>
          <p>
            View Resources
            <BiRightArrowAlt style={{ marginTop: "4px", fontSize: "20px" }} />
          </p>
        </div>
        <div className={style.ResourceChotu}>
          {ResourceData.map((item) => {
            return (
              <div>
                <div className={style.Resource1}>
                  <img alt="pic" src={item.url} />
                </div>
                <div className={style.Resource2}>
                  <button>{item.title}</button>
                  <h2>{item.heading}</h2>
                </div>
                <hr></hr>
                <div className={style.Resource3}>
                  <p>{item.btn}</p>
                  <BiRightArrowAlt
                    style={{ marginTop: "4px", fontSize: "20px" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={style.Ready1}>
        <div className={style.Ready2}>
          <div className={style.Ready3}>
            <h2>Ready to get covered?</h2>
            <div className={style.Ready3Inner}>
              <p style={{ fontWeight: "500" }}>
                Join over a million developers in shipping healthier code today.
                Sign up with your code host below.
              </p>
            </div>
            <div className={style.ReadyBottom}>
              <div>
                <img
                  alt="pic"
                  src="https://tse4.mm.bing.net/th?id=OIP.NGIDdVP6vw9ue_D-mrEVFQHaHa&pid=Api&P=0"
                />

                <a href="https://app.codecov.io/login/gh?utm_department=marketing&utm_medium=referral&utm_source=https%3A%2F%2Fin.search.yahoo.com%2F">
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
    </>
  );
};

export default CodeCovHomeMid;
