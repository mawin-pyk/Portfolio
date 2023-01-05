import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FadeInSection from './FideInSection';
import '../styles/contact.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
});

function Contact() {
    const [alear, setAlear] = useState(false);

    const form = useRef();
    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    const sendEmail = () => {
        emailjs.sendForm('service_ltgctpu', 'template_faff2uh', form.current, 'cN9BgE32md0AwLYKY')
            .then((result) => {
                alearOpen();
                reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const alearOpen = () => {
        setAlear(true);
    };

    const alearClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlear(false);
    };

    return (
        <section className="Contact" id="contact">
            <div className="contact-content">
                <FadeInSection>
                    <h1>Contact</h1>
                    <div className="contact-content-row">
                        <div className="contact__address">
                            <h2>Address</h2>
                            <p>Lam Luk Ka Klong 5, Lat Sawai, Lam Luk Ka, Pathum Thani 12150</p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                                &nbsp;
                                mawin.pyk@gmail.com
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                &nbsp;
                                09-4405-2942
                            </p>
                        </div>
                        <form className="contact__message" ref={form} onSubmit={handleSubmit(sendEmail)}>
                            <h2>Message</h2>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name"
                                    {...register("name", {
                                        required: "Enter name",
                                        minLength: { value: 2, message: "Between 2 and 30 characters long" },
                                        maxLength: { value: 30, message: "Between 2 and 30 characters long" },
                                    })}
                                />
                                <p>{errors.name && errors.name.message}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email"
                                    {...register("email", {
                                        required: "Enter email",
                                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
                                        minLength: { value: 6, message: "Between 6 and 30 characters long" },
                                        maxLength: { value: 30, message: "Between 6 and 30 characters long" },
                                    })}
                                />
                                <p>{errors.email && errors.email.message}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject"
                                    {...register("subject", {
                                        required: "Enter subject",
                                        minLength: { value: 2, message: "Between 2 and 30 characters long" },
                                        maxLength: { value: 30, message: "Between 2 and 30 characters long" },
                                    })}
                                />
                                <p>{errors.subject && errors.subject.message}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" cols="30" rows="10" name="message"
                                    {...register("message", {
                                        required: "Enter message",
                                        minLength: { value: 2, message: "Between 2 and 200 characters long" },
                                        maxLength: { value: 200, message: "Between 2 and 200 characters long" },
                                    })}
                                ></textarea>
                                <p>{errors.message && errors.message.message}</p>
                            </div>
                            <button type="submit">Send message</button>
                        </form>
                    </div>
                </FadeInSection>
            </div>
            <Snackbar open={alear} autoHideDuration={6000} onClose={alearClose}>
                <Alert onClose={alearClose} severity="success" sx={{ width: '100%' }}>
                    Sent Successfully
                </Alert>
            </Snackbar>
        </section>
    );
}

export default Contact;