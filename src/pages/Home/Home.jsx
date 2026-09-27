import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import Showreel from "../../components/Reels/Showreel.jsx";
import Reels from "../../components/Reels/Reels.jsx";
import Skills from "../../components/Reels/Skills.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Featured from "../../components/Featured/Featured.jsx";
import Graphics from "../../components/Graphics/Graphics.jsx";
import "../../styles/Footer.css";
import "../../styles/Reels.css";
import "../../styles/Home.css";
import "../../styles/Showreel.css";
import "../../styles/Skills.css";
import "../../styles/Contact.css";
import "../../styles/Featured.css";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <main className="main">
          <section className="home sectio" id="home">
            <div className="home__containe containe grid">
              <div className="home__content grid">
                <Social />
                <div className="home__img"></div>
                <Data />
              </div>
            </div>
          </section>
          <Showreel />
          <Featured/>
          <Graphics/>


          <Reels />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
