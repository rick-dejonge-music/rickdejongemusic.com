import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import SocialButton from './SocialButton';

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='contact'>
			<Parallax
				bgImage={require('../../assets/images/contact/contact_header.jpeg')}
				bgImageAlt='Rick DeJonge sitting on a stage'
				strength={300}
				contentClassName='contact-header'
				blur={3}
			>
				<div className='contact-quote-container'>
					<Fade top>
						<p className='contact-quote-name'>
							“Coming together is a beginning; keeping together is progress;
							working together is success.”
						</p>
						<p className='contact-quote-author'>Henry Ford</p>
					</Fade>
				</div>
			</Parallax>

			<div className='contact-container'>
				<div className='contact-info-container'>
					<Fade>
						<div className='contact-phone-container'>
							<img
								alt='Rick DeJonge Phone Number'
								src={require('../../assets/Icons/phone.svg')}
							/>
							<a href='tel:+15742763901'>(574) 276-3901</a>
						</div>
						<div className='contact-location-container'>
							<img
								alt='Rick DeJonge City'
								src={require('../../assets/Icons/marker.svg')}
							/>
							<p>Nashville, TN</p>
							<p>37201</p>
						</div>
						<div className='contact-email-container'>
							<img
								alt='Rick DeJonge Email'
								src={require('../../assets/Icons/mail.svg')}
							/>
							<a href='mailto:rick@rickdejongemusic.com'>
								rick@rickdejongemusic.com
							</a>
						</div>
					</Fade>
				</div>
				<div className='contact-social-container'>
					<Fade>
						<div className='contact-twitter-container'>
							<SocialButton socialMedia='twitter' />
						</div>
						<div className='contact-instagram-container'>
							<SocialButton socialMedia='instagram' />
						</div>
						<div className='contact-facebook-container'>
							<SocialButton socialMedia='facebook' />
						</div>
					</Fade>
				</div>
			</div>

			<div className='contact-airtable-form-container'>
				<Fade>
					<h1>Have a Business Inquiry?</h1>
					<script src='https://static.airtable.com/js/embed/embed_snippet_v1.js'></script>
					<iframe
						className='airtable-embed airtable-dynamic-height'
						src='https://airtable.com/embed/shrbyIdq12ogYceXW?backgroundColor=gray'
						frameborder='0'
						onmousewheel=''
						width='70%'
						height='600px'
						title='airtable'
						style={{
							background: 'transparent',
							border: '1px solid #ccc',
						}}
					></iframe>
				</Fade>
			</div>
		</div>
	);
};

export default Contact;
