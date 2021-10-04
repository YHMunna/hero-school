import "./AcademicService.css";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AcademicService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./service.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <h1>Academic Services</h1>
      <Header></Header>
      <div className="services">
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 ">
              <div className="card">
                <div className="service-img">
                  <img src={service.picture} alt="" />
                </div>
                <div>
                  <h3>Program: {service.tittle}</h3>
                  <p>{service.details.slice(0, 250)}</p>
                  <Button variant="danger">Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AcademicService;
