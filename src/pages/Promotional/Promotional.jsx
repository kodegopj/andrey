import React from "react";
import p1 from "../../assets/Promotional/p1.mp4"
import p2 from "../../assets/Promotional/p2.mp4"
import p3 from "../../assets/Promotional/p3.mp4"
import p4 from "../../assets/Promotional/p4.mp4"
import p5 from "../../assets/Promotional/p5.mp4"
import p6 from "../../assets/Promotional/p6.mp4";
import pc7 from "../../assets/Podcast/pc7.mp4"
import pc8 from "../../assets/Podcast/pc8.mp4"
import pc9 from "../../assets/Podcast/pc9.mp4"
import pc10 from "../../assets/Podcast/pc10.mp4"
import pc11 from "../../assets/Podcast/pc11.mp4"
import pc12 from "../../assets/Podcast/pc12.mp4"
import PromotionalNav from "./PromotionalNav.jsx";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";



function moresamples() {
  return (
    <div>
      <PromotionalNav />
      <div className="backphone" id="reels">
        <div className="more__text">
          {" "}
          <b>Promotional Content</b>
        </div>

          <div className='buttonmastercontainer'>
          
            <div className='buttoncontainer'>
              <button className='more__texts'> 
                <Link to="/podcast"> 
                  <b>Podcast</b>
                </Link>
              </button>
    
              <button className='more__texts'> 
                <Link to="/promotional"> 
                  <b>Promotional Content</b>
                </Link>
              </button>
    
              <button className='more__texts'> 
                <Link to="/smcontent"> 
                  <b>Social Media Content</b>
                </Link>
              </button>
            </div>
    
            <div className='buttoncontainer'>
              <button className='more__texts'> 
                <Link to="/realstate"> 
                  <b>Real Estate</b>
                </Link>
              </button>
    
              <button className='more__texts'> 
                <Link to="/educational"> 
                  <b>Educational Content</b>
                </Link>
              </button>
    
              {/* <button className='more__texts'> 
                <Link to="/moresamples"> 
                  <b>Real Estate</b>
                </Link>
              </button> */}
            </div>
    
           </div> 
        

        <div className="container__reels">
          <div className="card">
            <div className="upper">------</div>
            <div className="phone21">
              <video
                src={p1}
                controls
                autoPlay
                muted
                loop
                className="phone1"
              ></video>
            </div>
            <div className="lower">
              <div className="cir">
                <div className="circle"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="upper">------</div>
            <div className="phone21">
              <video
                src={p2}
                controls
                autoPlay
                muted
                loop
                className="phone1"
              ></video>
            </div>
            <div className="lower">
              <div className="cir">
                <div className="circle"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="upper">------</div>
            <div className="phone21">
              <video
                src={p3}
                controls
                autoPlay
                muted
                loop
                className="phone1"
              ></video>
            </div>
            <div className="lower">
              <div className="cir">
                <div className="circle"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="upper">------</div>
            <div className="phone21">
              <video
                src={p4}
                controls
                autoPlay
                muted
                loop
                className="phone1"
              ></video>
            </div>
            <div className="lower">
              <div className="cir">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container__reels">
          <div className="card">
            <div className="upper">------</div>
            <div className="phone21">
              <video
                src={p5}
                controls
                autoPlay
                muted
                loop
                className="phone1"
              ></video>
            </div>
            <div className="lower">
              <div className="cir">
                <div className="circle"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="upper">------</div>
            <div className="phone21">
              <video
                src={p6}
                controls
                autoPlay
                muted
                loop
                className="phone1"
              ></video>
            </div>
            <div className="lower">
              <div className="cir">
                <div className="circle"></div>
              </div>
            </div>
          </div>

          {/* <div className="card">
            <div className="upper">------</div>
            <div className="phone21">
              <video
                src={pc7}
                controls
                autoPlay
                muted
                loop
                className="phone1"
              ></video>
            </div>
            <div className="lower">
              <div className="cir">
                <div className="circle"></div>
              </div>
            </div>
          </div> */}

          {/* <div className="card">
            <div className="upper">------</div>
            <div className="phone21">
              <video
                src={pc8}
                controls
                autoPlay
                muted
                loop
                className="phone1"
              ></video>
            </div>
            <div className="lower">
              <div className="cir">
                <div className="circle"></div>
              </div>
            </div>
          </div> */}
        </div>

        

    {/* ------------- Scroll Up ------------- */}
    
          <div className='scrollup'>
            Scroll Up to Show more   
  
            <div className='arrowup'>
              <FaArrowCircleUp/>
            </div>   
          </div>        


      </div>
    </div>
  );
}

export default moresamples;
