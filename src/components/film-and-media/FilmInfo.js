import React, { useState } from 'react';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const FilmInfo = (props) => {
	let [carouselIndex, setCarouselIndex] = useState(0);

	function handleNextCarouselItemClick() {
		setCarouselIndex(carouselIndex + 1);
		if (carouselIndex > 3) {
			setCarouselIndex(0);
		}
	}

	function handleNextPreviousItemClick() {
		setCarouselIndex(carouselIndex - 1);
		if (carouselIndex < 1) {
			setCarouselIndex(4);
		}
	}

	function renderSlideGenreTitle() {
		switch (carouselIndex) {
			case 0:
				return 'Romantic Sample';
			case 1:
				return 'Drama Sample';
			case 2:
				return 'Action Sample';
			case 3:
				return 'Comedy Sample';
			case 4:
				return 'Suspense Sample';
			default:
				return '???';
		}
	}

	return (
		<div>
			<div className='film-info-title-container'>
				<div className='film-info-body-container'>
					<p className='film-info-body-paragraph'>
						Rick is a graduate of the prestigious Scoring for Motion Pictures
						and Television Program from the University of Southern California.
						DeJonge has worked on several films and with great composers such as
						Christopher Young, David Spear, Jack Smalley, and Pete Anthony. As
						an orchestrator, Rick worked with composers on television promos
						that included shows such as “Beautiful People”, “Lost”, “The West
						Wing” and “CSI Miami”. As a conductor, Rick has conducted his own
						scores at Paramount Studios, Fox Studios, Spielberg Scoring Stage,
						and Firehouse Studios in Pasadena, California. DeJonge’s score for
						the action film “Fighting With Anger” contained a song by the
						composer which won Best Original Song at the New York Independent
						Film Festival and was recorded by Willie Nelson. Rick is a member of
						ASCAP along with his music publishing company, Dream Notes Music.
						His original piano recordings for 4 silent films have received great
						reviews.
					</p>
					<p className='film-info-body-quote'>
						“The work done here is exquisite, the new piano score by Rick
						DeJonge is both so much of the period of the films as well as an
						incredibly modern manner of presentation, carefully illustrating the
						moods and passions of an art created nearly a century ago.” – Los
						Angeles Times (March 30, 2012)
					</p>
				</div>
			</div>
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={30}
				totalSlides={5}
				dragEnabled={false}
				infinite
			>
				<Slider className='film-carousel-slider'>
					<Slide className='film-carousel-item' index={0}>
						<div className='film-carousel-item-div'>
							<div className='film-carousel-sound-container'>
								<iframe
									src='https://player.vimeo.com/video/401411236'
									style={{
										position: 'absolute',
										top: '0',
										left: '0',
										width: '100%',
										height: '100%',
									}}
									frameborder='0'
									allow='autoplay; fullscreen'
									allowfullscreen
									title='Romantic Sample'
								></iframe>
							</div>
						</div>
					</Slide>
					<Slide className='film-carousel-item' index={1}>
						<div className='film-carousel-item-div'>
							<div className='film-carousel-sound-container'>
								<iframe
									src='https://player.vimeo.com/video/401409010'
									style={{
										position: 'absolute',
										top: '0',
										left: '0',
										width: '100%',
										height: '100%',
									}}
									frameborder='0'
									allow='autoplay; fullscreen'
									allowfullscreen
									title='Drama Sample'
								></iframe>
							</div>
						</div>
					</Slide>
					<Slide className='film-carousel-item' index={2}>
						<div className='film-carousel-item-div'>
							<div className='film-carousel-sound-container'>
								<iframe
									src='https://player.vimeo.com/video/401407123'
									style={{
										position: 'absolute',
										top: '0',
										left: '0',
										width: '100%',
										height: '100%',
									}}
									frameborder='0'
									allow='autoplay; fullscreen'
									allowfullscreen
									title='Action Sample'
								></iframe>
							</div>
						</div>
					</Slide>
					<Slide className='film-carousel-item' index={3}>
						<div className='film-carousel-item-div'>
							<div className='film-carousel-sound-container'>
								<iframe
									src='https://player.vimeo.com/video/401406098'
									style={{
										position: 'absolute',
										top: '0',
										left: '0',
										width: '100%',
										height: '100%',
									}}
									frameborder='0'
									allow='autoplay; fullscreen'
									allowfullscreen
									title='Comedy Sample'
								></iframe>
							</div>
						</div>
					</Slide>
					<Slide className='film-carousel-item' index={4}>
						<div className='film-carousel-item-div'>
							<div className='film-carousel-sound-container'>
								<iframe
									src='https://player.vimeo.com/video/401400021'
									style={{
										position: 'absolute',
										top: '0',
										left: '0',
										width: '100%',
										height: '100%',
									}}
									frameborder='0'
									allow='autoplay; fullscreen'
									allowfullscreen
									title='Suspense Sample'
								></iframe>
							</div>
						</div>
					</Slide>
				</Slider>
				<div className='film-info'>
					<div className='film-carousel-video-container'>
						<div className='film-carousel-nav-buttons-container'>
							<ButtonBack
								className='film-carousel-nav-button'
								onClick={() => handleNextPreviousItemClick()}
							>{`←`}</ButtonBack>
						</div>
						<div className='film-info-sample-text-container'>
							<h2 className='film-info-sample-text-title'>
								{renderSlideGenreTitle()}
							</h2>
						</div>
						<div className='film-carousel-nav-buttons-container'>
							<ButtonNext
								className='film-carousel-nav-button'
								onClick={() => handleNextCarouselItemClick()}
							>{`→`}</ButtonNext>
						</div>
					</div>
				</div>
			</CarouselProvider>
		</div>
	);
};

export default FilmInfo;
