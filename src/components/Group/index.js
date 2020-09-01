import React from "react";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "../Group/index.css";
import "../../common/index.css";

const Group = ({ title, element }) => {
  return (
    <Col md={4} sm={12} className="sort-dropdown">
      <h4 className="title group-title">{title}</h4>
      <Row className="group-element">{element}</Row>
    </Col>
  );
};

Group.propTypes = {
  title: PropTypes.string,
  element: PropTypes.element,
};

Group.defaultProps = {
  title: "",
  element: {},
};

export default Group;
