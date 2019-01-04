import React, { Component } from 'react';
import '../../App.css';
import Header from './HeaderTeacher'
import '../../styles/test_styles.css'
import {connect} from "react-redux";
import axios from "axios/index";
import { Redirect} from 'react-router-dom'

class CreateTestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:'',
            optionA:'',
            optionB:'',
            optionC:'',
            optionD:'',
            correctOption:'A',
            point:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        await axios
            .post('http://localhost:4200/createQuestion', {
                examId:this.props.match.params.id,
                text:this.state.text,
                optionA:this.state.optionA,
                optionB:this.state.optionB,
                optionC:this.state.optionC,
                optionD:this.state.optionD,
                correctOption:this.state.correctOption,
                point:this.state.point,
            })
            .then(response => {
                console.log('response',response)
                if (response.data.question) {
                    alert( 'Tạo câu hỏi thành công!')
                }else {
                    console.log("errorCreateQuestion")
                    alert( 'Lỗi!')
                }
            })

    }
  render() {
      if(this.props.isLogin===false)
          return <Redirect to={'/login'}/>
      else {
          return (
              <div>
                  <Header/>
                  <div className="container mt-30 color_black mb-20 ">

                      <div className="row ">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className="test_center">
                                  <h2>Tạo câu hỏi đề thi trắc nghiệm</h2>
                                  <h2>Mã đề: {this.props.match.params.id}</h2>
                              </div>
                          </div>

                          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 mt-30  ">


                          </div>
                          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mt-30 khung">

                              <form method="POST" role="form" action="add" enctype="multipart/form-data">

                                  <div class="form-group">
                                      <label for="">Nội dung câu hỏi</label>
                                      <input onChange={this.handleChange} type="text" class="form-control" name="text"
                                             placeholder="Nội dung câu hỏi"></input>
                                  </div>
                                  <div class="form-group ">
                                      <label for="">Hình minh họa, video minh họa</label><br></br>
                                      <input type="file" name="HinhMinhHoa"></input>
                                  </div>
                                  <div class="form-group">
                                      <label for="">Đáp án A</label>
                                      <input onChange={this.handleChange} type="text" class="form-control"
                                             name="optionA" placeholder="Đáp án A"></input>
                                  </div>
                                  <div class="form-group">
                                      <label for="">Đáp án B</label>
                                      <input onChange={this.handleChange} type="text" class="form-control"
                                             name="optionB" placeholder="Đáp án B"></input>
                                  </div>
                                  <div class="form-group">
                                      <label for="">Đáp án C</label>
                                      <input onChange={this.handleChange} type="text" class="form-control"
                                             name="optionC" placeholder="Đáp án C"></input>
                                  </div>
                                  <div class="form-group">
                                      <label for="">Đáp án D</label>
                                      <input onChange={this.handleChange} type="text" class="form-control"
                                             name="optionD" placeholder="Đáp án D"></input>
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="">Điểm</label>
                                      <input onChange={this.handleChange} type="text" className="form-control"
                                             name="point"
                                             placeholder="Điểm cho câu hỏi"></input>
                                  </div>


                                  <div class="form-group">
                                      <label for="">Đáp án đúng</label>
                                      <select onChange={this.handleChange} name="correctOption" class="form-control">
                                          <option value="A">A</option>
                                          <option value="B">B</option>
                                          <option value="C">C</option>
                                          <option value="D">D</option>
                                      </select>
                                  </div>

                                  <div className="test_right mr-30">
                                      <a class="btn btn-danger" href="" role="button">
                                          <span class="glyphicon glyphicon-arrow-left"></span>
                                          Trở về
                                      </a>
                                      &nbsp;
                                      <button onClick={this.handleSubmit} type="submit" class="btn btn-primary">
                                          <span class="glyphicon glyphicon-ok"></span>
                                          Thêm
                                      </button>
                                  </div>
                                  <br></br>
                                  <br></br>
                                  <br></br>

                              </form>


                          </div>
                          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 mt-30 ">


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
export default connect(mapStateToProps) (CreateTestComponent);
