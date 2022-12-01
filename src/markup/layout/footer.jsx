import React from 'react';
import { Link } from 'react-router-dom';

// Images
import logo2 from '../../images/logo2.png';
import icon1 from '../../images/icon/contact/icon1.png';
import icon2 from '../../images/icon/contact/icon2.png';
import icon3 from '../../images/icon/contact/icon3.png';

const telareacode = "01707";
const telnumber1 = "658899";
const telnumber2 = "647755";


function useFooter() {
	return (
		<>
			<footer className="footer">
				<div className="footer-info bg-primary">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
								<div className="footer-logo">
									<img src={logo2} alt="" />
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
								<div className="feature-container left footer-info-bx">
									<div className="icon-lg">
										<span className="icon-cell"><img src={icon3} alt="" /></span>
									</div>
									<div className="icon-content">
										<p>Industrial Park, 218 Hollies Way, High St, Potters Bar EN6 5BY</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
								<div className="feature-container left footer-info-bx">
									<div className="icon-lg">
										<span className="icon-cell"><img src={icon1} alt="" /></span>
									</div>
									<div className="icon-content">
										<p>{telareacode} {telnumber1}<br />{telareacode} {telnumber2}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
								<div className="feature-container left footer-info-bx">
									<div className="icon-lg">
										<span className="icon-cell"><img src={icon2} alt="" /></span>
									</div>
									<div className="icon-content">
										<Link to="/contact-us" className="btn btn-warning">Contact Us</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-top bt0">
					<div className="container">
						<div className="row">
							<div className="col-xl-4 col-md-6">
								<div className="widget footer_widget">
									<h5 className="footer-title">Company</h5>
									<p className="mb-20">Need a special repair service? we are happy to fulfil every request in order to exceed your expectations</p>
									<div className="ft-content">
										<i className="fa fa-phone"></i>
										<span>Talk To Our Team</span>
										<h4>{telareacode} {telnumber1}</h4>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-md-6">
								<div className="widget widget-link-2">
									<h5 className="footer-title">Our Solutions</h5>
									<ul>
										<li><Link to="/about-us">About Us</Link></li>
										<li><Link to="#">Engine Services</Link></li>
										<li><Link to="/booking">Booking</Link></li>
										<li><Link to="#">Oil And Filters</Link></li>
										<li><Link to="/services">Our Services</Link></li>
										<li><Link to="#">Belts And Hoses</Link></li>
										<li><Link to="/servicing">Servicing</Link></li>
										<li><Link to="#">Brake Repair</Link></li>
										<li><Link to="/team">Out Team</Link></li>
										<li><Link to="#">Air Conditioning</Link></li>
										<li><Link to="/contact-us">Contact Us</Link></li>
										<li><Link to="#">Tire And Wheel</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-4 col-md-6">
								<div className="widget widget_info">
									<h5 className="footer-title">Subscribe Now</h5>
									<p className="mb-20">Weekly Breaking News Analysis And Cutting Edge Advices On Job Searching.</p>
									<form className="subscribe-form subscription-form mb-30">
										<div className="ajax-message"></div>
										<div className="input-group">
											<input name="email" required="required" className="form-control" placeholder="Email Address" type="email" />
											<div className="input-group-append">
												<button name="submit" value="Submit" type="submit" className="btn btn-block btn-primary radius-sm">Send</button>
											</div>
										</div>
									</form>
									<ul className="list-inline ft-social-bx">
										<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/JTTAutotech/" className="btn button-sm"><i className="fa fa-facebook"></i></a></li>
										{/*<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn button-sm"><i className="fa fa-twitter"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn button-sm"><i className="fa fa-linkedin"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/" className="btn button-sm"><i className="fa fa-instagram"></i></a></li>*/}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
								<p className="mb-0">© Copyright JTT Autotech {(new Date().getFullYear())}. All right reserved.</p>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-end">
								<ul className="widget-link">
									<li><Link to="/index">Home</Link></li>
									<li><Link to="/about-us">About</Link></li>
									<li><Link to="/terms-of-use">Terms of Use</Link></li>
									<li><Link to="/services">Services</Link></li>
									<li><Link to="/contact-us">Contact</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	);
}

export default useFooter;