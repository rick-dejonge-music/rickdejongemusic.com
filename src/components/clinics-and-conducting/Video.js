import React from 'react';

const Video = () => {
	return (
		<div className='cac-childrens-program-video-root embed-container'>
			<h1>Children’s Education Program for Orchestra</h1>
			<iframe
				src='https://player.vimeo.com/video/403010601'
				style={{
					position: 'absolute',
					top: '0',
					left: '0',
					right: '0',
					bottom: '0',
					margin: 'auto',
					width: '100%',
					height: '70%',
				}}
				frameborder='0'
				allow='autoplay; fullscreen'
				allowfullscreen
				title='Children’s Education Program for Orchestra'
			></iframe>
		</div>
	);
};

export default Video;
