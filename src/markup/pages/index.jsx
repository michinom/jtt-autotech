import React, { Component } from 'react';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AboutUsOneSection from "../elements/about-us-1";
import ServicesSection from "../elements/services-1";
import ScheduleServiceSection from "../elements/schedule-service";
import LatestBlogSection from "../elements/latest-blog-slider";

// Images
import bnrImg from "../../images/banner/1st-slide.jpg";

class Index extends Component {


	render() {

		return (
			<>

				<Header />

				<div className="page-content bg-white">

					<div className="page-banner ovbl-dark" style={{ backgroundImage: "url(" + bnrImg + ")" }}>
						<div className="container">
							<div className="page-banner-entry home text-center text-white">
								<h1><span>JTT Autotech</span></h1>
								<h2 className="title">Service, Repair and MOT centre</h2>
							</div>
						</div>
					</div>

					<AboutUsOneSection />

					<ServicesSection />

					<ScheduleServiceSection />

					<LatestBlogSection />

				</div>

				<Footer />

			</>
		);
	}
}

export default Index;