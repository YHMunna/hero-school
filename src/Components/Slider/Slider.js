import "./Slider.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import girl from "../Images/sliderImage/bus-girl.jpg";
import room from "../Images/sliderImage/cls-room.jpg";
import building from "../Images/sliderImage/clg-build.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={building} alt="Third slide" />
          <Carousel.Caption>
            <h3>Academic Building</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={room} alt="Second slide" />
          <Carousel.Caption>
            <h3>Class Room</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={girl} alt="First slide" />
          <Carousel.Caption>
            <h3>School Bus</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
