import React from 'react';
import useTitle from '../../../hooks/useTitle';

import Banner from '../Banner/Banner';
import BridalSection from '../BridalSection/BridalSection';
import FAndQustion from '../FAndQSection/FAndQustion';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            


            <BridalSection></BridalSection>
            <FAndQustion></FAndQustion>
        </div>
    );
};

export default Home;