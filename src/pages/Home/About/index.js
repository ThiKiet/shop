import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import Button from "../../../components/Button";
import Aboutus1 from "../../../assets/about-us/aboutus-1.png";
import Aboutus2 from "../../../assets/about-us/aboutus-2.png";
import "../../../common/index.css";
import "./index.css";

const About = (onClick) => {
  return (
    <Container className="about-us">
      <Row xs={12} className="d-flex justify-content-around">
        <Col sm={6} xs={12}>
          <Row>
            <Col sm={6} xs={12}>
              <Image className="img-custom" src={Aboutus1} />
            </Col>
            <Col sm={6} xs={12}>
              <Image className="img-custom" src={Aboutus2} />
            </Col>
          </Row>
        </Col>

        <Col sm={6} xs={12}>
          <h4 className="normal-title">About Us</h4>
          <p>
            From the desire to bring fresh, boldly-made drinks directly to
            customers with modern styles and reasonable prices, the first Goky
            Milk Tea shop has launched in Da Nang city. This event marks a
            turning point in our development history, with the store operating
            under a self-service model in a modern, class, and outstanding
            space.
          </p>
          <Button btnText="Read more" onClick={onClick} />
        </Col>
      </Row>
    </Container>
  );
};

About.propTypes = {
  onClick: PropTypes.func,
};

About.defaultProps = {
  onClick: () => {},
};

export default About;
