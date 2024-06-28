import { useState, useEffect } from 'react';
import Github from '../../../assets/git.png';
import './style.css';

export default function VisitButton({title, gitUrl, url}) {
    const handleVisit = () => {
        if (title === 'Visit the website') {
            if (url) {
                // ir a la url
            }
        } else {
            // ir al repo
        }
    };

    return (
        <button class="visit-btn" onClick={handleVisit}>
            {title}
            {title === 'Visit the website' ? (
                <span class="material-symbols-outlined">
                travel_explore
                </span>
            ) : (
                <img className="visit-img" src={Github} alt="Github" />
            )
            }
        </button>
    );
};