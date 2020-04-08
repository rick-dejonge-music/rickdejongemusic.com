import React from 'react';

const Soundcloud = ({ link, title }) => {
	return (
		<div className='film-soundcloud'>
			<iframe
				width='100%'
				height='400rem'
				scrolling='yes'
				frameBorder='no'
				allow='autoplay'
				src={link}
				title={title}
			></iframe>
		</div>
	);
};

export default Soundcloud;
