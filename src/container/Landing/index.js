import React, { Component } from 'react'
import { connect } from 'react-redux'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";
import { Button, FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import { Player } from 'video-react';
import axios from 'axios';

class Landing extends Component {

    signOut = () => {
        const token = localStorage.getItem('token');
        localStorage.clear()
        window.location.pathname = '/login'
    }
    handleContact = event => {
        event.preventDefault();
        console.log('whyyy =>')
        if (this.name.value == '') {
            alert('enter your name')
        }
        else if (this.subject.value == '') {
            alert('enter your subject')
        }
        else if (this.phone.value == '') {
            alert('enter your phone')
        }
        else if (this.message.value == '') {
            alert('enter your message')
        }
        else {
            const reqData = {
                name: this.name.value,
                subject: this.subject.value,
                phone: this.phone.value,
                message: this.message.value
            }
            axios.post('https://learn-elite.com/backend/api/v1/users/contact-us', reqData).then(response => {
                console.log('rees', response)
                alert('We appreciate you contacting us. One of our colleagues will get back to you shortly.')
            })
        }
    }

    render() {
        return (
            <div className="landing">
                <div className="login-header">
                    <Link to="/"><img className="logo" src="/assets/img/logo-learn.png" alt="" /></Link>
                    <div className="right-side__header">
                        <Link to="/home/dashboard">Dashboard</Link>
                        <Button onClick={this.signOut}>Sign In</Button>
                        <Button className="create-btn" href="/create">Create An Account</Button>
                    </div>
                </div>
                <div className="main-page">
                    {/* <AwesomeSlider>
                        <div data-src="/assets/img/second.jpg" className="img-position" />
                        <div data-src="/assets/img/slide.jpg" />
                        <div data-src="/assets/img/second.jpg" />
                        <div data-src="/assets/img/slide.jpg" />
                    </AwesomeSlider> */}
                    <div className="video-position">
                        <Player
                            // playsInline
                            poster="/assets/img/logo-learn.png"
                            src="/assets/video/LearnEliteVideo.mp4"
                            autoPlay='true'
                        />
                    </div>

                    <div className="second-section">
                        <div className="landing-box">
                            <p className="title-page">Share your knowledge and grow your income</p>
                            {/* <p className="title-second">Second Title</p> */}

                            <div className="flex-row">
                                <div className="chart-box">
                                    <img src="/assets/img/bar-chart.png" className="chart-img" alt="" />
                                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    <p> Quasi, fugit? Saepe officia atque exercitationem</p> */}
                                </div>
                                <div className="chart-box">
                                    <img src="/assets/img/pie-chart.png" className="chart-img" alt="" />
                                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    <p> Quasi, fugit? Saepe officia atque exercitationem</p> */}
                                </div>
                            </div>
                        </div>
                       

                        <div className="landing-box">
                        <div className="mission">
                                            <h2>Mission Statement</h2>
                                            <p>Learn-Elite designs personalized platforms for some of the top influencers on social media to further reach and utilize their own personal brand to the fullest extent. At Learn-Elite, we will create a detailed business plan, tailored online courses, and a personalized website for all our valued clients. With the help of our technology and business teams, Learn-Elite will add an additional way for influencers to interact with their audience while also adding another revenue stream in a constantly evolving market. Our platform includes weekly updates with in-depth analysis on the course, tips to increase revenue and interest, and other tools to help the client get the most from our product and services. Learn-Elite is determined to provide personalized service while establishing mutually beneficial relationships with our valued influencers.</p>
                                        </div>

                            <p className="title-page">Contact Us</p>
                            <form className="contact-form">

                                <FormGroup>
                                    <ControlLabel>Name</ControlLabel>
                                    <FormControl type="text" placeholder="name" inputRef={(ref) => this.name = ref} />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Course Topic</ControlLabel>
                                    <FormControl type="text" placeholder="course topic" inputRef={(ref) => this.subject = ref} />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Phone Number</ControlLabel>
                                    <FormControl type="number" placeholder="phone number" inputRef={(ref) => this.phone = ref} />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Email</ControlLabel>
                                    <FormControl type="email" placeholder="www.example@gmail.com"  />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Who Are You?</ControlLabel>
                                    <FormControl componentClass="textarea" type="text" placeholder="your text" inputRef={(ref) => this.message = ref} />
                                </FormGroup>
                                <Button className="signin-btn" type="submit" onClick={this.handleContact}>Submit</Button>
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
                                    {/* <Link to="/login">Sign In</Link> */}
                                    <Button className="create-btn" href="/create">Create An Account</Button>
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
                        <ScrollUpButton
                            StopPosition={0}
                            AnimationDuration={500}
                            ToggledStyle={{ paddingLeft: 6 }} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(Landing)