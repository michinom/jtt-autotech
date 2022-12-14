import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr3.jpg";

const pageName = "Terms Of Use";

function Tos() {

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
											<p className="mb-0">The JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site may contain links to other Web Sites (???Linked Sites???). The Linked Sites are not under the control of JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire and JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire is not responsible for webcasting or any other form of transmission received from any Linked Site. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire of the site or any association with its operators.</p>
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="3">
										<Accordion.Header>
											<i className="fa fa-question-circle"></i>
											NO UNLAWFUL OR PROHIBITED USE
										</Accordion.Header>
										<Accordion.Body>
											<p className="mb-0">As a condition of your use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site, you warrant to JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire that you will not use the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site in any manner which could damage, disable, overburden, or impair the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site or interfere with any other party???s use and enjoyment of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Sites.</p>
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="4">
										<Accordion.Header>
											<i className="fa fa-question-circle"></i>
											USE OF COMMUNICATION SERVICES
										</Accordion.Header>
										<Accordion.Body>
											<p className="mb-3">The JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, ???Communication Services???), you agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service. By way of example, and not as a limitation, you agree that when using a Communication Service, you will not:</p>
											<ul class="list-group  list-group-flush mb-3">
												<li class="list-group-item">Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others.</li>
												<li class="list-group-item">Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information.</li>
												<li class="list-group-item">Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.</li>
												<li class="list-group-item">Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another???s computer.</li>
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
											<p className="mb-3">JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire reserves the right at all times to disclose any information as necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire???s sole discretion.</p>
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
											<p className="mb-3">JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire does not claim ownership of the materials you provide to JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire (including feedback and suggestions) or post, upload, input or submit to any JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site or its associated services (collectively ???Submissions???). However, by posting, uploading, inputting, providing or submitting your Submission you are granting JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire, its affiliated companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses including, without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; and to publish your name in connection with your Submission.</p>
											<p className="mb-3">No compensation will be paid with respect to the use of your Submission, as provided herein. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire is under no obligation to post or use any Submission you may provide and may remove any Submission at any time in JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire???s sole discretion.</p>
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
											<p className="mb-3">JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire WEB SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED ???AS IS??? WITHOUT WARRANTY OR CONDITION OF ANY KIND. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.</p>
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
											<p className="mb-0">JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire reserves the right, in its sole discretion, to terminate your access to the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site and the related services or any portion thereof at any time, without notice. GENERAL To the maximum extent permitted by law, this agreement is governed by the laws of the State of Washington, U.S.A. and you hereby consent to the exclusive jurisdiction and venue of courts in San Mateo County, California, U.S.A. in all disputes arising out of or relating to the use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site. Use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including without limitation this paragraph. You agree that no joint venture, partnership, employment, or agency relationship exists between you and JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire as a result of this agreement or use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site. JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire???s performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire???s right to comply with governmental, court and law enforcement requests or requirements relating to your use of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site or information provided to or gathered by JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect. Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire with respect to the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire with respect to the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent an d subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be drawn up in English.</p>
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="8">
										<Accordion.Header>
											<i className="fa fa-question-circle"></i>
											COPYRIGHT AND TRADEMARK NOTICES:
										</Accordion.Header>
										<Accordion.Body>
											<p className="mb-0">All contents of the JTT Autotech, MOT and Servicing Potters Bar, North London, Hertfordshire Web Site are: ?? Copyright 2010-{(new Date().getFullYear())} JTT Autotech and/or its suppliers. All rights reserved.</p>
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
			</div>

			<Footer />

		</>
	);
}

export default Tos;