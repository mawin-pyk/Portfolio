import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import FadeInSection from './FideInSection'
import me from '../images/me.jpg'
import './AboutMe.css'

function AboutMe() {
    return (
        <section className="AboutMe" id="about-me">
            <div className="about-me-content">
                <FadeInSection>
                    <h1>About me</h1>
                    <div className="about-me-row">
                        <div className="about-me__image">
                            <img src={me} alt="" />
                        </div>
                        <div className="about-me__detail">
                            <div className="detail-row">
                                <div className="education">
                                    <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                                    <p>Education</p>
                                    <p>B.S. ICT</p>
                                </div>
                                <div className="experience">
                                    <FontAwesomeIcon icon={faBriefcase} size="2x" />
                                    <p>Experience</p>
                                    <p>0 Year</p>
                                </div>
                            </div>
                            <p>I'm a new graduate. I'm familiar with using HTML5, CSS3, JavaScript and React library. In addition, I'm able to connect my web application to database by way of using Firebase. I'm looking for a job front-end developer position and willing to learn new things.</p>
                            <a href="https://drive.google.com/file/d/1l_W8RXu61q_M-pEwaY3bdUmGBMWGhNGp/view?usp=sharing">Download Resume</a>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

export default AboutMe