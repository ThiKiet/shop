import React from "react";
import { Container, Row } from "react-bootstrap";
import { SERVICEITEMS } from "../../../constants/serviceItem";
import ServiceItem from "../../../components/Service";
import "../../../common/index.css";
import "./index.css";

const OurService = () => {
  return (
    <Container className="our-service">
      <h3 className="center-title">Our Service</h3>
      <Row className="d-flex justify-content-around">
        {SERVICEITEMS.map((serviceitem, index) => (
          <ServiceItem
            key={index}
            image={serviceitem.image}
            title={serviceitem.title}
            description={serviceitem.description}
          />
        ))}
      </Row>
    </Container>
  );
};
export default OurService;
