import React, { Component } from 'react';
import HeaderComponent from './studentComponent/HeaderStudent'
import HomeComponent from './HomeComponent'
import PopularComponent from './PopularComponent'
import RegisterComponent from './RegisterComponent'
import ServiceComponent from './ServiceComponent'
import EventsComponent from './EventsComponent'
import FooterComponent from './FooterComponent'

class CoursePageComponent extends Component {
    render() {
        return (
            <div className="popular page_section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title text-center">
                                <h1>Tìm kiếm khóa học</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row course_boxes">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-2">
                                </div>
                                <div class="col-sm-8">
                                    <form>
                                        <div class="form-row">
                                            <div class="col">
                                                <select class="custom-select my-0 mr-sm-2" id="inlineFormCustomSelectPref">
                                                    <option selected>Chọn khóa học</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="col">
                                                <select class="custom-select my-0 mr-sm-1" id="inlineFormCustomSelectPref">
                                                    <option selected>Chọn môn</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div class="col-auto">
                                                <button type="submit" class="btn btn-primary"> <span class="glyphicon glyphicon-search"></span> Tìm kiếm</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-sm-2">

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default CoursePageComponent;
