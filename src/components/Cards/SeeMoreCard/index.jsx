import React from 'react';
import './style.css';

const SeeMoreCard = ({ title, description } ) => {
  return (
    <div className="see-container">
      <div className="see-card">
        <div className="front">
          <h1 className="heading"> {title} </h1>
        </div>
        <div className="back">
          <div className="icons">           
            <p className="heading">Visit the website:</p>
            <p className="heading">Visit the repository:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeMoreCard;
