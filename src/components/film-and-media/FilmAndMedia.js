import React from 'react';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import FilmInfo from './FilmInfo';
import SoundCloud from './Soundcloud';

const Film = () => {
	return (
		<div className='film'>
			<Parallax
				bgImage={require('../../assets/images/film_and_other_media/film_media_header.jpg')}
				bgImageAlt='Lake'
				strength={300}
				className='film-header'
				blur={5}
			>
				<div className='film-quote-container'>
					<Fade top>
						<p className='film-quote'>
							"Rick DeJonge is a foremost creative talent. The wide range of his
							work helps him to create inspiring and innovative compositions.
							His music has purpose, substance, emotional and intellectual
							appeal. His technical skill is outstanding and he is easy to work
							with."
						</p>
						<p className='film-quote-name'>Mariusz Kotowski, Writer/Director</p>
					</Fade>
				</div>
			</Parallax>
			<FilmInfo />
			<div className='film-soundcloud-container-root'>
				<h1 className='film-soundcloud-container-title'>
					Listen to More Samples
				</h1>
				<div className='film-soundcloud-container'>
					<div className='film-soundcloud-row'>
						<SoundCloud
							link='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1019205883&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
							title='soundcloud-link-1'
						/>
						<SoundCloud
							link={
								'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1019202976&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
							}
							title='soundcloud-link-2'
						/>
						<SoundCloud
							link={
								'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1019202493&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
							}
							title='soundcloud-link-3'
						/>
					</div>
					<div className='film-soundcloud-row'>
						<SoundCloud
							link={
								'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1019199949&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
							}
							title='soundcloud-link-4'
						/>
						<SoundCloud
							link={
								'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1019198239&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
							}
							title='soundcloud-link-5'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Film;
