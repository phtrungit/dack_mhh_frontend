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
import Header from './studentComponent/HeaderStudent';
import HeaderTeacher from './teacherComponent/HeaderTeacher'

import Footer from './FooterComponent';
import axios from 'axios';
import { compose } from 'redux'
import {connect} from "react-redux";
import { Redirect} from 'react-router-dom'
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
        this.BeginTest = this.BeginTest.bind(this);
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

    BeginTest(e,row){
        console.log(row);
        var  path = `test`;
        this.props.history.push(path,{idExam: row.id });
    }


    componentDidMount() {
        axios.get('http://localhost:4200/selectStudentCharts')
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
                    {this.props.users.id.substr(0,2)==='TC'?<HeaderTeacher/>:<Header/>}
                    <div className={classes.title}>
                        Bảng xếp hạng học sinh
                    </div>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Mã học sinh</TableCell>
                                    <TableCell>Tên học sinh</TableCell>
                                    <TableCell>Tên tài khoảng</TableCell>
                                    <TableCell>Điểm</TableCell>
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
                                            <TableCell> {row.point}</TableCell>
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
