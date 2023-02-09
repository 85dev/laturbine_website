import React from "react";
import './footer.css';
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillDribbbleCircle} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Nicolas Mercier</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Know-How</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://linkedin.com"><AiFillLinkedin /></a>
                <a href="https://dribbble.com"><AiFillDribbbleCircle/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Nicolas Mercier 2023, all rights reserved. </small>
            </div>
        </footer>
    )
}

export default Footer