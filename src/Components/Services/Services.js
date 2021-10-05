import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import service1 from '../../Images/library.png'
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('./allServiceData.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    console.log(services);
    return (
        <div>
            <div className="service1">
            <div className="all-services-container">
                <Header></Header>
            </div>

                <h1 id="service-head">All of Our Services</h1>
                
                <div className="cart-design pe-5 ps-5">
                    {
                               services.map(service=><div className="">
                               <div className="card mb-5">
                                   <div className="logo-image">
                                       <img  src={service.image} alt="" />
                                   </div>
                                  <h4>{service.title}</h4>
                                  <p>Tution Fee: $ {service.price}</p>
                                  <div><button className="aboutBtn">Apply Now</button></div>
                                  
                               </div>
                           </div>)
                    }
                </div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Services;