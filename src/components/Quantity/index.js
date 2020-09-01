import React from "react";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Button from "../Button/index";
import "../Quantity/index.css";

const Quantity = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <Row className="quantity p-0">
      <Col className="quantity-item p-0">
        <Button
          size="btn-sm"
          btnText="&minus;"
          handleClick={onDecrease}
        ></Button>
      </Col>

      <Col className="quantity-item p-0 result" as="span">
        {quantity}
      </Col>

      <Col className="quantity-item p-0">
        <Button size="btn-sm" btnText="&#43;" handleClick={onIncrease}></Button>
      </Col>
    </Row>
  );
};

Quantity.propTypes = {
  quantity: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
};

Quantity.defaultProps = {
  quantity: 1,
  onIncrease: () => {},
  onDecrease: () => {},
};

export default Quantity;
