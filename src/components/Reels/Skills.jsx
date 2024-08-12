import React from 'react';

import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCanva } from "react-icons/si";

function Skills() {
  return (
    <div className='back__skill' id='skills'>
        <div className='software'><b> Skills & Tools</b></div>
        
       <div className='backskill' >

            <div className='skills'>
                <div className='logo-text'>
                <p ><SiAdobepremierepro  className='logo'/></p>
                <b> Adobe Premiere Pro</b>
                </div>
                
                <p className='skill__p'>Premiere Pro is designed for a video editor's post-production workflow. It's equipped with a suite of powerful editing tools for content creators and filmmakers.</p>
            </div>

            <div className='skills'>
            <div className='logo-text'>
                <p className='capcut'></p>
                <b>Capcut</b>
                </div>

                <p className='skill__p'>CapCut is an all-in-one creative platform powered by AI that enables video editing and image design on browsers, Windows, Mac, Android, and iOS.</p>
            </div>

            <div className='skills'>
                <div className='logo-text'>
                <p ><SiAdobephotoshop className='logo'/></p>
                <b>Adobe Photoshop Pro</b>
                </div>

                <p className='skill__p'>Photoshop is an image creation, graphic design and photo editing software developed by Adobe.</p>
            </div>

            <div className='skills'>
                <div className='logo-text'>
                <p ><SiCanva  className='logo'/></p>
                <b>Canva</b>
                </div>

                <p className='skill__p'>Canva is the easiest design tool you can use in this modern time. Learn five super easy tools that will set you up to start designing in Canva. </p>
            </div>
       </div>
  </div>
  )
}

export default Skills