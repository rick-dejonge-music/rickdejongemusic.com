import React from 'react';

const Soundcloud = ({ link }) => {
	return (
		<div className='soundcloud'>
			<iframe
				width='100%'
				height='100%'
				scrolling='yes'
				frameBorder='no'
				allow='autoplay'
				src={link}
				title='composing-soundcloud'
			></iframe>
		</div>
	);
};

export default Soundcloud;
