import React from 'react';
import Header from '../Header/Header';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner-container ">
      <div className="">
        <div className="  banner-part align-items-center justify-content-center">
          <Header></Header>
          <div className="">
          <h1 className="title">
            
            <span className="name1">WELCOME TO UNIVERSITY</span> <br /> <span className="name1" ><b>Eduford</b></span>
            </h1>
            <p className="text-white text-center hero-p">
              Education is not the filling of a <br />
              pail, but lighting of a fire.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          
        </div>
      </div>
    </div>        </div>
    );
};

export default Banner;