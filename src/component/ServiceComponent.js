import React, { Component } from 'react';

class ServiceComponent extends Component {
  render() {
    return (
        <div className="services page_section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title text-center">
                <h1>Our Services</h1>
              </div>
            </div>
          </div>
          <div className="row services_row">
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
              <img src= {require('../images/earth-globe.svg')} alt />
              </div>
              <h3>Online Courses</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
              <img src= {require('../images/exam.svg')} alt />
              </div>
              <h3>Indoor Courses</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
              <img src= {require('../images/books.svg')} alt />
              </div>
              <h3>Amazing Library</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
              <img src= {require('../images/professor.svg')} alt />
              </div>
              <h3>Exceptional Professors</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
              <img src= {require('../images/blackboard.svg')} alt />
              </div>
              <h3>Top Programs</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
            <div className="col-lg-4 service_item text-left d-flex flex-column align-items-start justify-content-start">
              <div className="icon_container d-flex flex-column justify-content-end">
              <img src= {require('../images/mortarboard.svg')} alt />
              </div>
              <h3>Graduate Diploma</h3>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
          </div>
        </div>
      </div>
        
    );
  }
}

export default ServiceComponent;
