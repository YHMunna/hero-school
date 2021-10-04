import "./AcademicService.css";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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

      <div className="services">
        <div className="row">
          {services.map((service) => (
            <div className="col-md-6 ">
              {/* key={service.id} */}
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
    </div>
  );
};

export default AcademicService;
