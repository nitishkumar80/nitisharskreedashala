import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/RegisterForm.css';
import register from '../Images/main/register.png';

const RegisterForm = ({ onClose }) => {
  const [showMainModal, setShowMainModal] = useState(true);
  const [showChampForm, setShowChampForm] = useState(false);
  const [showCoachForm, setShowCoachForm] = useState(false);
  const [showGuestForm, setShowGuestForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    aadharNo: '',
    photo: '',
    experience: '',
    college: '',
    sports: '',
    achievement: '',
    idMark: '',
    bloodGroup: '',
    address: '',
    number: '',
    email: '',
    phone: '',
    otp: '',
    bookingHours: '',
    sportsOption: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (showChampForm) {
      if (!formData.name || !formData.age || !formData.aadharNo || !formData.photo || !formData.experience || !formData.college || !formData.sports || !formData.achievement || !formData.idMark || !formData.bloodGroup || !formData.address) {
        errors.message = 'Please fill all required fields.';
      }
    } else if (showCoachForm) {
      if (!formData.name || !formData.age || !formData.aadharNo || !formData.experience || !formData.college || !formData.sports || !formData.achievement || !formData.idMark || !formData.bloodGroup || !formData.address) {
        errors.message = 'Please fill all required fields.';
      }
    } else if (showGuestForm) {
      if (!formData.number || !formData.email || !formData.phone || !formData.otp || !formData.bookingHours || !formData.sportsOption) {
        errors.message = 'Please fill all required fields.';
      }
    }
    return errors;
  };

  const handleShowChampForm = () => {
    setShowMainModal(false);
    setShowChampForm(true);
  };

  const handleShowCoachForm = () => {
    setShowMainModal(false);
    setShowCoachForm(true);
  };

  const handleShowGuestForm = () => {
    setShowMainModal(false);
    setShowGuestForm(true);
  };

  const handleCloseChampForm = () => {
    setShowChampForm(false);
    setShowMainModal(true);
  };

  const handleCloseCoachForm = () => {
    setShowCoachForm(false);
    setShowMainModal(true);
  };

  const handleCloseGuestForm = () => {
    setShowGuestForm(false);
    setShowMainModal(true);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0]
    });
  };

  const handleDownloadPDF = (formType) => {
    const errors = validateForm();
    if (errors.message) {
      toast.error(errors.message);
      return;
    }
    
    const doc = new jsPDF();
    if (formType === 'Coach') {
      doc.text('Coach Registration Form', 10, 10);
      doc.text(`Name: ${formData.name}`, 10, 20);
      doc.text(`Age: ${formData.age}`, 10, 30);
      doc.text(`Aadhar No: ${formData.aadharNo}`, 10, 40);
      doc.text(`Year of Experience: ${formData.experience}`, 10, 50);
      doc.text(`Pass from which College: ${formData.college}`, 10, 60);
      doc.text(`Sports: ${formData.sports}`, 10, 70);
      doc.text(`Achievement: ${formData.achievement}`, 10, 80);
      doc.text(`Identification Mark: ${formData.idMark}`, 10, 90);
      doc.text(`Blood Group: ${formData.bloodGroup}`, 10, 100);
      doc.text(`Address: ${formData.address}`, 10, 110);
      doc.save('coach_registration_form.pdf');
    } else if (formType === 'Guest') {
      doc.text('Guest Registration Form', 10, 10);
      doc.text(`Number: ${formData.number}`, 10, 20);
      doc.text(`Email: ${formData.email}`, 10, 30);
      doc.text(`Phone: ${formData.phone}`, 10, 40);
      doc.text(`OTP: ${formData.otp}`, 10, 50);
      doc.text(`Booking Hours: ${formData.bookingHours}`, 10, 60);
      doc.text(`Sports Option: ${formData.sportsOption}`, 10, 70);
      doc.save('guest_registration_form.pdf');
    } else if (formType === 'Champ') {
      doc.text('Champ Registration Form', 10, 10);
      doc.text(`Name: ${formData.name}`, 10, 20);
      doc.text(`Age: ${formData.age}`, 10, 30);
      doc.text(`Aadhar No: ${formData.aadharNo}`, 10, 40);
      doc.text(`Photo: ${formData.photo.name}`, 10, 50); // Display file name only
      doc.text(`Address: ${formData.address}`, 10, 60);
      doc.text(`Sports: ${formData.sports}`, 10, 70);
      doc.text(`Number: ${formData.number}`, 10, 80);
      doc.text(`OTP: ${formData.otp}`, 10, 90);
      doc.save('champ_registration_form.pdf');
    }
    toast.success('PDF Downloaded Successfully!');
  };

  const handleSubmit = (formType) => {
    const errors = validateForm();
    if (errors.message) {
      toast.error(errors.message);
      return;
    }
    toast.success(`${formType} Registration Form Submitted!`);
  };

  return (
    <>
      <Modal show={showMainModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="lottie-container"
          >
            <img src={register} alt="Register" />
          </motion.div>

          <Button
            variant="success"
            className="register-button"
            onClick={handleShowChampForm}
          >
            Member
          </Button>

          <Button
            variant="success"
            className="register-button"
            onClick={handleShowCoachForm}
          >
            Coach
          </Button>

          <Button
            variant="success"
            className="register-button"
            onClick={handleShowGuestForm}
          >
            Guest
          </Button>
        </Modal.Body>
      </Modal>

      {/* Champ Registration Form */}
      <Modal show={showChampForm} onHide={handleCloseChampForm} >
        <Modal.Header closeButton>
          <Modal.Title >Member Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <Form>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="form-fields"
    >
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </Form.Group>

      <Form.Group controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
      </Form.Group>

      <Form.Group controlId="formAadharNo">
        <Form.Label>Aadhar No</Form.Label>
        <Form.Control
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
          placeholder="Enter your Aadhar number"
        />
      </Form.Group>

      <Form.Group controlId="formPhoto">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="file"
          name="photo"
          onChange={handleFileChange}
        />
      </Form.Group>

      

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </Form.Group>

      <Form.Group controlId="formOtp">
        <Form.Label>OTP</Form.Label>
        <Form.Control
          type="text"
          name="otp"
          value={formData.otp}
          onChange={handleChange}
          placeholder="Enter OTP"
        />
        <Button variant="success" className="mt-2" onClick={handleChange}>
          Verify
        </Button>
      </Form.Group>

      <Button
        variant="primary"
        type="button"
        className="mt-3"
        onClick={() => handleSubmit('Champ')}
      >
        Submit
      </Button>
    </motion.div>
  </Form>
</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseChampForm}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => handleDownloadPDF('Champ')}>
            Download PDF
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Coach Registration Form */}
      <Modal show={showCoachForm} onHide={handleCloseCoachForm}>
        <Modal.Header closeButton>
          <Modal.Title>Coach Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="form-fields"
            >
      

              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                />
              </Form.Group>

              <Form.Group controlId="formAadharNo">
                <Form.Label>Aadhar No</Form.Label>
                <Form.Control
                  type="text"
                  name="aadharNo"
                  value={formData.aadharNo}
                  onChange={handleChange}
                  placeholder="Enter your Aadhar number"
                />
              </Form.Group>

              <Form.Group controlId="formExperience">
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Enter years of experience"
                />
              </Form.Group>

              <Form.Group controlId="formCollege">
                <Form.Label>College</Form.Label>
                <Form.Control
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter college name"
                />
              </Form.Group>

              <Form.Group controlId="formSports">
                <Form.Label>Sports</Form.Label>
                <Form.Control
                  type="text"
                  name="sports"
                  value={formData.sports}
                  onChange={handleChange}
                  placeholder="Enter sports"
                />
              </Form.Group>

              <Form.Group controlId="formAchievement">
                <Form.Label>Achievement</Form.Label>
                <Form.Control
                  type="text"
                  name="achievement"
                  value={formData.achievement}
                  onChange={handleChange}
                  placeholder="Enter your achievements"
                />
              </Form.Group>

              <Form.Group controlId="formIdMark">
                <Form.Label>Identification Mark</Form.Label>
                <Form.Control
                  type="text"
                  name="idMark"
                  value={formData.idMark}
                  onChange={handleChange}
                  placeholder="Enter identification mark"
                />
              </Form.Group>

              <Form.Group controlId="formBloodGroup">
                <Form.Label>Blood Group</Form.Label>
                <Form.Control
                  type="text"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  placeholder="Enter blood group"
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                onClick={() => handleSubmit('Coach')}
              >
                Submit
              </Button>
            </motion.div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCoachForm}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => handleDownloadPDF('Coach')}>
            Download PDF
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Guest Registration Form */}
      <Modal show={showGuestForm} onHide={handleCloseGuestForm}>
        <Modal.Header closeButton>
          <Modal.Title>Guest Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="form-fields"
            >
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </Form.Group>

              <Form.Group controlId="formOtp">
                <Form.Label>OTP</Form.Label>
                <Form.Control
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="Enter OTP"
                />
                <Button variant="success" className="verify-button">
                  Verify
                </Button>
              </Form.Group>

              <Form.Group controlId="formBookingHours">
                <Form.Label>Booking Hours</Form.Label>
                <Form.Control
                  type="text"
                  name="bookingHours"
                  value={formData.bookingHours}
                  onChange={handleChange}
                  placeholder="Enter booking hours"
                />
              </Form.Group>

              <Form.Group controlId="formSportsOption">
                <Form.Label>Sports Option</Form.Label>
                <Form.Control
                  as="select"
                  name="sportsOption"
                  value={formData.sportsOption}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Gym">Gym</option>
                </Form.Control>
              </Form.Group>

              <Button
                variant="success"
                type="button"
                onClick={() => handleSubmit('Guest')}
              >
                Submit
              </Button>
            </motion.div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseGuestForm}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => handleDownloadPDF('Guest')}>
            Download PDF
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default RegisterForm;
