import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactSvgPieChart from "react-svg-piechart";
// import BarChart from 'react-bar-chart';
import Timeline from 'react-calendar-timeline'
import moment from 'moment'
import 'react-calendar-timeline/lib/Timeline.css'
import { Chart, Axis, Tooltip, Series, Area, Cursor, Bar } from "react-charts";
import {
	Row,
	Col,

} from 'react-bootstrap'
// import query from '../../common/Query';



class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		const data = [
			{ title: "Data 1", value: 100, color: "#4ab5eb" },
			{ title: "Data 2", value: 60, color: "#fc6767" },
			{ title: "Data 3", value: 30, color: "#dfd03e" },
		]
		const data2 = [
			{
				label: "Series 1",
				data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
			},
			{
				label: "Series 2",
				data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
			},
			{
				label: "Series 3",
				data: [[0, 3], [1, 1], [2, 2], [3, 6], [4, 6]]
			}
		]
		const data3 = [
			{
				label: "Series 1",
				data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
			},
			{
				label: "Series 2",
				data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
			},
			{
				label: "Series 3",
				data: [[0, 3], [1, 1], [2, 7], [3, 10], [4, 3]]
			}
		]
		const groups = [
			{ id: 1, title: 'Event 1' },
			{ id: 2, title: 'Event 2' },
			{ id: 3, title: 'Event 3' },
			{ id: 4, title: 'Event 4' }]

		const items = [
			{
				id: 1,
				group: 1,
				title: 'sample 1',
				start_time: moment(),
				end_time: moment().add(4.5, 'hour')
			},
			{
				id: 2,
				group: 2,
				title: 'sample 2',
				start_time: moment().add(1, 'hour'),
				end_time: moment().add(3.5, 'hour')
			},
			{
				id: 3,
				group: 1,
				title: 'sample 3',
				start_time: moment().add(5, 'hour'),
				end_time: moment().add(6, 'hour')
			},
			{
				id: 4,
				group: 3,
				title: 'sample 4',
				start_time: moment().add(2, 'hour'),
				end_time: moment().add(5, 'hour')
			},
			{
				id: 5,
				group: 4,
				title: 'sample 5',
				start_time: moment().add(1, 'hour'),
				end_time: moment().add(6, 'hour')
			}
		]
		return (
			<div className="dashboard">
				{/* <h5 style={{ color: '#000', textAlign: 'center' }}>This page is coming soon</h5> */}
				<p className="title-page">Dashboard</p>
				<Row>
					<Col sm={12} md={4}>
						<div className="chart-box">
							<p className="chart-title">Customer Region</p>
							<p className="second-chart">Last Campaign Performance</p>
							<ReactSvgPieChart
								expandOnHover={true}
								expandSize={5}
								shrinkOnTouchEnd={false}
								strokeColor="#fff"
								strokeLinejoin="round"
								strokeWidth={1}
								viewBoxSize={100}
								data={data}
								className="chart-space"
							/>
							<div className="inf-box">
								<div className="flex-row">
									<div className="blue"></div>
									<p className="inf-p">Open</p>
								</div>
								<div className="flex-row">
									<div className="red"></div>
									<p className="inf-p">Bounce</p>
								</div>
								<div className="flex-row">
									<div className="orange"></div>
									<p className="inf-p">Unsubcribe</p>
								</div>
							</div>
							<img src="../../assets/img/half-clock.png" className="clock-img" alt="" />
						</div>
					</Col>
					<Col sm={12} md={8}>
						<div className="chart-box">
							<p className="chart-title">Sales Event</p>
							<p className="second-chart">24 Hours performance</p>
							<div className="chart-space">
								<Chart data={data2}>
									<Axis primary type="time" position="bottom" />
									<Axis type="linear" position="left" stacked />
									<Series type={Area} />
									<Tooltip />
								</Chart>
							</div>
							<div className="inf-box">
								<div className="flex-row">
									<div className="blue"></div>
									<p className="inf-p">Open</p>
								</div>
								<div className="flex-row">
									<div className="red"></div>
									<p className="inf-p">Click</p>
								</div>
								<div className="flex-row">
									<div className="orange"></div>
									<p className="inf-p">Click Second Time</p>
								</div>
							</div>
							<img src="../../assets/img/clock.png" className="clock-img" alt="" />
						</div>
					</Col>
					<Col sm={12} md={6}>
						<div className="chart-box">
							<p className="chart-title">2017 Sales</p>
							<p className="second-chart">All products including Taxes</p>
							<div className="chart-space">
								<Chart data={data3}>
									<Axis primary type="ordinal" />
									<Axis type="linear" min={0} max={0} stacked />
									<Series type={Bar} />
									<Cursor primary />
									<Cursor />
									<Tooltip />
								</Chart>
							</div>
							<div className="inf-box">
								<div className="flex-row">
									<div className="blue"></div>
									<p className="inf-p">Tesla Model S</p>
								</div>
								<div className="flex-row">
									<div className="red"></div>
									<p className="inf-p"> BMW 5 Series</p>
								</div>
							</div>
							<div className="flex-row">
								<img src="../../assets/img/checked.png" className="clock-img" alt="" />
								<p className="small-txt"> Data information certified</p>
							</div>
						</div>
					</Col>
					<Col sm={12} md={6}>
						<div className="chart-box table-chart">
							<p className="chart-title">Planner</p>
							<p className="second-chart">Backend development</p>
							<div className="chart-space">
								<div className="inf-row">
									<div className="checked-box"><div className="checked"></div></div>
									<div className="text-inf"><p>Sign contract for `What are conference organizers afraid of?`</p></div>
									<div className="action-inf">
										<img src="../../assets/img/check.png" className="clock-img" alt="" />
										<img src="../../assets/img/close.png" className="close-img" alt="" />
									</div>
								</div>
								<div className="inf-row">
									<div className="checked-box"><img src="../../assets/img/check.png" className="check-img" alt="" /></div>
									<div className="text-inf"><p>Sign contract for `What are conference organizers afraid of?`</p></div>
									<div className="action-inf">
										<img src="../../assets/img/check.png" className="clock-img" alt="" />
										<img src="../../assets/img/close.png" className="close-img" alt="" />
									</div>
								</div>
								<div className="inf-row">
									<div className="checked-box"><img src="../../assets/img/check.png" className="check-img" alt="" /></div>
									<div className="text-inf"><p>Sign contract for `What are conference organizers afraid of?`</p></div>
									<div className="action-inf">
										<img src="../../assets/img/check.png" className="clock-img" alt="" />
										<img src="../../assets/img/close.png" className="close-img" alt="" />
									</div>
								</div>
								<div className="inf-row">
									<div className="checked-box"><img src="../../assets/img/check.png" className="check-img" alt="" /></div>
									<div className="text-inf"><p>Sign contract for `What are conference organizers afraid of?`</p></div>
									<div className="action-inf">
										<img src="../../assets/img/check.png" className="clock-img" alt="" />
										<img src="../../assets/img/close.png" className="close-img" alt="" />
									</div>
								</div>
								<div className="inf-row">
									<div className="checked-box"><div className="checked"></div></div>
									<div className="text-inf"><p>Sign contract for `What are conference organizers afraid of?`</p></div>
									<div className="action-inf">
										<img src="../../assets/img/check.png" className="clock-img" alt="" />
										<img src="../../assets/img/close.png" className="close-img" alt="" />
									</div>
								</div>
								<div className="inf-row">
									<div className="checked-box"><div className="checked"></div></div>
									<div className="text-inf"><p>Sign contract for `What are conference organizers afraid of?`</p></div>
									<div className="action-inf">
										<img src="../../assets/img/check.png" className="clock-img" alt="" />
										<img src="../../assets/img/close.png" className="close-img" alt="" />
									</div>
								</div>
							</div>
						</div>
					</Col>
					<Col sm={12}>
						<div className="chart-box table-chart">
							<p className="chart-title">Calendar</p>
							<p className="second-chart">Events</p>
							<div className="chart-space">
								<Timeline
									groups={groups}
									items={items}
									canMove={false}
									defaultTimeStart={moment().add(-12, 'hour')}
									defaultTimeEnd={moment().add(12, 'hour')}
								/>
							</div>
						</div>
					</Col>
				</Row>


			</div>
		)
	}
}
// document.getElementById('location')

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Dashboard)
