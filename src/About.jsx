import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/images/img8.png"
import Common from './Common';

const About = () => {
    return (
        <>
            <Common name="Welcomme to About Page of"
                imgsrc={web}
                visit="/contact"
                btname="Contact Now"
                p="We are the Shit Developer Ever Known." />
        </>
    )
}
export default About;


