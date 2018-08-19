import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from "common/Footer";
import Particles from 'react-particles-js';
import { Query } from "../../common/Query";
import { Button, Row, Col, FormControl, Checkbox } from "react-bootstrap";

import axios from 'axios';

class Login extends Component {

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
        const reqData = {
            username: this.username.value,
            password: this.password.value
        }
        axios.post('https://learn-elite.com/backend/api/v1/users/login', reqData).then(response => {
            console.log('reees =>', response)
            if (response && response.data) {
                console.log(response.data);
                if (response.data.data) {
                    const token = response.data.data.credentials.token;
                    localStorage.setItem("token", token);
                    console.log('token login', token)
                    this.props.history.push('/home/dashboard');
                } else {
                    document.getElementById('login-error').style.visibility = "visible";
                }
            }
        }).catch(error => {
            console.log(error);
        })
    }

    createPage = () => {
        this.props.history.push('/create');
    }

    signOut = () => {
        const token = localStorage.getItem('token');
        localStorage.clear()
        window.location.pathname = '/login'
    }

    privacy = () => {
        document.getElementById('myId').style.display = "block";
        // document.getElementById('myId').style.zIndex = "1";
    }




    render() {

        return (
            <div className="login">
                <Particles
                    params={{
                        particles: {
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#3CA9D1",
                                    blur: 7
                                }
                            }
                        }
                    }}
                    style={{
                        width: '100%',
                        position: 'absolute'
                        // backgroundImage: `url(${logo})` 
                    }}
                />
                <div className="login-header">
                    <Link to="/"><img className="logo" src="/assets/img/logo-learn.png" alt="" /></Link>
                    <div className="right-side__header">
                        {/* <Link to="/home/dashboard">Dashboard</Link> */}
                        <Link to="/">Landing</Link>
                        {/* <Link to="/">Sign In</Link> */}
                        <Button className="create-btn" onClick={() => this.createPage()}>Create An Account</Button>
                    </div>
                </div>

                <div className="login-content">
                    <div className="container">
                        <form className="login-box">
                            <p className="h4">Sign In</p>
                            <p className="h5 second-txt">Please enter your Username and Password.</p>

                            <FormControl type="text" placeholder="Username" inputRef={(ref) => this.username = ref} />
                            <FormControl type="password" placeholder="Password" inputRef={(ref) => this.password = ref} />

                            <Checkbox>
                                Remember me
                            </Checkbox>
                            <div id="login-error" >
                                <p className="error-txt">Login failed ! invalid username or password</p>
                            </div>
                            <div className="more-information">
                                <label>
                                    <small>By clicking Sign In, you agree to our<a href="https://app.termly.io/document/terms-of-use-for-website/bec9c303-4156-4a2b-902f-9e741e1bb2b1">Terms of Use</a> and our  <a href="https://app.termly.io/document/privacy-policy/d35bc41a-dd75-4912-ae51-9d7deea90433">Privacy Policy</a>.</small>
                                </label>
                            </div>
                            <Button className="signin-btn" type="submit" onClick={this.handleSubmit} >Verify</Button>
                            {/* <Link to="/password" className="forgot-txt"><p>Forgot your password or username?</p></Link> */}
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

export default connect(mapStateToProps)(Login)