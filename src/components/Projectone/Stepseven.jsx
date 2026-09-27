import React from 'react';
import "../../styles/Projectone/Stepseven.css";

function Stepseven() {
  return (
    <div>
        <div className='stepseven-container'>
            <b className='stepseven-title'>7. FINAL TOUCHES & EXPORTING</b>

            <div className='stepseven-sectioncontainer'>
                <div className='stepseven-datacontainer'>
                    <div className='stepseven-data-section b1'>
                        <div className='stepseven-nametitle'>
                            <b>Review & Polish</b>
                        </div>
                        <div>
                            I watch the entire video to check for errors, smooth transitions, and consistency.
                        </div>
                    </div>

                    <div className='stepseven-data-section b2'>
                        <div className='stepseven-nametitle'>
                            <b>Export in the Right Format</b>
                        </div>
                        <div>
                            I choose the correct resolution, bitrate, and file format (e.g., MP4 for social media, MOV for high-quality output).
                        </div>
                    </div>

                </div>

                <div className='stepseven-datacontainer'>
                    <div className='stepseven-data-section b3'>
                        <div className='stepseven-nametitle'>
                            <b>Optimize for Platforms</b>
                        </div>
                        <div>
                            Adjust aspect ratios (e.g., 16:9 for YouTube, 9:16 for TikTok).
                        </div>
                    </div>

                    <div className='stepseven-data-section b4'>
                        <div className='stepseven-nametitle'>
                            <b>Test Playback</b>
                        </div>
                        <div>
                            Check the exported file on different devices to ensure quality.
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Stepseven