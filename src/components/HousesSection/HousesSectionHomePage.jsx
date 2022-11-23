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
import { HousesDataHomePage } from "../../data/HousesData";

const HousesSectionHomePage = () => {
    return (
        <HSSection>
          <HSContainer>
            <HSHeading>View our newest Homes</HSHeading>
            <HSItemsWrapper>
              {HousesDataHomePage.map((item, index) => (
                <HSItem key={index}>
                  <img src={item.image} />
                  <p>{item.text}</p>
                  <Button to="/" primary="true">
                    {item.buttonLabel} <Arrow />
                  </Button>
                </HSItem>
              ))}
            </HSItemsWrapper>
          </HSContainer>
        </HSSection>
      );
}

export default HousesSectionHomePage