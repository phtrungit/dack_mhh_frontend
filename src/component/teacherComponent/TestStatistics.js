import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from './HeaderTeacher';
import Footer from '../FooterComponent';
import axios from 'axios';
import { Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import {compose} from "redux";
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: '50px',
        overflowX: 'auto',
        marginBottom: '100px',
    },
    table: {
        minWidth: 700,
    },
    title:{
        marginTop: '200px',
        fontSize:'50px',
        textAlign:'center',
        color:'#000000',
    },
});

const rows = [
    {id: 'D001', title: 'Trắc nghiệm toán nâng cao', creator:'Trung Phạm'}
];

class SimpleTable extends React.Component{
    constructor(props){
        super(props)
        this.getExamStudent = this.getExamStudent.bind(this);
        this.showTeacher = this.showTeacher.bind(this);
        this.state = {
            exam: {
                data: rows,
                teacher: 'null'
            }
        }
    }

    showTeacher(){
        return 'AAAA';
    }

    getExamStudent(e,row){
        console.log(row);
        var  path = `/detail-ex/${row.idStudentExam}`;
        this.props.history.push(path);
    }


    componentDidMount() {
        axios.get(`http://localhost:4200/selectTeacherTestList?id=${this.props.match.params.id}`)
            .then(res => {
                var data = res.data;
                console.log(data);
                this.setState({
                    exam: {
                        data: data,
                    }
                })
            });
    }

    render(){
        if(this.props.isLogin===false)
            return <Redirect to={'/login'}/>
        else {
            const {classes} = this.props;
            return (
                <div>
                    <Header/>
                    <div className={classes.title}>
                        Danh sách học sinh tham gia bài thi {this.props.match.params.id}
                    </div>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Mã học sinh</TableCell>
                                    <TableCell>Tên học sinh</TableCell>
                                    <TableCell>Tên tài khoảng</TableCell>
                                    <TableCell>Điểm</TableCell>
                                    <TableCell>Xem bài làm</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.exam.data.map(row => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell> {row.displayName}</TableCell>
                                            <TableCell> {row.username}</TableCell>
                                            <TableCell> {row.score}</TableCell>
                                            <TableCell>
                                                <Button color="primary" onClick={e => this.getExamStudent(e, row)}>
                                                    Xem
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                    <Footer/>
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
)(SimpleTable);
