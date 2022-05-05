import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faGithub } from '@fortawesome/free-brands-svg-icons'
import FadeInSection from './FideInSection'
import racewars from '../images/racewars.png'
import portfolio from '../images/portfolio.png'
import './Project.css'

function Project() {
    return (
        <section className="Project" id="project">
            <div className="project-content">
                <FadeInSection>
                    <h1>Projects</h1>
                    <div className="project-row">
                        <div className="project__image">
                            <h2>Racewars</h2>
                            <p>This web application is built on React and Firebase.</p>
                            <a className="link-effect" href="https://react-67159.web.app"><FontAwesomeIcon icon={faChrome} size="lg" /> View Project</a>
                            <a className="link-effect" href="https://github.com/mawin-pyk/Racewars"><FontAwesomeIcon icon={faGithub} size="lg" /> Source Code</a>
                            <img className="image-effect" src={racewars} alt="" />
                        </div>
                        <div className="project__image">
                            <h2>Portfolio</h2>
                            <p>This web application is my portfolio built on React.</p>
                            <a className="link-effect" href="https://mawin-portfolio.netlify.app"><FontAwesomeIcon icon={faChrome} size="lg" /> View Project</a>
                            <a className="link-effect" href="https://github.com/mawin-pyk/Portfolio.git"><FontAwesomeIcon icon={faGithub} size="lg" /> Source Code</a>
                            <img className="image-effect" src={portfolio} alt="" /> 
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

export default Project