import { useState, useEffect } from 'react';
import Github from '../../../assets/git.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import CurriculumVitae from '../../../assets/Sol_Martinez_CV.pdf';
import './style.css';

export default function VisitButton({title, gitUrl, url, contact}) {
    const linkedinUrl = process.env.LINKEDIN_URL;
    const emailAddress = process.env.EMAIL_ADRESS;

    const handleVisit = () => {
        switch(title) {
            case 'Visit the website':
                if (url) {
                    window.open(url, '_blank');
                }
            break;
            case 'Visit the repository':
                if (gitUrl) {
                    window.open(gitUrl, '_blank');
                }                
            break;
            case 'Download CV':
                const downloadLink = document.createElement('a');
                downloadLink.href = CurriculumVitae;
                downloadLink.download = 'Sol_Martinez_CV.pdf'; // Specify the desired filename
                downloadLink.click();
                break;
            case 'Linkedin':
               window.open(linkedinUrl, '_blank');
            break;
            case 'Email':
                window.location.href = `mailto:${emailAddress}`;
            break;
        }
    };

    const Icon = ({ title }) => {
        switch(title) {
            case 'Visit the website':
                return (
                    <span className="material-symbols-outlined">
                    travel_explore
                    </span>
                )
            break;
            case 'Visit the repository':
                return (
                    <img className="visit-img" src={Github} alt="Github" />
                )
            break;
            case 'Linkedin':
                return (
                    <LinkedInIcon />
                )
            break;
            case 'Download CV':
                return (
                    <DownloadIcon />
                );
            break;
            case 'Email':
                return (
                    <EmailIcon />
                );
            break;
        }
    };

    return (
        <button className={contact ? "contact-visit" : "visit-btn"} onClick={handleVisit}>
            {title}
            <Icon title={title} />
        </button>
    );
};