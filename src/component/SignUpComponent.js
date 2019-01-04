import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/PersonAdd';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FormLabel from '@material-ui/core/FormLabel';
import axios from "axios/index";
import { Redirect} from 'react-router-dom'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    group: {
        marginTop:'5px',
        display:'block',
        margin: `${theme.spacing.unit}px 0`,
    },
    roleForm:{
        marginTop:'20px',
    }
});

class SignUp extends React.Component
{
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            email:'',
            name:'',
            phone:'',
            role:'',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')
        axios
            .post('http://localhost:4200/signup', {
                username:this.state.username,
                password:this.state.password,
                email:this.state.email,
                name:this.state.name,
                phone:this.state.phone,
                role:this.state.role,
            })
            .then(response => {
                console.log('response',response)
                if (response.data.user) {
                        this.setState({
                            redirectTo: '/login'
                        })
                }else {
                    console.log("errorSignUp")
                    alert( response.data.error)
                }
            })
    }

    render()
    {
        const { classes } = this.props;
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <main className={classes.main}>
                    <CssBaseline/>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <form className={classes.form}>
                            <FormControl className={classes.roleForm}>
                                <FormLabel component="legend">You are</FormLabel>
                                <RadioGroup
                                    aria-label="You are"
                                    name="role"
                                    value={this.state.role}
                                    onChange={this.handleChange}
                                    className={classes.group}
                                >
                                    <FormControlLabel value="teacher" control={<Radio/>} label="Teacher"/>
                                    <FormControlLabel value="student" control={<Radio/>} label="Student"/>
                                </RadioGroup>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input value={this.state.email}
                                       onChange={this.handleChange} id="email" name="email" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">username</InputLabel>
                                <Input value={this.state.username}
                                       onChange={this.handleChange} id="username" name="username" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input value={this.state.password}
                                       onChange={this.handleChange} name="password" type="password" id="password"
                                       autoComplete="current-password"/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirm password</InputLabel>
                                <Input name="confirmPassword" type="password" id="confirmPassword"
                                       autoComplete="current-password"/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel>Your name</InputLabel>
                                <Input value={this.state.name}
                                       onChange={this.handleChange} id="name" name="name"/>
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel>Your mobile phone</InputLabel>
                                <Input value={this.state.phone}
                                       onChange={this.handleChange} id="phone" name="phone"/>
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleSubmit}
                            >
                                Sign up
                            </Button>
                        </form>
                    </Paper>
                </main>
            );
        }
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);