import React from "react";
import { Container, Carousel, Image, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Button from "../../Button";
import "../../../common/index.css";
import "../index.css";

const CarouselItem = ({ title, image, description, alt, onClick }) => {
  return (
    <Container className="carousel-container" fluid>
      <Image className="image-custom" src={image} alt={alt} />
      <Row sm={3} xl={12}>
        <Carousel.Caption className="d-flex align-items-start carousel-caption-custom">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button btnText="Read more" onClick={onClick} />
        </Carousel.Caption>
      </Row>
    </Container>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

CarouselItem.defaultProps = {
  title: "",
  image: "",
  description: "",
  alt: "",
  onClick: () => {},
};

export default CarouselItem;
