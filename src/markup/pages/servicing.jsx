import React from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import PricingTableSection from "../elements/pricing-table";
import BookingForm from "../elements/booking-form";

//mport PartnerShipsSection from "../elements/partnerships2";

// Images
import bnrImg from "../../images/banner/bnr3.jpg";

const pageName = "Servicing";

function Servicing() {

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

				<PricingTableSection />

				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-7 mb-30 mb-md-50">
								<BookingForm />
							</div>
						</div>
					</div>
				</section>

			</div>

			<Footer />

		</>
	);
}

export default Servicing;