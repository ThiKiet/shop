import React from "react";
import { Image as BootstrapImage, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "../Image/index.css";

const Image = ({ image, name }) => {
  return (
    <Col className="image-item">
      <BootstrapImage className="image" src={image} alt={name} />
    </Col>
  );
};

Image.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

Image.defaultProps = {
  image: "",
  name: "",
};

export default Image;
