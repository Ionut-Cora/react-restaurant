import React from 'react';
import './Reviews.css';
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import { motion } from 'framer-motion';
import reviews from '../../utils/reviews';

function Reviews() {
  return (
    <div className='reviews-section container'>
        <h2 className='text-center mb-5 text-uppercase fw-bold fs-1'>Reviews</h2>
        <div className="row g-4">
            {reviews.map((review) => (
                <motion.div 
                    key={review.id} 
                    className='col-lg-6'
                    initial={{ opacity: 0, x: `${review.initialMotion}` }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>{review.description}</CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={review.img} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">{review.name}</CardTitle>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Reviews;