import React from 'react'
import "./SectionFour.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import Zoom from 'react-reveal/Zoom';

import woman_relaxing from "../../assets/male_nurse_III.webp";

const SectionFour = () => {
  return (
    <>
      
      {/* MENTAL HEALTH SERVICES */}
      <div className="sectionFour">


          <div className="sectionFourContent container">




          <div className="sectionFourRight">
          <Zoom duration={2000}>
          <h1>WHY WITTY PERSONNEL</h1>            
          <h2>We're here for you every step of the way.</h2>

            <p>
            At Witty Personnel Agency, we pride ourselves on delivering unparalleled expertise and personalized service tailored to meet the unique needs of each healthcare facility we partner with. Our team of seasoned professionals brings a wealth of experience and a deep understanding of the healthcare industry, ensuring that we provide only the most qualified and competent staff. We leverage cutting-edge technology and innovative solutions to streamline the staffing process, making it efficient, reliable, and hassle-free.</p>

            <p>Our commitment to excellence goes beyond just filling positions; we aim to build lasting relationships based on trust, integrity, and mutual success. We understand the critical role that quality staffing plays in patient care and overall facility operations, which is why we prioritize finding the right fit for both our clients and our candidates. Choose Witty Personnel Agency for a partner who is dedicated to your success and the well-being of your patients.</p> 

            <br/>

            <div className='sectionFourRightBtn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                        <button>Learn More</button>
                  </Link>
              </LinkRoll>
          </div>
          </Zoom>

          </div>


          <div className="sectionFourLeft">

              <div className='sectionFourLeftImg'>
                <img src={woman_relaxing} alt="woman_relaxing" loading="lazy" />
              </div>

          </div>


          </div>
        </div>


    </>
  )
}

export default SectionFour
