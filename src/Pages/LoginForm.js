import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./CSS/login.css";

const LoginForm = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('guest');
  const navigate = useNavigate();

  const handleSendOtp = () => {
    setIsOtpSent(true);
    console.log('OTP sent to', phoneNumber);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      console.log('OTP verified');
    } else {
      console.log('Invalid OTP');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password, role);
    // Mock login success
    navigate('/create-profile');
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button variant="secondary" onClick={handleSendOtp}>
              Send OTP
            </Button>
          </Form.Group>

          {isOtpSent && (
            <Form.Group className="mb-3" controlId="formOtp">
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button variant="secondary" onClick={handleVerifyOtp}>
                Verify OTP
              </Button>
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="guest">Guest</option>
              <option value="champ">Champ</option>
              <option value="coach">Coach</option>
            </Form.Control>
          </Form.Group>

          <Button variant="success" type="submit">
            Login
          </Button>
          <a className='align-center' href='#'>Forgot Password ?</a>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
