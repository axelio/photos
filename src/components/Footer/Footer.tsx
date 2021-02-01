import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () =>
    <footer>
        <a href="https://www.github.com/axelio/my-pictures" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
    </footer>


export default Footer; 