import React from 'react';

const InfoBlurb = ({ image, info, imageLeft, quoteAuthor }) => {
	if (imageLeft) {
		return (
			<div className='cac-info-blurb-root'>
				<div>{image}</div>
				<div style={{ marginLeft: '2rem' }}>
					<p style={{ textAlign: 'right' }}>{info}</p>
					{quoteAuthor ? (
						<p className='cac-info-blurb-author' style={{ textAlign: 'right' }}>
							{quoteAuthor}
						</p>
					) : null}
				</div>
			</div>
		);
	} else {
		return (
			<div className='cac-info-blurb-root'>
				<div style={{ marginRight: '2rem' }}>
					<p>{info}</p>
					{quoteAuthor ? (
						<p className='cac-info-blurb-author'> {quoteAuthor}</p>
					) : null}
				</div>
				<div className='cac-info-blurb-image-container'>{image}</div>
			</div>
		);
	}
};

export default InfoBlurb;
