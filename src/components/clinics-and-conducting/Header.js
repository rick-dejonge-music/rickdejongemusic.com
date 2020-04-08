import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Fade from 'react-reveal/Fade';

const Header = () => {
    return (
        <Parallax className='educational-header' strength={500}>
            <Background className='educational-header-img'>
                <img
                    src={require('../../assets/images/clinics_and_conducting/clinics_conducting_banner.jpg')}
                    alt='header'
                ></img>
            </Background>
            <div className='educational-quote-container'>
                <Fade top>
                    <p className='educational-quote'>
                        "Maestro DeJonge has this ability to hold the student’s
                        attention. Their world is full of computersand iPhones.
                        He knows they have a short attention span. He knows how
                        to grab their attention using those mediums that kids
                        today are using by adapting it to orchestra. He knows
                        how they’re thinking and chose music that is appropriate
                        (for their age)."
                    </p>
                    <p className='educational-quote-name'>
                        Tim King, Executive Director LPSO
                    </p>
                </Fade>
            </div>
        </Parallax>
    );
};

export default Header;
