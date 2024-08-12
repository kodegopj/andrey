import React from 'react';
import Navbar from '../Navbar.jsx';
import Social from './Social.jsx';
import Data from "./Data"
import Showreel from '../Reels/Showreel.jsx';
import Reels from '../Reels/Reels.jsx';
import Skills from "../Reels/Skills";
import Footer from '../Footer/Footer.jsx';
import Contact from '../Contact/Contact.jsx';
import "../../styles/Footer.css"
import "../../styles/Reels.css";
import "../../styles/Home.css";
import "../../styles/Showreel.css";
import "../../styles/Skills.css";
import "../../styles/Contact.css";




function Home() {
  return (
   <>
    <div>
      <Navbar/>
      <main className='main'>
        <section className='home sectio' id='home'>
          <div className='home__containe containe grid'>
            <div className='home__content grid'>
              <Social/>
              <div className='home__img'></div>
              <Data/>
            </div>
          </div>
        </section>
        <Showreel/>
        <Reels/>
        <Skills/>
        <Contact/>
      </main>
      <Footer/>
    </div>
   </>
  )
}

export default Home 