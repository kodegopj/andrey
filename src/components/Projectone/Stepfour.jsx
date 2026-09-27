import React from 'react';
import "../../styles/Projectone/Stepfour.css";
import sfvideo from "../../assets/Prjectone/Stepfour/sfvideo.mp4";

function Stepfour() {
  return (
    <div>
        <div className='firstsetp-container'>
            {/* ------- Script Part -------- */}
            <div className='sone-c'>
                <div  className='one-name'>
                    <b>4. REFINING THE EDIT</b>
                </div>

                <div className='onename-steponesection'>
                    <b className='onename-stepone'>Enhance Storytelling  </b>
                    <div>
                        Adjust the sequence for better flow and engagement.
                    </div>
                </div>

                <div className='onename-steponesection'>
                    <b className='onename-stepone'>Add Transitions & Effects </b>
                    <div>
                        Use cuts, fades, zooms, and other effects to enhance the visuals. 
                    </div>
                </div>

                <div className='onename-steponesection'>
                    <b className='onename-stepone'> Incorporate B-Roll  </b>
                    <div>
                        Add supplementary footage to support the main content.
                    </div>
                </div>

                <div className='onename-steponesection'>
                    <b className='onename-stepone'>Apply Motion Graphics/Text </b>
                    <div>
                        Add subtitles, lower thirds, callouts, and branding elements.
                    </div>
                </div>

                <div>
                    <div className='ptag'>
                    I'm using Adobe Premiere to add and cut all the assets because Adobe Premiere helps me to efficiently organize clips, apply seamless transitions, and enhance the overall flow of the video, ensuring a polished and professional final output
                    </div>
                </div>


            </div>

            {/* ------- Picture Section -------- */}
            <div className='sectionone-videocontainer'>
                <div className='projectonepicture1'>

                </div>

                <div className='projectfour'>
                    <video src={sfvideo} controls autoPlay muted loop className='projectfour'></video>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Stepfour