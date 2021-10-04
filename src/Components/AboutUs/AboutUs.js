import "./AboutUs.css";
import React from "react";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import academy from "../Images/sliderImage/clg-build.jpg";

const AboutUs = () => {
  return (
    <div>
      <Header></Header>

      <div>
        <div className="about-details">
          <div>
            <img src={academy} alt="" />
          </div>
          <p>
            If you would like to study in the university in the heart of the
            city that focus on chaning the world for better to morrow, you’re
            choosin the right place. We do not use special formulas to select
            students. We look at every single applicant’s application, academic
            and personal, to select students who suit to our community with a
            full range of backgrounds. If you would like to study
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
