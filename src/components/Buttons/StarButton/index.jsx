import React from 'react';
import Star from './Star';
import './style.css';

const StarButton = ({ title, handleClick }) => {
  return (
    <button className="star-button" onClick={handleClick}>
      {title}
      <span class="material-symbols-outlined">
        arrow_forward
      </span>
    </button>
  );
};

export default StarButton;
