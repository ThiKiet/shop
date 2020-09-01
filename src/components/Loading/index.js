import React from "react";
import { Row } from "react-bootstrap";
import "./index.css";

const Loading = () => {
  return (
    <Row
      className="d-flex justify-content-center 
      align-items-center 
      container-custom"
    >
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Row>
  );
};

export default Loading;
