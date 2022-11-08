import React from 'react';

const ServiceCart = ({service}) => {
    const {img,title,detail,price}=service;
    return (
        <div className='comtainer'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto m-10 my-3">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-bold'>Price: ${price}</p>
                    <p>{detail}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;