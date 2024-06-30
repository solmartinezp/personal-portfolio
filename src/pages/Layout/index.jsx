import React, { useRef, useEffect, useState } from "react";
import { Bubbles } from "../../components/Bubbles";
import { Outlet } from "react-router-dom";
import Spline from '@splinetool/react-spline';

import InteractiveWarning from '../../components/InteractiveWarning';
import './style.css';

const Layout = () => {
  return (
      <div className="layout-div"
      >
        <Spline
          scene="https://prod.spline.design/gjbT-JsiWSDhPhOF/scene.splinecode"
        />
        <Bubbles />
        <Outlet />
    
        <InteractiveWarning />
      </div>
  );
}

export { Layout };
