import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from "common/Footer";
import { Button, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import querySrting from 'query-string';
import axios from 'axios';

class Verify extends Component {
    state = {
        id: -1,
        randomKey:""
    }
    componentDidMount() {
        const values = querySrting.parse(this.props.location.search);
        this.id = parseInt(values.id);
        this.randomKey = values.randomKey;
        // console.log(values.randomKey , this.randomKey, "randomkey !!!!!!!!!!!!!!!");
    }
    handleSubmit = event => {
        event.preventDefault();
        axios.post('https://learn-elite.com/backend/api/v1/users/verify-account', {
            randomKey: this.randomKey,
            id: this.id
        }).then(response => {
                if (response.data.data.ok == true) {
                    this.props.history.push('/');
                } else {
                    alert('Email is not verified !');
                }
            
        }).catch(error => {
            console.log(error);
        })
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
                        <Link to="/">Landing</Link>
                        <Button className="create-btn" onClick={() => this.creatPage()}>Create An Account</Button>
                    </div>
                </div>


                <div className="create-content">
                    <div className="container">
                        <form className="create-box">
                            <div className="password-box">
                                <p className="h4">Verify Register</p>

                                <Button className="signin-btn" type="submit" onClick={this.handleSubmit} >Verify</Button>
                                <div className="more-information">
                                <small>By clicking Sign In, you agree to our <a href="https://app.termly.io/document/terms-of-use-for-website/bec9c303-4156-4a2b-902f-9e741e1bb2b1">Terms of Use</a> and our <a href="https://app.termly.io/document/privacy-policy/d35bc41a-dd75-4912-ae51-9d7deea90433">Privacy Policy
                                                </a>.</small>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(Verify) 
