import React from "react";
import { useNavigate } from "react-router-dom";

import StarButton from "../../components/Buttons/StarButton";
import './style.css';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };


  return (
    <div className="layout-hero">
      <h1>Hi! I'm Sol.</h1>
      <h3>I'm a Fullstack Web Developer.</h3>

      <StarButton title="Get started" handleClick={handleClick} />
    </div>
  );
}

export { Home };
