import React from 'react';
import { FaCheck } from "react-icons/fa";
import "../../styles/Projectone/Stepeight.css";

function Stepeight() {
  return (
    <div>
        <div className='stepeight-container'>
            <div className='stepeight-title'>
                <b>8. DELIVERY & FEEDBACK</b>
            </div>

            <div className='stepeight-datasection'>
                <div className='boxsection'>
                  <div className='iconcheck'>
                      <FaCheck/>
                  </div>

                  <div className='stepeight-data'>
                      <b className='stepeight-name'>
                        Upload & Share
                      </b>

                      <div>
                        Deliver the final video to the client or post it on the desired platform.
                      </div>
                  </div>
                </div>

                <div className='boxsection'>
                  <div className='iconcheck'>
                    <FaCheck/>
                  </div>

                  <div className='stepeight-data'>
                      <b className='stepeight-name'> 
                        Get Feedback & Revise if Needed 
                      </b>

                      <div>
                        Make necessary adjustments based on client or audience feedback.
                      </div>
                  </div>
                </div>

                <div className='boxsection'>
                  <div className='iconcheck'>
                    <FaCheck/>
                  </div>

                  <div className='stepeight-data'>
                      <b className='stepeight-name'>
                        Archive Project Files  
                      </b>

                      <div>
                        Save raw files and project files for future revisions or repurposing.
                      </div>
                  </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Stepeight