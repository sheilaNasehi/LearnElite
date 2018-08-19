import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'
import {
	Button,
	Row,
	Col,
	FormGroup,
	FormControl,
	ControlLabel
} from 'react-bootstrap'

class Profile extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			smShow: false,
			lgShow: false
		};
	}

	render() {
		return (
			<div className="profile">
				<Loader loaded={true} color="white" />
				<p className="title-page">Edit Profile</p>
				<div className="edit-box">
					<Row>
						<Col sm={6}>
							<FormGroup>
								<ControlLabel>Company Name</ControlLabel>
								<FormControl disabled type="text" placeholder="company name" />
							</FormGroup>
						</Col>
						<Col sm={3}>
							<FormGroup>
								<ControlLabel>UserName</ControlLabel>
								<FormControl type="text" placeholder="username" />
							</FormGroup>
						
						</Col>
						<Col sm={3}>
							<FormGroup>
								<ControlLabel>Email Address</ControlLabel>
								<FormControl type="email" placeholder="your email" />
							</FormGroup>
						
						</Col>

						<Col sm={6}>
							<FormGroup>
								<ControlLabel>First Name</ControlLabel>
								<FormControl type="text" placeholder="firstname" />
							</FormGroup>
						</Col>
						<Col sm={6}>
							<FormGroup>
								<ControlLabel>Last Name</ControlLabel>
								<FormControl type="text" placeholder="lastname" />
							</FormGroup>
						</Col>
						<Col sm={12}>
							<FormGroup>
								<ControlLabel>Address</ControlLabel>
								<FormControl type="text" placeholder="address" />
							</FormGroup>
						</Col>

						<Col sm={4}>
							<FormGroup>
								<ControlLabel>City</ControlLabel>
								<FormControl type="text" placeholder="city" />
							</FormGroup>
						</Col>
						<Col sm={4}>
							<FormGroup>
								<ControlLabel>Country</ControlLabel>
								<FormControl type="text" placeholder="country" />
							</FormGroup>
						</Col>
						<Col sm={4}>
							<FormGroup>
								<ControlLabel>Postal Code</ControlLabel>
								<FormControl type="number" placeholder="postalcode" />
							</FormGroup>
						</Col>
						<Col sm={12}>
							<FormGroup>
								<ControlLabel>About Me</ControlLabel>
								<FormControl componentClass="textarea" type="text" placeholder="your text" />
							</FormGroup>
						</Col>
					</Row>

					<div style={{ textAlign: 'right' }}><Button className="blue-btn">Update Profile</Button></div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Profile)
