import React from 'react';
import Tipie from '../../../assets/tipieapp.gif';
import Plantazu from '../../../assets/plantazu.gif';
import Podcast from '../../../assets/podcast.gif';
import Gifos from '../../../assets/gifos.gif';
import Delilah from '../../../assets/delilahresto.gif';
import GetRandom from '../../../assets/get-random.gif';
import Join from '../../../assets/jointhesavage.gif';
import Weather from '../../../assets/weather-app.gif';
import SecondSense from '../../../assets/secondsense.gif';

import Loader from '../../Loader';

import './style.css';

const Card = ({ title, handleOpen, handleProject, image }) => {
    const [source, setSource] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    const getImage = (img) => {
        switch(img) {
            case 'TIPIE':
                setSource(Tipie);
                break;
            case 'PLANTAZU':
                setSource(Plantazu);
                break;
            case 'PODCAST':
                setSource(Podcast);
                break;
            case 'GIFOS':
                setSource(Gifos);
                break;
            case 'DELILAH':
                setSource(Delilah);
                break;
            case 'RANDOM':
                setSource(GetRandom);
                break;
            case 'WEATHER':
                setSource(Weather);
                break;
            case 'JOIN':
                setSource(Join);
                break;
            case 'SECOND':
                setSource(SecondSense);
                break;
            default: 
                //
                break;
        }
    };

    React.useEffect(() => {
        getImage(image);
        setLoading(false);
    }, [image]);

    const handleClick = (t) => {
        handleProject(t);
    };

    return (
            <div className="cards" >
            <figure className="card">
                {
                    loading ? (
                        <Loader />
                    ) :  <img className="card-image" src={source} alt="Project" /> 
                }
                <figcaption className="card_title">{title}</figcaption>

                <button className="card-button" onClick={() => handleClick(title)}>See more</button>
            </figure>
        </div>
    );
}

export default Card;
