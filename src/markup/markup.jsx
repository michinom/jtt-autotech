import React, { Component } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'

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
				<HashRouter>
					<Routes>
						<Route path='/' element={<Index/>} />
						<Route path='/mot' element={<Mot/>} />
						<Route path='/about-1' element={<AboutUs/>} />
						<Route path='/about-2' element={<AboutUs2/>} />
						<Route path='/booking' element={<Booking/>} />
						<Route path='/contact-1' element={<ContactUs/>} />
						<Route path='/contact-us' element={<Contact/>} />
						<Route path='/terms-of-use' element={<Tos/>} />
						<Route path='/job-career' element={<JobCareer/>} />
						<Route path='/servicing' element={<Servicing/>} />
						<Route path='/service-1' element={<Services/>} />
						<Route path='/service-2' element={<Services2/>} />
						<Route path='/service-air-conditioning' element={<ServiceAirConditioning/>} />
						<Route path='/service-belts-and-hoses' element={<ServiceBeltsAndHoses/>} />
						<Route path='/service-brake-repair' element={<ServiceBrakeRepair/>} />
						<Route path='/service-engine-diagnostics' element={<ServiceEngineDiagnostics/>} />
						<Route path='/service-lube-oil-and-filters' element={<ServiceLubeOilAndFilters/>} />
						<Route path='/service-tire-and-wheel-services' element={<ServiceTireAndWheelServices/>} />
						<Route path='/team' element={<Team/>} />
						<Route path='/team-details' element={<TeamDetails/>} />
						<Route path="*" element={<Error/>} />
						
					</Routes>
					
					<PageScrollTop />
					
				</HashRouter>
				
				<BackToTop />
				
			</>
		);
	}
}

export default Markup;