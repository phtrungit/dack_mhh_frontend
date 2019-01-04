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
import Footer from '../FooterComponent'
import { compose } from 'redux'
import '../../styles/teacherTestList.css'
import '../../App.css';
import axios from 'axios';
import '../../styles/test_styles.css'
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles/index";
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '50px',
        overflowX: 'auto',
        marginBottom: '100px',
    },
    table: {
        minWidth: 1000,

    },
    paper: {
        minWidth: 1000,

    },
    title: {
        marginTop: '200px',
        fontSize: '50px',
        textAlign: 'center',
        color: '#000000',
    },
    cot1:{
        Width:'200px!'
    }
});


const rows = [
    { id: 'D001', title: 'Trắc nghiệm toán nâng cao', time: 'null', number: 'null' }
];


class EditTestComponent extends Component {
    constructor(props) {
        super(props);
        this.getStatistics = this.getStatistics.bind(this);
        this.state = {
            data: rows
        }
    }
    getStatistics(e,row){
        console.log(row);
        var  path = `/testStatistics/${row.id}`;
        this.props.history.push(path);
    }
    componentDidMount() {
        axios.get(`http://localhost:4200/selectExam?id=${this.props.users.id}`)
            .then(res => {
                var data = res.data;
                console.log(data);
                this.setState({
                        data: data.exam,
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
                                    <h2>Danh sách đề thi</h2>
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
                                                <TableCell className={classes.cot1}>Tên đề thi</TableCell>
                                                <TableCell>Môn học</TableCell>
                                                <TableCell>Thời gian</TableCell>
                                                <TableCell>Số lượng</TableCell>
                                                <TableCell>Chỉnh sửa</TableCell>
                                                <TableCell>Thống kê</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.data.map(row => {
                                                return (
                                                    <TableRow key={row.id}>
                                                        <TableCell component="th" scope="row">
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell className={classes.cot1}> {row.title}</TableCell>
                                                        <TableCell> {row.subject}</TableCell>
                                                        <TableCell>{row.time}</TableCell>
                                                        <TableCell>{row.number}</TableCell>
                                                        <TableCell>
                                                            <Button color="primary">
                                                                Chỉnh sửa
                                                            </Button>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Button color="primary" onClick={e => this.getStatistics(e, row)}>
                                                                Thống kê
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </Paper>

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
