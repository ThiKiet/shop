import React from "react";
import { Container } from "react-bootstrap";
import GroupBar from "./GroupBar";
import ProductList from "./ProductList";
import Carousel from "../../components/Carousels";
import "../Product/index.css";

const Product = () => {
  return (
    <Container fluid="true">
      <Carousel />
      <Container>
        <GroupBar />
        <ProductList />
      </Container>
    </Container>
  );
};

export default Product;
