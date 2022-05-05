import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faServer, faM } from '@fortawesome/free-solid-svg-icons'
import FadeInSection from './FideInSection'
import './Skill.css'

function Skill() {
    return (
        <section className="Skill" id="skill">
            <div className="skill-content">
                <FadeInSection>
                    <h1>My Skills</h1>
                    <div className="skill-row">
                        <div className="skill__all">
                            <h2>Front-end</h2>
                            <div className="icon__skill">
                                <FontAwesomeIcon icon={faHtml5} size="3x" />
                                <p>HTML</p>
                            </div>
                            <div className="icon__skill">
                                <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                                <p>CSS</p>
                            </div>
                            <div className="icon__skill">
                                <FontAwesomeIcon icon={faJs} size="3x" />
                                <p>JavaScript</p>
                            </div>
                            <div className="icon__skill">
                                <FontAwesomeIcon icon={faReact} size="3x" />
                                <p>React</p>
                            </div>
                        </div>
                        <div className="skill__all">
                            <h2>Back-end</h2>
                            <div className="icon__skill">
                                <FontAwesomeIcon icon={faServer} size="3x" />
                                <p>Firebase</p>
                            </div>
                        </div>
                        <div className="skill__all">
                            <h2>Tools</h2>
                            <div className="icon__skill">
                                <FontAwesomeIcon icon={faM} size="3x" />
                                <p>Material UI</p>
                            </div>
                            <div className="icon__skill">
                                <FontAwesomeIcon icon={faGitAlt} size="3x" />
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

export default Skill