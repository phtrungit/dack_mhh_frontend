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


                    <PopularComponent></PopularComponent>

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
