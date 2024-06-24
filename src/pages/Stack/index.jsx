import React from "react";
import { useNavigate } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import StackIcon from '../../components/StackIcon';
import './style.css';
import ReactJS from '../../assets/reactJS.png'

import { motion } from 'framer-motion';
import InteractiveWarning from "../../components/InteractiveWarning";
import StarButton from "../../components/Buttons/StarButton";
const Stack = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  return (
    <motion.div
    className="stack-div"
    initial={{ opacity: 0}}
    animate={{ opacity: 1}} 
    exit={{ opacity: 0}}
  >
      <Spline scene="https://prod.spline.design/gjbT-JsiWSDhPhOF/scene.splinecode"
      />

      <div className="stack-hero">
        <h1>My Stack:</h1>

        <div className="stack-list">
          <StackIcon icon={ReactJS} color1="#61dbfb" color2="#347384" />
          <div class="grid-item">React Native</div>
          <div class="grid-item">Typescript</div>
          <div class="grid-item">Expo Go</div>  
          <div class="grid-item">HTML</div>
          <div class="grid-item">CSS</div>  
          <div class="grid-item">Javascript</div>
          <div class="grid-item">NodeJS</div>
          <div class="grid-item">MySQL</div>  
          <div class="grid-item">NoSQL</div>
          <div class="grid-item">GCP</div>
          <div class="grid-item">Git</div>

        </div>
        <StarButton title="My Projects" handleClick={handleClick}/>
      </div>

      <InteractiveWarning />
  </motion.div >
  )
};

export { Stack };
