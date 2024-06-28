import React, { useEffect, useRef, useState } from 'react';
import Card from '../Cards/ProjectCard';
import './style.css';

const ImageScroller = ( { handleOpen, handleProject } ) => {
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
        <Card title="Tipie App" image="TIPIE" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Podcast Channel" image="PODCAST" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Gifos App" image="GIFOS" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Delilah Resto" image="DELILAH" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Get Random Image" image="RANDOM" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Plantazu" image="PLANTAZU" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Join the savage" image="JOIN" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Weather App" image="WEATHER" handleOpen={handleOpen} handleProject={handleProject} />
      </div>
    </div>
  );
};

export default ImageScroller;
