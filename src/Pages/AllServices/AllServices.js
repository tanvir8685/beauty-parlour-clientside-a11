
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

import AllServiceCart from './AllServiceCart';

const AllServices = () => {
    useTitle('allService')
    const services=useLoaderData();
    // const [services, setServices] = useState([]);
    return (
        <div>
            <div className='container'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

                {
                    services.map(service => <AllServiceCart
                        key={service._id}
                        service={service}></AllServiceCart>)
                }
            </div>
            
        </div>
        
        </div>
    );
};

export default AllServices;