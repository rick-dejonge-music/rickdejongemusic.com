import React, { useEffect } from 'react';

import AboutMe from './AboutMe';
import Header from './Header';
import Quote from './Quote';
import Video from './Video';
import InfoBlurb from './InfoBlurb';
import TeacherBlurb from './TeacherBlurb';

const ClinicsAndConducting = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='educational'>
			<Header />
			<AboutMe />
			<Quote />
			<Video />

			<InfoBlurb
				image={
					<img
						src={require('../../assets/images/clinics_and_conducting/clinics_and_conducting.jpg')}
						alt='clinics and conducting'
					/>
				}
				info='"Rick did an outstanding job with our High School All-County Band!  It was such a treat for the students to work with a professional composer, and his music was very accessible to our ensemble and audience.  As the organizer of the event this year, I was very pleased with Rick’s professionalism and preparedness, as well as his immediate rapport with our students."'
				quoteAuthor='Jim Reed, Sumner County Honor Band Chair'
				imageLeft
			/>

			<InfoBlurb
				image={
					<img
						src={require('../../assets/images/clinics_and_conducting/ed-talk-3.jpg')}
						alt='ed-talk-3'
					/>
				}
				info='"My daughter was fortunate enough to be part of All County Honors Band in which Rick DeJonge was the clinician. She thoroughly enjoyed her entire time during the clinic. The performance they put on was one of the most entertaining and well performed Honors Concerts I have attended. The music was enjoyable and entertaining and Rick’s care and concern for the musical development of the children in his care was obvious."'
				quoteAuthor='Parent, Sumner County Honor Band'
			/>

			<InfoBlurb
				image={
					<img
						src={require('../../assets/images/clinics_and_conducting/LP-Ed-3.jpg')}
						alt='disney-pic'
					/>
				}
				info='"Rick was able to give our students a once in a lifetime experience by working with a living composer AND allowing them to work through the process of performing movie music live in front on an audience.  The students grew as musicians and had another level on understanding on how "real world" musicians make a living."'
				quoteAuthor='Sherrie Grossman, Wilson County Honor Band Chair'
				imageLeft
			/>

			<TeacherBlurb />
		</div>
	);
};

export default ClinicsAndConducting;
