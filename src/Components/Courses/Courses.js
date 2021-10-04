import "./Courses.css";
import React, { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <>
      <h1>
        <span style={{ color: "tomato" }}>Exclusive</span> Courses
      </h1>
      <div>
        <div className="row">
          {courses.map((course) => (
            <div key={course.subID} className="col-md-4 ">
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
    </>
  );
};

export default Courses;
