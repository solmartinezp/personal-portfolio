import React from "react";
import { useNavigate } from "react-router-dom";
import StackIcon from '../../components/StackIcon';
import './style.css';
import ReactJS from '../../assets/reactJS.png';
import ReactNative from '../../assets/reactNATIVE.png';
import Typescript from '../../assets/typescript.jpeg';
import CSSIcon from '../../assets/css.png';
import Expo from '../../assets/expo.svg';
import GCP from '../../assets/gcp.png';
import Git from '../../assets/git.png';
import HTMLIcon from '../../assets/html.png';
import Javascript from '../../assets/js.jpeg';
import MongoDB from '../../assets/mongodb.png';
import Node from '../../assets/node.png';
import MySQL from '../../assets/sql.png';

import StarButton from "../../components/Buttons/StarButton";
const Stack = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  const handleGoBack = () => {
    navigate('/about');
  };

  return (
    <>
      <span class="material-symbols-outlined" id="back" onClick={handleGoBack}>
        west
      </span>
      <div className="stack-hero">
        <h1>My Stack:</h1>

        <div className="stack-list">
          <div class="grid-item">
            <StackIcon icon={ReactJS} />
          </div>
          <div class="grid-item">
            <StackIcon icon={ReactNative} />
          </div>
          <div class="grid-item">
            <StackIcon icon={Typescript} />
          </div>
          <div class="grid-item">
            <StackIcon icon={Expo} />
          </div>
          <div class="grid-item">
            <StackIcon icon={HTMLIcon} />
          </div>
          <div class="grid-item">
            <StackIcon icon={CSSIcon} />
          </div>
          <div class="grid-item">
            <StackIcon icon={Javascript} />
          </div>
          <div class="grid-item">
            <StackIcon icon={Node} />
          </div>
          <div class="grid-item">
            <StackIcon icon={MySQL} />
          </div>
          <div class="grid-item">
            <StackIcon icon={MongoDB} />
          </div>
          <div class="grid-item">
            <StackIcon icon={GCP} />
          </div>
          <div class="grid-item">
            <StackIcon icon={Git} />
          </div>
        </div>
        <StarButton title="My Projects" handleClick={handleClick} />
      </div>
    </>
  )
};

export { Stack };
