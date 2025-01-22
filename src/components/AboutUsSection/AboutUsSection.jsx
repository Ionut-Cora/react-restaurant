import React from 'react';
import './AboutUsSection.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AboutSectionImg from '../../utils/images/about-section-img.jpg';

function AboutUsSection() {
  return (
    <div className="container my-5">
        <div className="flex-column-reverse flex-lg-row row">
            <motion.div 
                className="col-lg-6 d-flex justify-content-center"
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img src={AboutSectionImg} className='about-section-img img-fluid mt-5 mt-lg-0 shadow' alt="about us" />
            </motion.div>
            <motion.div 
                className="col-lg-6 d-flex flex-column justify-content-center"
                initial={{ opacity: 0, x: 350 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className='text-uppercase fw-bold fs-1 mb-4 mb-lg-5'>About us</h2>
                <p>Welcome to Korlake Restaurant in London, the perfect experience for special people. Our fancy restaurant will bring your special moments to another level.</p>
                <p className='mb-4 mb-lg-5'>Our restaurant is situated at 5 minutes walk from train station and shopping center. The location is ideal for a perfect breakfast, a facny lunch or a nice dinner with your family or friends. We can't wait to serve you our delicious dishes!</p>
                <Link to='/about'>
                    <button type='button' className='btn btn-dark btn-lg rounded-0 text-capitalize shadow'>More about us</button>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUsSection;