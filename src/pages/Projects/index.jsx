import React from "react";
import { Nav } from "../../components/Nav";
import './style.css';

import { motion } from 'framer-motion'

const Projects = () => (
  <motion.section
    style={{ background: "#fff", color: "#000" }}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}} 
    exit={{ opacity: 0}}
  >
    <Nav title="Projects" />
    <h1>Projects
      
    </h1>
  </motion.section>
);

export { Projects };