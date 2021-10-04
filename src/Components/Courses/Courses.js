import "./Courses.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <Header></Header>
      <h1>Our Exclusive Courses</h1>
      <div>
        <div className="row">
          {courses.map((course) => (
            <div key={course.id} className="col-md-4 ">
              <div className="course-card my-2 p-2">
                <div className="course-img">
                  <img src={course.subImage} alt="" />
                </div>
                <div>
                  <h4>Course Name: {course.subName}</h4>
                  <h6>Instructor: {course.instructorName}</h6>
                  <h6>Duration: {course.Duration}</h6>
                  <button className="btn btn-success">Enroll</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Courses;
