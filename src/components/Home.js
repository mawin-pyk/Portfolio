import React from 'react'
import FadeInSection from './FideInSection'
import './Home.css'

function Home() {
    return (
        <section className="Home" id="home">
            <div className="home-content">
                <FadeInSection>
                    <div className="home__text">
                        <h2>WELCOME TO MY WORLD</h2>
                        <h1>Hi, I'm Mawin Pomyukhon.</h1>
                        <h1><span>Front-end Developer &lt;/&gt;</span></h1>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

export default Home