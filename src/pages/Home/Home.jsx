import React from 'react';
import './Home.css';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import ContactSectionImg from '../../utils/images/contact-section-img.jpg';
import Header from '../../components/Header/Header';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import MenuSection from '../../components/MenuSection/MenuSection';

function Home() {
  return (
    <div className='home-page'>
        <Header />

        <AboutUsSection />

        <MenuSection />

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