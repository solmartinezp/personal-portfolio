import React from "react";
import './style.css';

const Bubbles = () => {
  const duration = 1200;

  return (
    <div id="bubbles">
      <div style={{ animationDuration: `${duration}ms` }} className="bubbles__first" />
      <div style={{ animationDuration: `${duration}ms` }} className="bubbles__second" />
    </div>
  );
};

export { Bubbles };
