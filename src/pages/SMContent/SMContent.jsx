import React from "react";
import smc1 from "../../assets/SMContent/smc1.mp4"
import smc2 from "../../assets/SMContent/smc2.mp4"
import smc3 from "../../assets/SMContent/smc3.mp4"
import smc4 from "../../assets/SMContent/smc4.mp4"
import smc5 from "../../assets/SMContent/smc5.mp4"
import smc6 from "../../assets/SMContent/smc6.mp4"
import smc7 from "../../assets/SMContent/smc7.mp4"
import smc8 from "../../assets/SMContent/smc8.mp4"
import smc9 from "../../assets/SMContent/smc9.mp4"
import smc10 from "../../assets/SMContent/smc10.mp4"
// import pc11 from "../../assets/Podcast/pc11.mp4"
// import pc12 from "../../assets/Podcast/pc12.mp4"
import SMContentNav from "./SMContentNav.jsx";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function moresamples() {
  return (
    <div>
      <SMContentNav />
      <div className="backphone" id="reels">
        <div className="more__text">
          {" "}
          <b>Social Media Content</b>
        </div>

      {/* ------------ BUTTON CONTAINER ------------ */}

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
                src={smc1}
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
                src={smc2}
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
                src={smc3}
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
                src={smc4}
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
                src={smc5}
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
                src={smc6}
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
                src={smc7}
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
                src={smc8}
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
                src={smc9}
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
                src={smc10}
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

        
  {/* ----------------- SCROLL UP --------------- */}

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
