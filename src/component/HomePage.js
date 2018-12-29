import React, { Component } from 'react';
import HeaderStudent from './studentComponent/HeaderStudent'
import HeaderTeacher from './teacherComponent/HeaderTeacher'
import HomeComponent from './HomeComponent'
import PopularComponent from './PopularComponent'
import RegisterComponent from './RegisterComponent'
import ServiceComponent from './ServiceComponent'
import EventsComponent from './EventsComponent'
import FooterComponent from './FooterComponent'
import SearchComponent from './SearchComponent'
import {connect} from "react-redux";
import { Redirect} from 'react-router-dom'

class HomePageStudent extends Component {

    render() {
        if(this.props.isLogin===false)
            return <Redirect to={'/login'}/>
        else
        {
            return (
                <div className="App">
                    {this.props.users.id.substr(0,2)==='TC'?<HeaderTeacher/>:<HeaderStudent/>}
                    <HomeComponent></HomeComponent>
                    <div class="row">
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-8">
                            <form>
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Tìm kiếm khóa học dành riêng cho bạn ..."></input>
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
                    <SearchComponent></SearchComponent>
                    <PopularComponent></PopularComponent>
                    <RegisterComponent></RegisterComponent>
                    <ServiceComponent></ServiceComponent>
                    <EventsComponent></EventsComponent>
                    <FooterComponent></FooterComponent>
                </div>
            );
        }

    }
}
const mapStateToProps =(state) =>{


    return{
        users: state.auth.currentUser,
        isLogin:state.auth.isLogin
    };

}
export default connect(mapStateToProps) (HomePageStudent);
