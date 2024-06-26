import React from 'react';
import './style.css';

const Card = ({ title, onClick, image }) => {
    return (
        <div className="cards" >
            <figure className="card">
                <img className="card-image" src={image} alt="Project" />
                <figcaption className="card_title">{title}</figcaption>
                <button className="card-button" onClick={onClick}>See more</button>
            </figure>
        </div>
    );
}

export default Card;
