import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { FaAngleDown } from "react-icons/fa";

import logo from '../../assets/nav-logo_II.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    
    <div className='navbar' name='top'>
            <div className="navbar-container">

        <div className="navbar-logo">
                    <Link to='/'>
                    <img src={logo} alt="Witty Personnel Logo" loading="lazy"/>
                    </Link>
        </div>

      <div className="mobile-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/job-search" className="nav-links" onClick={closeMenu}>
            Search Jobs
          </Link>
        </li>
        <li className="nav-item dropdown">
          <span className="nav-links" onClick={toggleMenu}>
            Specialties <span className='subArrow'><FaAngleDown />
            </span>
          </span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/nursing" className="nav-links" onClick={closeMenu}>
                Nursing
              </Link>
            </li>
            <li>
              <Link to="/behavioral-health" className="nav-links" onClick={closeMenu}>
                Behavioral Health
              </Link>
            </li>

            <li>
              <Link to="/allied-health" className="nav-links" onClick={closeMenu}>
                Allied Health
              </Link>
            </li>

          </ul>
        </li>


        <li className="nav-item">
          <Link to="/staffing-solutions" className="nav-links" onClick={closeMenu}>
          Staffing Solutions
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about-us" className="nav-links" onClick={closeMenu}>
            About Us
          </Link>
        </li>


        <li className="nav-item">
          <Link to="/contact-us" className="nav-links" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
