import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Eduford University</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                  <i class="fab fa-instagram"></i>
                  </div>
                  <div className="icon">
                  <i class="fab fa-linkedin"></i>
                  </div>
                  <div className="icon">
                  <i class="fab fa-pinterest-square"></i>
                  </div>
                  <div className="icon">
                  <i class="fab fa-facebook-square"></i>
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    
                  </small>
                </p>

                <p className="mt-5">
                  <small>Eduford © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Contact Us With Your Email</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                  <i class="fas fa-phone-volume"></i>
                  </div>
                  <div>
                    <h5>+1 9 800 555 85 67</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                  <i class="fas fa-map-marked-alt"></i>
                  </div>
                  <div>
                    <p>
                    503 Old Buffalo Street Northwest #205, New York-3087. <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;