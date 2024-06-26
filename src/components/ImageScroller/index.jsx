import React, { useEffect, useRef, useState } from 'react';
import Card from '../Card';
import './style.css';

const ImageScroller = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused) {
          scrollAmount += 1;
          container.scrollLeft = scrollAmount;
          if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            scrollAmount = 0; // Reset to start
          }
        }
      }, 20);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    container.addEventListener('mouseenter', () => setIsPaused(true));
    container.addEventListener('mouseleave', () => setIsPaused(false));

    startScrolling();
    return () => {
      stopScrolling();
      container.removeEventListener('mouseenter', () => setIsPaused(true));
      container.removeEventListener('mouseleave', () => setIsPaused(false));
    };
  }, [isPaused]);

  return (
    <div className="image-scroller-div">
      <div className="image-scroller-container" ref={containerRef}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* {[...Array(10)].map((_, index) => (
          <div key={index} className="box">
            <Card />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ImageScroller;
