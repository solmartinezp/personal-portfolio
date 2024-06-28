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
        case 'TIPIE':
          setTitle();
          setDescription();
          setGitUrl();
          setUrl();       
          break;
        case 'PLANTAZU':
          setTitle();
          setDescription();
          setGitUrl();
          setUrl();       
            break;
        case 'PODCAST':
          setTitle();
          setDescription();
          setGitUrl();
          setUrl();       
            break;
        case 'GIFOS':
          setTitle();
          setDescription();
          setGitUrl();
          setUrl();       
            break;
        case 'DELILAH':
          setTitle();
          setDescription();
          setGitUrl();
          setUrl();       
            break;
        case 'RANDOM':
          setTitle();
          setDescription();
          setGitUrl();
          setUrl();       
            break;
        case 'WEATHER':
          setTitle();
          setDescription();
          setGitUrl();
          setUrl();       
            break;
        case 'JOIN':
          setTitle();
          setDescription();
          setGitUrl();
          setUrl();       
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
            <SeeMoreCard title="Tipie App" description="adjasdkjahsdkashdkasdhkasdhaksjdhaksdhaksdhaksjdhakjsdhaksdhaksjdhaksjdh" />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}