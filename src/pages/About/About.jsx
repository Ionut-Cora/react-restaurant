import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import AboutChef1Img from '../../utils/images/about-chef1-img.jpg';
import AboutChef2Img from '../../utils/images/about-chef2-img.jpg';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import Reviews from '../../components/Reviews/Reviews';

function About() {
  return (
    <div className='about-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>About</h1>
        </motion.div>
      </header>

      <div className="container my-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, consectetur. Possimus dolorem ratione illo fugiat exercitationem sunt aperiam, reprehenderit quo repudiandae excepturi. Doloribus veritatis quasi incidunt sequi aspernatur necessitatibus ea fugiat quod vero repellat assumenda quae odio quas enim deserunt consequatur, inventore illum doloremque, esse autem. Atque dolor veritatis sequi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem placeat inventore, illum commodi eum voluptas praesentium obcaecati at minima. Facere, praesentium velit amet iure quod sunt deserunt delectus laboriosam esse. Saepe excepturi at sed eius in aspernatur voluptatibus iure?</p>

        <div className="row">
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={AboutChef1Img} className='img-fluid my-4' alt="" />
          </motion.div>
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={AboutChef2Img} className='img-fluid my-4' alt="" />
          </motion.div>
        </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis eos sapiente voluptate odit mollitia optio ducimus id consequatur molestiae deleniti qui repellat commodi consectetur a, voluptates autem adipisci! Aperiam incidunt in placeat et illo molestiae, porro vel, sapiente provident doloremque, similique harum blanditiis quibusdam qui!</p>
      </div>

      <div className="bg-dark text-light py-1">
        <ImageGallery />
      </div>

      <div className="my-5">
        <Reviews />
      </div>
    </div>
  )
}

export default About;