import React from 'react';
import './About2.css';

const About2 = () => {
    return (
        <div>
            <div className="facility-container mt-5">
                <h1 className="headColor p-5">About Us</h1>
                <div>
                    <div className="row ms-3">
                        <div className="col-md-6">
                            <h5>ONLINE COURSES</h5>
                            <h2><span id="about">Learn a new skills online on your time</span></h2>
                            <br />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                            <button className="join-btn">Join Us</button>
                        </div>
                        <div className="col-md-6 ">
                            <div class="row row-cols-1 row-cols-md-2 g-4 me-3">
                                <div class="col">
                                    <div class="card">
                                        <i class="fas fa-chalkboard-teacher icon"></i>
                                        <div class="card-body">
                                            <h5 class="card-title">Teachers</h5>
                                            <p class="card-text">300</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <i class="fas fa-graduation-cap icon"></i>
                                        <div class="card-body">
                                            <h5 class="card-title">Career</h5>
                                            <p class="card-text">11,900</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <i class="fas fa-university icon"></i>
                                        <div class="card-body">
                                            <h5 class="card-title">ClassRoom</h5>
                                            <p class="card-text">1700</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <i class="fas fa-chart-line icon"></i>
                                        <div class="card-body">
                                            <h5 class="card-title">Activities</h5>
                                            <p class="card-text">157</p>
                                        </div>
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

export default About2;