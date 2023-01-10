import React from 'react';
import FadeInSection from './FideInSection';
import racewars from '../files/racewars.webp';
import portfolio from '../files/portfolio.webp';
import campaign from '../files/campaign.webp';
import chrome from '../files/chrome.webp';
import github from '../files/github.webp';
import '../styles/project.css';

function Project() {
    return (
        <section className="Project" id="project">
            <div className="project-content">
                <FadeInSection>
                    <h1>Projects</h1>
                    <div className="project-content-row">
                        <div className="project__image">
                            <h2>Racewars</h2>
                            <p>This web application is built on React and Firebase.</p>
                            <a href="https://react-67159.web.app" target="_blank" rel="noreferrer">
                                <img src={chrome} alt="" />
                                &nbsp;
                                View Project
                            </a>
                            <a href="https://github.com/mawin-pyk/Racewars" target="_blank" rel="noreferrer">
                                <img src={github} alt="" />
                                &nbsp;
                                GitHub
                            </a>
                            <img className="image-effect" src={racewars} alt="" />
                        </div>
                        <div className="project__image">
                            <h2>Portfolio</h2>
                            <p>This web application is built on React.</p>
                            <a href="https://mawin.netlify.app" target="_blank" rel="noreferrer">
                                <img src={chrome} alt="" />
                                &nbsp;
                                View Project
                            </a>
                            <a href="https://github.com/mawin-pyk/Portfolio" target="_blank" rel="noreferrer">
                                <img src={github} alt="" />
                                &nbsp;
                                GitHub
                            </a>
                            <img className="image-effect" src={portfolio} alt="" />
                        </div>
                        <div className="project__image">
                            <h2>Campaign</h2>
                            <p>This web application is built on Laravel and MySQL.</p>
                            <img className="image-effect" src={campaign} alt="" />
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}

export default Project;