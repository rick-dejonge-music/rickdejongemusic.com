import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const NavigationCard = ({ title, cardImage, pathToScreen, fadeDirection }) => {
	if (fadeDirection === 'down') {
		return (
			<Fade>
				<Link to={`/${pathToScreen}`} className='lp-card hvr-float'>
					{cardImage}
					<h1 className='lp-card-title'>{title}</h1>
				</Link>
			</Fade>
		);
	} else {
		return (
			<Fade>
				<Link to={`/${pathToScreen}`} className='lp-card hvr-float'>
					{cardImage}
					<h1 className='lp-card-title'>{title}</h1>
				</Link>
			</Fade>
		);
	}
};

export default NavigationCard;
