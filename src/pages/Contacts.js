import React from "react";
import Contacts from "../components/Contacts/Contacts";
import { motion } from "framer-motion";
import { AnimationRoutesSettings } from "../AnimationRoutesSettings";

function Contacts() {
  return (
    <motion.div {...AnimationRoutesSettings}>
      <Contacts />
    </motion.div>
  );
}

export default Contacts;
