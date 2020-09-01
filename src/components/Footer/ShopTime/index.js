import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import "../ShopTime/index.css";

const shopTimes = [
  {
    day: "Monday",
    times: "08:00AM - 21:00PM",
  },
  {
    day: "Tuesday",
    times: "08:00AM - 21:00PM",
  },
  {
    day: "Wednesday",
    times: "08:00AM - 21:00PM",
  },
  {
    day: "Thursday",
    times: "08:00AM - 21:00PM",
  },
  {
    day: "Friday",
    times: "08:00AM - 21:00PM",
  },
  {
    day: "Saturday",
    times: "08:00AM - 21:00PM",
  },
  {
    day: "Sunday",
    times: "Closed",
  },
];

const ShopTime = () => {
  return (
    <Col lg={4} md={6} sm={12} className="description-wrapper">
      <h4 className="title">Shop time</h4>
      <ListGroup className="description shop-time" as="ul">
        {shopTimes.map((shopTime) => {
          return (
            <ListGroup.Item
              key={shopTime.day}
              className="shop-time-item"
              as="li"
            >
              <span className="shop-time-item-day">{shopTime.day}</span>

              <span as="span" className="shop-time-item-times">
                {shopTime.times}
              </span>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Col>
  );
};

export default ShopTime;
