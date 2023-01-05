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