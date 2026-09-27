import React from 'react';
import "../../styles/Projectone/Stepsix.css";
import Edited from "../../assets/Prjectone/Stepsix/Edited.mp4";
import Raw from "../../assets/Prjectone/Stepsix/Raw.mp4";

function Stepsix() {
  return (
    <div>
        <div className='smc'>
            <div className='st'>
                <b>6. COLOR  CORRECTION & GRADING</b>
            </div>

           <div className='sss'>
                <div className='sssc'>
                    <div className='stepsix-package1'>
                        <div className='stepsix-semititle'>
                            <b>Before</b>
                        </div>

                        
                            <video src={Raw} controls autoPlay muted loop className='pjv'></video>
                       
                        <div className='stepsix-semititle'>
                            <b>Correct White Balance & Exposure</b>
                        </div>
                        <div className='stepsix-p'>
                            Adjust brightness, contrast, and colors to match scenes
                        </div>
                    </div>


                    <div className='stepsix-package'>

                        <div className='stepsix-semititle'>
                            <b> After</b>
                        </div>

                        
                            <video src={Edited} controls autoPlay muted loop className='pjv'></video>
                       
                        <div className='stepsix-semititle'>
                            <b> Apply Color Grading</b>
                        </div>
                        <div className='stepsix-p'>
                            Use LUTs or custom grading to achieve a cinematic look.
                        </div>
                    </div>


                </div>

           </div>
        </div>
    </div>
  )
}

export default Stepsix