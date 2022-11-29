import React from 'react';
import { Link } from 'react-router-dom';

// Images
import bg1 from "../../images/background/bg1.png";
import pic2 from "../../images/about/pic6.jpg";

function AboutUsOneSection() {

	const telareacode = "01707";
	const telnumber1 = "658899";

	return (
		<>

			<section className="section-area section-sp1 bg-white" style={{ backgroundImage: "url(" + bg1 + ")", backgroundRepeat: "no-repeat" }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 mb-40">
							<div className="heading-bx mb-4">
								<h6 className="title-ext text-primary">ALL MAKE VEHICLE SERVICE AND MOT CENTRE</h6>
								<h2 className="title">WHY CHOOSE US</h2>
								<p>JTT Autotech specialise in service and repairs on all makes of motor vehicle</p>
								<ul className="list-check-squer mb-50 mb-sm-30">
									<li>Established since 2001</li>
									<li>State of the art workshop</li>
									<li>Fully qualified technicians</li>
									<li>Honest and professional service</li>
								</ul>
							</div>
							<Link to="/about-1" className="btn btn-primary">About Us</Link>
						</div>
						<div className="col-lg-7 mb-30">
							<div className="about-media">
								<div className="media">
									<img src={pic2} alt="" />
								</div>
								<div className="about-contact bg-primary text-white">
									<h6 className="title-ext text-white">Call Today</h6>
									<h3 className="number mb-15 text-white">{telareacode} {telnumber1}</h3>
									<p className="mb-20">or</p>
									<Link to="/booking" className="btn btn-warning">BOOK A SERVICE</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}

export default AboutUsOneSection;