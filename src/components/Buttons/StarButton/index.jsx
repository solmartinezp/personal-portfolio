import React from 'react';
import Star from './Star';
import './style.css';

const StarButton = ({ title }) => {
  return (
    <button className="star-button">
      {title}
    </button>
  );
};

export default StarButton;
