import React, { useState, useRef, useEffect } from "react";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  Arrow,
  SliderButtons,
  PrevArrow,
  NextArrow,
  DotsContainer,
  Dots,
} from "./HeroElements";
import { Button } from "../Button/Button";
import { ScrollTop } from "../ScrollTop";
import Carousel from "framer-motion-carousel";
import "./HeroStyle.css";
const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);



  return (
    <HeroSection>
      <HeroWrapper>
        <Carousel interval={50500}>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage draggable='false' src={slide.image} alt={slide.alt} />
                    <HeroContent>
                      <h1>{slide.title}</h1>
                      <p>{slide.price}</p>
                      <Button
                        to={slide.path}
                        primary="true"
                        css={`
                          max-width: 160px;
                        `}
                        onClick={ScrollTop}
                      >
                        {slide.label}
                        <Arrow />
                      </Button>
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}
        
        </Carousel>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
