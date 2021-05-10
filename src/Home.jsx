import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.png"
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common name="Grow Your Business With "
                imgsrc={web}
                visit="/services"
                btname="Get Started"
                p="Explore , What Can We Do For You ." />
        </>
    )
}
export default Home;
