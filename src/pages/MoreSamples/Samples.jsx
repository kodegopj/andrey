import React from "react";
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
import v13 from "../../assets/v13.mp4";
import v14 from "../../assets/v14.mp4";
import v15 from "../../assets/v15.mp4";
import v16 from "../../assets/v16.mp4";
import v17 from "../../assets/v17.mp4";
import v18 from "../../assets/v18.mp4";
import v19 from "../../assets/v19.mp4";
import v20 from "../../assets/v20.mp4";
import v21 from "../../assets/v21.mp4";
import v22 from "../../assets/v22.mp4";
import v23 from "../../assets/v23.mp4";
import v24 from "../../assets/v24.mp4";
import Navbar from "../../components/Navbar.jsx";
import SamplesNav from "./SamplesNav.jsx";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function moresamples() {
  return (
    <div>
      <SamplesNav />
      <div className="backphone" id="reels">
        <div className="more__text">
          {" "}
          <b>More Sample</b>
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
                src={v1}
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
                src={v2}
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
                src={v3}
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
                src={v4}
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
                src={v5}
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
                src={v6}
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
                src={v7}
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
                src={v8}
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
                src={v9}
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
                src={v10}
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
                src={v11}
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
                src={v12}
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
                src={v13}
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
                src={v14}
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
                src={v15}
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
                src={v16}
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
                src={v17}
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
                src={v18}
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
                src={v19}
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
                src={v20}
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
                src={v21}
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
                src={v22}
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
                src={v23}
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
                src={v24}
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
