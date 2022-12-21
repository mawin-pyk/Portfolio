import React, { useState, useEffect } from 'react';
import '../styles/header.css';

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const header = document.querySelector(".Header");
        if (scrollPosition > 90) {
            header.style.fontSize = "1.2rem";
            header.style.boxShadow = "0px 4px 6px 0px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.fontSize = "1.6rem";
            header.style.boxShadow = "unset";
        }

        const sections = document.querySelectorAll("section");
        const menus = document.querySelectorAll(".header-content a");
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop - sectionHeight / 2.5) current = section.getAttribute("id");
        });
        menus.forEach((menu) => {
            menu.classList.remove("active");
            if (menu.classList.contains(current)) menu.classList.add("active");
        });

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
        <div className="Header">
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
                        <a className="home active" href="#home">Home</a>
                        <a className="about" href="#about">About me</a>
                        <a className="skill" href="#skill">My Skills</a>
                        <a className="project" href="#project">Projects</a>
                        <a className="contact" href="#contact">Contact</a>
                    </nav>
                </div>
                <nav className="header__menu">
                    <a className="home active" href="#home">Home</a>
                    <a className="about" href="#about">About me</a>
                    <a className="skill" href="#skill">My Skills</a>
                    <a className="project" href="#project">Projects</a>
                    <a className="contact" href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    );
}

export default Header;