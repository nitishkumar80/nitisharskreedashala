import React from "react";
import { Carousel } from "flowbite-react";
import './CSS/Home.css';
import banner from "../assets/green.png";
import banner2 from "../assets/Cricket.png";
import banner3 from "../assets/Dumbbell.png";
import banner4 from "../assets/Tennis.png";
import banner5 from "../assets/Sport.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full">
          {[banner, banner2, banner3, banner4, banner5].map((imgSrc, index) => (
            <div key={index} className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
              <div className="image-container">
                <img src={imgSrc} alt={`Slide ${index + 1}`} className="carousel-image"/>
              </div>
              <div className="md:w-1/2 text-container">
                <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                  {index === 0 && "The harder the battle "}
                  {index === 1 && "Success is no accident "}
                  {index === 2 && "It's not whether you get knocked down "}
                  {index === 3 && "Winners are not people who never fail, "}
                  {index === 4 && "Don't watch the clock "}
                  <span className="text-brandPrimary leading-snug">
                    {index === 0 && "the sweeter the victory"}
                    {index === 1 && "It is hard work perseverance and learning"}
                    {index === 2 && "it's whether you get up"}
                    {index === 3 && "but people who never quit"}
                    {index === 4 && "do what it does. Keep going"}
                  </span>
                </h1>
                <p className="text-neutralGrey text-base mb-8">
                  {index === 0 && "Push your limits and break through barriers. Greatness awaits you."}
                  {index === 1 && "Train like a champion, win like a champion."}
                  {index === 2 && "Rise stronger with every fall."}
                  {index === 3 && "Keep pushing forward, no matter the odds."}
                  {index === 4 && "Every second counts. Make the most of it."}
                </p>
                <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Register</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
