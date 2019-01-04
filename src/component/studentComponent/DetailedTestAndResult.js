import React, { Component } from 'react';
import '../../App.css';
import HeaderStudent from './HeaderStudent.js'
import HeaderTeacher from '../teacherComponent/HeaderTeacher'
import FooterComponent from '../FooterComponent.js'
import '../../styles/test_styles.css'
import {connect} from "react-redux";
import { Link} from 'react-router-dom'
import { Redirect} from 'react-router-dom'

import axios from 'axios';

var listExam = [{ "_id": "5c16635508943720ec5056fb", "id": "QT0001", "examId": "EX0001", "text": "Gía trị của biểu thức x=...+y/abs(z)", "optionA": "Câu A", "optionB": "Câu B", "optionC": "Câu C", "optionD": "Câu D", "correctOption": "A", "point": "0.5", "__v": 0 }];
var title = [{"_id":"5c11f9b5d059693da8f5fbbf","id":"EX0001","title":"Bài thi toán cao cấp 01","creator":"TC0001","subject":"Toán","time":"45 phút","object":"Học sinh lớp 10","__v":0}];
var listAnswer = [];

class TestComponent extends Component {
    constructor(props) {
        super(props);


        this.state = {
            student:'',
            exam: listExam,
            titleExam: title,
            answer:[],
            score:0,
            creator:'',
        };
    }

    componentDidMount() {
        console.log('STATE',this.props.match.params.id);

        var req = 'http://localhost:4200/detail-ex/?id=' + this.props.match.params.id;
        console.log(req);
        axios.get(req)
            .then(res => {
                var data = res.data;

                this.setState({
                    data:data,
                    exam: data.data,
                    titleExam: res.data.title,
                    answer:data.answer,
                    score:data.score,
                    student:data.student,
                    creator:data.teacher,
                })
                console.log(this.state.exam.length);
            });


    }




    render() {
        if(this.props.isLogin===false)
            return <Redirect to={'/login'}/>
        else {
            return (
                <div>
                    {this.props.users.id.substr(0, 2) === 'TC' ? <HeaderTeacher/> : <HeaderStudent/>}
                    <div className="container mt-30 color_black ">

                        <div className="row ">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="test_center">
                                    <h2>{this.state.titleExam[0].title}</h2>
                                </div>
                            </div>

                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 mt-30  ">
                                <div className=" cau_hoi2">
                                    Nội dung đề thi
                                </div>
                                <div className="cau_hoi noi_dung">
                                    <ul>
                                        <li>Người tạo: {this.state.creator}</li>
                                        <li>Thời gian: {this.state.titleExam[0].time}</li>
                                        <li>Số lượng: {this.state.exam.length} câu</li>
                                        <li>Môn học: {this.state.titleExam[0].subject}</li>
                                        <li>Đối tượng: {this.state.titleExam[0].object}</li>

                                    </ul>
                                </div>
                                <span></span>
                                <div className="cau_hoi2">
                                    Chi tiết bài thi
                                </div>
                                <div>
                                    <ul>
                                        <li>Người làm: {this.state.student}</li>
                                    </ul>
                                </div>
                                <div className="cau_hoi2">
                                    Kết quả bài thi
                                </div>
                                <div className="score">
                                    <ul>
                                        <li>Điểm: {this.state.score}đ</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 mt-30 khung">
                                <div className="test_center mt-3"><h3>Đề thi mã #{this.state.exam[0].examId}</h3></div>
                                <br></br>
                                {/* Danh sach cau hoi */}
                                <p className="cau_hoi2">Đáp án đúng được tô đậm màu xanh</p>
                                <div>{this.state.exam.map((exam, index) => {
                                    return <div className="cau_hoi ml-5">
                                <pre>
                                    Câu {index + 1}: {exam.text}

                                </pre>
                                        <br></br>
                                        <div className="ml-5 dap-an">
                                            <input type="radio" id="Fastlearning" name={index} value='A'
                                                   checked={this.state.answer[index] === 'A' ? true : false}></input>
                                            <label
                                                Style={exam.correctOption === 'A' ? "background-color:lightgreen;" : ""}
                                                for="Fastlearning">&nbsp; &nbsp;{exam.optionA}</label><br/>
                                            <input type="radio" name={index} value='B'
                                                   checked={this.state.answer[index] === 'B' ? true : false}></input>
                                            <label
                                                Style={exam.correctOption === 'B' ? "background-color:lightgreen;" : ""}>&nbsp; &nbsp;{exam.optionB}</label><br/>
                                            <input type="radio" name={index} value='C'
                                                   checked={this.state.answer[index] === 'C' ? true : false}></input>
                                            <label
                                                Style={exam.correctOption === 'C' ? "background-color:lightgreen;" : ""}>&nbsp; &nbsp;{exam.optionC}</label>
                                            <br/>
                                            <input type="radio" name={index} value='D'
                                                   checked={this.state.answer[index] === 'D' ? true : false}></input>
                                            <label
                                                Style={exam.correctOption === 'D' ? "background-color:lightgreen;" : ""}>&nbsp; &nbsp;{exam.optionD}</label>
                                        </div>
                                    </div>
                                })}</div>


                                <p className="color_black"></p>
                            </div>


                        </div>
                    </div>
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
export default connect(mapStateToProps)(TestComponent);
