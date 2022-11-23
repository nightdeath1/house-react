import React from "react";
import { Button } from "../Button/Button";
import {
  HSSection,
  HSContainer,
  HSHeading,
  HSItemsWrapper,
  HSItem,
} from "./HousesSectionElements";
import { Arrow } from "../Hero/HeroElements";
import { HousesData } from "../../data/HousesData";

const HousesSection = () => {
  return (
    <HSSection>
      <HSContainer>
        <HSHeading>View our newest Homes</HSHeading>
        <HSItemsWrapper>
          {HousesData.map((item, index) => (
            <HSItem key={index}>
              <img src={item.image} />
              <p>{item.text}</p>
              <Button primary="true">
                {item.buttonLabel} <Arrow />
              </Button>
            </HSItem>
          ))}
        </HSItemsWrapper>
      </HSContainer>
    </HSSection>
  );
};

export default HousesSection;

{
  /* <HSItem>
            <img src={Image1} />
            <p>4 Bed 2 Bath Houses in Miami, Florida</p>
            <Button to="/homes" primary="true">View Details <Arrow /></Button>
          </HSItem> */
}
