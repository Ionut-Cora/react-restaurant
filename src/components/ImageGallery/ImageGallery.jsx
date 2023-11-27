import React from 'react';
import ImageGallery1 from '../../utils/images/gallery1.jpg';
import ImageGallery2 from '../../utils/images/gallery2.jpg';
import ImageGallery3 from '../../utils/images/gallery3.jpg';
import ImageGallery4 from '../../utils/images/gallery4.jpg';
import ImageGallery5 from '../../utils/images/gallery5.jpg';
import ImageGallery6 from '../../utils/images/gallery6.jpg';

function ImageGallery() {
  return (
    <div className='container py-5'>
        <h2 className='text-center fs-1 mb-5 text-uppercase fw-bold'>Image gallery</h2>
        <div className="row">
            <div className="col-md-4 px-2">
                <div className="my-3">
                    <img src={ImageGallery1} className="img-fluid" alt="" />
                </div>
                <div className="my-2 my-md-3">
                    <img src={ImageGallery2} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-md-4 px-2">
                <div className="mt-2 mb-3 my-md-3">
                    <img src={ImageGallery3} className="img-fluid" alt="" />
                </div>
                <div className="mb-2 mt-3 my-md-3">
                    <img src={ImageGallery4} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-md-4 px-2">
                <div className="my-2 my-md-3">
                    <img src={ImageGallery5} className="img-fluid" alt="" />
                </div>
                <div className="my-3">
                    <img src={ImageGallery6} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageGallery;