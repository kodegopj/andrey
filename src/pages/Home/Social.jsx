import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



function Social() {
  return (
    <div className="home__social">
        <a href="https://www.upwork.com/freelancers/~01793a31a8445ef42d" className="home__social-icon" target='_blank'><FaSquareUpwork /></a>
        <a href="https://www.linkedin.com/in/hanz-stillfaith-malata-08032330a/" className="home__social-icon" target='_blank'>< FaLinkedin/></a>
        <a href="https://www.facebook.com/hanzstillfaith.malata.5" className="home__social-icon" target='_blank'><FaFacebook/></a>
        <a href="https://www.instagram.com/hanz_stllfth/" className="home__social-icon" target='_blank'>< FaInstagram/></a>
    </div>
  )
}

export default Social