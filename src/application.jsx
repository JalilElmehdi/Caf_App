import React from 'react';
import NavBar from './navbar';
import video from "./videos/video.webm";
import About from './about';
import Sponsor from './sponsor';
import News from './news';
import Footer from './footer';

function Application() {
  return (
    <>
      <NavBar />
      <div className="home">
        <video src={video} autoPlay muted loop />
      </div>
      <About />
      <Sponsor />
      <News />
      <Footer />
    </>
  );
}

export default Application;
