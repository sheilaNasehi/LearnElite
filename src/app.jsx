import React from 'react'
import {
	BrowserRouter ,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

import Home from './container/Home'
import Dashboard from './container/Dashboard'
import Login from './container/Login'
import Landing from './container/Landing'
import Create from './container/Create'
import Password from './container/Password'
import ResetPass from './container/ResetPass'
import Profile from './container/Profile'
import Payment from './container/Payment'
import Verify from './container/Verify'
import NotMatch from './container/404'

const checkAuth = () => {
	const token = localStorage.getItem('token');
	if (!token) {
		return false;
	}
	return true;
}

const AuthRoute = ({ component: component, ...rest }) => (

	<Route {...rest} render={
		props => (
			checkAuth() ? (
				<component {...props} />
			) : (
					<Redirect to='/' />
				)
		)
	} />
)


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={props => <Landing {...props} />} />
				<Route exact path="/login" render={props => <Login {...props} />} />
				<Route exact path="/create" render={props => <Create {...props} />} />
				<Route exact path="/password" render={props => <Password {...props} />} />
				<Route exact path="/users/reset-password" render={props => <ResetPass {...props} />} />
				<Route exact path="/users/verify-account" render={props => <Verify {...props} />} />
				<Route path="/home" render={() => (
					<Home>
						<AuthRoute exact path="/home/dashboard" component={Dashboard} />
						<AuthRoute exact path="/home/profile" component={Profile} />
						<AuthRoute exact path="/home/payment" component={Payment} />
						<Route path="/home/dashboard" render={props => <Dashboard {...props} />} />
						<Route path="/home/profile" render={props => <Profile {...props} />} />
						<Route path="/home/payment" render={props => <Payment {...props} />} />
					</Home>
				)} />
				<Route exact path="*" render={props => <NotMatch {...props} />} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
