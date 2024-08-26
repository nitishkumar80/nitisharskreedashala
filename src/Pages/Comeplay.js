import React from "react";
import Lottie from "react-lottie";

import animationData from "../LottieAnimation/comePlay.json"; // Replace with your Lottie animation file path
import "./CSS/ComePlay.css"; // Import your CSS file

const ComePlay = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };



  return (
    <div className="come-play-page">
      <h1 className="title">COME AND PLAY MODEL</h1>
      <div className="container">
        <div className="card">
          <Lottie options={defaultOptions} height={300} width={400} />

          <button className="play-button">
            Come and Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComePlay;
