import React from 'react';
import './style.css';

const StackIcon = ({ icon, color1, color2 }) => {
  return (
    <div className="coin"
    >
      <div className="side heads">
        {icon && (
          <svg xmlns="http://www.w3.org/2000/svg" className="svg_back" xmlSpace="preserve" width="100%" height="100%" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 2300 2300" xmlnsXlink="http://www.w3.org/1999/xlink">
            <image xlinkHref={icon} width="100%" height="100%" />
          </svg>
        )}
      </div>
      <div className="side tails">
      {icon && (
          <svg xmlns="http://www.w3.org/2000/svg" className="svg_back" xmlSpace="preserve" width="100%" height="100%" version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 2300 2300" xmlnsXlink="http://www.w3.org/1999/xlink">
            <image xlinkHref={icon} width="100%" height="100%" />
          </svg>
        )}
      </div>
    </div>
  );
}

export default StackIcon;
