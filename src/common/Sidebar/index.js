import React from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
	
	render() {
		return (
			<div>
				<nav className="sidebar">
					<Link to="/"><img className="logo-sidebar" src="/assets/img/logo-learn.png" alt="" /></Link>
					<ul>
						<li className="side-li">
							<Link to="/home/dashboard">
								<div className="logo-dashboard" />
								<p className="side-title">Dashboard</p>
							</Link>
						</li>
						<li className="side-li">
							<Link to="/home/profile">
								<div className="logo-profile" />
								<p className="side-title">User Profile</p>
							</Link>
						</li>
						<li className="side-li">
							<Link to="/home/payment">
								<div className="logo-payment" />
								<p className="side-title">Payment</p>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			
		)
	}
}
