import React from 'react';
import GraphicThumbnails from './GraphicThumbnails.jsx';
import GraphicMenu from './GraphicMenu.jsx';
import GraphicDental from './GraphicDental.jsx';
import "../../styles/Graphics/Graphics.css";

function Graphics() {
  return (
    <div>
        <div className='Graphic_container'>
            {/* ---------- GRAPHIC TITLE ---------- */}
            <div className='Graphic_main-title'>
                <b>GRAPHIC DESIGN</b>
            </div>

            <GraphicThumbnails/>
             <GraphicDental/>
            <GraphicMenu/>
           


        </div>

    </div>
  )
}

export default Graphics