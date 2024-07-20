import React from 'react';
import './style.css';
import StarButton from "../../components/Buttons/StarButton";
import { useNavigate } from "react-router-dom";
import ImageScroller from '../../components/ImageScroller';
import ModalComponent from '../../components/Modal';

const Projects = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [project, setProject] = React.useState('');

  const handleProject = (x) => {
    setProject(x);
    handleOpen();
  }

  const handleClick = () => {
    navigate('/contact');
  };

  const handleGoBack = () => {
    navigate('/stack');
  };

  return (
    <>
      <span class="material-symbols-outlined" id="back" onClick={handleGoBack}>
        west
      </span>
      <div className="projects-hero">
        <h1>My Projects:</h1>

        <div style={{ width: '35%', margin: 0, padding: 0 }}>
          <ImageScroller handleProject={handleProject} />
        </div>
        <StarButton title="Contact me" handleClick={handleClick} marginTop={0} />

        <ModalComponent open={open} handleClose={handleClose} project={project} />
      </div>
    </>
  );
}

export { Projects };
