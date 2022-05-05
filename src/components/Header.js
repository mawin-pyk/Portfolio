import React, { useEffect, useState } from 'react'
import './Header.css'

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const headerElement = document.querySelector(".Header")
        if (scrollPosition > 100) {
            headerElement.style.fontSize = "1.2rem"
            headerElement.style.backgroundColor = "var(--color-menu)"
            headerElement.style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
        } else {
            headerElement.style.fontSize = "1.6rem"
            headerElement.style.backgroundColor = "unset"
            headerElement.style.boxShadow = "unset"
        }

        const sectionElement = document.querySelectorAll("section")
        const menuElement = document.querySelectorAll(".header-content a")
        let current = ""
        sectionElement.forEach((section) => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if (scrollPosition >= sectionTop - sectionHeight / 2.5) current = section.getAttribute("id")
        })
        menuElement.forEach((menu) => {
            menu.classList.remove("active")
            if (menu.classList.contains(current)) menu.classList.add("active")
        })

        window.addEventListener("scroll", scrollEvent)
        
        return () => {
            window.removeEventListener("scroll", scrollEvent)
        }
    }, [scrollPosition])

    const scrollEvent = () => {
        const position = window.scrollY
        setScrollPosition(position)
    }
    
    return (
        <header className="Header">
            <div className="header-content">
                <div className="header__logo">
                    <h1>Mawin &lt;/&gt;</h1>
                </div>
                <div className="mobile__icon">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <nav className="mobile__menu">
                        <a className="home active" href="#home">Home</a>
                        <a className="about-me" href="#about-me">About me</a>
                        <a className="skill" href="#skill">Skills</a>
                        <a className="project" href="#project">Projects</a>
                        <a className="contact" href="#contact">Contact</a>
                    </nav>
                </div>
                <nav className="header__menu">
                    <a className="home active" href="#home">Home</a>
                    <a className="about-me" href="#about-me">About me</a>
                    <a className="skill" href="#skill">Skills</a>
                    <a className="project" href="#project">Projects</a>
                    <a className="contact" href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header