import React from 'react'
import "../../styles/Projectsone.css";
import v1 from "../../assets/v1.mp4";
import p1 from "../../assets/Prjectone/projectvideo/p1.mp4";
import ProjectNav from './ProjectNav';
import { FaLaptopFile } from "react-icons/fa6";
import { RiImportFill } from "react-icons/ri";
import { MdOutlineContentCut } from "react-icons/md";
import { MdRebaseEdit } from "react-icons/md";
import { AiFillAudio } from "react-icons/ai";
import { IoIosColorWand } from "react-icons/io";
import { MdTouchApp } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import Stepone from '../../components/Projectone/Stepone';
import Steptwo from '../../components/Projectone/Steptwo';
import Stepthree from '../../components/Projectone/Stepthree';
import Stepfour from '../../components/Projectone/Stepfour';
import Stepfive from '../../components/Projectone/Stepfive';
import Stepsix from '../../components/Projectone/Stepsix';
import Stepseven from '../../components/Projectone/Stepseven';
import Stepeight from '../../components/Projectone/Stepeight';
import Howitworks from '../../components/How it works/Howitworks';



function Projectone() {
  return (
    <div>
        <ProjectNav/>
        {/* ------- PROJECTONE SECTION 1 ----------- */}
        <div className='project-maincontainer'>
        <div className='project-container'>
            <div className='video-section'>
                <b className='project-name'>
                    Featured Project
                </b>

                <div className='project-title'>
                    Priceless tasting Event
                </div>

                <div className='project-videos'>
                    <video src={p1} controls autoPlay muted loop className='projectvideo'>s</video>
                </div>
            </div>

            <div className='summary-section'>
                <div  className='sectionsummary-name'>
                    <div className='summary-names'>
                        <b className='summary-name'>
                            The step-by-step 
                        </b>
                    </div>


                    <div className='summary-names'>
                        <b className='summary-name'>
                            Pre-production process
                        </b>
                    </div>
                </div>
               



        {/* ------ PROJECT SETPS -------- */}
                <div className='steps-container'>
                    <div className='fourstep-container'>
                        
                        <div>
                            <div className='mainbox'>
                                <div className='stepbox-container b1'>
                                    <div className='first-step-container'>
                                        <div className='stepbox'>
                                            <b className='first-step'>
                                                01  First Step 
                                            </b>
                                            
                                        </div>
                                        <div className='first-stp-guide'>
                                            Pre-Editing Preparation
                                        </div>
                                    </div>
                                    
                                    <div className='step-icon'>
                                        <div className='iconic'>
                                            <FaLaptopFile />
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div>
                            <div className='mainbox'>
                                <div className='stepbox-container b2'>
                                    <div className='first-step-container'>
                                        <div className='stepbox'>
                                            <b className='first-step'>
                                                02 Second Step
                                            </b>
                                            
                                        </div>
                                        <div className='first-stp-guide'>
                                            Import & Organize
                                        </div>
                                    </div>
                                    
                                    <div className='step-icon'>
                                        <div className='iconic'>
                                            <RiImportFill/>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div>
                            <div className='mainbox'>
                                <div className='stepbox-container b3'>
                                    <div className='first-step-container'>
                                        <div className='stepbox'>
                                            <b className='first-step'>
                                                03 Third Step
                                            </b>
                                            
                                        </div>
                                        <div className='first-stp-guide'>
                                            Rough Cut (Basic Assembly)
                                        </div>
                                    </div>
                                    
                                    <div className='step-icon'>
                                        <div className='iconic'>
                                            <MdOutlineContentCut/>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div>
                            <div className='mainbox'>
                                <div className='stepbox-container b4'>
                                    <div className='first-step-container'>
                                        <div className='stepbox'>
                                            <b className='first-step'>
                                                04 Fourth Step
                                            </b>
                                            
                                        </div>
                                        <div className='first-stp-guide'>
                                            Refining the Edit
                                        </div>
                                    </div>
                                    
                                    <div className='step-icon'>
                                        <div className='iconic'>
                                            <MdRebaseEdit/> 
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>

                    </div>

                    <div>
                        <div>
                            <div className='mainbox'>
                                <div className='stepbox-container b5'>
                                    <div className='first-step-container'>
                                        <div className='stepbox'>
                                            <b className='first-step'>
                                                05 Fifth Step 
                                            </b>
                                            
                                        </div>
                                        <div className='first-stp-guide'>
                                            Audio Editing & Sound Design
                                        </div>
                                    </div>
                                    
                                    <div className='step-icon'>
                                        <div className='iconic'>
                                            <AiFillAudio/>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div>
                            <div className='mainbox'>
                                <div className='stepbox-container b6'>
                                    <div className='first-step-container'>
                                        <div className='stepbox'>
                                            <b className='first-step'>
                                                06  Sixth Step
                                            </b>
                                            
                                        </div>
                                        <div className='first-stp-guide'>
                                            Color Correction & Grading
                                        </div>
                                    </div>
                                    
                                    <div className='step-icon'>
                                       <div className='iconic'>
                                           <IoIosColorWand/>
                                       </div>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div>
                            <div className='mainbox'>
                                <div className='stepbox-container b7'>
                                    <div className='first-step-container'>
                                        <div className='stepbox'>
                                            <b className='first-step'>
                                                07 Seventh Step
                                            </b>
                                            
                                        </div>
                                        <div className='first-stp-guide'>
                                            Final Touches & Exporting
                                        </div>
                                    </div>
                                    
                                    <div className='step-icon'>
                                        <div className='iconic'>
                                            <MdTouchApp/>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>

                        <div>
                            <div className='mainbox'>
                                <div className='stepbox-container b8'>
                                    <div className='first-step-container'>
                                        <div className='stepbox'>
                                            <b className='first-step'>
                                                08 Eighth Step
                                            </b>
                                            
                                        </div>
                                        <div className='first-stp-guide'>
                                            Delivery & Feedback
                                        </div>
                                    </div>
                                    
                                    <div className='step-icon'>
                                        <div className='iconic'>
                                            <AiOutlineDeliveredProcedure/>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
        </div>
        <Stepone/>
        <Steptwo/>
        <Stepthree/>
        <Stepfour/>
        <Stepfive/>
        <Stepsix/>
        <Stepseven/>
        <Stepeight/>
        <Howitworks/>
    </div>
  )
}

export default Projectone