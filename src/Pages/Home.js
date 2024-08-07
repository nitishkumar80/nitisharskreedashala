import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './CSS/Home.css';
import React from "react";
import { motion } from "framer-motion";
import Banner from "../assets/home-banner.png";
import Banner1 from "../assets/home-banner2.png";

const Home = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showIndicators={false}
        showStatus={false}
      >
        <div className="slide-content">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-content"
          >
            <h1 className="title-heading">
              Welcome to <span>Kreedashala</span>
            </h1>
            <p>Future of Sport Training</p>
            <button className="btn btn-primary">Register now</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="image-content"
          >
            <img src={Banner} alt="Slide 1" />
          </motion.div>
        </div>
        <div className="slide-content">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-content"
          >
            <h1 className="title-heading">
              COME <span>AND BE</span> THE BEST
            </h1>
            <p>Future of Sport Training</p>
            <button className="btn btn-primary">Register now</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="image-content"
          >
            <img src={Banner1} alt="Slide 2" />
          </motion.div>
        </div>
        <div className="slide-content">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-content"
          >
            <h1 className="title-heading">
              JOIN <span>US</span> NOW
            </h1>
            <p>Future of Sport Training</p>
            <button className="btn btn-primary">Register now</button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="image-content"
          >
            <img src={Banner} alt="Slide 3" />
          </motion.div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
