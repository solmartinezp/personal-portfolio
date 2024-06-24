import React from "react";
import { useNavigate } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import StackIcon from '../../components/StackIcon';
import './style.css';
import ReactJS from '../../assets/reactJS.png';
import ReactNative from '../../assets/reactNATIVE.svg';
import Typescript from '../../assets/typescript.png';
import CSSIcon from '../../assets/css.png';
import Expo from '../../assets/expo.svg';
import GCP from '../../assets/gcp.png';
import Git from '../../assets/git.png';
import HTMLIcon from '../../assets/html.png';
import Javascript from '../../assets/js.png';
// import MongoDB from '../../assets/mondo.webp';
import Node from '../../assets/node.png';
import MySQL from '../../assets/sql.png';

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
          <div class="grid-item">
             <StackIcon icon={ReactJS} color1="#61dbfb" color2="#347384" />
          </div>
          <div class="grid-item">
              <StackIcon icon={ReactNative} color1="#61dbfb" color2="#347384" />
          </div>
          <div class="grid-item">
              <StackIcon icon={Typescript} color1="#61dbfb" color2="#347384" />
          </div>
          <div class="grid-item">
            <StackIcon icon={HTMLIcon} color1="#61dbfb" color2="#347384" />
          </div>  
          <div class="grid-item">
            <StackIcon icon={CSSIcon} color1="#61dbfb" color2="#347384" />
          </div>
          <div class="grid-item">
            <StackIcon icon={Javascript} color1="#61dbfb" color2="#347384" />
          </div>  
          <div class="grid-item">
            <StackIcon icon={Expo} color1="#61dbfb" color2="#347384" />
          </div>
          <div class="grid-item">
            <StackIcon icon={Node} color1="#61dbfb" color2="#347384" />
          </div>
          <div class="grid-item">
            <StackIcon icon={MySQL} color1="#61dbfb" color2="#347384" />
          </div>
          <div class="grid-item">
            <StackIcon icon={MySQL} color1="#61dbfb" color2="#347384" />
          </div>  
          <div class="grid-item">     
            <StackIcon icon={GCP} color1="#61dbfb" color2="#347384" />
          </div>
          <div class="grid-item">
            <StackIcon icon={Git} color1="#61dbfb" color2="#347384" />
          </div>
        </div>
        <StarButton title="My Projects" handleClick={handleClick}/>
      </div>

      <InteractiveWarning />
  </motion.div >
  )
};

export { Stack };
