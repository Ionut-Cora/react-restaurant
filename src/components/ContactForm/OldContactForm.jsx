import React from 'react';
import './ContactForm.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class OldContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            date: '',
            numberOfGuests: '',
            comments: ''
        }
    }

    handleFirstName(event) {
        const firstName = event.target.value;
        this.setState({firstName: firstName});
    }

    handleLastName(event) {
        const lastName = event.target.value;
        this.setState({lastName: lastName});
    }

    handlePhoneNumber(event) {
        const phoneNumber = event.target.value;
        this.setState({phoneNumber: phoneNumber});
    }

    handleEmail(event) {
        const email = event.target.value;
        this.setState({email: email});
    }

    handleDate(event) {
        const date = event.target.value;
        this.setState({date: date});
    }

    handleNumberOfGuests(event) {
        const numberOfGuests = event.target.value;
        this.setState({numberOfGuests: numberOfGuests});
    }

    handleComments(event) {
        const comments = event.target.value;
        this.setState({comments: comments});
    }

    handleSubmit(event) {
        event.preventDefault();

        const results = document.getElementById('results');
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const phoneNumber = document.getElementById('phone-number');
        const email = document.getElementById('email');
        const date = document.getElementById('date');
        const guests = document.getElementById('guests');

        if (this.state.firstName === '') {
            firstName.classList.add('invalid-input');
        } else {
            firstName.classList.remove('invalid-input');
        } 
        
        if (this.state.lastName === '') {
            lastName.classList.add('invalid-input');
        } else {
            lastName.classList.remove('invalid-input');
        }
        
        if (this.state.phoneNumber === '') {
            phoneNumber.classList.add('invalid-input');
        } else {
            phoneNumber.classList.remove('invalid-input');
        }
        
        if (this.state.email === '') {
            email.classList.add('invalid-input');
        } else {
            email.classList.remove('invalid-input');
        }    
        
        if (this.state.date === '') {
            date.classList.add('invalid-input');
        } else {
            date.classList.remove('invalid-input');
        }
        
        if (this.state.numberOfGuests === '') {
            guests.classList.add('invalid-input');
        } else {
            guests.classList.remove('invalid-input');
        }
        
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.phoneNumber !== '' && this.state.email !== '' && this.state.date !== '' && this.state.numberOfGuests !== '') {
            
            results.innerHTML = `
                <div class="modal" id="modal" tabindex="-1">
                    <div class="modal-dialog d-flex align-items-center">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Thank You!</h5>
                            </div>
                            <div class="modal-body">
                                <p>Dear ${this.state.firstName} ${this.state.lastName}, <br>
                                Thank you for your reservation for ${this.state.numberOfGuests} people on date of ${this.state.date}! <br>
                                You will receive a confirmation on your address email ${this.state.email} <br>
                                and if will be any issue, we will contact you on your phone number ${this.state.phoneNumber}.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success btn-lg" data-bs-dismiss="modal" onClick="window.location.reload()">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    render() {
        return(
            <div>
                <Form className="bg-dark text-light p-5" id="form" onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Group className="row mb-3">
                        <Col className="mb-3 mb-md-0" md={6}>
                            <Form.Label htmlFor="first-name" className="text-capitalize">First name</Form.Label>
                            <Form.Control type="text" name="first-name" id="first-name" onChange={(event) => this.handleFirstName(event)} />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="last-name" className="text-capitalize">Last name</Form.Label>
                            <Form.Control type="text" name="last-name" id="last-name" onChange={(event) => this.handleLastName(event)} />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                        <Col className="mb-3 mb-md-0" md={6}>
                            <Form.Label htmlFor="phone-number" className="text-capitalize">Phone number</Form.Label>
                            <Form.Control type="tel" name="phone-number" id="phone-number" onChange={(event) => this.handlePhoneNumber(event)} />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="email" className="text-capitalize">Email address</Form.Label>
                            <Form.Control type="email" name="email" id="email" onChange={(event) => this.handleEmail(event)} />
                        </Col>
                    </Form.Group>

                    <Form.Group className="row mb-3">
                        <Col className="mb-3 mb-md-0" md={6}>
                            <Form.Label htmlFor="date">Date</Form.Label>
                            <Form.Control type="date" name="date" id="date" onChange={(event) => this.handleDate(event)} />
                        </Col>
                        <Col md={6}>
                            <Form.Label htmlFor="guests" className="text-capitalize">Number of guests</Form.Label>
                            <Form.Control type="number" name="guests" id="guests" onChange={(event) => this.handleNumberOfGuests(event)} />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="comments">Comments</Form.Label>
                        <Form.Control as="textarea" name="comments" cols={20} rows={3} id="comments" onChange={(event) => this.handleComments(event)} />
                    </Form.Group>

                    <Button variant="success" type="submit" className='btn btn-lg mt-4' id="submit-btn">
                        Submit
                    </Button>
                </Form>

                <div id="results"></div>
            </div>
        )
    }
}

export default OldContactForm;