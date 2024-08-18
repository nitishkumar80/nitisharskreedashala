import React, { useEffect } from "react";
import BackgroundImage from "../assets/home-ban.webp"; // Import the background image
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TypingEffect from "./Home/TypingEffect";
import ImageSlide from "./Home/ImageSlide";
import "./CSS/Home.css"; // Make sure to import the CSS file
<<<<<<< HEAD
import Trainers from "./Trainers";
=======
>>>>>>> a5e356ce4b1a7e3df8578e9de3d389be4635f2ec

const Home = () => {
  return (
    <div 
      className="home-page"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
<<<<<<< HEAD
        backgroundAttachment: 'fixed', 
=======
>>>>>>> a5e356ce4b1a7e3df8578e9de3d389be4635f2ec
      }}
    >
      <div className='hero-overlay'></div>
      <div className="hero-content">
        <div className='grid'>
          <div className="typing-effect-container">
            <TypingEffect/>
<<<<<<< HEAD
          </div>
          <div className="image-slide-container">
            <ImageSlide/>
          </div>
        </div>
        <div className="Trainer">
        <Trainers/>
=======
          </div>
          <div className="image-slide-container">
            <ImageSlide/>
          </div>
>>>>>>> a5e356ce4b1a7e3df8578e9de3d389be4635f2ec
        </div>
        
      </div>
<<<<<<< HEAD




=======
>>>>>>> a5e356ce4b1a7e3df8578e9de3d389be4635f2ec
    </div>
  );
};

export default Home;
