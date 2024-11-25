import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BreakfastImg from '../../utils/images/breakfast-img.jpg';
import LunchImg from '../../utils/images/lunch-img.jpg';
import DinnerImg from '../../utils/images/dinner-img.jpg';
import DessertImg from '../../utils/images/dessert-img.jpg';
import DrinksImg from '../../utils/images/drinks-img.jpg';
import breakfast from '../../utils/breakfast';
import lunch from '../../utils/lunch';
import dinner from '../../utils/dinner';
import dessert from '../../utils/dessert';
import drink from '../../utils/drink';

function Menu() {
  return (
    <div className='menu-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className='container h-100 d-flex align-items-center justify-content-center'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>Menu</h1>
        </motion.div>
      </header>

      <div className='breakfast my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {breakfast.map((breakfast) => (
                <div key={breakfast.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {breakfast.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {breakfast.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {breakfast.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className='lunch bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
          <div className='row'>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {lunch.map((lunch) => (
                <div key={lunch.id}>
                  <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {lunch.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {lunch.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {lunch.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className='dinner my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {dinner.map((dinner) => (
                <div key={dinner.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {dinner.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {dinner.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {dinner.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className='dessert bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
          <div className='row'>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {dessert.map((dessert) => (
                <div key={dessert.id}>
                  <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {dessert.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {dessert.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {dessert.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className='drinks my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Drinks</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <motion.div 
              className='col-lg-6 d-flex justify-content-center'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={DrinksImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </motion.div>
            <motion.div 
              className='col-lg-6 d-flex flex-column justify-content-around'
              initial={{ opacity: 0, x: 350 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {drink.map((drink) => (
                <div key={drink.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {drink.name}
                      </CardTitle>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {drink.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="container my-5 pt-5 d-flex justify-content-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to='/contact'>
          <button type='button' className='btn btn-success btn-lg rounded-0 text-capitalize mx-2 shadow'>Book your table</button>
        </Link>
      </motion.div>
    </div>
  )
}

export default Menu;