import "./Menubar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Menubar = () => {
  return (
    <div>
      <Nav.Link>
        <NavLink
          className="nav-link"
          to="/home"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          to="/course"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Courses
        </NavLink>
        <NavLink
          className="nav-link"
          to="/extra"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Extracuricullar
        </NavLink>
        <NavLink
          className="nav-link"
          to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          About Us
        </NavLink>
      </Nav.Link>
    </div>
  );
};

export default Menubar;
