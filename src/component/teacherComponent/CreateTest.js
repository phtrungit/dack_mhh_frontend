import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Redirect} from 'react-router-dom'
import Header from './HeaderTeacher'
import '../../App.css';
import axios from 'axios';
import '../../styles/test_styles.css'
import {connect} from "react-redux";
import {compose} from "redux";
import {withStyles} from "@material-ui/core/styles/index";
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '50px',
        overflowX: 'auto',
        marginBottom: '100px',
    },
    table: {
        minWidth: 1100,
    },
    paper: {
        minWidth: 1100,
    },
    title: {
        marginTop: '200px',
        fontSize: '50px',
        textAlign: 'center',
        color: '#000000',
    },
});


const rows = [
    { id: 'D001', title: 'Trắc nghiệm toán nâng cao', time: 'null', number: 'null' }
];


class EditTestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: rows,
            object:'',
            tenDeThi:'',
            soCauHoi:'',
            time:'',
            subject:'Toán',
            numberOfQuestion:[],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addQuestion = this.addQuestion.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addQuestion(e,row){
        console.log(row);
        var  path = `/createQuestionTest/${row.id}`;
        this.props.history.push(path);
    }
    async handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        await axios
            .post('http://localhost:4200/createExam', {
                tenDeThi:this.state.tenDeThi,
                soCauHoi:this.state.soCauHoi,
                time:this.state.time,
                object:this.state.object,
                creator:this.props.users.id,
                subject:this.state.subject,
            })
            .then(response => {
                console.log('response',response)
                if (response.data.exam) {
                    alert( 'Thêm đề thi thành công!')
                }else {
                    console.log("errorCreateExam")
                    alert( 'Lỗi!')
                }
            })
        axios.get(`http://localhost:4200/selectExam?id=${this.props.users.id}`)
            .then(res => {
                var data = res.data;
                console.log(data);
                this.setState({
                        data: data.exam,
                        numberOfQuestion:data.numberOfQuestion
                    }
                )
            });
    }
    componentDidMount() {
        axios.get(`http://localhost:4200/selectExam?id=${this.props.users.id}`)
            .then(res => {
                var data = res.data;
                console.log(data);
                this.setState({
                        data: data.exam,
                        numberOfQuestion:data.numberOfQuestion
                    }
                )
            });

    }

    render() {
        const {classes}=this.props;
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
                                    <h2>Tạo đề thi trắc nghiệm</h2>
                                </div>
                            </div>

                            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 mt-30   ">
                                <h3>Danh sách đề thi đã tạo</h3>
                                <br></br>
                                <Paper className={classes.paper}>
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Mã đề thi</TableCell>
                                                <TableCell>Tên đề thi</TableCell>
                                                <TableCell>Môn học</TableCell>
                                                <TableCell>Thời gian</TableCell>
                                                <TableCell>Số lượng</TableCell>
                                                <TableCell>Số câu hỏi</TableCell>
                                                <TableCell>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.data.map((row,index) => {
                                                return (
                                                    <TableRow key={row.id}>
                                                        <TableCell component="th" scope="row">
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell align="left"> {row.title}</TableCell>
                                                        <TableCell align="left"> {row.subject}</TableCell>
                                                        <TableCell >{row.time}</TableCell>
                                                        <TableCell>{row.number}</TableCell>
                                                        <TableCell>{this.state.numberOfQuestion[index]}</TableCell>
                                                        <TableCell align="left">
                                                            <Button color="primary">
                                                                Chỉnh sửa
                                                            </Button>
                                                            <Button onClick={e => this.addQuestion(e, row)} color="primary">
                                                                Thêm câu hỏi
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </Paper>

                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 mt-30 khung">
                                <div className="test_center">
                                    <h3>Thêm đề thi mới</h3>
                                </div>
                                <form method="POST" role="form" action="add" enctype="multipart/form-data">

                                    <div className="form-group">
                                        <label for="">Môn học</label>
                                        <select name="subject" onChange={this.handleChange} className="form-control">

                                            <option   value="Toán">Toán</option>
                                            <option   value="Lý">Lý</option>
                                            <option   value="Hóa">Hóa</option>
                                            <option   value="Tiếng Anh">Tiếng Anh</option>
                                            <option   value="Địa lý">Địa lý</option>

                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label for="">Tên đề thi</label>
                                        <input  onChange={this.handleChange} type="text" className="form-control" name="tenDeThi"
                                               placeholder="Tên đề thi"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="">Số câu hỏi</label>
                                        <input  onChange={this.handleChange} type="text" className="form-control" name="soCauHoi"
                                               placeholder="SoCauHoi"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="">Thời gian</label>
                                        <input  onChange={this.handleChange} type="text" className="form-control" name="time"
                                               placeholder="Time"></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Đối tượng</label>
                                        <input onChange={this.handleChange} type="text" className="form-control"
                                               name="object"
                                               placeholder="vd: Học sinh lớp 10"></input>
                                    </div>

                                    <div className="test_right mr-30">

                                        <button  onClick={this.handleSubmit} type="submit" className="btn btn-primary">
                                            <span className="glyphicon glyphicon-ok"></span>
                                            Thêm
                                        </button>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>

                                </form>


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
export default compose(
    connect(mapStateToProps),
    withStyles(styles)
)(EditTestComponent);
