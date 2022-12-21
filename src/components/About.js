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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                                    </svg>
                                    <p>Education</p>
                                    <p>B.S. ICT</p>
                                </div>
                                <div className="about__experience">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                                    </svg>
                                    <p>Experience</p>
                                    <p>0 Month</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quo veniam, autem a exercitationem neque animi saepe, ab, soluta commodi assumenda cumque facilis accusantium veritatis? Optio esse officia vero quod dicta. Iste officiis maxime distinctio dolorem, minima hic, quae repudiandae odio voluptas nam reiciendis. Obcaecati nisi saepe illo eaque sapiente.</p>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}

export default About;