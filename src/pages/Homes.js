import React from "react";
import HousesSection from "../components/HousesSection/HousesSection";
import { motion } from "framer-motion";
import { AnimationRoutesSettings } from "../AnimationRoutesSettings";

function Homes() {
  return (
    <motion.div {...AnimationRoutesSettings}>
      <HousesSection />
    </motion.div>
  );
}

export default Homes;
