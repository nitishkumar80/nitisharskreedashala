import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fade, Zoom } from "react-reveal";
import LottieAnimation from '../LottieAnimation/LottieAnimation';

import gymAnimation from '../LottieAnimation/jim.json';
import yogaAnimation from '../LottieAnimation/yoga.json';
import badmintonAnimation from '../LottieAnimation/badminton.json';
import swimmingAnimation from '../LottieAnimation/swimming.json';
import cricketAnimation from '../LottieAnimation/Cricket.json';
import './CSS/Service.css'
import BackgroundImage from "../assets/bg1.jpg"; // Import the background image

export const servicess = [
  {
    id: 1,
    title: "Badminton",
    image: "https://example.com/badminton.jpg",
    description: "A fast-paced racket sport that enhances agility, reflexes, and cardiovascular health.",
    animation: badmintonAnimation,
  },
  {
    id: 2,
    title: "Swimming",
    image: "https://example.com/swimming.jpg",
    description: "A full-body workout that improves endurance, strength, and flexibility, offering both recreational and competitive benefits.",
    animation: swimmingAnimation,
  },
  {
    id: 3,
    title: "Cricket",
    image: "https://example.com/cricket.jpg",
    description: "A team sport involving batting, bowling, and fielding, enhancing strategic thinking, coordination, and physical fitness.",
    animation: cricketAnimation,
  },
  {
    id: 4,
    title: "Yoga",
    image: "https://example.com/yoga.jpg",
    description: "A holistic practice combining physical postures, breathing exercises, and meditation to improve flexibility, strength, and mental well-being.",
    animation: yogaAnimation,
    size: 200,
  },
  {
    id: 5,
    title: "Gym",
    image: "https://example.com/gym.jpg",
    description: "A facility equipped for various forms of exercise, focusing on strength training, cardiovascular workouts, and overall fitness.",
    animation: gymAnimation,
    size: 200,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Service = () => {
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
      
    }}
  >
    <div 
      className="service-container" 
    
    >
      <Fade top>
        <h1 className="service-title">Our Services</h1>
      </Fade>
      <div className="service-cards">
        {servicess.map((service) => (
          <motion.div
            key={service.id}
            className="service-card-wrapper"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: service.id * 0.2 }}
          >
            <Link to={`/service/${service.id}`} className="service-card-link">
              <div className="service-card">
                <div className="animation-container">
                  <LottieAnimation animationData={service.animation} size={service.size} />
                </div>
                <h2 className="service-card-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Service;
