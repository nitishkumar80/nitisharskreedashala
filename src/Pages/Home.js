import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import NET from "vanta/dist/vanta.clouds2.min";
import * as THREE from 'three'; // Import Three.js directly
import Banner from "../assets/home-banner.png";
import Banner1 from "../assets/banner5.png";
import Banner6 from "../assets/banner6.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CSS/Home.css';

const Home = () => {
  useEffect(() => {
    let vantaEffect;

    const loadThreeJS = new Promise((resolve) => {
      if (window.THREE) {
        resolve();
      } else {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
        script.onload = () => resolve();
        script.onerror = () => console.error("Failed to load Three.js");
        document.body.appendChild(script);
      }
    });

    loadThreeJS.then(() => {
      vantaEffect = NET({
        el: "#vanta",
        THREE: window.THREE || THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }).catch((error) => {
      console.error("Failed to load Vanta.js", error);
    });
  }, []);

  return (
    <div className="home-page">
      <div id="vanta" className="vanta-background"></div>
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
                Welcome to <span> <strong>Ars</strong>Kreedashala</span>
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
              <img src={Banner6} alt="Slide 3" />
            </motion.div>
          </div>
        </Carousel>
  

      <div className="home-container">
        <h1 className="home-title">Ars Kreedashala - Who Are We?</h1>
        <div className="product-features" data-product-features="">
          <div className="product-features__feature">
            <div className="product-feature product-feature--bear" data-product-features-feature="">
              <div className="product-feature__box" data-trackable-click-event="product-feature-box">
                <div className="bordered-box bordered-box--extra-padding">
                  <h3 className="heading heading--size5">
                    Integrating Sports into Every Child’s Education
                  </h3>
                  <div className="para">
                    Kreedashala is a renowned Indian sports 
                    education organization, and we believe 
                    in making sports an integral part of 
                    every child’s education
                  </div>
                </div>
              </div>
              <img className="product-feature__image" src="https://png.pngtree.com/png-vector/20240314/ourmid/pngtree-sports-trainers-are-suggesting-a-game-plan-football-player-and-coach-png-image_11948738.png" width="186" height="147" alt="Everything you need feature highlighted" />
              <div className="product-feature__attribution">
                <div className="attribution">
                  by Atul Singh
                </div>
              </div>
            </div>
          </div>

          <div className="product-features__feature">
            <div className="product-feature product-feature--lentils" data-product-features-feature="active">
              <div className="product-feature__box" data-trackable-click-event="product-feature-box">
                <div className="bordered-box bordered-box--extra-padding">
                  <h3 className="heading heading--size5">
                    Structured Sports & P.E Curriculum
                  </h3>
                  <div className="para">
                    We are working towards 
                    developing a healthier & fitter 
                    generation by using a Structured 
                    Sports and Physical Education (P.E) 
                    curriculum.
                  </div>
                </div>
              </div>
              <img className="product-feature__image" src="https://static.vecteezy.com/system/resources/previews/027/189/304/non_2x/sports-school-coach-training-child-in-running-flat-vector-illustration-isolated-png.png" width="222" height="241" alt="10+ designers feature highlighted" />
              <div className="product-feature__attribution">
                <div className="attribution">
                  by Martis Lupus
                </div>
              </div>
            </div>
          </div>

          <div className="product-features__feature">
            <div className="product-feature product-feature--bird" data-product-features-feature="">
              <div className="product-feature__box" data-trackable-click-event="product-feature-box">
                <div className="bordered-box bordered-box--extra-padding">
                  <h3 className="heading heading--size5">
                    Curriculum Based on NASPE Standards
                  </h3>
                  <div className="para">
                    The Kreedashaala curriculum has been 
                    developed based on NASPE Standards
                    (National Association for Sports & 
                    Physical Education)
                  </div>
                </div>
              </div>
              <img className="product-feature__image" src="https://png.pngtree.com/png-vector/20221010/ourmid/pngtree-soccer-coach-training-children-on-stadium-vector-png-image_6269668.png" width="157" height="173" alt="100% money-back guarantee feature highlighted" />
              <div className="product-feature__attribution">
                <div className="attribution">
                  by pmo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
