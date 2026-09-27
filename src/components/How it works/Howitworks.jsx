import React from 'react';
import { FaUpload } from "react-icons/fa";
import { FaFileVideo } from "react-icons/fa";
import { MdPublishedWithChanges } from "react-icons/md";
import "../../styles/Howitworks.css";
import { Link } from "react-router-dom";

function Howitworks() {
  return (
    <div className='how__mainbox'>
        <div className='howitworks__title'><b>How it works</b></div>

        <div className='first__box'>
        <div className='second__box'>
            <div className='works__icon'>
                <FaUpload />
            </div>

            <div className='works__title'>
                <b>#1 Transfer your video files</b>
            </div>

            <div>
            Send  your raw video clips through Google Drive, Dropbox or any other similar cloud storage service.
            </div>

            <div>
            Share a brief of your video editing instructions or let us do our magic.
            </div>
        </div>

        <div className='second__box'>
            <div className='works__icon'>
                <FaFileVideo/>
            </div>

            <div className='works__title'>
                <b>#2 Get your edited video</b>
            </div>

            <div>
            i will email you a download link for your edited video in 5-7 days, on average.
            </div>

            <div>
            Or in 48 hours if you’ve opted in for the speedy turnaround option.
            </div>
        </div>

        <div className='second__box'>
            <div className='works__icon'>
                <MdPublishedWithChanges/>
            </div>

            <div className='works__title'>
                <b>#3 Request changes, if needed</b>
            </div>

            <div>
            Share your feedback on the video and i'm happy to work with you on up to 2 free revisions.
            </div>

            <div>
            No extra charges, no strigs attached
            </div>
        </div>
        </div>

        <div className='contact__box'>

            <button  className='contactss'>               
                <Link to="/contact" className="contact"> 
                    <b>Contact Me</b>
                </Link>
            </button>
        </div>

    </div>
  )
}

export default Howitworks