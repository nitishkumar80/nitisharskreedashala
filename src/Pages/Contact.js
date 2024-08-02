import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { send } from 'emailjs-com';
import Lottie from 'lottie-react';
import contactAnimation from '../LottieAnimation/contact.json'; // Ensure this path is correct
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'; // Update the path as needed
import './CSS/Contact.css';

export default function Contact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        email: '',
        contact: '',
        message: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(toSend.from_name, toSend.email, toSend.contact, toSend.message);

        send("service_3xs1c9t", "template_clmihxn", toSend, "_Pnbu7RNVuwRn9mc6")
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });

        setToSend({
            from_name: '',
            email: '',
            contact: '',
            message: '',
        });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <section className="contact_us">
            <Container>
                <Row>
                    {/* Lottie Animation Section */}
                    <div className="col-md-12 col-lg-6">
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            animate="show"
                            className="lottie-container"
                        >
                            <Lottie 
                                animationData={contactAnimation}
                                loop={true}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </motion.div>
                    </div>

                    {/* Form Section */}
                    <div className="col-md-12 col-lg-6">
                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            animate="show"
                            className="contact_inner"
                        >
                            <div className="contact_form_inner">
                                <h2 className="contact-title">Get In Touch!</h2>
                                <p className="contact-description">
                                    <strong>Feel Free to contact us any time.</strong> Let's Discuss Your Project & Ideas.
                                </p>
                                <form onSubmit={onSubmit} className="contact-form">
                                    <input 
                                        type="text"
                                        className="form-control form-group"
                                        name='from_name'
                                        placeholder='Name'
                                        value={toSend.from_name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input 
                                        type="email"
                                        className="form-control form-group"
                                        name='email'
                                        placeholder="Email"
                                        value={toSend.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input 
                                        type="number"
                                        className="form-control form-group"
                                        name='contact'
                                        placeholder="Contact"
                                        value={toSend.contact}
                                        onChange={handleChange}
                                        required
                                    />
                                    <textarea 
                                        className="form-control form-group"
                                        name='message'
                                        placeholder="Message"
                                        value={toSend.message}
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="submit"
                                        className="contact_form_submit"
                                    />
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
