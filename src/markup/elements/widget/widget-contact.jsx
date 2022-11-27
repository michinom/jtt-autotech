import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import icon1 from "../../../images/icon/contact/skin2/icon1.png"
import icon2 from "../../../images/icon/contact/skin2/icon2.png"
import icon3 from "../../../images/icon/contact/skin2/icon3.png"

class widgetContact extends Component{
	render(){
		return(
			<>
				<div className="widget">
					<h5 className="widget-title">Contact Us</h5>
					<ul className="contact-infolist">
						<li>
							<img src={icon1} alt=""/>
							<h6 className="contact-title">Contact Number</h6>
							<p>01707 658899<br/>01707 647755</p>
						</li>
						<li>
							<img src={icon2} alt=""/>
							<h6 className="contact-title">Send a Message</h6>
							<Link to="/contact-1" className="btn btn-primary text-white">Contact Us</Link>
						</li>
						<li>
							<img src={icon3} alt=""/>
							<h6 className="contact-title">Address</h6>
							<p>Hollies Way Industrial Park 218 High Street, Potters Bar, Hertfordshire, EN6 5BH</p>
						</li>
					</ul>
				</div>
				
			</>
		);
	}
}

export default widgetContact;