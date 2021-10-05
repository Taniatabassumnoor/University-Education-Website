import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../Images/logo.png'

const Header = () => {
    return (
        <div>
            <div className="navigation-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logo-img">
                                <img className="w-100 mt-2" src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="navBar-container">
                                <ul className="d-flex align-items-end justify-content-end">
                                    <Link to="/home" className="nav-item">
                                        <li>Home</li>
                                    </Link>
                                    <Link to="/services" className="nav-item">
                                        <li>Services</li>
                                    </Link>
                                    <Link to="/contact" className="nav-item">
                                        <li>Contact Us</li>
                                    </Link>
                                    <Link to="/about" className="nav-item">
                                        <li>About Us</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;