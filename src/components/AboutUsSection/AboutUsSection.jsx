import React from 'react';
import './AboutUsSection.css';
import { Link } from 'react-router-dom';
import AboutSectionImg from '../../utils/images/about-section-img.jpg';

function AboutUsSection() {
  return (
    <div className="container my-5">
        <div className="flex-column-reverse flex-lg-row row">
            <div className="col-lg-6 d-flex justify-content-center">
                <img src={AboutSectionImg} className='about-section-img img-fluid mt-5 mt-lg-0 shadow' alt="about us" />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h2 className='text-uppercase fw-bold fs-1 mb-4 mb-lg-5'>About us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nesciunt sed maxime, nemo nulla velit. Dolor, fuga fugit! Impedit dolores quisquam distinctio quas, nemo et.</p>
                <p className='mb-4 mb-lg-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos similique sed saepe fugiat laudantium ipsam ea rem magni et eveniet aut, iusto officia, fugit nisi veniam consequuntur? Maxime minus blanditiis repudiandae repellat quam velit nisi?</p>
                <Link to='/about'>
                    <button type='button' className='btn btn-dark btn-lg text-capitalize shadow'>More about us</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AboutUsSection;