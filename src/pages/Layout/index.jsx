import React from "react";
import { Bubbles } from "../../components/Bubbles";
import { Nav } from '../../components/Nav';
import { Outlet } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import StarButton from "../../components/Buttons/StarButton";

import './style.css';

const Layout = () => (
  <div className="layout-div">
    <Spline scene="https://prod.spline.design/gjbT-JsiWSDhPhOF/scene.splinecode" />
    <Nav />
    <Bubbles />
    <Outlet />

    <div className="layout-hero">
      <h1>Hi! I'm Sol.</h1>
      <h3>I'm a Fullstack Web Developer.</h3>

      <StarButton title="Get started" />
    </div>

    <div className='layout-3d'>
      <span class="material-symbols-outlined">
        swipe_vertical
      </span>
      <p>
        This is a 3D interactive background.
      </p>
      <p>
        Feel free to move around!
      </p>
    </div>
  </div>
);

export { Layout };
