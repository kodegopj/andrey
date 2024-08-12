import { useRef } from "react";
import React from 'react';
import { FaTimes } from "react-icons/fa";
import { RiApps2Line } from "react-icons/ri";
import "../styles/Nav.css"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

  return (
    <div className="nav-head">
    <p className="paul">
      {" "}
      <b>Andrey Flordeliza</b>{" "}
    </p>
    <nav ref={navRef}>
      <a href="#home">Home</a>
      <a href="#showreels">Show Reels</a>
      <a href="#reels">Reels</a>
      <a href="#skills">Skills</a>
      <a href="#contacts" className="contact">
        Contact Me
      </a>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>

    <button className="nav-btn" onClick={showNavbar}>
      <RiApps2Line />
    </button>
    </div>
  )
}

export default Navbar