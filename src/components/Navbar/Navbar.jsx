import React, {useState, useRef} from "react";

import { Link } from 'react-router-dom';

import "./Navbar.css";

function Navbar() {

  const navLinkStyle = {
    textDecoration: 'none'
  }

  const [navOpen, setNavState] = useState(false);

  const ref = useRef();

  const foo = () => {
    if (!navOpen) {
      ref.current.classList.toggle("navMenu-active");
      setNavState(navOpen);
    } else {
      setNavState(!navOpen);
    }
    console.log(ref.current);
  };

  const logoPath = "https://www.flaticon.com/svg/static/icons/svg/3706/3706707.svg";

    return (
      <nav className="navbar">
        <div className="logoSec">
          <img src={logoPath} alt="Logo" id="logoImage"/>
        </div>
        <div className="menuSec">
          <ul ref={ref} className="navMenu">
            <Link to='/' style={navLinkStyle}>
              <li className="navItem"> Home </li>
            </Link>

            <Link to='/courses' style={navLinkStyle}>
              <li className="navItem"> Courses </li>
            </Link>

            <Link to='/about' style={navLinkStyle}>
              <li className="navItem"> About </li>
            </Link>
            
            <Link to='/contact' style={navLinkStyle}>
              <li className="navItem"> Contact </li>
            </Link>
          </ul>
        </div>
          <div className="hamburger" onClick={foo}> </div>
      </nav>
    );
  }
  
  export default Navbar;
  