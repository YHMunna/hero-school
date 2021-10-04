import "./AcademicService.css";
import React, { useEffect, useState } from "react";

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
      <h1>
        <span style={{ color: "tomato" }}>Academic</span> Services
      </h1>

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
                  <button className="btn btn-danger">Details</button>
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
