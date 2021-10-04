import "./AboutUs.css";
import React from "react";
import academy from "../Images/sliderImage/clg-build.jpg";
import tour from "../Images/aboutImage/tour.jpg";
import graduation from "../Images/aboutImage/graduate.jpg";
import alumni from "../Images/aboutImage/alumni.jpg";

const AboutUs = () => {
  return (
    <div>
      <h1>
        <span style={{ color: "tomato" }}>About</span> US
      </h1>

      <div className="about-details">
        <div>
          <img src={academy} alt="" />
        </div>
        <h6 className="p-5">
          <span
            style={{ color: "tomato", fontWeight: "bold", fontSize: "30px" }}
          >
            History
          </span>
          <br />
          <br />
          If you would like to study in the university in the heart of the city
          that focus on chaning the world for better to morrow, you’re choosin
          the right place. We do not use special formulas to select students. We
          look at every single applicant’s application, academic and personal,
          to select students who suit to our community with a full range of
          backgrounds. If you would like to study
        </h6>
      </div>
      <div className="about-details">
        <h6 className="p-5">
          <span
            style={{ color: "tomato", fontWeight: "bold", fontSize: "30px" }}
          >
            Special Campus Tour
          </span>
          <br />
          <br />
          Campus on a tour designed for prospective graduate and professional
          students. You will see how our university like, facilities, studenst
          and life in this university. Meet our graduate admissions
          representative to learn more about our graduate programs and decide
          what it the best for you.
        </h6>
        <div>
          <img src={tour} alt="" />
        </div>
      </div>
      <div className="about-details">
        <div>
          <img src={graduation} alt="" />
        </div>
        <h6 className="p-5">
          <span
            style={{ color: "tomato", fontWeight: "bold", fontSize: "30px" }}
          >
            Graduation
          </span>
          <br />
          <br />
          If you would like to study in the university in the heart of the city
          that focus on chaning the world for better to morrow, you’re choosin
          the right place. We do not use special formulas to select students. We
          look at every single applicant’s application, academic and personal,
          to select students who suit to our community with a full range of
          backgrounds. If you would like to study
        </h6>
      </div>
      <div className="about-details">
        <h6 className="p-5">
          <span
            style={{ color: "tomato", fontWeight: "bold", fontSize: "30px" }}
          >
            Our Beloved Alumni
          </span>
          <br />
          <br />
          Campus on a tour designed for prospective graduate and professional
          students. You will see how our university like, facilities, studenst
          and life in this university. Meet our graduate admissions
          representative to learn more about our graduate programs and decide
          what it the best for you.
        </h6>
        <div>
          <img src={alumni} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
