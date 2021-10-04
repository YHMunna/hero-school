import React from "react";
import sport from "../Images/extraImage/sport.png";
import bncc from "../Images/extraImage/bncc.jpg";
import "./Extracurricular.css";

const Extracurricular = () => {
  return (
    <div>
      <h1>
        <span style={{ color: "tomato" }}>Extra Curriculam</span> Activity
      </h1>
      <div className="sport">
        <div>
          <img src={sport} alt="" />
        </div>
        <div>
          <h6 className="p-5">
            Here at Sporting Success we are passionate about performance and we
            know that sustainable high performance is underpinned by high levels
            of wellbeing. So that’s why our approach focuses on understanding
            relationships and team dynamics as well as just individuals.{" "}
          </h6>
        </div>
      </div>
      <div className="bncc">
        <div>
          <h6 className="p-5">
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
      <div className="sport">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/World_Scout_Emblem_1955.svg/1200px-World_Scout_Emblem_1955.svg.png"
            alt=""
          />
        </div>
        <div>
          <h6 className="p-5">
            The Scout movement, also known as Scouting or the Scouts, is a
            voluntary non-political educational movement for young people.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Extracurricular;
