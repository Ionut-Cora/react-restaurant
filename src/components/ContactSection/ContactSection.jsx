import React from 'react';
import './ContactSection.css';
import { motion } from 'framer-motion';
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
                <motion.div 
                    className="col-lg-6 d-flex justify-content-center"
                    initial={{ opacity: 0, x: 350 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={ContactSectionImg} className='img-fluid' alt="" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection;