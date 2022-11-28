import React from 'react';
import { NavLink } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";
import BookingForm from "../elements/booking-form";

// Images
import bnrImg from "../../images/banner/bnr4.jpg";

function Booking() {

	return (
		<>
			<Header />

			<div className="page-content bg-white">

				<div className="page-banner ovbl-dark" style={{ backgroundImage: "url(" + bnrImg + ")" }}>
					<div className="container">
						<div className="page-banner-entry text-center">
							<h1><span>Booking</span></h1>
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><NavLink to="/"><i className="las la-home"></i>Home</NavLink></li>
									<li className="breadcrumb-item active" aria-current="page">Booking</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-7 mb-30 mb-md-50">
								<BookingForm />
							</div>
							<div className="col-lg-4 col-md-5 mb-30">
								<aside className="sticky-top">
									<div className="widget">
										<h5 className="widget-title">Our Inner Pages</h5>
										<ul className="service-menu style-1">
											<li>
												<NavLink
													to="/about-1"
													className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
													About Us <i className="las la-question-circle"></i>
												</NavLink>
											</li>
											<li>
												<NavLink
													to="/servicing"
													className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
													Servicing <i className="las la-cog"></i>
												</NavLink>
											</li>
											<li>
												<NavLink
													to="/booking"
													className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
													Booking <i className="las la-wpforms"></i>
												</NavLink>
											</li>
											<li>
												<NavLink
													to="/terms-of-use"
													className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
													Terms of Use <i className="las la-quote-left"></i>
												</NavLink>
											</li>
										</ul>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</section>


			</div>

			<Footer />

		</>
	);
}

export default Booking;