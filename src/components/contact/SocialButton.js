import React from 'react';

const SocialButton = ({ socialMedia }) => {
	switch (socialMedia) {
		case 'twitter':
			return (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://twitter.com/dejonge_rick'
					className='contact-social-button hvr-grow'
				>
					<img
						alt='twitter-icon'
						src={require('../../assets/Icons/logo-twitter.svg')}
					/>
					<p>@rickdejonge</p>
				</a>
			);
		case 'facebook':
			return (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.facebook.com/rickdejongemusic/'
					className='contact-social-button hvr-grow'
				>
					<img
						alt='facebook-icon'
						src={require('../../assets/Icons/logo-facebook.svg')}
					/>
					<p>Rick DeJonge</p>
				</a>
			);
		case 'instagram':
			return (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.instagram.com/rickdejongemusic/'
					className='contact-social-button hvr-grow'
				>
					<img
						alt='instagram-icon'
						src={require('../../assets/Icons/logo-instagram.svg')}
					/>
					<p>@rickdejonge</p>
				</a>
			);
		default:
			return (
				<div className='contact-social-button hv-grow'>
					<img
						alt='instagram-logo'
						src={require('../../assets/Icons/logo-instagram.svg')}
					/>
					<p>@rickdejonge</p>
				</div>
			);
	}
};

export default SocialButton;
