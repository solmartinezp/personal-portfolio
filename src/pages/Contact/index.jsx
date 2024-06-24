import React from "react";
import { Nav } from "../../components/Nav";
import './style.css';

import { motion } from 'framer-motion';

const Contact = () => (
  <motion.section
    style={{ background: "#fff", color: "#000" }}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}} 
    exit={{ opacity: 0}}
  >
    <Nav title="Contact" />
    <h1>Contact</h1>
  </motion.section>
);

export { Contact };

