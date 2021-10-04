import "./Header.css";
import React from "react";
import schoolLogo from "../Images/headerImage/school-logo.png";
import bdflag from "../Images/headerImage/bd-flag.png";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Menubar from "../Menubar/Menubar";

const Header = () => {
  return (
    <div className="header-container">
      <Container className="school-info">
        <div className="key-moto">
          <h3>EDUCATION</h3>
          <h3>MORALITY</h3>
          <h3>HUMANITY</h3>
          <h3>PATRIOTISM</h3>
        </div>
        <Row>
          <Col className="scl-img col-md-2">
            <img src={schoolLogo} alt="" />
          </Col>
          <Col className="school-name col-md-8">
            <h2>Programming Hero School & College </h2>
            <h5>School Code: 0101 || College Code: 0202 || EIIN:0303</h5>
          </Col>
          <Col className="bd-flag col-md-2">
            <img src={bdflag} alt="" />
          </Col>
        </Row>
        <div>
          <Marquee className="scroll" direction="left" speed="60">
            Wellcome To Programming Hero School & College
          </Marquee>
        </div>
      </Container>
      <Menubar></Menubar>
    </div>
  );
};

export default Header;
