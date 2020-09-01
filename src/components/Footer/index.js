import React from "react";
import { Row, Container } from "react-bootstrap";
import Description from "./Description/index";
import ShopTime from "./ShopTime/index";
import Contact from "./Contact/index";
import "../Footer/index.css";
import "../../common/index.css";

const Footer = () => {
  return (
    <Container className="footer-container-fluid p-0" fluid>
      <Container className="footer-container">
        <Row className="footer-content">
          <Description />
          <ShopTime />
          <Contact />
        </Row>
      </Container>
      <p className="descrition copy-right">
        @Copyright 2020
      </p>
    </Container >
  );
};

export default Footer;
