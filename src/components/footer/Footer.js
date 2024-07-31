import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from '../../assets/nav-logo.png'
import "./FooterStyles.css";
// import JointCommission from "../../assets/joint_commission_logo.webp";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">

          <div className="top">
            <div className="logo-footer">
              <div className="footer-logo">
                <img src={logo} alt="Witty Personnel Logo" loading="lazy"/>
              </div>
            </div>
            <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <BsFillArrowUpCircleFill className="icon" />
                </LinkRoll>
              </div>

            </div>

          <div className="footerFlex">


            <div className="footerFlexItem">
                <h1>COMPANY</h1>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                    <p>About Us</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="contact-us">
                    <p>Contact Us</p>
                  </Link>
                </LinkRoll>
            </div>

            <div className="footerFlexItem">
                <h1>Specialties</h1>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/nursing">
                    <p>Nursing</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/behavioral-health">
                    <p>Behavioral health</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/allied-health">
                    <p>Allied Health</p>
                  </Link>
                </LinkRoll>
            </div>

            <div className="footerFlexItem">
                <h1>Services</h1>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/staffing-solutions">
                    <p>Staffing Solutions</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/job-search">
                    <p>Job Search</p>
                  </Link>
                </LinkRoll>
            </div>


          </div>




          
          <p className="copyright">
            <p>
              &copy; 2022 Witty Personnel LLC. All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
