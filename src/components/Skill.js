import React from 'react';
import FadeInSection from './FideInSection';
import html from '../files/html.webp';
import css from '../files/css.webp';
import scss from '../files/scss.webp';
import javascript from '../files/javascript.webp';
import react from '../files/react.webp';
import next from '../files/next.webp';
import node from '../files/node.webp';
import laravel from '../files/laravel.webp';
import firebase from '../files/firebase.webp';
import mysql from '../files/mysql.webp';
import bootstrap from '../files/bootstrap.webp';
import mui from '../files/mui.webp';
import jquery from '../files/jquery.webp';
import git from '../files/git.webp';
import '../styles/skill.css';

function Skill() {
    return (
        <section className="Skill" id="skill">
            <div className="skill-content">
                <FadeInSection>
                    <h1>My Skills</h1>
                    <div className="skill-content-row">
                        <div className="skill__front">
                            <h2>Front End</h2>
                            <p><img src={html} alt="" /> &nbsp; HTML</p>
                            <p><img src={css} alt="" /> &nbsp; CSS</p>
                            <p><img src={scss} alt="" /> &nbsp; SCSS</p>
                            <p><img src={javascript} alt="" /> &nbsp; JavaScript</p>
                            <p><img src={react} alt="" /> &nbsp; React JS</p>
                            <p><img src={next} alt="" /> &nbsp; Next JS (Basic)</p>
                        </div>
                        <div className="skill__back">
                            <h2>Back End</h2>
                            <p><img src={node} alt="" /> &nbsp; Note JS (Basic)</p>
                            <p><img src={laravel} alt="" /> &nbsp; PHP Laravel</p>
                        </div>
                        <div className="skill__database">
                            <h2>Database</h2>
                            <p><img src={firebase} alt="" /> &nbsp; Firebase</p>
                            <p><img src={mysql} alt="" /> &nbsp; MySQL (Basic)</p>
                        </div>
                        <div className="skill__tool">
                            <h2>Tools</h2>
                            <p><img src={bootstrap} alt="" /> &nbsp; Bootstrap</p>
                            <p><img src={mui} alt="" /> &nbsp; Material UI</p>
                            <p><img src={jquery} alt="" /> &nbsp; jQuery </p>
                            <p><img src={git} alt="" /> &nbsp; Git</p>
                        </div>
                    </div>
                    <div className="skill__text">
                        <h3>Responsive Web Design</h3>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}

export default Skill;