import React from 'react';
import './Home.css';
import MenuBtn from '../../components/MenuBtn/MenuBtn';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactSectionImg from '../../utils/images/contact-section-img.jpg';
import Header from '../../components/Header/Header';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';

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

        <AboutUsSection />

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