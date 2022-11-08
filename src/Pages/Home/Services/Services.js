import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h2>here is my services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;