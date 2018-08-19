import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, FormControl, ControlLabel } from "react-bootstrap";

import axios from 'axios';


class Create extends Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: '',
            username: '',
            email: '',
            password: '',
            rpassword: '',
            companyname: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state.firstname);
        if (this.firstname.value == '') {
            alert('enter your firstname')
        }
        else if (this.lastname.value == '') {
            alert('enter your lastname')
        }
        else if (this.username.value == '') {
            alert('enter your username')
        }
        else if (this.companyname.value == '') {
            alert('enter your companyname')
        }
        else if (this.email.value == '') {
            alert('enter your email')
        }
        else if (this.password.value == '') {
            alert('enter your password')
        }
        else if (this.rpassword.value == '') {
            alert('enter your password')
        }
        else if (this.rpassword.value == this.password.value) {

            // event.stopPropagation();
            const reqData = {
                firstname: this.firstname.value,
                lastname: this.lastname.value,
                username: this.username.value,
                companyname: this.companyname.value,
                email: this.email.value,
                password: this.password.value

            }
            axios.post('https://learn-elite.com/backend/api/v1/users/register', reqData).then(response => {
                if (response) {
                    alert('Please Check Your Email')
                }
            }).catch(error => {
                console.log(" error");
            })


        }
        else {
            alert('Your password and Your confirmation password do not match')
        }
    }

    signOut = () => {
        const token = localStorage.getItem('token');
        localStorage.clear()
        window.location.pathname = '/login'
    }
    createPage = () => {
        this.props.history.push('/create');
    }

    render() {

        return (
            <div className="create">
                <div className="login-header">
                    <Link to="/"><img className="logo" src="/assets/img/logo-learn.png" alt="" /></Link>
                    <div className="right-side__header">
                        <Link to="/home/dashboard">Dashboard</Link>
                        <Link to="/">Home</Link>
                        <Button onClick={this.signOut}>Sign In</Button>
                    </div>
                </div>

                <div className="create-content">
                    <div className="container">
                        <form className="create-box">
                            <div className="center-box">
                                <p className="h4">Create <b>Elite.lo</b> Account</p>
                                <p className="second-txt">Let's quickly gather some brief information and you'll be on your way to gain access to a robust platform!</p>

                                <div className="flex-row">
                                    <div className="half-width">
                                        <ControlLabel>First Name</ControlLabel>
                                        <FormControl placeholder="Enter First Name Here.." inputRef={(ref) => this.firstname = ref} />
                                    </div>

                                    <div className="half-width">
                                        <ControlLabel>Last Name</ControlLabel>
                                        <FormControl type="text" placeholder="Enter Last Name Here.." inputRef={(ref) => this.lastname = ref} />
                                    </div>
                                </div>
                                <div className="flex-row">
                                    <div className="complete-width">
                                        <ControlLabel>Username</ControlLabel>
                                        <FormControl type="text" placeholder="Username" inputRef={(ref) => this.username = ref} />
                                    </div>
                                </div>
                                <div className="flex-row">
                                    <div className="half-width">
                                        <ControlLabel>Email</ControlLabel>
                                        <FormControl type="email" placeholder="Enter Email Address Here.." inputRef={(ref) => this.email = ref} />
                                    </div>

                                    <div className="half-width">
                                        <ControlLabel>Company</ControlLabel>
                                        <FormControl type="text" placeholder="Enter Company Name Here.." inputRef={(ref) => this.companyname = ref} />
                                    </div>
                                </div>
                                <div className="flex-row">
                                    <div className="half-width">
                                        <ControlLabel>Password</ControlLabel>
                                        <FormControl type="password" placeholder="Enter Password Here.." inputRef={(ref) => this.password = ref} />
                                    </div>

                                    <div className="half-width">
                                        <ControlLabel>Confirm Password</ControlLabel>
                                        <FormControl type="password" placeholder="Enter Confirmation Password Here.." inputRef={(ref) => this.rpassword = ref}/>
                                    </div>
                                </div>
                                {/* <div className="flex-row">
                                    <div className="complete-width">
                                        <ControlLabel>Email</ControlLabel>
                                        <FormControl type="email" placeholder="Enter Email Address Here.." onChange={this.handleInputChange} value={this.state.firstname} />
                                    </div>
                                </div> */}

                                <Button className="create-account__btn" type="submit" onClick={this.handleSubmit} >Create Account</Button>
                                <div className="more-information">
                                    <label>
                                        <small>By clicking Sign In, you agree to our <a href="https://app.termly.io/document/terms-of-use-for-website/bec9c303-4156-4a2b-902f-9e741e1bb2b1">Terms of Use</a> and our <a href="https://app.termly.io/document/privacy-policy/d35bc41a-dd75-4912-ae51-9d7deea90433">Privacy Policy</a>.</small>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="first-box">
                            <div className="col-box">
                                <p className="footer-title">Company</p>
                                <Link to="/home/dashboard">Dashboard</Link>
                                {/* <Link to="/">Contact US</Link> */}
                                <Link to="/">Home</Link>
                                {/* <Button onClick={this.signOut}>Sign In</Button> */}
                                <Button className="create-btn" onClick={() => this.createPage()}>Create An Account</Button>
                            </div>
                            <div className="col-box">
                                <p className="footer-title">Connnect</p>
                                <div>
                                    <a href="https://www.instagram.com"><img className="logo" src="/assets/img/instagram.png" alt="" /></a>
                                    <a href="https://twitter.com/"><img className="logo" src="/assets/img/twitter.png" alt="" /></a>
                                    <a href="https://facebook.com/"><img className="logo" src="/assets/img/facebook.png" alt="" /></a>
                                    <a href="https://linkedin.com/"><img className="logo" src="/assets/img/linkedin.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <p>© Learn Elite LLC | Terms & Conditions | Privacy Policy</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(Create)