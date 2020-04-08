import React from 'react';

const VideoQuote = ({ image, quote }) => {
	return (
		<div className='cac-video-quote-root'>
			<p>{quote}</p>
			{image}
		</div>
	);
};

export default VideoQuote;
