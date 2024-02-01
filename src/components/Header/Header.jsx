import React from 'react';
import './Header.css';
import MenuBtn from '../MenuBtn/MenuBtn';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='height-100-header h-100 min-vh-100 d-flex align-items-center text-light shadow'>
        <div className="container d-flex justify-content-center">
            <div className='h-100 d-flex flex-column align-items-start'>
                <h2 className='text-capitalize fw-bold fs-1'>Welcome to</h2>
                <h1 className='text-capitalize fw-bold'>React restaurant</h1>
                <p className='col-12 col-md-6 mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae dolorum dignissimos fuga sed praesentium alias officiis at eum error est voluptatem dolorem a voluptate.</p>
                <div className='d-flex flex-column flex-sm-row'>
                    <MenuBtn />
                    <Link to='/contact'>
                        <button type='button' className='btn btn-outline-light btn-lg text-capitalize mx-2 shadow'>Contact us</button>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;