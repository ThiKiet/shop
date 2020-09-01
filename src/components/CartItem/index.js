import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "../CartItem/index.css";
import Quantity from "../Quantity/index";

const Cart = ({ image, name, price, onDelete }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleClickDecrease = () => {
    let newQuantity = quantity - 1;
    newQuantity = newQuantity < 0 ? 0 : newQuantity;
    setQuantity(newQuantity);
  };

  const handleClickIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Row className="cart">
      <Col className="cart-image">
        <Image className="image" src={image} alt={name} />
      </Col>
      <Col className="cart-name" as="h4">
        {name}
      </Col>
      <Col className="cart-quantity">
        <Quantity
          onIncrease={handleClickIncrease}
          onDecrease={handleClickDecrease}
          quantity={quantity}
        />
      </Col>
      <Col className="cart-price" as="span">
        {price} VNĐ
      </Col>
      <Col className="cart-delete" as="span" onClick={onDelete}>
        &#9747;
      </Col>
    </Row>
  );
};

Cart.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  onDelete: PropTypes.func,
};

Cart.defaultProps = {
  image: "",
  name: "",
  price: 0,
  onDelete: () => {},
};

export default Cart;
