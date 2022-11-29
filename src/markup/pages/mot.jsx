import React from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AboutUsOneSection from "../elements/about-us-1";
import ServicesSection from "../elements/services-1";
import TeamTwoSection from "../elements/team-2";

// Images
import bnrImg from "../../images/banner/bnr3.jpg";

const pageName = "MOT";

function Mot() {
	return (
		<>

			<Header />

			<div className="page-content bg-white">

				<div className="page-banner ovbl-dark" style={{ backgroundImage: "url(" + bnrImg + ")" }}>
					<div className="container">
						<div className="page-banner-entry text-center">
							<h1><span>{pageName}</span></h1>
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">{pageName}</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

				{/*<SliderTwoSection />*/}

				{/*<PartnerShipsSection />*/}

				<AboutUsOneSection />

				{/*<AboutUsFourSection />*/}

				<ServicesSection />

				{/*<FeatureThreeSection />*/}

				<TeamTwoSection />


			</div>

			<Footer />

		</>
	);
}

export default Mot;