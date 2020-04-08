import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './components/landing/Landing';
import Contact from './components/contact/Contact';
import ComposingAndArranging from './components/composing-and-arranging/ComposingAndArranging';
import FilmAndMedia from './components/film-and-media/FilmAndMedia';
import ClinicsAndConducting from './components/clinics-and-conducting/ClinicsAndConducting';

import './App.scss';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route exact path='/contact' component={Contact} />
						<Route
							exact
							path='/composing-and-arranging'
							component={ComposingAndArranging}
						/>
						<Route exact path='/film-scoring' component={FilmAndMedia} />
						<Route
							exact
							path='/clinics-and-conducting'
							component={ClinicsAndConducting}
						/>
					</Switch>
				</div>
				<Footer />
			</Fragment>
		</Router>
	);
};

export default App;
