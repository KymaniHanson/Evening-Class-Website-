import React from "react";

import "./Navbar.css";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="logoSec">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3706/3706707.svg"
            alt=""
          />
        </div>
        <div className="menuSec">
          <ul className="navMenu">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Courses">Courses</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
          <div className="hamburger"> </div>
      </nav>
    );
  }
  
  export default Navbar;
  