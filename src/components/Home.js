import React from 'react';
import FadeInSection from './FideInSection';
import '../styles/home.css';

function Home() {
    return (
        <section className="Home" id="home">
            <div className="home-content">
                <FadeInSection>
                    <div className="home__text">
                        <h1><span>Front End </span>Developer &lt;/&gt;</h1>
                        <h2>Hi, I'm Mawin Pomyukhon. Welcome to my world.</h2>
                    </div>
                    <div className="home__link">
                        <a href="#about">About me</a>
                        <a href="#skill">Resume</a>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}

export default Home;