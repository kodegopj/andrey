import { useRef } from "react";
import React from 'react';
import { FaTimes } from "react-icons/fa";
import { RiApps2Line } from "react-icons/ri";
import "../../styles/Nav.css";
import { Link } from "react-router-dom";

function PodcastNav() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

  return (
    <div className="nav-head">
    <p className="paul">
      {" "}
      <b>Hanz StillFaith Malata</b>{" "}
    </p>
    <nav ref={navRef}>
      <Link to="/">Home</Link>
      <Link to="/showreels">Show Reels</Link>
      {/* <a href="#showreels">Show Reels</a> */}
      <Link to="/moresamples">More Samples</Link>
      {/* <a href="#Samples">More Samples</a> */}
      {/* <a href="#skills">Skills</a> */}
      <Link to="/contact" className="contact"> Contact Me </Link>
      {/* <a href="#contacts" className="contact">
        Contact Me
      </a> */}
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

export default PodcastNav;