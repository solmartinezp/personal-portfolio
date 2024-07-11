import React from "react";
import VisitButton from "../../components/Buttons/VisitButton";
import { useNavigate } from "react-router-dom";
import './style.css';

const Contact = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/projects');
  };

  return (
    <>
      <span class="material-symbols-outlined" id="back" onClick={handleGoBack}>
        west
      </span>
      <div className="contact-hero">
        <h1>Contact me:</h1>

        <div className="contact-btns">
          <VisitButton contact title="Linkedin" />
          <VisitButton contact title="Email" />
          <VisitButton contact title="Download CV" />
        </div>
      </div>
    </>
  );
}

export { Contact };

