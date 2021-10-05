import React from 'react';
import Accordian from '../Accordian/Accordian';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomePageServices from '../HomePageServices/HomePageServices';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePageServices></HomePageServices>
            <Accordian></Accordian>
            <Footer></Footer>
        </div>
    );
};

export default Home;