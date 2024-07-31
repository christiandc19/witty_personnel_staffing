import React, { useState, useEffect } from 'react';
import './SectionOne.css';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";
import { FiPhone, FiSearch } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import TextAnimation from '../home/TypingAnimation';

const HeroPage = () => {

  const words = [
    "Registered Nurses",
    "Physicians",
    "TMS Technicians",
    "Behavioral Health Technicians",
    "Program Directors",
    "Counselors",
    "Therapists",
    "Group Facilitators",
    "Group Monitors",
    "Clinical Directors"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('../../assets/witty_personnel_slider_1.webp'),
    require('../../assets/witty_personnel_slider_3.webp'),
    require('../../assets/witty_personnel_slider_2.webp'),
    require('../../assets/witty_personnel_slider_4.webp')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='section-bg'>
      <div className="hero-container container">
        <div className="hero-text">
          <h1>Witty Personnel</h1>
          <h2>Your Trusted Partner in Healthcare Staffing</h2>
          <h3><TextAnimation words={words} fadeDuration={2000} displayDuration={2000} /></h3>
          <hr/>
          <p>
          Quality is at the heart of everything we do. We rigorously vet our candidates to ensure they meet the highest standards of competence and professionalism.
          </p>
          <div className='heroIcons'>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to='/job-search'>
                <div className='heroIcon heroIconPhone moving-icon'>
                  <FiSearch />
                </div>
              </Link>
            </LinkRoll>
            <a href="tel:3237920502">
              <div className='heroIcon heroIconPhone moving-icon'>
                <FiPhone />
              </div>
            </a>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to='/contact-us'>
                <div className='heroIcon heroIconPhone icon-container'>
                  <TfiEmail />
                </div>
              </Link>
            </LinkRoll>
          </div>
        </div>
        <div className="image-slider">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={index === currentImageIndex ? 'active' : 'inactive'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
