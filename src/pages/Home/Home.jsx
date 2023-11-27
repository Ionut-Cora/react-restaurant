import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AboutSectionImg from '../../utils/images/about-section-img.jpg';

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
            <div className="container d-flex justify-content-center">
                <div className='d-flex flex-column align-items-center'>
                    <h2 className='text-capitalize fw-bold text-center fs-1'>Welcome to</h2>
                    <h1 className='text-capitalize fw-bold text-center'>React restaurant</h1>
                    <p className='text-center mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolorum dignissimos fuga sed praesentium alias officiis at eum error est voluptatem dolorem a voluptate, recusandae possimus veritatis expedita quibusdam delectus sunt corrupti sapiente nam! Esse vero saepe vel incidunt quod tempora autem voluptas dignissimos, doloribus, reiciendis distinctio exercitationem, ratione voluptates.</p>
                    <div>
                        <Link to='/menu'>
                            <button type='button' className='btn btn-success btn-lg text-capitalize mx-2 shadow'>Our menu</button>
                        </Link>
                        <Link to='/contact'>
                            <button type='button' className='btn btn-outline-light btn-lg text-capitalize mx-2 shadow'>Contact us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>

        {/* about us section */}
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
    </div>
  )
}

export default Home;