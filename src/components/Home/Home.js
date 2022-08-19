import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import Instructors from './Instructors';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Instructors/>
            <Reviews/>
        </div>
    );
};

export default Home;