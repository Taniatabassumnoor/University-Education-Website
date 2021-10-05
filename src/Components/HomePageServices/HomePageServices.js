import React, { useEffect, useState } from 'react';
import './HomePageServices.css';

const HomePageServices = () => {
    const [serviceshome,setServiceshome] = useState([])
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setServiceshome(data))
    },[])
    console.log(serviceshome);
    return (
        <div className="services-home-container">
            <h1 className="head">Some of Our Services</h1>
            <div>
             <div className="cart-design ">
                 {
                     serviceshome.map(servicehome=><div className="">
                         <div className="card ">
                             <div className="logo-image">
                                 <img  src={servicehome.image} alt="" />
                             </div>
                            <h4>{servicehome.title}</h4>
                            <p>Tution Fee: $ {servicehome.price}</p>
                            <div><button className="aboutBtn">Apply Now</button></div>
                         </div>
                         
                     </div>)
                 }
             </div>
            
            </div>
        </div>
    );
};

export default HomePageServices;