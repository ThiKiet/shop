import React from "react";
import { Container } from "react-bootstrap";
import "../NotFound/index.css"

const NotFound = () => {
  return (
    <Container className="text-center">
      <p className="warning">404</p>
      <h4>Page not found</h4>
    </Container>
  );
}

export default NotFound;
