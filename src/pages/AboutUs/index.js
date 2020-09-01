import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import { DESCRIPTIONS } from "../../constants/descriptionAbout";
import Carousels from "../../components/Carousels";
import AboutImage from "../../assets/about-us/aboutus-3.png";
import "../../common/index.css";

const AboutUs = () => {
  return (
    <>
      <Carousels />
      <Container className="container-custom">
        <h4 className="center-title">About us</h4>
        <Row>
          {DESCRIPTIONS.map((item, index) => (
            <p className="description" key={index}>
              {item.description}
            </p>
          ))}
          <Image
            src={AboutImage}
            alt="About us image"
            className="image-custom"
          />
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
