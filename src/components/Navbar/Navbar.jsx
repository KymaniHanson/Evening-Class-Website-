import React from "react";

import { Link } from 'react-router-dom';

import "./Navbar.css";

function Navbar() {

  const navLinkStyle = {
    textDecoration: 'none'
  }

  const logoPath = "https://www.flaticon.com/svg/static/icons/svg/3706/3706707.svg";

    return (
      <nav className="navbar">
        <div className="logoSec">
          <img src={logoPath} alt="Logo" id="logoImage"/>
        </div>
        <div className="menuSec">
          <ul className="navMenu">
            <Link to='/' style={navLinkStyle}>
              <li> Home </li>
            </Link>

            <Link to='/courses' style={navLinkStyle}>
              <li> Courses </li>
            </Link>

            <Link to='/about' style={navLinkStyle}>
              <li> About </li>
            </Link>
            
            <Link to='/contact' style={navLinkStyle}>
              <li> Contact </li>
            </Link>
          </ul>
        </div>
          <div className="hamburger"> </div>
      </nav>
    );
  }
  
  export default Navbar;
  