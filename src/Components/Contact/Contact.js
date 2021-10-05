import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-banner banner-img ">
           
            <div>
            <div className="banner-container ">
      <div className="">
        <div className="  banner align-items-center justify-content-center">
          <Header></Header>
          <div className="">
          <h1 className="title">
            
            <span className="name1" >Education</span> <br />  <span className="name1" >develop a passion for learning.If you do, you will never cease to grow.</span>
            </h1>
            <p className="text-white text-center hero-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.

            </p>
            <button className="mt-3 about-btn">Apply Now</button>
          </div>
          
        </div>
      </div>
    </div>

    
            </div>
            <div>
                <h1 className="text-center text-c mt-5" >Contact Us</h1>
                <h1 id="form-part" className="text-center text-c ">Registration Form</h1>
            </div>
            <div className="container contact-container">
                <div className="row ">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label text-c">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label text-c">Phone</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label text-c">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label text-c">Message Us</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="write your question about us" rows="3"></textarea>
                            </div>
                            <div className="col-12 submit">
                                <button className="btn text-c  border-white" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;