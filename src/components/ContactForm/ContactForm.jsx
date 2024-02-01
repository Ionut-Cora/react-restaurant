import React, { useState } from 'react';
import './ContactForm.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ValidFeedback from './ValidFeedback';
import InvalidFeedback from './InvalidFeedback';

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [date, setDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [comments, setComments] = useState('');

    const results = document.getElementById('results');

    function handleSubmit(event) {
        event.preventDefault();

        results.innerHTML = `
            <div class="modal" id="modal" tabindex="-1">
                <div class="modal-dialog d-flex align-items-center">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Thank You!</h5>
                        </div>
                        <div class="modal-body">
                            <p>Dear ${firstName} ${lastName},</p>
                            <p>Thank you for your reservation for ${numberOfGuests} people on date of ${date}! You will receive a confirmation email shortly on ${emailAddress}.</p>
                            <p>See you soon!</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success btn-lg" data-bs-dismiss="modal" onClick="window.location.reload()">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

  return (
    <div>
        <Form className="bg-dark text-light p-5 needs-validation" id="form" onSubmit={handleSubmit}>
            <Form.Group className="row mb-3">
                <Col className="mb-3 mb-md-0 was-validated" md={6}>
                    <Form.Label htmlFor="first-name" className="text-capitalize">First name</Form.Label>
                    <Form.Control type="text" name="first-name" id="first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
                    <ValidFeedback />
                    <InvalidFeedback message='Please enter your first name.' />
                </Col>
                <Col className='was-validated' md={6}>
                    <Form.Label htmlFor="last-name" className="text-capitalize">Last name</Form.Label>
                    <Form.Control type="text" name="last-name" id="last-name" value={lastName} onChange={(event) => setLastName(event.target.value)}required />
                    <ValidFeedback />
                    <InvalidFeedback message='Please enter your last name.' />
                </Col>
            </Form.Group>

            <Form.Group className="row mb-3">
                <Col className="mb-3 mb-md-0 was-validated" md={6}>
                    <Form.Label htmlFor="phone-number" className="text-capitalize">Phone number</Form.Label>
                    <Form.Control type="tel" pattern="[0-9]{5}[0-9]{6}" name="phone-number" id="phone-number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required />
                    <ValidFeedback />
                    <InvalidFeedback message='Please enter your mobile number.' />
                </Col>
                <Col className='was-validated' md={6}>
                    <Form.Label htmlFor="email" className="text-capitalize">Email address</Form.Label>
                    <Form.Control type="email" name="email" id="email" value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)} required />
                    <ValidFeedback />
                    <InvalidFeedback message='Please enter your email address.' />
                </Col>
            </Form.Group>

            <Form.Group className="row mb-3">
                <Col className="mb-3 mb-md-0 was-validated" md={6}>
                    <Form.Label htmlFor="date">Date</Form.Label>
                    <Form.Control type="date" name="date" id="date" value={date} onChange={(event) => setDate(event.target.value)}required />
                    <ValidFeedback />
                    <InvalidFeedback message='Please choose a date.' />
                </Col>
                <Col className='was-validated' md={6}>
                    <Form.Label htmlFor="guests" className="text-capitalize">Number of guests</Form.Label>
                    <Form.Control type="number" name="guests" id="guests" value={numberOfGuests} onChange={(event) => setNumberOfGuests(event.target.value)} required />
                    <ValidFeedback />
                    <InvalidFeedback message='Please choose the number of guests.' />
                </Col>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="comments">Comments</Form.Label>
                <Form.Control as="textarea" name="comments" cols={20} rows={3} id="comments" value={comments} onChange={(event) => setComments(event.target.value)} />
            </Form.Group>

            <Button variant="success" type="submit" className='btn btn-lg mt-4' id="submit-btn">
                Submit
            </Button>
        </Form>

        <div id="results"></div>
    </div>
  )
}

export default ContactForm;