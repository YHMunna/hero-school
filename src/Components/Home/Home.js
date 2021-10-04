import React from "react";
import AcademicService from "../AcademicService/AcademicService";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <AcademicService></AcademicService>
      <Footer></Footer>
    </div>
  );
};

export default Home;
