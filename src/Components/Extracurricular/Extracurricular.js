import React from "react";
import sport from "../Images/extraImage/sport.png";
import bncc from "../Images/extraImage/bncc.jpg";
import "./Extracurricular.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Extracurricular = () => {
  return (
    <div>
      <Header></Header>
      <h3>Our Extracurricular</h3>
      <div className="sport">
        <div>
          <img src={sport} alt="" />
        </div>
        <div>
          <h6>
            Here at Sporting Success we are passionate about performance and we
            know that sustainable high performance is underpinned by high levels
            of wellbeing. So that’s why our approach focuses on understanding
            relationships and team dynamics as well as just individuals.{" "}
          </h6>
        </div>
      </div>
      <div className="bncc">
        <div>
          <h6>
            The Bangladesh National Cadet Corps is a tri-services volunteer
            reserve force comprising the Army, Navy and Air Force for school,
            college and university students. Students are trained by military
            staffs and personnels all through the cadetship.
          </h6>
        </div>
        <div>
          <img src={bncc} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Extracurricular;
