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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nesciunt sed maxime, nemo nulla velit. Dolor, fuga fugit! Impedit dolores quisquam distinctio quas, nemo et.</p>
                <p className='mb-4 mb-lg-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos similique sed saepe fugiat laudantium ipsam ea rem magni et eveniet aut, iusto officia, fugit nisi veniam consequuntur? Maxime minus blanditiis repudiandae repellat quam velit nisi?</p>
                <Link to='/about'>
                    <button type='button' className='btn btn-dark btn-lg rounded-0 text-capitalize shadow'>More about us</button>
                </Link>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutUsSection;