import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

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
                            <button type='button' className='btn btn-success btn-lg text-capitalize mx-2'>Our menu</button>
                        </Link>
                        <Link to='/contact'>
                            <button type='button' className='btn btn-outline-light btn-lg text-capitalize mx-2'>Contact us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Home;