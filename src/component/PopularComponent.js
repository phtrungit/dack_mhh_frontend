import React, { Component } from 'react';
import '../App.css';

class PopularComponent extends Component {
  render() {
    return (
      <div className="popular page_section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title text-center">
                <h1>Khóa học phổ biến</h1>
              </div>
            </div>
          </div>
          <div className="row course_boxes">
            {/* Popular Course Item */}
            <div className="col-lg-4 course_box">
              <div className="card">
                <img className="card-img-top" src={require('../images/course_1.jpg')} alt="https://unsplash.com/@kellybrito" />
                <div className="card-body text-center">
                  <div className="card-title"><a href="courses.html">A complete guide to design</a></div>
                  <div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
                </div>
                <div className="price_box d-flex flex-row align-items-center">
                  <div className="course_author_image">
                    <img src={require('../images/author.jpg')} alt="https://unsplash.com/@mehdizadeh" />
                  </div>
                  <div className="course_author_name">Michael Smith, <span>Author</span></div>
                  <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                </div>
              </div>
            </div>
            {/* Popular Course Item */}
            <div className="col-lg-4 course_box">
              <div className="card">
                <img className="card-img-top" src={require('../images/course_2.jpg')} alt="https://unsplash.com/@cikstefan" />
                <div className="card-body text-center">
                  <div className="card-title"><a href="courses.html">Beginners guide to HTML</a></div>
                  <div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
                </div>
                <div className="price_box d-flex flex-row align-items-center">
                  <div className="course_author_image">
                  <img src={require('../images/author.jpg')} alt="https://unsplash.com/@mehdizadeh" />
                  </div>
                  <div className="course_author_name">Michael Smith, <span>Author</span></div>
                  <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                </div>
              </div>
            </div>
            {/* Popular Course Item */}
            <div className="col-lg-4 course_box">
              <div className="card">
                <img className="card-img-top"src={require('../images/course_3.jpg')} alt="https://unsplash.com/@dsmacinnes" />
                <div className="card-body text-center">
                  <div className="card-title"><a href="courses.html">Advanced Photoshop</a></div>
                  <div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
                </div>
                <div className="price_box d-flex flex-row align-items-center">
                  <div className="course_author_image">
                  <img src={require('../images/author.jpg')} alt="https://unsplash.com/@mehdizadeh" />
                  </div>
                  <div className="course_author_name">Michael Smith, <span>Author</span></div>
                  <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>		
      </div>
    );
  }
}

export default PopularComponent;
