import React, { useState, useEffect } from 'react';
import '../styles/header.css';

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const header = document.querySelector(".header");
        if (scrollPosition > 100) {
            header.style.fontSize = "1.2rem";
            header.style.backgroundColor = "var(--white)";
            header.style.boxShadow = "0px 2px 4px 0px rgba(0, 0, 0, 0.25)";
        } else {
            header.style.fontSize = "1.6rem";
            header.style.backgroundColor = "unset";
            header.style.boxShadow = "unset";
        }

        window.addEventListener("scroll", scrollEvent);

        return () => {
            window.removeEventListener("scroll", scrollEvent);
        }
    }, [scrollPosition]);

    const scrollEvent = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    }

    return (
        <div className="header">
            <div className="header-content">
                <div className="header__logo">
                    <h1>Mawin &lt;/&gt;</h1>
                </div>
                <div className="header__bar-icon">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <nav className="header__bar-menu">
                        <a href="#home">Home</a>
                        <a href="#about-me">About me</a>
                        <a href="#skill">Skills</a>
                        <a href="#project">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
                <nav className="header__menu">
                    <a href="#home">Home</a>
                    <a href="#about-me">About me</a>
                    <a href="#skill">Skills</a>
                    <a href="#project">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    );
}

export default Header;