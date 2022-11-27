import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr3.jpg";

const pageName = "Terms Of Use";

class Tos extends Component {

	render() {
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

					<section className="section-area section-sp3">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="heading-bx mb-20">
										<h6 className="title-ext text-primary">JTT AUTOTECH</h6>
										<h2 className="title mb-0">{pageName.toUpperCase()}</h2>
									</div>
									<Accordion defaultActiveKey="0" className="accordion ttr-accordion style1">
										<Accordion.Item eventKey="0">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												AGREEMENT BETWEEN USER AND JTT AUTOTECH, MOT AND SERVICING POTTERS BAR, NORTH LONDON, HERTFORDSHIRE
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-3">The JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site is comprised of various Web pages operated by JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire.</p>
												<p className="mb-0">The JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site constitutes your agreement to all such terms, conditions, and notices.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												MODIFICATION OF THESE TERMS OF USE
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire reserves the right to change the terms, conditions, and notices under which the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site is offered, including but not limited to the charges associated with the use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												LINKS TO THIRD PARTY SITES
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">The JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site may contain links to other Web Sites (“Linked Sites”). The Linked Sites are not under the control of JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire and JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire is not responsible for webcasting or any other form of transmission received from any Linked Site. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire of the site or any association with its operators.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												NO UNLAWFUL OR PROHIBITED USE
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">As a condition of your use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site, you warrant to JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire that you will not use the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site in any manner which could damage, disable, overburden, or impair the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site or interfere with any other party’s use and enjoyment of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Sites.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="4">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												USE OF COMMUNICATION SERVICES
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-3">The JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, “Communication Services”), you agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service. By way of example, and not as a limitation, you agree that when using a Communication Service, you will not:</p>
												<ul class="list-group  list-group-flush mb-3">
													<li class="list-group-item">Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others.</li>
													<li class="list-group-item">Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information.</li>
													<li class="list-group-item">Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.</li>
													<li class="list-group-item">Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another’s computer.</li>
													<li class="list-group-item">Advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service specifically allows such messages.</li>
													<li class="list-group-item">Conduct or forward surveys, contests, pyramid schemes or chain letters.</li>
													<li class="list-group-item">Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner.</li>
													<li class="list-group-item">Falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.</li>
													<li class="list-group-item">Restrict or inhibit any other user from using and enjoying the Communication Services.</li>
													<li class="list-group-item">Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.</li>
													<li class="list-group-item">Harvest or otherwise collect information about others, including e-mail addresses, without their consent.</li>
													<li class="list-group-item">Violate any applicable laws or regulations.</li>
												</ul>
												<p className="mb-3">JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire has no obligation to monitor the Communication Services. However, JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire reserves the right to review materials posted to a Communication Service and to remove any materials in its sole discretion. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire reserves the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever.</p>
												<p className="mb-3">JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire reserves the right at all times to disclose any information as necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire’s sole discretion.</p>
												<p className="mb-3">Always use caution when giving out any personally identifying information about yourself or your children in any Communication Service. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire does not control or endorse the content, messages or information found in any Communication Service and, therefore, JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire specifically disclaims any liability with regard to the Communication Services and any actions resulting from your participation in any Communication Service. Managers and hosts are not authorized JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire spokespersons, and their views do not necessarily reflect those of JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire.</p>
												<p className="mb-0">Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction and/or dissemination. You are responsible for adhering to such limitations if you download the materials.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="5">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												MATERIALS PROVIDED TO JTT AUTOTECH, MOT AND SERVICING POTTERS BAR, NORTH LONDON, HERTFORDSHIRE OR POSTED AT ANY JTT AUTOTECH, MOT AND SERVICING POTTERS BAR, NORTH LONDON, HERTFORDSHIRE WEB SITE
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-3">JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire does not claim ownership of the materials you provide to JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire (including feedback and suggestions) or post, upload, input or submit to any JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site or its associated services (collectively “Submissions”). However, by posting, uploading, inputting, providing or submitting your Submission you are granting JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire, its affiliated companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses including, without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; and to publish your name in connection with your Submission.</p>
												<p className="mb-3">No compensation will be paid with respect to the use of your Submission, as provided herein. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire is under no obligation to post or use any Submission you may provide and may remove any Submission at any time in JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire’s sole discretion.</p>
												<p className="mb-0">By posting, uploading, inputting, providing or submitting your Submission you warrant and represent that you own or otherwise control all of the rights to your Submission as described in this section including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="6">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												LIABILITY DISCLAIMER
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-3">THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE AT ANY TIME. ADVICE RECEIVED VIA THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR SITUATION.</p>
												<p className="mb-3">JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED “AS IS” WITHOUT WARRANTY OR CONDITION OF ANY KIND. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.</p>
												<p className="mb-3">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE, WITH THE DELAY OR INABILITY TO USE THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE.</p>
												<p className="mb-0">SERVICE CONTACT : admin@change.me</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="7">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												TERMINATION/ACCESS RESTRICTION
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire reserves the right, in its sole discretion, to terminate your access to the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site and the related services or any portion thereof at any time, without notice. GENERAL To the maximum extent permitted by law, this agreement is governed by the laws of the State of Washington, U.S.A. and you hereby consent to the exclusive jurisdiction and venue of courts in San Mateo County, California, U.S.A. in all disputes arising out of or relating to the use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site. Use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including without limitation this paragraph. You agree that no joint venture, partnership, employment, or agency relationship exists between you and JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire as a result of this agreement or use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire’s performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire’s right to comply with governmental, court and law enforcement requests or requirements relating to your use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site or information provided to or gathered by JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect. Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire with respect to the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire with respect to the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent an d subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be drawn up in English.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="8">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												COPYRIGHT AND TRADEMARK NOTICES:
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">All contents of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site are: © Copyright 2010-{(new Date().getFullYear())} JTT Autotech and/or its suppliers. All rights reserved.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="9">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												TRADEMARKS
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-3">The names of actual companies and products mentioned herein may be the trademarks of their respective owners.</p>
												<p className="mb-3">The example companies, organizations, products, people and events depicted herein are fictitious. No association with any real company, organization, product, person, or event is intended or should be inferred.</p>
												<p className="mb-0">Any rights not expressly granted herein are reserved.</p>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
							</div>
						</div>
					</section>

					<section className="section-area section-sp1">
						<div className="container">
							<div className="heading-bx text-center">
								<h6 className="title-ext text-primary">No helpful answer</h6>
								<h2 className="title mb-0">HERE ARE SOME OPTION</h2>
							</div>
							<div className="row">
								<div className="col-md-6 mb-30">
									<div className="feature-container bg-gray-alt left feature-bx1">
										<div className="icon-lg">
											<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 476 476">
												<path d="M400.85,181v-18.3c0-43.8-15.5-84.5-43.6-114.7c-28.8-31-68.4-48-111.6-48h-15.1c-43.2,0-82.8,17-111.6,48 c-28.1,30.2-43.6,70.9-43.6,114.7V181c-34.1,2.3-61.2,30.7-61.2,65.4V275c0,36.1,29.4,65.5,65.5,65.5h36.9c6.6,0,12-5.4,12-12
												V192.8c0-6.6-5.4-12-12-12h-17.2v-18.1c0-79.1,56.4-138.7,131.1-138.7h15.1c74.8,0,131.1,59.6,131.1,138.7v18.1h-17.2
												c-6.6,0-12,5.4-12,12v135.6c0,6.6,5.4,12,12,12h16.8c-4.9,62.6-48,77.1-68,80.4c-5.5-16.9-21.4-29.1-40.1-29.1h-30
												c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.2,42.1,42.2h30.1c19.4,0,35.7-13.2,40.6-31c9.8-1.4,25.3-4.9,40.7-13.9
												c21.7-12.7,47.4-38.6,50.8-90.8c34.3-2.1,61.5-30.6,61.5-65.4v-28.6C461.95,211.7,434.95,183.2,400.85,181z M104.75,316.4h-24.9
												c-22.9,0-41.5-18.6-41.5-41.5v-28.6c0-22.9,18.6-41.5,41.5-41.5h24.9V316.4z M268.25,452h-30.1c-10,0-18.1-8.1-18.1-18.1
												s8.1-18.1,18.1-18.1h30.1c10,0,18.1,8.1,18.1,18.1S278.25,452,268.25,452z M437.95,274.9c0,22.9-18.6,41.5-41.5,41.5h-24.9V204.8
												h24.9c22.9,0,41.5,18.6,41.5,41.5V274.9z" fill="#000" />
											</svg>
										</div>
										<div className="icon-content pl-10">
											<h5 className="ttr-tilte">HELP DESK SUPPORT</h5>
											<p>There are many variations of passages of Lorem Ipsum available.</p>
											<Link to="/services-details" className="btn-link">Read More</Link>
										</div>
									</div>
								</div>
								<div className="col-md-6 mb-30">
									<div className="feature-container bg-gray-alt left feature-bx1">
										<div className="icon-lg">
											<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 512 512">
												<path d="M304,96H112c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h192c8.832,0,16-7.168,16-16C320,103.168,312.832,96,304,96z" fill="#000" />
												<path d="M240,160H112c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h128c8.832,0,16-7.168,16-16C256,167.168,248.832,160,240,160z" fill="#000" />
												<path d="M352,0H64C28.704,0,0,28.704,0,64v320c0,6.208,3.584,11.872,9.216,14.496C11.36,399.488,13.696,400,16,400
														c3.68,0,7.328-1.28,10.24-3.712L117.792,320H352c35.296,0,64-28.704,64-64V64C416,28.704,387.296,0,352,0z M384,256
														c0,17.632-14.336,32-32,32H112c-3.744,0-7.36,1.312-10.24,3.712L32,349.856V64c0-17.632,14.336-32,32-32h288
														c17.664,0,32,14.368,32,32V256z" fill="#000" />
												<path d="M448,128c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c17.664,0,32,14.368,32,32v270.688l-54.016-43.2
														c-2.816-2.24-6.368-3.488-9.984-3.488H192c-17.664,0-32-14.368-32-32v-16c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v16
														c0,35.296,28.704,64,64,64h218.368l75.616,60.512C488.896,510.816,492.448,512,496,512c2.336,0,4.704-0.512,6.944-1.568
														C508.48,507.744,512,502.144,512,496V192C512,156.704,483.296,128,448,128z" fill="#000" />
											</svg>
										</div>
										<div className="icon-content pl-10">
											<h5 className="ttr-tilte">LIVE CHAT SUPPORT</h5>
											<p>There are many variations of passages of Lorem Ipsum available.</p>
											<Link to="/services-details" className="btn-link">Read More</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

				</div>

				<Footer />

			</>
		);
	}
}

export default Tos;