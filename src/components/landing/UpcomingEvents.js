import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import data from '../../UpcomingEvents.json';

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

			{data.upcoming_events.map((value) => {
				return <EventRowItem data={value} key={value.key} />;
			})}
		</div>
	);
};

export default UpcomingEvents;
