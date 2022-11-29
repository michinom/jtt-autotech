import React, { useRef, useState, useCallback } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr1.jpg";
import aboutPic2 from "../../images/about/pic2.jpg";


function Contact() {
	
	//ReCaptcha
	const setCaptchaToken = useState(null);
	const captchaRef = useRef(null);

	const [disableSubmit,setDisableSubmit] = useState(true);

	const verify = () => {
		captchaRef.current.getResponse().then(res => {
			setCaptchaToken(res)
		})
	}

	//Alert
	const toastifySuccess = () => {
		toast.success('Message Sent! Thank you', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	};

	const toastifyFail = () => {
		toast.error('Oops there was a problem sending the message. Please call us on 01707 658899 to let us know!', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	};

	//emailjs
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_67oig34', 'template_7y8cxxr', form.current, 'ZTeLzksJ-kmEf3kit')
			.then((result) => {
				console.log(result.text);
				console.log("Message Sent!");
				toastifySuccess();
			}, (error) => {
				console.log(error.text);
				toastifyFail();
			})
	}

	return (
		<>
			<Header />

			<div className="page-content bg-white">

				<div className="page-banner ovbl-dark" style={{ backgroundImage: "url(" + bnrImg + ")" }}>
					<div className="container">
						<div className="page-banner-entry text-center">
							<h1><span>Contact Us</span></h1>
						</div>
					</div>
				</div>

				<section className="section-area section-sp2">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-12">
								<form className="contact-form ajax-form" ref={form} onSubmit={sendEmail}>
									<div className="heading-bx mb-20">
										<h2 className="title mb-0">SEND A MESSAGE</h2>
									</div>
									<div className="row">
										<div className="col-lg-4 col-md-6">
											<div className="form-group">
												<div className="input-group">
													<input
														name="name"
														type="text"
														required className="form-control valid-character"
														placeholder="Your Name"
													/>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="form-group">
												<div className="input-group">
													<input
														name="email"
														type="email"
														className="form-control"
														required placeholder="Your Email Address"
													/>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-12">
											<div className="form-group">
												<div className="input-group">
													<input
														name="phone"
														type="text"
														required className="form-control int-value"
														placeholder="Your Phone"
													/>
												</div>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group">
												<div className="input-group">
													<textarea
														name="message"
														rows="4"
														className="form-control"
														placeholder="Type Message"
														required
													>
													</textarea>
												</div>
											</div>
										</div>
										<div className="col-lg-12 mb-4">
											<ReCAPTCHA
												sitekey="6LcP6fwSAAAAAHs_NhZ08q3VKVZe1JGkDk8kQLOA"
												ref={captchaRef}
												onChange={useCallback(() => setDisableSubmit(false),[])}
												onVerify={verify}
											/>
										</div>
										<div className="col-lg-12">
											<button name="submit" type="submit" value="Submit" className="btn btn-primary btn-lg" disabled={disableSubmit}> Send Message</button>
										</div>
									</div>
								</form>
								<ToastContainer />
							</div>
							<div className="col-lg-4 col-md-5 mb-30">
								<aside>
									<div className="media">
										<img src={aboutPic2} alt="" />
									</div>
								</aside>
							</div>
						</div>
					</div>
				</section>

				<div className="section-area">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2472.9013809776834!2d-0.17791468421387738!3d51.698249779666924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487622ba364e3779%3A0x15d37ecb0e1a125e!2sJTT%20Autotech%20Ltd!5e0!3m2!1sen!2suk!4v1669674319260!5m2!1sen!2suk" className="align-self-stretch d-flex"
						style={{ width: "100%", minHeight: "450px" }} title="map" allowfullscreen></iframe>
				</div>

			</div>

			<Footer />

		</>
	);
}

export default Contact;