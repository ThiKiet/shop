import React from "react";
import { Container, Row } from "react-bootstrap";
import { KINDOFDRINKS } from "../../../constants/kindOfDrink";
import Image from "../../../components/Image";
import "../../../common/index.css";
import "./index.css";

const KindOfDrink = () => {
  return (
    <Container>
      <h3 className="center-title">Kind of drinks we sell</h3>
      <Row className="d-flex justify-content-around">
        {KINDOFDRINKS.map((kindofdrink, index) => (
          <Image
            key={index}
            image={kindofdrink.image}
            name={kindofdrink.name}
          />
        ))}
      </Row>
    </Container>
  );
};

export default KindOfDrink;
