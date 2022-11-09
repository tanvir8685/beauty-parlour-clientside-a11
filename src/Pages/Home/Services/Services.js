import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-4xl font-extrabold	text-center'>Here is my services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        service={service}></ServiceCart>)
                }
            </div>
            <div className='container py-10 px-10 mx-0 min-w-full flex flex-col items-center'>
                <p></p>
                <button className=' btn btn-outline btn-primary' ><Link to='/services'>See All</Link></button>
            </div>

        </div>
    );
};

export default Services;