import React from 'react';
import v1 from "../../assets/v1.mp4";
import v2 from "../../assets/v2.mp4";
import v3 from "../../assets/v3.mp4";
import v4 from "../../assets/v4.mp4";



function Reels() {
  return (
    
    <div className='backphone' id='reels'>
        <div className='more__text'> <b>More Sample</b></div>
     <div className='container__reels'>
      
        <div className='card'>
          <div className='upper'>
          ------
          </div>
         <div className='phone21'>
          <video src={v1} controls autoPlay muted loop className='phone1'></video>
         </div>
         <div className='lower'> 
          <div className='cir'>
            <div className='circle'>

            </div>
          </div>
         </div>
        </div>

        <div className='card'>
          <div className='upper'>
          ------
          </div>
         <div className='phone21'>
          <video src={v2} controls autoPlay muted loop className='phone1'></video>
         </div>
         <div className='lower'> 
          <div className='cir'>
            <div className='circle'>

            </div>
          </div>
         </div>
        </div>

        <div className='card'>
          <div className='upper'>
          ------
          </div>
         <div className='phone21'>
          <video src={v3} controls autoPlay muted loop className='phone1'></video>
         </div>
         <div className='lower'> 
          <div className='cir'>
            <div className='circle'>

            </div>
          </div>
         </div>
        </div>

        <div className='card'>
          <div className='upper'>
          ------
          </div>
         <div className='phone21'>
          <video src={v4} controls autoPlay muted loop className='phone1'></video>
         </div>
         <div className='lower'> 
          <div className='cir'>
            <div className='circle'>

            </div>
          </div>
         </div>
        </div>
     </div>
   
    </div>
  )
}

export default Reels