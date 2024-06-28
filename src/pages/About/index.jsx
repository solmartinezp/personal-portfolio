import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

import { motion } from 'framer-motion';
import StarButton from "../../components/Buttons/StarButton";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/stack');
  };

  return (
  //   <motion.div
  //   className="about-div"
  //   initial={{ opacity: 0}}
  //   animate={{ opacity: 1}} 
  //   exit={{ opacity: 0}}
  // >
  //     <Spline scene="https://prod.spline.design/gjbT-JsiWSDhPhOF/scene.splinecode"
  //     />

      <div className="about-hero">
        <h1>About me:</h1>

        <h4>I have a solid background developing back and frontend applications, including both web and mobile.</h4>

        <StarButton title="Tech Stack" handleClick={handleClick}/>
      </div>

  //     <InteractiveWarning />
  // </motion.div >
  )
};

export { About };
