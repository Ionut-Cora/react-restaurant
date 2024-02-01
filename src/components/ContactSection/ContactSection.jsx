import React from 'react';
import './ContactSection.css';
import ContactInfo from '../ContactInfo/ContactInfo';
import ContactSectionImg from '../../utils/images/contact-section-img.jpg';

function ContactSection() {
  return (
    <div className='contact-section text-light py-5 shadow'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column align-items-cneter justify-content-center mb-5 mb-lg-0">
                    <ContactInfo />
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={ContactSectionImg} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection;