import React from "react";
import { Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import Button from "../Button/index";
import "./index.css";

const ProductItem = ({ image, description, name, price, onAddToCart }) => {
  return (
    <Col xs={12} md={4} lg={3}>
      <Card>
        <Card.Img variant="top" src={image} alt={description} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price} VND</Card.Text>
          <Button btnText="Add to cart" onClick={onAddToCart} />
        </Card.Body>
      </Card>
    </Col>
  );
};

ProductItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  onAddToCart: PropTypes.func,
};

ProductItem.defaultProps = {
  image: "",
  name: "",
  description: "",
  price: 0,
  onAddToCart: () => {},
};

export default ProductItem;
