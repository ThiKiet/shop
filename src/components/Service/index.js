import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./index.css";
import "../../common/index.css";

const ServiceItem = ({ image, title, description }) => {
  return (
    <Col className="service-item" xs={12} md={3}>
      <img className="service-image" src={image} alt={title} />
      <h4 className="center-title">{title}</h4>
      <p className="description service-description" as="p">
        {description}
      </p>
    </Col>
  );
};

ServiceItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

ServiceItem.defaultProps = {
  image: "",
  title: "",
  description: "",
};

export default ServiceItem;
