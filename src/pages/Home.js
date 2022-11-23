import React from "react";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import { SliderData } from "../data/SliderData";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import HousesSectionHomePage from "../components/HousesSection/HousesSectionHomePage";
import { motion } from "framer-motion";
import { AnimationRoutesSettings } from "../AnimationRoutesSettings";

function Home() {
  return (
    <motion.div {...AnimationRoutesSettings}>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <HousesSectionHomePage />
      <InfoSection {...InfoDataTwo} />
    </motion.div>
  );
}

export default Home;
