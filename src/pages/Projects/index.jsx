import React from 'react';
import './style.css';

import InteractiveWarning from "../../components/InteractiveWarning";
import StarButton from "../../components/Buttons/StarButton";
import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import ImageScroller from '../../components/ImageScroller';

const Projects = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <motion.div
      className="projects-div"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}} 
      exit={{ opacity: 0}}
    >
        <Spline scene="https://prod.spline.design/gjbT-JsiWSDhPhOF/scene.splinecode"
        />
  
        <div className="projects-hero">
          <h1>My Projects:</h1>

          <div style={{ width: '40%', margin: 0, padding: 0 }}>
            <ImageScroller />
          </div>
          <StarButton title="Contact me" handleClick={handleClick}/>
        </div>
  
        <InteractiveWarning />
    </motion.div>
  );
}

export { Projects };
