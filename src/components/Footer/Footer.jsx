import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";
import { RiMailSendFill } from "react-icons/ri";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kathleen Jade Cunanan</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#showreels" className="footer__link">
              Show Reels
            </a>
          </li>

          <li>
            <a href="#reels" className="footer__link">
              Reels
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.upwork.com/freelancers/~01793a31a8445ef42d"
            className="footer__social-link"
            target="_blank"
          >
            <FaSquareUpwork/>
          </a>
          <a href="https://www.linkedin.com/in/hanz-stillfaith-malata-08032330a/" className="footer__social-link" target="_blank">
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/hanzstillfaith.malata.5"
            className="footer__social-link"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/hanz_stllfth/"
            className="footer__social-link"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
