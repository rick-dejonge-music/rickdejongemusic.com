import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const EventRowItem = ({ data }) => {
	return (
		<Zoom duration={500}>
			<div className='landing-upcomingevents-eventrowitem-container'>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<div className='landing-upcomingevents-eventrow-item-column-1'>
						<p className='landing-upcomingevents-eventrow-item-eventdate'>
							{data.date}
						</p>
					</div>
					<p className='landing-upcomingevents-eventrow-item-description-large'>
						{data.description}
					</p>

					<div className='landing-upcomingevents-eventrow-item-column-2'>
						<p className='landing-upcomingevents-eventrow-item-eventcity'>
							{data.city}
						</p>
						<p className='landing-upcomingevents-eventrow-item-eventbuildingtime'>
							{data.building} @ {data.time}
						</p>
					</div>
				</div>
				<p className='landing-upcomingevents-eventrow-item-description-small'>
					{data.description}
				</p>
			</div>
		</Zoom>
	);
};

const UpcomingEvents = () => {
	const data = [
		{
			date: 'July 25, 2020',
			city: 'San Antonio, TX',
			building: 'Lila Cockrell Theatre',
			time: '7:00 pm',
			description:
				'Guest conducting the USAF Band of The West premiering a new piece.',
			key: '0',
		},
		{
			date: 'October 14, 2020',
			city: 'LaPorte, IN',
			building: 'LaPorte Civic Center',
			time: '9:00 pm, 10:15 pm, 11:30 pm',
			description:
				"Guest conducting the LaPorte County Symphony Orchestra for their annual Children's Program",
			key: '1',
		},
		{
			date: 'November  26, 2020',
			city: 'Orlando, FL',
			building: 'Magic Kingdom',
			time: '9:30 am',
			description:
				"Guest conducting new music for Disney's Thanksgiving Day Parade of Bands",
			key: '2',
		},
		{
			date: 'Dec 17-19, 2020',
			city: 'Chicago, IL',
			building: 'McCormick Place',
			time: 'Various Times',
			description: 'Performing with the Harry Watters Quartet',
			key: '3',
		},
		{
			date: 'February 11, 2021',
			city: 'Murfreesboro, TN',
			building: 'MTSU Recital Hall',
			time: '8:00 pm',
			description:
				'Guest conducting the Tennessee Valley Winds premiering a new piece',
			key: '3',
		},
		{
			date: 'February 20, 2021',
			city: 'Murfreesboro, TN',
			building: 'World Outreach Church',
			time: '3:00 pm',
			description:
				'Guest conducting the Rutherford County 11/12 High School Honor Band',
			key: '3',
		},
		{
			date: 'April 25, 2021',
			city: 'Bonita Springs, FL',
			building: 'Estero High School',
			time: '2:00 pm',
			description:
				'Guest conducting the Bonita Springs Concert Band premiering a new piece',
			key: '3',
		},
	];
	return (
		<div className='landing-upcomingevents-root'>
			<Fade top>
				<h1 className='landing-upcoming-events-title'>Upcoming Events</h1>
				<Link className='landing-upcoming-events-subtitle' to='/contact'>
					<h2 style={{ fontSize: '1.5rem', margin: '5px 0 3rem' }}>
						Book an Event
					</h2>
				</Link>
			</Fade>

			{data.map((value) => {
				return <EventRowItem data={value} key={value.key} />;
			})}
		</div>
	);
};

export default UpcomingEvents;
