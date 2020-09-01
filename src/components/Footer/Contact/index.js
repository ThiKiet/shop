import React from "react";
import { ListGroup, Col, Image } from "react-bootstrap";
import "../Contact/index.css";
import "../../../common/index.css";
import Phone from "../../../assets/icon/phone-min.png";
import Email from "../../../assets/icon/mail-min.png";
import Location from "../../../assets/icon/location-min.png";

const Contact = () => {
  return (
    <Col lg={4} md={6} sm={12} className="description-wrapper">
      <ListGroup as="ul">
        <h4 className="title">Contact</h4>

        <ListGroup.Item className="description contact" as="li">
          <a className="contact" href="mailto:gokymilktea@gmail.com">
            <Image
              className="contact-icon mail"
              src={Email}
              alt="Email" />
            <span>gokymilktea@gmail.com</span>
          </a>
        </ListGroup.Item>

        <ListGroup.Item className="description contact" as="li">
          <a className="contact" href="/#">
            <Image
              className="contact-icon mail"
              src={Location}
              alt="Location"
            />
            <span>101B Le Huu Trac, An Hai Dong, Son Tra , Da Nang</span>
          </a>
        </ListGroup.Item>

        <ListGroup.Item className="description contact" as="li">
          <a className="contact" href="tel:(+84) 336 793 601">
            <Image
              className="contact-icon mail"
              src={Phone}
              alt="Phone" />
            <span>(+84) 336 793 601</span>
          </a>
        </ListGroup.Item>

        <ListGroup.Item className="description contact channel" as="li">
          <Col className="social" as="a" href="/#">
            <span className="social-icon facebook" />
          </Col>

          <Col className="social" as="a" href="/#">
            <span className="social-icon youtube" />
          </Col>

          <Col className="social" as="a" href="/#">
            <span className="social-icon google" />
          </Col>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  );
};

export default Contact;
