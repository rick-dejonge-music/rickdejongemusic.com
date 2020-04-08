import React from 'react';

const TeacherBlurb = () => {
	return (
		<div className='cac-teacher-blurb-root'>
			<div className='cac-teacher-blurb-img'>
				<img
					src={require('../../assets/images/clinics_and_conducting/LP-Ed-5.jpg')}
					alt='lp-ed-5'
				/>
				<img
					src={require('../../assets/images/clinics_and_conducting/LP-Ed-8.jpg')}
					alt='lp-ed-8'
				/>
				<img
					src={require('../../assets/images/clinics_and_conducting/LP-Ed-10.jpg')}
					alt='lp-ed-10'
				/>
			</div>
			<div className='cac-teacher-blurb-text'>
				<h1>Hear what the teachers are saying:</h1>
				<p>“the kids talked about it for days,”</p>
				<p>“held their attention,”</p>
				<p>“educational” </p>
				<p>“best concert” </p>
				<p>“Bring him back!” </p>
			</div>
		</div>
	);
};

export default TeacherBlurb;
