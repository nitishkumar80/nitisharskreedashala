import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Service from '../Pages/Service';
import ServiceDetail from '../Pages/ServiceDetails';
import logo from "../Images/main/newww.png";
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import Login from '../Pages/login';
import BookingForm from '../Pages/BookingForm';
import Footer from '../Pages/Footer';
import Membership from '../Pages/Membership';
import MembershipDetail from '../Pages/MembershipDetail';
import "../Pages/CSS/NavBar.css";

// Popup Form Components
import LoginForm from '../Pages/LoginForm';
import RegisterForm from '../Pages/RegisterForm';
import ProfileCreationForm from '../Pages/ProfileCreationForm';
import CoachAdmissionForm from '../Pages/CoachAdmissionForm';
import ChampAdmissionForm from '../Pages/ChampAdmissionForm';
import LearnMore from '../Pages/LearnMore';

export default function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCoachAdmission, setShowCoachAdmission] = useState(false);
  const [showChampAdmission, setShowChampAdmission] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const handleCoachAdmissionClose = () => setShowCoachAdmission(false);
  const handleCoachAdmissionShow = () => setShowCoachAdmission(true);

  const handleChampAdmissionClose = () => setShowChampAdmission(false);
  const handleChampAdmissionShow = () => setShowChampAdmission(true);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link a');

    const handleClick = () => {
      const navBarToggle = document.querySelector('.navbar-collapse');
      if (navBarToggle.classList.contains('show')) {
        navBarToggle.classList.remove('show');
      }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar expand="lg" fixed='top'>
        <Container>
          <Navbar.Brand>
            <Link to="/Home">
              <img src={logo} className="BrandLogo" alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto'>
              <Nav.Link>
                <NavLink to="/Home" className={({ isActive }) => isActive ? 'active' : undefined}>
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/About" className={({ isActive }) => isActive ? 'active' : undefined}>
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/Service" className={({ isActive }) => isActive ? 'active' : undefined}>
                  Service
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/Membership" className={({ isActive }) => isActive ? 'active' : undefined}>
                  Membership
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/Contact" className={({ isActive }) => isActive ? 'active' : undefined}>
                  Contact
                </NavLink>
              </Nav.Link>
              <NavDropdown title="Admission" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleCoachAdmissionShow}>Coach</NavDropdown.Item>
                <NavDropdown.Item onClick={handleChampAdmissionShow}>Champ</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='ms-auto'>
              <Button variant="outline-success" onClick={handleLoginShow}>Login</Button>
              <Button variant="success" onClick={handleRegisterShow} className="ms-2">Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/service/:id/:type?" element={<ServiceDetail />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/member/:id" element={<MembershipDetail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/bookingform/:type" element={<BookingForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-profile" element={< ProfileCreationForm />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>

      {/* Popup Forms */}
      {showLogin && <LoginForm onClose={handleLoginClose} />}
      {showRegister && <RegisterForm onClose={handleRegisterClose} />}
      {showCoachAdmission && <CoachAdmissionForm onClose={handleCoachAdmissionClose} />}
      {showChampAdmission && <ChampAdmissionForm onClose={handleChampAdmissionClose} />}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
