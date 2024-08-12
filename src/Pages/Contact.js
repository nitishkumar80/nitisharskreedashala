import React, { useEffect, useState } from "react";
import NET from "vanta/dist/vanta.waves.min";
import { send } from "emailjs-com";
import { Container, Row } from 'react-bootstrap';
import Lottie from "lottie-react";
import contactAnimation from "../LottieAnimation/contact.json"; // Ensure this path is correct
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; // Update the path as needed
import "./CSS/Contact.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    email: "",
    contact: "",
    message: "",
  });

  useEffect(() => {
    // Load Three.js dynamically
    const loadThreeJS = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"; // CDN link for Three.js
      script.onload = () => resolve();
      script.onerror = () => console.error("Failed to load Three.js");
      document.body.appendChild(script);
    });

    // Load Vanta.js after Three.js is loaded
    loadThreeJS.then(() => {
      const vantaEffect = NET({
        el: "#vanta",
        THREE: window.THREE, // Pass Three.js to Vanta
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
       
      });

      // Cleanup effect on component unmount
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }).catch((error) => {
      console.error("Failed to load Vanta.js", error);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toSend.from_name, toSend.email, toSend.contact, toSend.message);

    send("service_3xs1c9t", "template_clmihxn", toSend, "_Pnbu7RNVuwRn9mc6")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setToSend({
      from_name: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="bg" id="vanta" style={{ width: "100%", height: "100vh", position: "relative" }}>
        {/* Vanta.js effect will be applied to this element */}
      </div>

      <section className="contact_us" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                  <form   action="https://api.web3forms.com/submit" method="POST"  className="contact-form">
                   
                  <input type="hidden" name="access_key" value="d8154708-9cc5-4b70-9789-6f7f765b0a77"/>
                   
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
    </div>
  );
};

export default Contact;
