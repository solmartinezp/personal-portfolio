import React from 'react';
import './style.css';

// import InteractiveWarning from "../../components/InteractiveWarning";
import StarButton from "../../components/Buttons/StarButton";
// import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom";
// import { motion } from 'framer-motion'
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

  return (
    // <motion.div
    //   className="projects-div"
    //   initial={{ opacity: 0}}
    //   animate={{ opacity: 1}} 
    //   exit={{ opacity: 0}}
    // >
    //     <Spline scene="https://prod.spline.design/gjbT-JsiWSDhPhOF/scene.splinecode"
    //     />
  
        <div className="projects-hero">
          <h1>My Projects:</h1>

          <div style={{ width: '35%', margin: 0, padding: 0 }}>
            <ImageScroller handleProject={handleProject} />
          </div>
          <StarButton title="Contact me" handleClick={handleClick}/>

          <ModalComponent open={open} handleClose={handleClose} project={project} />
        </div>
  
        // <InteractiveWarning />
    // </motion.div>
  );
}

export { Projects };
