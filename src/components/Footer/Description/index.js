import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../../common/index.css";

const Description = () => {
  return (
    <Col lg={4} md={6} sm={12} className="description-wrapper">
      <h4 className="title">Pages</h4>
      <Row className="description" as="p">
        The Milk Tea shop is a cozy place where friends meet to share stories,
        take commemorative photos,and enjoy milk tea and fresh fruit flavors. At
        night, it is transformed into a vibe restaurant.
      </Row>
    </Col>
  );
};

export default Description;
