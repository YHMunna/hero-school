import "./Footer.css";
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import foooterImage from "../Images/footerImage/SSLCOMMERZ.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <Row>
        <Col>
          <div className="important-link">
            <h3 style={{ textAlign: "center" }}>Important Link</h3>
            <li>
              <a href="http://www.educationboard.gov.bd/">Education Board</a>
            </li>
            <li>
              <a href="http://www.moedu.gov.bd/">Ministry Education</a>
            </li>
            <li>
              <a href="http://www.educationboard.gov.bd/">
                Dhaka Education Board
              </a>
            </li>
            <li>
              <a href="http://banbeis.gov.bd/new/">Banbeis</a>
            </li>
            <li>
              <a href="http://www.dshe.gov.bd/">SSC & HSC Education Board</a>
            </li>
          </div>
        </Col>
        <Col>
          <div className="Suggetion">
            <h3>Suggetion/Comments</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Messege" />
              </Form.Group>
              <Button variant="danger" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="school-address">
            <h3 style={{ textAlign: "center" }}>Our Address</h3>
            <h5>Programming Hero School & College</h5>
            <p>Address: 0123, Dhaka, Bangladesh</p>
            <p>Email: PH@gmail.com</p>
            <p>Mobile: +880123456789</p>
          </div>
        </Col>
      </Row>

      <div className="payment-image p-2">
        <img src={foooterImage} alt="" />
      </div>
      <div className="text">
        <p> @ All The right deserve Tech PH </p>
      </div>
    </div>
  );
};

export default Footer;
