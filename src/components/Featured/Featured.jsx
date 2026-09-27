import React from 'react';
import { Link } from "react-router-dom";
import v1 from "../../assets/v1.mp4";
import v2 from "../../assets/v2.mp4";
import v3 from "../../assets/v3.mp4";
import v4 from "../../assets/v4.mp4";
import v5 from "../../assets/v5.mp4";
import v6 from "../../assets/v6.mp4";
import v7 from "../../assets/v7.mp4";
import v8 from "../../assets/v8.mp4";
import v9 from "../../assets/v9.mp4";
import v10 from "../../assets/v10.mp4";
import v11 from "../../assets/v11.mp4";
import v12 from "../../assets/v12.mp4";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { FaArrowsDownToLine } from "react-icons/fa6";
import p1 from "../../assets/Prjectone/projectvideo/p1.mp4";



function Featured () {
  return (
    
    <div className='featuredcontainer' id='reels'>
        <div className='featured__text'> 
         <b>Featured Projects</b>
        </div>
     <div className='featuredcontainer__reels'>
      
        <div className='card'>
          <div className='upper'>
          ------
          </div>
         <div className='phone21'>
          <video src={p1} controls autoPlay muted loop className='phone1'></video>
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
{/* -------------------- HOW IT WORKS ---------------------- */}

<div className='works-container'>
    <b className='howitworks'>How it Works <b className='works-icon'><VscGitPullRequestGoToChanges/></b>  </b>
    <div className='click-project'>
        Just click the <b className='project-text'>"FEATURED PROJECT"</b>   Below <b className='arrow-icon'> <FaArrowsDownToLine/> </b>  to show you the summary and how i work with projects.
    </div>
</div>

     
{/* --------------------- BUTTON CONTAINER ------------------ */}
    <div className='featuredmastercontainer'>
        
        <div className='buttoncontainer'>
          <button className='more__texts'> 
            <Link to="/projectone"> 
              <b>Featured Project</b>
            </Link>
          </button>

        </div>
     </div> 

    {/* --------------- REMEMBER --------------- */}
    <div className='works-container2'>
        Don't Forget to Visit <b className='project-text'>"FEATURED PROJECT"</b> It will show you the process on making quality videos that achieve the goal and standards of the clients
    </div>

     
   
    </div>
  )
}

export default Featured