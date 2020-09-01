import React from "react";
import PropTypes from "prop-types";
import { Button as BootstrapButton } from "react-bootstrap";
import "./index.css";

const Button = ({ type, variant, size, btnText, handleClick }) => {
  return (
    <BootstrapButton
      className={`btn ${variant} ${size}`}
      type={type}
      onClick={handleClick}
      bsPrefix="custom-button"
    >
      {btnText}
    </BootstrapButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  btnText: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  variant: "btn-outline-success",
  size: "btn-md",
  btnText: "",
  handleClick: () => {},
};

export default Button;
