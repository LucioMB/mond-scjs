import React from 'react';

import '../../css/index.css';
//import {Html, Body} from '../../css/index';
import Header from '../header';
import Section1 from '../section1';
import Section2 from '../section2';
import Section3 from '../section3';
import Section4 from '../section4';
import Section5 from '../section5';
import Footer from '../footer';


function Root() {
    return(
        <div>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </div>
    );
}

export default Root;
