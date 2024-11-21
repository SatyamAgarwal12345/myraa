import React from "react";
import "../styles/navbar.css";
import logo from "../assets/navbar/Myraa_logo.png";
import downkey from "../assets/navbar/downkey.png";

const Navbar = () => {
  return (
    <header class="navbar">
      <div class="navbar-container">
        <div class="logo-nav">
          <img src={logo} alt="Myraa Logo" />
        </div>
        <div class="hamburger" onclick="toggleNavbar()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav class="nav-links">
          <ul>
            <li>
              <a href="#">Inside Myraa</a>
              <img src={downkey} />
            </li>
            <li>
              <a href="#">Myraa Solutions</a>
            </li>
            <li>
              <a href="#">Our Presence</a>
            </li>
            <li>
              <a href="#">
                Track Record
                <img src={downkey} />
              </a>
            </li>
            <li>
              <a href="#">CSR</a>
            </li>
            <li>
              <a href="#">Careers at Myraa</a>
            </li>
            <li>
              <a href="#">Connect with Myraa</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
