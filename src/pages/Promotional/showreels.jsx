import React from 'react';
import showss from "../../assets/showss.mp4";
import PromotionalNav from './PodcastNav';


function showreels() {
  return (
    <div>
      <PromotionalNav/>
      <div className='background' id='showreels'>
        <div className='show_reels'>
            <b className='reels__text'>SHOW </b> <b className='reels__text text' >REELS</b>
        </div>
        <div className='show__box'>
            <div className='vidcard'>
              <div className='show__video'>
              <video src={showss} controls autoPlay muted loop className='show__video'></video>
              </div>
            </div>
          
        </div>
        <div className='stands'>
          <div className='stand'>
          </div>
        </div>

        <div className='stands'>
          <div className='downstand'>

          </div>
        </div>

    </div>
    </div>
  )
}

export default showreels;