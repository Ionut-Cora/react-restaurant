import React, { useState } from 'react';
import './ContactForm.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ValidFeedback from './ValidFeedback';
import InvalidFeedback from './InvalidFeedback';
import { motion } from 'framer-motion';

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [date, setDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [comments, setComments] = useState('');
    const results = document.getElementById('results');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        
        } else {
            event.preventDefault();
            event.stopPropagation();

            results.innerHTML = `
                <div class="modal" id="modal">
                    <div class="modal-dialog d-flex align-items-center">
                        <div class="modal-content rounded-0">
                            <div class="modal-header">
                                <h5 class="modal-title">Thank You!</h5>
                            </div>
                            <div class="modal-body">
                                <p>Dear ${firstName} ${lastName},</p>
                                <p>Thank you for your reservation for ${numberOfGuests} people on date of ${date}. You will receive a confirmation email shortly on ${emailAddress}.</p>
                                <p>See you soon!</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success btn-lg rounded-0" data-bs-dismiss="modal" onClick="window.location.reload()">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('contact-page').classList.add('scrolling-stop');
            document.getElementById('footer').style.display = 'none';
        }

        setValidated(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <Form noValidate validated={validated} className="bg-dark text-light p-5 needs-validation" id="form" onSubmit={handleSubmit}>
                <Form.Group className="row mb-3">
                    <Col className="mb-3 mb-md-0" md={6}>
                        <Form.Label htmlFor="first-name" className="text-capitalize">First name</Form.Label>
                        <Form.Control className='rounded-0' type="text" name="first-name" id="first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
                        <ValidFeedback />
                        <InvalidFeedback message='Please enter your first name.' />
                    </Col>
                    <Col md={6}>
                        <Form.Label htmlFor="last-name" className="text-capitalize">Last name</Form.Label>
                        <Form.Control className='rounded-0' type="text" name="last-name" id="last-name" value={lastName} onChange={(event) => setLastName(event.target.value)}required />
                        <ValidFeedback />
                        <InvalidFeedback message='Please enter your last name.' />
                    </Col>
                </Form.Group>

                <Form.Group className="row mb-3">
                    <Col className="mb-3 mb-md-0" md={6}>
                        <Form.Label htmlFor="phone-number" className="text-capitalize">Phone number</Form.Label>
                        <Form.Control className='rounded-0' type="tel" pattern="[0-9]{5}[0-9]{6}" name="phone-number" id="phone-number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required />
                        <ValidFeedback />
                        <InvalidFeedback message='Please enter your mobile number.' />
                    </Col>
                    <Col md={6}>
                        <Form.Label htmlFor="email" className="text-capitalize">Email address</Form.Label>
                        <Form.Control className='rounded-0' type="email" name="email" id="email" value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)} required />
                        <ValidFeedback />
                        <InvalidFeedback message='Please enter your email address.' />
                    </Col>
                </Form.Group>

                <Form.Group className="row mb-3">
                    <Col className="mb-3 mb-md-0" md={6}>
                        <Form.Label htmlFor="date">Date</Form.Label>
                        <Form.Control className='rounded-0' type="date" name="date" id="date" value={date} onChange={(event) => setDate(event.target.value)}required />
                        <ValidFeedback />
                        <InvalidFeedback message='Please choose a date.' />
                    </Col>
                    <Col md={6}>
                        <Form.Label htmlFor="guests" className="text-capitalize">Number of guests</Form.Label>
                        <Form.Control className='rounded-0' type="number" name="guests" id="guests" value={numberOfGuests} onChange={(event) => setNumberOfGuests(event.target.value)} required />
                        <ValidFeedback />
                        <InvalidFeedback message='Please choose the number of guests.' />
                    </Col>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="comments">Comments</Form.Label>
                    <Form.Control className='rounded-0' as="textarea" name="comments" cols={20} rows={3} id="comments" value={comments} onChange={(event) => setComments(event.target.value)} />
                </Form.Group>

                <Button variant="success" type="submit" className='btn btn-lg rounded-0 mt-4' id="submit-btn">
                    Submit
                </Button>
            </Form>

            <div id="results"></div>
        </motion.div>
    )
}

export default ContactForm;