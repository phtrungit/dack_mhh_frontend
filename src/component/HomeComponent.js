import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import Background from '../images/slider_background.jpg';

class HomeComponent extends Component {
    componentDidMount(){

    }
    render() {
        console.log('user',this.props.users);
        return (
            <div className="HomeComponent">
                <div className="home">
                    {/* Hero Slider */}
                    <div className="hero_slider_container">
                        <div className="hero_slider owl-carousel">
                            {/* Hero Slide */}
                            <div className="hero_slide">
                                <div className="hero_slide_background"
                                // Doan nay cai backgroundImage no ko hien ra hinh
                                    style={ { backgroundImage: "url('../images/slider_background.jpg')" } } />
                                <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                                    <div className="hero_slide_content text-center">
                                        <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Get your <span>Education</span> today!</h1>
                                    </div>
                                </div>
                            </div>
                            {/* Hero Slide */}
                            <div className="hero_slide">
                                <div className="hero_slide_background"
                                    style={{ backgroundImage: "url(''../images/slider_background.jpg')" }}></div>
                                <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                                    <div className="hero_slide_content text-center">
                                        <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Get your <span>Education</span> today!</h1>
                                    </div>
                                </div>
                            </div>
                            {/* Hero Slide */}
                            <div className="hero_slide">
                                <div className="hero_slide_background"
                                    style={{ backgroundImage: "url(''../images/slider_background.jpg')" }}></div>
                                <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                                    <div className="hero_slide_content text-center">
                                        <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Get your <span>Education</span> today!</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero_slider_left hero_slider_nav trans_200"><span className="trans_200">prev</span></div>
                        <div className="hero_slider_right hero_slider_nav trans_200"><span className="trans_200">next</span></div>
                    </div>
                </div>

                <div className="hero_boxes">
                    <div className="hero_boxes_inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 hero_box_col">
                                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                        <img src={require('../images/earth-globe.svg')} className="svg" alt />
                                        <div className="hero_box_content">
                                            <h2 className="hero_box_title">Online Courses</h2>
                                            <a href="courses.html" className="hero_box_link">view more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 hero_box_col">
                                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                        <img src={require('../images/books.svg')} className="svg" alt />
                                        <div className="hero_box_content">
                                            <h2 className="hero_box_title">Our Library</h2>
                                            <a href="courses.html" className="hero_box_link">view more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 hero_box_col">
                                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                        <img src={require('../images/professor.svg')} className="svg" alt />
                                        <div className="hero_box_content">
                                            <h2 className="hero_box_title">Our Teachers</h2>
                                            <a href="teachers.html" className="hero_box_link">view more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps =(state) =>{


        return{
            users: state.auth.currentUser
        };

}
export default connect(mapStateToProps)(HomeComponent);
