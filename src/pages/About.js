import React from "react";
import InfoSection from "../components/InfoSection/InfoSection";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import { motion } from "framer-motion";
import { AnimationRoutesSettings } from "../AnimationRoutesSettings";

function About() {
  return (
    <motion.div {...AnimationRoutesSettings}>
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </motion.div>
  );
}

export default About;
