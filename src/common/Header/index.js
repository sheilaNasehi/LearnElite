import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { Button } from "react-bootstrap";

export default class Header extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }
    signOut = () => {
        const token = localStorage.getItem('token');
        localStorage.clear()
        window.location.pathname = '/login'
    }
    render() {
        return (
            <div>
                <div className="menu-box">
                    <div className="menu">
                        <Menu>
                            <Link to="/"><img className="logo-sidebar" src="/assets/img/logo-learn.png" alt="" /></Link>
                            <a href="/home/dashboard">
                                <div className="logo-dashboard" />
                                <p className="side-title">Dashboard</p>
                            </a>
                            <a href="/home/profile">
                                <div className="logo-profile" />
                                <p className="side-title">User Profile</p>
                            </a>
                            <a href="/home/payment">
                                <div className="logo-payment" />
                                <p className="side-title">Payment</p>
                            </a>
                        </Menu>
                    </div>
                </div>
                <div className="header">
                    <div className="right-side__header">
                        <Link to="/home/dashboard">Dashboard</Link>
                        <Link to="/">Home</Link>
                        <Button onClick={this.signOut}>Sign Out</Button>
                    </div>
                </div>
            </div>
        )
    }
}