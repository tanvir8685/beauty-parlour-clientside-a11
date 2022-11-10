import React from 'react';

import Banner from '../Banner/Banner';
import BridalSection from '../BridalSection/BridalSection';
import FAndQustion from '../FAndQSection/FAndQustion';
import Services from '../Services/Services';

const Home = () => {
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