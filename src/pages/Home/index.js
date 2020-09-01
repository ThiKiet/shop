import React from "react";
import { Container, Row } from "react-bootstrap";
import About from "./About";
import OurService from "./OurService";
import KindOfDrink from "./KindOfDrink";
import Carousel from "../../components/Carousels";

const HomePage = () => {
  return (
    <Container fluid="true">
      <Carousel />
      <Container>
        <Row>
          <About />
        </Row>
        <Row>
          <OurService />
        </Row>
        <Row>
          <KindOfDrink />
        </Row>
      </Container>
    </Container>
  );
};

export default HomePage;
