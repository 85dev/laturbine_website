import React, { useEffect, useRef } from 'react';
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-4.png'
import HeaderSocials from "./HeaderSocials"

const Header = () => {
    useEffect(() => {
        const parallaxDomElement = document.querySelector('#parallax__1');
          document.addEventListener("mousemove", function (e) {
            let x = e.clientX;
            let y = e.clientY;

            parallaxDomElement.style.transform = `translate(${x}px, ${y}px})`;
            parallaxDomElement.style.backgroundPositionX = y * 100 + "%";
          })
    }, []);

    return (
        <header>
            <div className="container header__container">
                <div/>
                <h1 id="parallax__1">Nicolas Mercier</h1>
                <h4>Fullstack Developer</h4>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>

            </div>
        </header>
    )
}

export default Header