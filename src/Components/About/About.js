import React from 'react';
import About2 from '../About2/About2';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
        <div>
           <div className="banner-container ">
      <div className="">
        <div className="  banner-p align-items-center justify-content-center">
          <Header></Header>
          <div>
            
          <h1 className="title">
            
            <span id="name">15+</span> <br /> YEARS OF EXPERIANCE
            </h1>
            <p className="text-white text-center hero-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.


            </p>
            <button className="mt-3 about-btn">Apply Now</button>
          </div>
          
        </div>
      </div>
    </div>
    <About2></About2>
    <Footer></Footer>
        </div>

    );
};

export default About;