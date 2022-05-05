import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import FadeInSection from './FideInSection'
import './Contact.css'

function Contact() {
    return (
        <section className="Contact" id="contact">
            <div className="contact-content">
                <FadeInSection>
                    <h1>Contact</h1>
                    <div className="contact-row">
                        <div className="contact__address">
                            <h2>Address</h2>
                            <p>589 Ladprao Road, Phlabphla, Wang Thonglang, Bangkok, 10310</p>
                            <br />
                            <p><FontAwesomeIcon icon={faAt} size="lg" /> mawin.pyk@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhone} size="lg" /> 09 - 4405 - 2942</p>
                        </div>
                        <form className="contact__message">
                            <h2>Message</h2>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" />
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" />
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" cols="30" rows="10"></textarea>
                            <button type="submit" disabled={true}>Send message</button>
                        </form>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}

export default Contact