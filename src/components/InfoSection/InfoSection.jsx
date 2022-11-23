import React from "react";
import { Button } from "../Button/Button";
import { Section, Container, ColumnLeft, ColumnRight} from "./InfoSectionElements";
import { Arrow } from "../Hero/HeroElements";
import { ScrollTop } from '../ScrollTop'

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft reverse={reverse}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes" primary='true' onClick={ScrollTop}>{buttonLabel} <Arrow /></Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
