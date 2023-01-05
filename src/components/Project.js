import React from 'react';
import FadeInSection from './FideInSection';
import racewars from '../files/racewars.webp';
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
                            <p className="text-effect">This web application is built on React and Firebase.</p>
                            <a className="link-effect" href="#project">
                                <img src={chrome} alt="" />
                                &nbsp;
                                View Project
                            </a>
                            <a className="link-effect" href="#project">
                                <img src={github} alt="" />
                                &nbsp;
                                GitHub
                            </a>
                            <img className="image-effect" src={racewars} alt="" />
                        </div>
                        <div className="project__image">
                            <h2>Portfolio</h2>
                            <p className="text-effect">This web application is my portfolio built on React.</p>
                            <a className="link-effect" href="#project">
                                <img src={chrome} alt="" />
                                &nbsp;
                                View Project
                            </a>
                            <a className="link-effect" href="#project">
                                <img src={github} alt="" />
                                &nbsp;
                                GitHub
                            </a>
                            <img className="image-effect" src={racewars} alt="" />
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}

export default Project;