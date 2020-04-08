import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import CompInfo from './Info';
import Soundcloud from './Soundcloud';

const Orchestrations = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const soundcloudLinks = [
		'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1025404912&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
		'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1025337817&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
		'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1028316538&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
	];
	return (
		<div className='composing'>
			<video
				src={require('../../assets/stock-videos/orchestration.mp4')}
				className='composing-header'
				autoPlay
				playsInline
				loop
				muted
				controls={false}
			/>
			<CompInfo />

			<div className='composing-img'>
				<Fade>
					<img
						src={require('../../assets/images/clinics_and_conducting/disney-pic.jpg')}
						className='composing-disney-pic'
						alt='composing-disney-pic'
					/>
					<p className='composing-quote' style={{ marginTop: '3rem' }}>
						"I have had the distinct pleasure of working with Rick DeJonge on a
						number of musical projects over the years. Rick DeJonge’s
						compositions and arrangements are second to none! He is a master of
						orchestration and employs the full spectrum of color possibilities
						in his creative, electric and distinctively innovative approach to
						composition!"
					</p>
					<p className='composing-name'>
						Barry Houser, Music Director Disney’s Thanksgiving Day Parade
					</p>
				</Fade>
				<Fade>
					<p className='composing-quote'>
						“I have relied on Rick for the last 15 years to create some very
						unique original material and arrangements. He continues to be my
						go-to choice because of his collaborative creativity, speed, and
						pure talent. Frankly, he's just that good. As a musical director for
						a military band, often the music I need just isn't out there. I've
						relied on Rick to create everything from 45 minute music beds for
						narrations that capture the theme and emotions of the story, to
						3-minute covers for my unique instrumentation. Everything Rick does
						is creative and original, and always brings my audiences max
						emotional impact.”
					</p>
					<p className='composing-name'>
						Col. Mike Mench, United States Air Force
					</p>
				</Fade>
			</div>
			<h1 className='soundcloud-title'>Browse Music Available For Purchase</h1>
			<div className='soundcloud-container'>
				<Soundcloud link={soundcloudLinks[0]} />
				<Soundcloud link={soundcloudLinks[1]} />
				<Soundcloud link={soundcloudLinks[2]} />
			</div>
		</div>
	);
};

export default Orchestrations;
