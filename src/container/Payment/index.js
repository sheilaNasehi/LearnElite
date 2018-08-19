import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'
import {
	Table
} from 'react-bootstrap'
import ReactHighcharts from "react-highcharts"
import axios from 'axios';


const activeUsersConfig = {
	chart: {
		type: 'column'
	},
	colors: ['#05859C', '#23B487'],
	xAxis: {
		categories: [],
		rotate: 0,
		title: "Active Users"
	},
	yAxis: {
		// tickPositioner: function () {
		// 	return yAxisLabels;
		// },
		title: ''
	},
	legend: {
		align: 'left',
		verticalAlign: 'bottom',
		x: 0,
		y: 0,
		itemDistance: 30,
		layout: 'horizontal',
		itemStyle: {
			color: '#05859C',
			fontSize: '20px',
			textTransform: 'capitalize',
			whiteSpace: 'nowrap',
		},
	},
	tooltip: {
		shared: true
	},
	plotOptions: {
		series: {
			// pointPadding: 0, //nopadding between columns
			// groupPadding: 0.2, //padding between each group
			pointWidth: 20, //width of a single column
			showInLegend: false,
			shadow: false,
			dataLabels: {
				enabled: true,
				inside: true,
				formatter: function () {
					if (this.y === 0) {
						return null;
					}
					return this.y;
				},
				rotation: -90,
				y: 0,
				style: {
					color: 'white',
					fontSize: '10px',
					fontWeight: 'normal'
				}
			}
		},
	},
	series: [
		{
			name: 'Users',
			data: []
		},
		{
			name: 'Countries',
			data: []
		}, {
			name: 'Gender',
			data: []
		}, {
			name: 'Age',
			data: []
		}
	]
}
class Payment extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			smShow: false,
			lgShow: false
		};
	}

	componentWillMount = () => {
		this.getChart()
	}
	resetConfig = () => {
		activeUsersConfig.series = [
			{
				name: 'Users',
				data: []
			},
			{
				name: 'Countries',
				data: []
			}, {
				name: 'Gender',
				data: []
			}, {
				name: 'Age',
				data: []
			}
		]
	}

	getChart = () => {
		this.resetConfig()
		var token = localStorage.getItem('token')
		var headers = {
			'Authorization': 'Bearer ' + token
		}
		axios.get('https://learn-elite.com/backend/api/v1/users/sales', { headers: headers }).then(res => {
			console.log('ress seles =>', res)
			res.data.data.result.map((item, i) => {
				name = item.count
			})
		})
		// this.updateChart()
	}
	updateChart = () => {
		// this.resetConfig()
		// data.map((item, i) => {
		// 	const sample = {
		// 		x: i,
		// 		y: item.value,
		// 		color: (i % 2 === 0 ? '#23B487' : '#05859C')
		// 	}
		// 	// UPDATE SERIES
		// 	if (item.category === 'Users') {
		// 		if (item.type === "currentUsers") { item.type = "Current Users" }
		// 		if (item.type === "totalUsers") { item.type = "Total Users" }
		// 		activeUsersConfig.series[0].data.push(sample)
		// 		activeUsersConfig.xAxis.categories[i] = item.type
		// 	}
		// 	else if (item.category === 'Country') {
		// 		activeUsersConfig.series[1].data.push(sample)
		// 		activeUsersConfig.xAxis.categories[i] = item.type
		// 	}
		// 	else if (item.category === 'Gender') {
		// 		activeUsersConfig.series[2].data.push(sample)
		// 		activeUsersConfig.xAxis.categories[i] = item.type
		// 	}
		// 	else if (item.category === 'Age') {
		// 		activeUsersConfig.series[3].data.push(sample)
		// 		activeUsersConfig.xAxis.categories[i] = item.type
		// 	}
		// })
	}

	render() {
		return (
			<div className="profile">
				<Loader loaded={true} color="white" />
				<p className="title-page">Payment</p>
				<div className="payment">
					<div className="chart-box">
						<p className="chart-title">Payment Information</p>
						<Table responsive bordered>
							<thead>
								<tr>
									<th>#</th>
									<th>Date</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>2018</td>
									<td>300$</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</div>
				{/* <ReactHighcharts config={activeUsersConfig} /> */}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Payment)
