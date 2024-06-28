import React from "react";
import StarButton from "../../components/Buttons/StarButton";
import VisitButton from "../../components/Buttons/VisitButton";

import './style.css';

// import { motion } from 'framer-motion';

const Contact = () => (
  <div className="contact-hero">
        <h1>Contact me:</h1>

        <div className="contact-btns">
          <VisitButton contact title="Linkedin" />
          <VisitButton contact title="Email" />
          <VisitButton contact title="Download CV" />
        </div>
  </div>
);

export { Contact };

