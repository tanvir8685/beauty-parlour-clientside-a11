import React from 'react';
import { Link } from 'react-router-dom';

const AllServiceCart = ({service}) => {
    const {img,title,price,detail,_id}=service;
    return (
        <div>
            <div className='comtainer'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto m-10 my-3">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='font-bold'>Price: ${price}</p>
                    <p>{detail}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`${_id}`}>Details</Link> </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllServiceCart;