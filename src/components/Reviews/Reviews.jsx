import React from 'react';
import './Reviews.css';
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import Person1Img from '../../utils/images/person1-img.jpg';
import Person2Img from '../../utils/images/person2-img.jpg';
import Person3Img from '../../utils/images/person3-img.jpg';
import Person4Img from '../../utils/images/person4-img.jpg';

const reviews = [
    {
        id: 1,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium itaque facere ratione libero expedita non.',
        img: [Person1Img],
        name: 'John Mike'
    },
    {
        id: 2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatum!',
        img: [Person2Img],
        name: 'Maria Cruz'
    },
    {
        id: 3,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime deleniti quam, voluptates et non mollitia eveniet. Iste quidem officiis doloribus!',
        img: [Person3Img],
        name: 'Anna Gold'
    },
    {
        id: 4,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam accusantium, aliquam incidunt fugit est.',
        img: [Person4Img],
        name: 'Nick Burn'
    }
];

function Reviews() {
  return (
    <div className='reviews-section container'>
        <h2 className='text-center mb-5 text-uppercase fw-bold fs-1'>Reviews</h2>
        <div className="row g-4">
            {reviews.map((review) => (
                <div key={review.id} className='col-lg-6'>
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
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reviews;