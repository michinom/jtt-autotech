import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from "../../images/logo.png";
import logoWhite from "../../images/logo-white.png";

const telareacode = "01707";
const telnumber1 = "658899";

function useHeader() {

	useEffect(() => {

		// Mobile Menu Open
		var menuIcon = document.querySelector(".menuicon")
		var menuLinks = document.querySelector(".menu-links")
		var menuClose = document.getElementById("menuClose")

		menuIcon.addEventListener('click', function () {
			menuLinks.classList.add("show")
		})

		menuClose.addEventListener('click', function () {
			menuLinks.classList.remove("show")
		})

		// Mobile Submenu Open Close Function
		var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
		for (var y = 0; y < navMenu.length; y++) {
			navMenu[y].addEventListener('click', function () { menuClick(this) });
		}

		function menuClick(current) {
			const active = current.classList.contains("open")
			navMenu.forEach(el => el.classList.remove('open'));

			if (active) {
				current.classList.remove('open')
				console.log("active")
			} else {
				current.classList.add('open');
				console.log("close")
			}
		}
	})

	return (
		<>

			<header className="header header-transparent rs-nav">
				<Sticky enabled={true} className="sticky-header navbar-expand-lg">
					<div className="menu-bar clearfix ">
						<div className="container clearfix">
							<div className="menu-logo">
								<Link to="/" className="main-logo"><img src={logoWhite} alt="" /></Link>
								<Link to="/" className="sticky-logo"><img src={logo} alt="" /></Link>
							</div>
							<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<div className="secondary-menu">
								<a href={"tel:" + telareacode + telnumber1}><span className="btn btn-outline-light">{telareacode + " " + telnumber1}</span></a>
								<Link to="/booking" className="btn btn-primary ms-3">Booking</Link>
							</div>
							<div className="menu-links navbar-collapse collapse justify-content-center" id="menuDropdown">
								<div className="menu-logo">
									<Link to="/"><img src={logoWhite} alt="" /></Link>
								</div>
								<ul className="nav navbar-nav">
									<li className="active">
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/mot">MOT</Link>
									</li>
									<li>
										<Link to="/servicing">Servicing</Link>
									</li>
									<li className="has-mega-menu "><Link to="#">Pages<i className="fa fa-chevron-down"></i></Link>
										<ul className="mega-menu">
											<li>
												<Link to="#">Pages</Link>
												<ul>
													<li><Link to="/about-1"><span>About Us 1</span></Link></li>
													<li><Link to="/about-2"><span>About Us 2</span></Link></li>
													<li><Link to="/service-1"><span>Service 1</span></Link></li>
													<li><Link to="/service-2"><span>Service 2</span></Link></li>
												</ul>
											</li>
											<li>
												<Link to="#">Pages</Link>
												<ul>
													<li><Link to="/team"><span>Our Team</span></Link></li>
													<li><Link to="/team-details"><span>Team Details</span></Link></li>
													<li><Link to="/job-career"><span>Job & Career</span></Link></li>
													<li><Link to="/terms-of-use"><span>Terms of Use</span></Link></li>
												</ul>
											</li>
											<li>
												<Link to="#">Pages</Link>
												<ul>
													<li><Link to="/booking"><span>Booking</span></Link></li>
													<li><Link to="/servicing"><span>Servicing</span></Link></li>
												</ul>
											</li>
											<li>
												<Link to="#">Pages</Link>
												<ul>
													<li><Link to="/error-404"><span>Error 404</span></Link></li>
													<li><Link to="/contact-1"><span>Contact Us 1</span></Link></li>
													<li><Link to="/contact-us"><span>Contact Us</span></Link></li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<Link to="#">Services<i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li className="add-menu-left">
												<ul>
													<li><Link to="/service-engine-diagnostics"><span>Engine Diagnostics</span> </Link></li>
													<li><Link to="/service-lube-oil-and-filters"><span>Lube Oil and Filters</span></Link></li>
													<li><Link to="/service-belts-and-hoses"><span>Belts and Hoses</span></Link></li>
													<li><Link to="/service-air-conditioning"><span>Air Conditioning</span></Link></li>
													<li><Link to="/service-brake-repair"><span>Brake Repair</span></Link></li>
													<li><Link to="/service-tire-and-wheel-services"><span>Tire and Wheel Services</span></Link></li>
												</ul>
											</li>
										</ul>
									</li>
									<li><Link to="/contact-us">Contact</Link>
									</li>
								</ul>
								<ul className="social-media">
									<li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-facebook"></i></a></li>
									<li><a target="_blank" href="https://www.google.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
									<li><a target="_blank" href="https://www.linkedin.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-linkedin"></i></a></li>
									<li><a target="_blank" href="https://twitter.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-twitter"></i></a></li>
								</ul>
								<div className="menu-close" id="menuClose">
									<i className="ti-close"></i>
								</div>
							</div>
						</div>
					</div>
				</Sticky>
			</header>

		</>
	);
}

export default useHeader;