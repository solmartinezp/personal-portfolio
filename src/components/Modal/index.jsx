import * as React from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import './style.css';
import SeeMoreCard from '../Cards/SeeMoreCard';

const style = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'transparent',
  p: 4,
};

export default function ModalComponent({ open, handleClose, project} ) {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [gitUrl, setGitUrl] = React.useState('');
  const [url, setUrl] = React.useState('');

  const handleInfo = () => {
    switch(project) {
        case 'Tipie App':
          setTitle('Tipie App');
          setDescription('A digital platform that handles collecting tips with credit and debit cards to distribute them among the staff of the business.');
          setGitUrl('');
          setUrl('https://tipieapp.com/');  
          break;
        case 'Plantazu':
          setTitle('Plantazu');
          setDescription('Landing page for a gardening venture');
          setGitUrl('https://github.com/solmartinezp/plantazu');
          setUrl('https://solmartinezp.github.io/plantazu/');
            break;
        case 'Podcast Channel':
          setTitle('Podcast Channel');
          setDescription('Landing page for a podcast channel');
          setGitUrl('https://github.com/solmartinezp/solmartinezp.github.io');
          setUrl('https://solmartinezp.github.io/');       
            break;
        case 'GIFOS':
          setTitle('GIFOS');
          setDescription('Interactive web application where you can share animated GIFs, by obtaining data from the Giphy.com API');
          setGitUrl('https://github.com/solmartinezp/proyecto-gifos');
          setUrl('https://solmartinezp.github.io/proyecto-gifos/');       
            break;
        case 'Delilah Resto':
          setTitle('Delilah Resto');
          setDescription('Food ordering app for restaurants');
          setGitUrl('https://github.com/solmartinezp/delilah-resto');
          setUrl('');
            break;
        case 'Random Image':
          setTitle('Random Image');
          setDescription('Web application that interacts with the Lorem Picsum API to show images with the dimensions indicated by the user');
          setGitUrl('https://github.com/solmartinezp/get-random-image');
          setUrl('https://solmartinezp.github.io/get-random-image/');       
            break;
        case 'Weather App':
          setTitle('Weather App');
          setDescription('Web application that interacts with the Geocoding and the Weatherstack APIs to deliver the weather of an address indicated by the user');
          setGitUrl('https://github.com/solmartinezp/node-weather-website');
          setUrl('');       
            break;
        case 'Join the Savage':
          setTitle('Join the Savage');
          setDescription('Landing page for a music band');
          setGitUrl('');
          setUrl('https://jointhesavage.netlify.app/');       
            break;
        default: 
            //
            break;
    }
  };

  React.useEffect(() => {
    handleInfo();
  }, [project]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <SeeMoreCard project={project} title={title} description={description} gitUrl={gitUrl} url={url} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}