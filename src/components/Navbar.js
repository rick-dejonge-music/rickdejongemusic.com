import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	let currentLocation = useLocation();
	let [showMenu, setShowMenu] = useState(false);
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const scrollCheck = window.scrollY > 80;
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck);
			}
		});
	}, [scroll]);

	const handleMenuToggle = () => {
		setShowMenu(!showMenu);
	};

	return (
		<header
			className='navbar'
			style={{
				backgroundColor: scroll || showMenu ? 'black' : 'transparent',
			}}
		>
			<Link to='/' className='nav-logo'>
				<img
					src={require('../assets/images/RDMicon.png')}
					alt='icon'
					className='nav-logo-icon'
				/>
				<img
					src={require('../assets/images/logo.png')}
					alt='logo'
					className='nav-logo-img'
				/>
			</Link>
			<nav className={showMenu ? 'active' : ''}>
				<ul>
					<Link
						onClick={showMenu ? () => handleMenuToggle() : null}
						className={currentLocation.pathname === '/' ? 'active' : ''}
						id='link'
						to='/'
					>
						<li>Home</li>
					</Link>

					<Link
						onClick={showMenu ? () => handleMenuToggle() : null}
						className={
							currentLocation.pathname === '/film-scoring' ? 'active' : ''
						}
						id='link'
						to='/film-scoring'
					>
						<li>Film Scoring</li>
					</Link>
					<Link
						onClick={showMenu ? () => handleMenuToggle() : null}
						className={
							currentLocation.pathname === '/clinics-and-conducting'
								? 'active'
								: ''
						}
						id='link'
						to='/clinics-and-conducting'
					>
						<li>Clinics & Conducting</li>
					</Link>
					<Link
						onClick={showMenu ? () => handleMenuToggle() : null}
						className={
							currentLocation.pathname === '/composing-and-arranging'
								? 'active'
								: ''
						}
						id='link'
						to='/composing-and-arranging'
					>
						<li>Composing & Aranging</li>
					</Link>
					<Link
						onClick={showMenu ? () => handleMenuToggle() : null}
						className={currentLocation.pathname === '/contact' ? 'active' : ''}
						id='link'
						to='/contact'
					>
						<li>Contact</li>
					</Link>
				</ul>
			</nav>
			<div className='menu-toggle' onClick={() => handleMenuToggle()}>
				&#x2630;
			</div>
		</header>
	);
};

export default Navbar;
