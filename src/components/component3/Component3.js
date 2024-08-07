import React from 'react'
import "./Component3.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import Zoom from 'react-reveal/Zoom';

import woman_relaxing from "../../assets/professionals.webp";

const Component3 = () => {
  return (
    <>
      
      {/* MENTAL HEALTH SERVICES */}
      <div className="component3">

          <div className="component3-content container">

          <div className="c3-left">
          <Zoom duration={2000}>

          <h1>ABOUT US</h1>            
          <h2>Commitment. Quality. Expertise.</h2>

            <p>
            At Witty Personnel, we are passionate about connecting healthcare facilities with exceptional professionals. Our mission is to enhance the quality of patient care and operational efficiency through comprehensive staffing solutions tailored to the unique needs of each client.</p>
            <p>With years of industry experience, our team of dedicated recruiters and healthcare experts specializes in sourcing, vetting, and placing highly qualified medical and allied health professionals. We cover a wide range of specialties, including nursing, mental health, TMS Technicians, telehealth, counselors, physical therapy, behavioral health, and correctional health.</p>
            <p>Our rigorous selection process ensures that every candidate not only meets the required credentials but also embodies our core values of compassion, integrity, and dedication to excellence. By partnering with Witty Personnel, healthcare facilities gain access to a reliable and skilled workforce, enabling them to maintain high standards of care and achieve operational excellence</p> <br/>

            <div className='c3-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                        <button>Learn More</button>
                  </Link>
              </LinkRoll>
          </div>
          </Zoom>

          </div>


          <div className="c3-right">
            <div className='c3-right-img'>
              <img src={woman_relaxing} alt="woman_relaxing" loading="lazy" />
            </div>
          </div>


          </div>
        </div>


    </>
  )
}

export default Component3
