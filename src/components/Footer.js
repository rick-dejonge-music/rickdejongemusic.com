import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<p className='footer-text'>
				© Rick DeJonge Music, {new Date().getFullYear()}
			</p>
		</div>
	);
};

export default Footer;
