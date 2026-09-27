import React from "react";
import e1 from "../../assets/Educational/e1.mp4";
import e2 from "../../assets/Educational/e2.mp4";
import e3 from "../../assets/Educational/e3.mp4";
import EducationalNav from "./EducationalNav.jsx";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";



function moresamples() {
  return (
    <div>
      <EducationalNav />
      <div className="backphone" id="reels">
        <div className="more__text">
          {" "}
          <b>Educational Content</b>
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
                src={e1}
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
                src={e2}
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
                src={e3}
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
                src={pc4}
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

        {/* <div className="container__reels">
          <div className="card">
            <div className="upper">------</div>
            <div className="phone21">
              <video
                src={pc5}
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
                src={pc6}
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
          </div>

          <div className="card">
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
          </div>
        </div> */}

        {/* <div className="container__reels">
          <div className="card">
            <div className="upper">------</div>
            <div className="phone21">
              <video
                src={pc9}
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
                src={pc10}
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
                src={pc11}
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
                src={pc12}
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
        </div> */}

    {/* ------------- SCROLL UP -------------   */}
        
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
