import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import "./TypingEffect.css"; // Make sure to import the CSS file
const TypingEffect = () => {
    const [texts] = useTypewriter({
        words:['Football','Cricket','Tennis','Badminton','Rugby','Baseball','Basketball','Swimming','Volleyball'],
        loop:{},
        typeSpeed:300,
        delaySpeed:80
    })
    return (
      <div className="container">
        <h2 className="text-tile">
           ARS KREEDASHALA
        </h2>
        <h4 className="admission-text">
          Admission Going On
        </h4>
        <div className="">
          <span>{texts}</span>
          <Cursor cursorStyle="." cursorColor="white" />
        </div>
        <p className="">
          We provide individualized academic support and flexible,
          permeable educational pathways that are tailored to each student's needs.
          your particular requirements and goals. Since our ambitions coincide with yours.
        </p>
        <button className="btn-text">
          Learn More
        </button>
      </div>
    );
};

export default TypingEffect;