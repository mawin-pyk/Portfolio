import React from 'react';
import FadeInSection from './FideInSection';
import about from '../files/about.webp';
import '../styles/about.css';

function About() {
    return (
        <section className="About" id="about">
            <div className="about-content">
                <FadeInSection>
                    <h1>About me</h1>
                    <div className="about-content-row">
                        <div className="about__image">
                            <img src={about} alt="" />
                        </div>
                        <div className="about__detail">
                            <div className="about__detail-row">
                                <div className="about__education">
                                    <p>Education</p>
                                    <p>B.S. ICT</p>
                                </div>
                                <div className="about__experience">
                                    <p>Experience</p>
                                    <p>4 Months</p>
                                </div>
                            </div>
                            <p>I am a front-end developer. I am familiar with using HTML, CSS, JavaScript, Bootstrap and React looking for a job as front-end developer position to bring knowledge and skills that are used in the work and willing to learn new things.</p>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}

export default About;