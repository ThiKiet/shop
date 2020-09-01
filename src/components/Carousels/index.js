import React, { useState } from "react";
import { Carousel as BootstrapCarousel, Container } from "react-bootstrap";
import { CAROUSELES } from "../../constants/carousel";
import CarouselItem from "./CarouselItem/index";
import "../../common/index.css";
import "./index.css";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid="true">
      <BootstrapCarousel activeIndex={index} onSelect={handleSelect}>
        {CAROUSELES.map((carousel, index) => (
          <BootstrapCarousel.Item key={index}>
            <CarouselItem
              title={carousel.title}
              image={carousel.image}
              description={carousel.description}
              alt={carousel.alt}
            />
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>
    </Container>
  );
};

export default Carousel;
