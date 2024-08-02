import React from "react";
import "./Section3.css";

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Card1 from "../../assets/nursing.webp";
import Card2 from "../../assets/behavioral_health.webp";
import Card3 from "../../assets/program_op.webp";

const Section3 = () => {
  return (
    <>
      <div className="section3">
        <div className="section3-content container">

          <div className="section3Header container">
            <h1>HEALTHCARE EXPERTISE</h1>
            <h2>Our strength is connecting talented healthcare professionals with employers nationwide.</h2>
          </div>


          <div className="section3-flex">
{/* NUrsing */}
              <div class="section3-flexItem">
                  <img src={Card1} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>NURSING</h1>
                  <p>We provide top-tier nursing professionals to healthcare facilities, ensuring compassionate and skilled care for patients. Our dedicated nurses are meticulously screened and matched to meet the specific needs and standards of each healthcare environment.</p>

                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/nursing">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>

{/* Behavioral Health */}

              <div class="section3-flexItem">
                  <img src={Card2} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>BEHAVIORAL HEALTH</h1>
                  <p>Witty Personnel excels in behavioral health, providing dedicated professionals to support mental wellness and therapeutic care, ensuring comprehensive, patient-centered solutions for diverse clinical and community settings.</p>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/behavioral-health">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>


{/* OP */}

<div class="section3-flexItem">
                  <img src={Card3} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>ALLIED HEALTH</h1>
                  <p>Witty Personnel offers tailored solutions for Allied Health staffing, connecting healthcare facilities with skilled professionals in fields like radiology, physical therapy, and medical laboratory sciences to enhance patient care and efficiency.</p>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/outpatient-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>


          </div>
        </div>
      </div>

    </>
  );
};

export default Section3;
