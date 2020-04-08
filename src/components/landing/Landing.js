import React, { useEffect } from 'react';
import NavigationCard from './NavigationCard';
import UpcomingEvents from './UpcomingEvents';

const Landing = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='lp-root'>
			<span>
				<div className='lp-cards-container'>
					<NavigationCard
						title='Film Scoring'
						cardImage={
							<div
								style={{
									backgroundImage: `url(${require('../../assets/images/landing/collage.png')})`,
									backgroundPosition: 'center',
									backgroundSize: 'contain',
								}}
								className='lp-card-image'
							/>
						}
						pathToScreen='film-scoring'
						fadeDirection='down'
					/>
					<NavigationCard
						title='Clinics & Conducting'
						cardImage={
							<img
								src={require('../../assets/images/composing_and_scoring/orch_and_conducting.jpg')}
								className='lp-card-image'
								alt='orch_and_conducting'
							/>
						}
						pathToScreen='clinics-and-conducting'
					/>
					<NavigationCard
						title='Composing & Arranging'
						cardImage={
							<img
								src={require('../../assets/stock-images/stock-sheetmusic.jpg')}
								className='lp-card-image'
								alt='stock-sheetmusic'
							/>
						}
						pathToScreen='composing-and-arranging'
						fadeDirection='down'
					/>
				</div>

				<img
					className='scroll-down-cta'
					alt='sroll-down-cta'
					src='https://img.icons8.com/android/24/FFFFFF/circled-down-2.png'
				/>
			</span>

			<UpcomingEvents />
		</div>
	);
};

export default Landing;
