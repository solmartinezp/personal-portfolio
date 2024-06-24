import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bubbles } from "../../components/Bubbles";
import { Nav } from '../../components/Nav';
import { Outlet } from "react-router-dom";
import Spline from '@splinetool/react-spline';

import StarButton from "../../components/Buttons/StarButton";
import InteractiveWarning from '../../components/InteractiveWarning';
import './style.css';

import { motion } from 'framer-motion';

const Layout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <motion.div className="layout-div"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}} 
      exit={{ opacity: 0}}
    >
      <Spline
        scene="https://prod.spline.design/gjbT-JsiWSDhPhOF/scene.splinecode"
      />
      <Nav />
      <Bubbles />
      <Outlet />
  
      <div className="layout-hero">
        <h1>Hi! I'm Sol.</h1>
        <h3>I'm a Fullstack Web Developer.</h3>
  
        <StarButton title="Get started" handleClick={handleClick} />
      </div>
  
      <InteractiveWarning />
    </motion.div>
  );
}

export { Layout };
