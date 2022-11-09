import React from 'react';
import bridal1 from './../../../assests/images/bridal1.jpg';
import bridal6 from '../../../assests/images/bridal6.jpg';
import bridal4 from '../../../assests/images/bridal4.jpg';
import bridal5 from '../../../assests/images/bridal5.jpg';






const BridalSection = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content ">
                    <div className="carousel  w-full h-96">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={bridal1} alt='' className="  w-full h-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={bridal5}alt='' className="w-full h-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={bridal6}alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={bridal4}alt='' className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">My Weeding Makeover</h1>
                        <p className="py-6">I am special at to bridal make over.I use their skin tone .then analysis thir face shape then i start make up what suit in their face</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BridalSection;