import React from 'react';
import "../../styles/Projectone/Stepthree.css";
import { FaCut } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaFileAudio } from "react-icons/fa6";

function Stepthree() {
  return (
    <div>
        <div className='stepthree-container'>
            <div className='stepthree-title'>
                <b>3. ROUGH CUT (Basic Assembly)</b>
            </div>

            <div className='import-section'>
                <div className='stepthree-icon'>
                    <FaCut/>
                </div>

                <div className='stepthree-mainsection'>
                    <b className='stepthree-titletwo'>Trim Clips</b>
                    <div className='stepthree-p'>
                        Cut unnecessary parts and arrange the clips in a logical order.
                    </div>
                </div>
            </div>

            <div className='import-section'>
                <div className='stepthree-icon'>
                    <HiAdjustmentsHorizontal/>
                </div>

                <div className='stepthree-mainsection'>
                    <b className='stepthree-titletwo'>
                        Adjust Timing
                    </b>

                    <div className='stepthree-p'>
                        Ensure smooth transitions and proper pacing.
                    </div>
                </div>
            </div>

            <div className='import-section'>
                <div className='stepthree-icon'>
                    <FaFileAudio/>
                </div>

                <div className='stepthree-mainsection'>
                    <b className='stepthree-titletwo'>
                        Sync Audio & Video
                    </b>

                    <div className='stepthree-p'>
                        If needed, align dialogue and sound effects with the visuals.
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Stepthree;