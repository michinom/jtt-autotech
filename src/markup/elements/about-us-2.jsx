import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'

// Elements
import Count from '../elements/counter-sensor';

// Images
import bg2 from "../../images/background/bg1.png";
import aboutPic2 from "../../images/about/pic2.jpg";

class AboutUsTwoSection extends Component {

	constructor() {
		super()
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
	}
	openModal() {
		this.setState({ isOpen: true })
	}

	render() {
		return (
			<>

				<section className="section-area section-sp1 bg-white" style={{ backgroundImage: "url(" + bg2 + ")", backgroundRepeat: "no-repeat" }}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30 mb-md-50">
								<div className="heading-bx">
									<h6 className="title-ext text-primary">About Us</h6>
									<h2 className="title">OUR HISTORY</h2>
									<p>JTT Autotech was started up by Jason Morfett and Martin Tagney after being made redundant from a Ford main dealer. They both worked there for 18 and 28 years respectively. They are both fully qualified technicians.</p>

									<p>They started up the company with a 3 bay workshop and employed an additional 3 people. Over the years, thanks to a loyal and growing customer base, JTT Autotech has doubled the number of workshop to 6 bays with the addition of a state of the art 2 bay MOT facilitiy. JTT Autotech now has 5 qualified MOT testers in total.</p>

									<p>JTT Autotech currently has a team of 10 people of which 5 are fully qualified technicians. All our technicians come from main dealer backgrounds.</p>

									<p>JTT Autotech also employ apprentices who are taken directly from local schools. Each apprentice is required to attend college once a week to obtain their NVQ and Motor Vehicle Studies.</p>

									<p>Collection and delivery drivers are available to help JTT Autotech to provide a better service to its clients. We also have a small fleet of courtesy cars available, subject to availability.</p>
								</div>
								<div className="row">
									<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
										<div className="counter-style-1">
											<div className="text-secondry">
												<h2 className="text-primary">
													<Count counter={6} />
													<span> BAY</span>
												</h2>
											</div>
											<h5 className="counter-text">VEHICLE GARAGE</h5>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
										<div className="counter-style-1">
											<div className="text-secondry">
												<h2 className="text-primary">
													<Count counter={10} />
													<span>+</span>
												</h2>
											</div>
											<h5 className="counter-text">TOTAL EMPLOYEES</h5>
										</div>
									</div>
									<div className="col-xl-4 col-lg-12 col-md-4 col-sm-12">
										<div className="counter-style-1">
											<div className="text-secondry">
												<h2 className="text-primary">
													<Count counter={5} />
													<span> MOT</span>
												</h2>
											</div>
											<h5 className="counter-text">QUALIFIED TESTERS</h5>
										</div>
									</div>
								</div>
								<div className="mt-15 mt-md-0">
									<Link to="/contact-us" className="btn btn-primary me-3">Contact Us</Link>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="about-imgbox">
									<img src={aboutPic2} alt="" />
									<div className="about-year">
										<h2 className="count"><Count counter={20} /> +</h2>
										<h6 className="text">Years in Service</h6>
										<Link to="/booking" className="btn btn-warning">Book A Service</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='PkkV1vLHUvQ' onClose={() => this.setState({ isOpen: false })} />

			</>
		);
	}
}

export default AboutUsTwoSection;