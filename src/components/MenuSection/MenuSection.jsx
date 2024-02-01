import React from 'react';
import './MenuSection.css';
import food from '../../utils/food';
import drinks from '../../utils/drinks';
import MenuBtn from '../MenuBtn/MenuBtn';

function MenuSection() {
  return (
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
  )
}

export default MenuSection;