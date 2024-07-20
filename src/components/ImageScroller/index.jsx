import React, { useEffect, useRef, useState } from 'react';
import Card from '../Cards/ProjectCard';
import './style.css';

const ImageScroller = ({ handleOpen, handleProject }) => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollInterval, setScrollInterval] = useState(null);

  useEffect(() => {
    const container = containerRef.current;

    const startScrolling = () => {
      const interval = setInterval(() => {
        if (!isPaused) {
          container.scrollLeft += 1;
        }
      }, 10);
      setScrollInterval(interval);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    };

    container.addEventListener('mouseenter', () => setIsPaused(true));
    container.addEventListener('mouseleave', () => setIsPaused(false));

    startScrolling();

    return () => {
      stopScrolling();
      container.removeEventListener('mouseenter', () => setIsPaused(true));
      container.removeEventListener('mouseleave', () => setIsPaused(false));
    };
  }, [isPaused, scrollInterval]);

  return (
    <div className="image-scroller-div">
      <div className="image-scroller-container" ref={containerRef}>
        <Card title="Tipie App" image="TIPIE" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Podcast Channel" image="PODCAST" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Gifos App" image="GIFOS" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Delilah Resto" image="DELILAH" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Second Sense" image="SECOND" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Get Random Image" image="RANDOM" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Plantazu" image="PLANTAZU" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Join the savage" image="JOIN" handleOpen={handleOpen} handleProject={handleProject} />
        <Card title="Weather App" image="WEATHER" handleOpen={handleOpen} handleProject={handleProject} />
      </div>
    </div>
  );
};

export default ImageScroller;
