import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import Mot from './pages/mot';
import AboutUs from './pages/about-1';
import AboutUs2 from './pages/about-2';
import Booking from './pages/booking';
import ContactUs from './pages/contact-1';
import Contact from './pages/contact-us';
import Tos from './pages/terms-of-use';
import JobCareer from './pages/job-career';
import Servicing from './pages/servicing';
import Services from './pages/service-1';
import Services2 from './pages/service-2';
import ServiceAirConditioning from './pages/service-air-conditioning';
import ServiceBeltsAndHoses from './pages/service-belts-and-hoses';
import ServiceBrakeRepair from './pages/service-brake-repair';
import ServiceEngineDiagnostics from './pages/service-engine-diagnostics';
import ServiceLubeOilAndFilters from './pages/service-lube-oil-and-filters';
import ServiceTireAndWheelServices from './pages/service-tire-and-wheel-services';
import Team from './pages/team';
import TeamDetails from './pages/team-details';
import Error from './pages/error-404';

class Markup extends Component{
	render(){
		return(
			<>
				<BrowserRouter>
				
					<Routes>
						<Route exact path='/' element={<Index/>} />
						<Route exact path='/mot' element={<Mot/>} />
						<Route exact path='/about-1' element={<AboutUs/>} />
						<Route exact path='/about-2' element={<AboutUs2/>} />
						<Route exact path='/booking' element={<Booking/>} />
						<Route exact path='/contact-1' element={<ContactUs/>} />
						<Route exact path='/contact-us' element={<Contact/>} />
						<Route exact path='/terms-of-use' element={<Tos/>} />
						<Route exact path='/job-career' element={<JobCareer/>} />
						<Route exact path='/servicing' element={<Servicing/>} />
						<Route exact path='/service-1' element={<Services/>} />
						<Route exact path='/service-2' element={<Services2/>} />
						<Route exact path='/service-air-conditioning' element={<ServiceAirConditioning/>} />
						<Route exact path='/service-belts-and-hoses' element={<ServiceBeltsAndHoses/>} />
						<Route exact path='/service-brake-repair' element={<ServiceBrakeRepair/>} />
						<Route exact path='/service-engine-diagnostics' element={<ServiceEngineDiagnostics/>} />
						<Route exact path='/service-lube-oil-and-filters' element={<ServiceLubeOilAndFilters/>} />
						<Route exact path='/service-tire-and-wheel-services' element={<ServiceTireAndWheelServices/>} />
						<Route exact path='/team' element={<Team/>} />
						<Route exact path='/team-details' element={<TeamDetails/>} />
						<Route element={<Error/>} />
						
					</Routes>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}

export default Markup;