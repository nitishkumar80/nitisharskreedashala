
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './CSS/Home.css';
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Image Carousel</h1>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnR8ZW58MHx8MHx8fDA%3D" alt="Slide 1" />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1522898467493-49726bf28798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwb3J0fGVufDB8fDB8fHww" alt="Slide 2" />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=tcTwN2rTvUBK4wddan_GUCxrXX6bBoU-hyrVMvmT0BM=" alt="Slide 3" />
          <p className="legend">Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
