import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Main() {
    return (
        <>
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />
        </>
    );
}

export default Main;