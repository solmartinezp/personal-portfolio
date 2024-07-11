import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

import StarButton from "../../components/Buttons/StarButton";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/stack');
  };
  
  const handleGoBack = () => {
    navigate('/');
  };

   return (
      <>
        <span class="material-symbols-outlined" id="back" onClick={handleGoBack}>
          west
        </span>
        <div className="about-hero">
        <h1>About me:</h1>

        <h4>From designing intuitive user interfaces (both web and mobile), to architecting robust backend solutions, I thrive on transforming ideas into responsive and scalable digital experiences.</h4>

        <h4>Let's build something incredible together!</h4>

        <StarButton title="Tech Stack" handleClick={handleClick} />
        </div>
      </>
  )
};

export { About };
