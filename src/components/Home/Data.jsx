import React from "react";
import "../../styles/Home.css"
import hand from "../../assets/hand.png";
import { RiMailSendFill } from "react-icons/ri";

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title handy">
        Andrey Flordeliza  {" "}
      </h1>
      <h3 className="home__subtitle">Video Editor/Graphic Designer</h3>
      <p className="home__description">
      I'm a Video Editor, <b className="unlock"></b>Transforming Ideas into <b className="unlock">HIGH-IMPACT VIDEOS </b>that drive <b className="unlock">ENGAGEMENT </b>and build Stronger Connections with Your Audience.
      </p>
      <div className="home__description">"<b className="unlock">HELPING CREATORS AND BUSINESSES</b> Dominate the DIGITAL Space with engaging High-Quality Videos!"
        </div>
      <a href="#contacts" className=" hello button--flex">
        Hello <RiMailSendFill className="icon__hello" />
      </a>
    </div>
  );
}

export default Data;
