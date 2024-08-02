import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './CSS/RegisterForm.css';

const RegisterForm = ({ onClose }) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    // Logic to send OTP to the phone number
    setOtpSent(true);
    console.log(`OTP sent to ${phone}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log('Form submitted');
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="me-2"
              />
              <Button variant="success" onClick={handleSendOtp} disabled={!phone || otpSent}>
                Send OTP
              </Button>
            </div>
          </Form.Group>

          {otpSent && (
            <Form.Group className="mb-3" controlId="formBasicOtp">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" controlId="formBasicRole">
            <Form.Label>Role</Form.Label>
            <Form.Select>
              <option value="champ">Champ</option>
              <option value="coach">Coach</option>
            </Form.Select>
          </Form.Group>

          <Button variant="success" type="submit">
            Register
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterForm;
