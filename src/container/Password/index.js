import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, FormControl, FormGroup,InputGroup } from "react-bootstrap";
import axios from 'axios';

class Password extends Component {
    state = {
        email: ''
    }
    createPage = () => {
        this.props.history.push('/create');
    }
    signOut = () => {
        const token = localStorage.getItem('token');
        localStorage.clear()
        window.location.pathname = '/login'
    }

    emailChange(event) {
        const inputEmail = event.target.value;
        this.setState({
            email: inputEmail
        });
    }

    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }



    handleSubmit = event => {
        event.preventDefault();
        axios.post('https://learn-elite.com/backend/api/v1/users/request-reset-password', {

            email: this.email.value

        }).then(response => {
            if (response && response.data) {
                if (response.data.data) {
                    alert('check your mail !');
                } else {
                    alert('reset password failed !')
                }
            }
        }).catch(error => {
            console.log(error);
        })
    }
    render() {

        return (
            <div className="create">
                <div className="login-header">
                    <Link to="/"><img className="logo" src="/assets/img/logo-learn.png" alt="" /></Link>
                    <div className="right-side__header">
                        <Link to="/home/dashboard">Dashboard</Link>
                        <Link to="/">Landing</Link>
                        <Button onClick={this.signOut}>Sign In</Button>
                        <Button className="create-btn" onClick={() => this.createPage()}>Create An Account</Button>
                    </div>
                </div>

                <div className="create-content">
                    <div className="container">
                        <form className="create-box">
                            <div className="password-box">
                                <img className="password-img" src="/assets/img/typing.jpg" alt="" />
                                <p className="h4">Forgot Password?</p>
                                <p className="second-txt">You will be emailed a link if email address is found.</p>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon><div className="icon-email"/></InputGroup.Addon>
                                        <FormControl type="email" placeholder="email address" inputRef={(ref) => this.email = ref} />
                                    </InputGroup>
                                </FormGroup>

                                <div className="flex-row">
                                    <Button className="password-btn" type="submit" onClick={this.handleSubmit}>Reset Password</Button>
                                </div>
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
                                <Link to="/">Landing</Link>
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

export default connect(mapStateToProps)(Password)