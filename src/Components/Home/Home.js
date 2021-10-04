import React from "react";
import AcademicService from "../AcademicService/AcademicService";
import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <div>
      <AcademicService></AcademicService>
      <Courses></Courses>
    </div>
  );
};

export default Home;
