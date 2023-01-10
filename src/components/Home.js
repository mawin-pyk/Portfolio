import React from 'react';
import FadeInSection from './FideInSection';
import resume from '../files/resume.pdf';
import '../styles/home.css';

function Home() {
    return (
        <section className="Home" id="home">
            <div className="home-content">
                <FadeInSection>
                    <div className="home__text">
                        <h2>Hi, I'm</h2>
                        <h1>Mawin Pomyukhon</h1>
                        <h2>Front-end Developer</h2>
                        <h3>Welcome to my web.</h3>
                    </div>
                    <div className="home__link">
                        <a href="#about">About me</a>
                        <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}

export default Home;