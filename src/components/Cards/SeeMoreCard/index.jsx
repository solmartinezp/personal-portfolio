import React from 'react';
import Tipie from '../../../assets/tipieapp.gif';
import Plantazu from '../../../assets/plantazu.gif';
import Podcast from '../../../assets/podcast.gif';
import Gifos from '../../../assets/gifos.gif';
import Delilah from '../../../assets/delilahresto.gif';
import GetRandom from '../../../assets/get-random.gif';
import Join from '../../../assets/jointhesavage.gif';
import Weather from '../../../assets/weather-app.gif';

import VisitButton from '../../Buttons/VisitButton';
import './style.css';

const SeeMoreCard = ({ title, description, gitUrl, url } ) => {
  const [source, setSource] = React.useState('');

  const getImage = () => {
      switch(title) {
          case 'Tipie App':
              setSource(Tipie);
              break;
          case 'Plantazu':
              setSource(Plantazu);
              break;
          case 'Podcast Channel':
              setSource(Podcast);
              break;
          case 'GIFOS':
              setSource(Gifos);
              break;
          case 'Delilah Resto':
              setSource(Delilah);
              break;
          case 'Random Image':
              setSource(GetRandom);
              break;
          case 'Weather App':
              setSource(Weather);
              break;
          case 'Join the Savage':
              setSource(Join);
              break;
          default: 
              //
              break;
      }
  };

  React.useEffect(() => {
      getImage(title);
  }, [title]);

  return (
    <div className="see-container">
      <div className="see-card">
        <div className="front">
          <img className="see-image" src={source} alt="Project" />
          <h1 className="heading"> {title} </h1>
          <p className="see-description">{description}</p>
        </div>
        <div className="back">
          <div className="icons">           
            <VisitButton title="Visit the website" url={url} />
            <VisitButton title="Visit the repository" gitUrl={gitUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeMoreCard;
