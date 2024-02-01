import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AboutSectionImg from '../../utils/images/about-section-img.jpg';
import MenuBtn from '../../components/MenuBtn/MenuBtn';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactSectionImg from '../../utils/images/contact-section-img.jpg';
import Header from '../../components/Header/Header';

const food = [
    {
        id:1,
        name: 'english breakfast',
        price: '£14'
    },
    {
        id:2,
        name: 'spaghetti carbonara',
        price: '£11'
    },
    {
        id:3,
        name: 'spicy beef',
        price: '£17'
    }
];

const drinks = [
    {
        id:1,
        name: 'organic juice',
        price: '£2'
    },
    {
        id:2,
        name: 'coffee',
        price: '£3'
    },
    {
        id:3,
        name: 'spirits',
        price: '£5'
    }
];

function Home() {
  return (
    <div className='home-page'>
        <Header />

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

        {/* menu section */}
        <div className="menu-section py-5 text-light shdow">
            <div className="container d-flex flex-column align-items-center">
                <h2 className='fs-1 mb-5 text-uppercase fw-bold text-center'>Some of our favorites</h2>
                <div className="row mb-4 mb-lg-5 w-100">
                    <div className="col-lg-6 d-flex flex-column align-items-center mb-4 mb-4 mb-lg-0">
                        <h3 className='fs-2 mb-4 fw-bold'>Dishes</h3>
                        <ul className='px-0'>
                            {food.map((food) => (
                                <li key={food.id} className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2 text-capitalize'>{food.name}</p>
                                    <p className='fs-3 mx-2 text-success fw-bold'>{food.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center mb-4 mb-lg-0">
                        <h3 className='fs-2 mb-4 fw-bold'>Drinks</h3>
                        <ul className='px-0'>
                            {drinks.map((drink) => (
                                <li key={drink.id} className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2 text-capitalize'>{drink.name}</p>
                                    <p className='fs-3 mx-2 text-success fw-bold'>{drink.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <MenuBtn />
            </div>
        </div>

        <ImageGallery />

        {/* contact section */}
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
    </div>
  )
}

export default Home;