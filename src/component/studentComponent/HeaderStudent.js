import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import accountIcon from '@material-ui/icons/AccountCircle'
import {logOut} from "../../actions";
import axios from "axios/index";
class HeaderStudent extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        this.props.logout();
    }
  render() {
    return (
      <header className="header d-flex flex-row">
		<div className="header_content d-flex flex-row align-items-center">
			<div className="logo_container">
				<div class="logo">
                <img src={require('../../images/logo.png')}/>
					<span>Ex-Ol</span>
                </div>
			</div>
            <nav className="main_nav_container">
				<div className="main_nav">
					<ul className="main_nav_list">
						<li className="main_nav_item"><Link to ='/'>Trang chủ</Link></li>
						<li className="main_nav_item"><Link to ='/list-exam'>Danh sách bài thi</Link></li>
						<li className="main_nav_item"><Link to ='/studenthistoryexam'>Lịch sử làm bài</Link></li>
						<li className="main_nav_item"><Link to ='/studentscharts'>Bảng xếp hạng học sinh</Link></li>
						<li className="main_nav_item"><Link to ='/teacherscharts'>Bảng xếp hạng giáo viên</Link></li>
					</ul>
				</div>
			</nav>
		</div>
        <div class="header_side d-flex flex-row justify-content-center align-items-center">
			<img src= {require('../../images/accountIcon.png')} alt=""></img>
			<span>{this.props.users.displayName}</span>
			<span><Button  onClick={this.handleSubmit}>Đăng xuất</Button></span>
		</div>

		<div className="hamburger_container">
			<i classNam="fas fa-bars trans_200"></i>
		</div>
        </header>
        
    );
  }
}
const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logOut())
        }
    }
}
const mapStateToProps =(state) =>{


    return{
        users: state.auth.currentUser
    };

}
export default connect(mapStateToProps,mapDispatchToProps) (HeaderStudent);
