import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";



function Social() {
  return (
    <div className="home__social">
        <a href="https://www.upwork.com/freelancers/~0112f9723087489bba" className="home__social-icon" target='_blank'><FaSquareUpwork /></a>
        <a href="https://www.linkedin.com/in/andrey-flordeliza-55931930a/" className="home__social-icon" target='_blank'>< FaLinkedin/></a>
        <a href="https://www.facebook.com/andrei.flordeliza.7" className="home__social-icon" target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default Social