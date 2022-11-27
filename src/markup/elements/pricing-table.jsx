import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PricingTableSection extends Component{
	render(){
		const lightRedBg = { backgroundColor: '#fcc7c7'};
		return(
			<>
				<section className="section-area bg-white section-sp1">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-primary">OUR PRICES</h6>
							<h2 className="title mb-0">BOOK YOUR CAR IN FOR A SERVICE</h2>
							<p>We provide three fixed price service packages from our 6 bay state of the art garage. If you want, you are welcome into our workshop so that our technicians can show you any faults on your vehicle, whilst it on our ramps.</p>
							<p>All prices include parts, labour and VAT. All work comes with a 1 Year Guarantee or 10,000 Miles, whichever comes first . * Some vehicles require long-life high performance spark plugs and oil and may incure a small adittional cost – please call for a quote.</p>
						</div>
						<div className="pricingtable-row">
							<div className="row">
								<div className="col-xl-4 col-sm-6 mb-30">
									<div className="pricingtable-wrapper style1">
										<div className="pricingtable-inner">
											<div className="pricingtable-main">
												<div className="pricingtable-price"> 
													<span className="priceing-doller">from £</span>
													<span className="pricingtable-bx">119.95</span>
												</div>
												<div className="pricingtable-title">
													<h4>Standard Service</h4>
												</div>
											</div>
											<ul className="pricingtable-features">
												<li><u>Inside the Vehicle</u></li>
												<li><i className="fa fa-check"></i>Check seat belt operation</li>
												<li><i className="fa fa-check"></i>Check operation of horn</li>
												<li><i className="fa fa-check"></i>Check operation of multi function switches</li>
												<li><i className="fa fa-check"></i>Check operation of wipers and washers</li>
												<li><i className="fa fa-check"></i>Lubricate door hinges</li>
												<li><i className="fa fa-check"></i>Check door lock operation</li>
												<li><u>Under the Bonnet</u></li>
												<li><i className="fa fa-check"></i>Check and top up washer bottle</li>
												<li><i className="fa fa-check"></i>Check radiator coolant level</li>
												<li><i className="fa fa-check"></i>Check antifreeze content</li>
												<li><i className="fa fa-check"></i>Check condition of radiator and hoses</li>
												<li><i className="fa fa-check"></i>Check tension and condition of fan belts</li>
												<li><i className="fa fa-check"></i>Check battery condition</li>
												<li><i className="fa fa-check"></i>Check brake fluid level</li>
												<li><i className="fa fa-check"></i>Check P.A.S. fluid level</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Check and adjust tappets</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Renew spark plugs</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Renew air filter element</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Check fuel filter for water (diesel only)</li>
												<li><i className="fa fa-check"></i>Check condition of emission filter</li>
												<li><i className="fa fa-check"></i>Visually check for electrical wiring security, correct routing and evidence of damage</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Check level of air conditioning refridgerant</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Check and adjust air/fuel mixture</li>
												<li><i className="fa fa-check"></i>Check condition of H.T. leads/rotot arm and distributor cap</li>
												<li><i className="fa fa-check"></i>Check exhaust manifold for glow</li>
												<li><u>Under the Vehicle</u></li>
												<li><i className="fa fa-check"></i>Renew engine oil and oil filter</li>
												<li><i className="fa fa-check"></i>Check transmission levels</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Top-up transmission levels</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Check and top up axle level</li>
												<li><i className="fa fa-check"></i>Check brake/fluid lines for leaks</li>
												<li><i className="fa fa-check"></i>Remove all wheels and inspect brakes</li>
												<li><i className="fa fa-check"></i>Visually check steering for damage and gators for leaks</li>
												<li><i className="fa fa-check"></i>Check suspension for damage and wear, gators and ball joints for security</li>
												<li><i className="fa fa-check"></i>Check general condition of underbody</li>
												<li><i className="fa fa-check"></i>Check for fluid leakage</li>
												<li><i className="fa fa-check"></i>Check exhaust/catalyst for condition</li>
												<li><i className="fa fa-check"></i>Check condition and inflation of tyres including spare</li>
												<li><i className="fa fa-check"></i>Check wheel bolts for tightness</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Check and adjust front track</li>
												<li><u>Road Test</u></li>
												<li><i className="fa fa-check"></i>Check for clutch operation</li>
												<li><i className="fa fa-check"></i>Check gearbox operation auto/manual</li>
												<li><i className="fa fa-check"></i>Check choke operation</li>
												<li><i className="fa fa-check"></i>Check indicator self cancelling</li>
												<li><u>After Road Test</u></li>
												<li><i className="fa fa-check"></i>Check levels including gearbox</li>
												<li><i className="fa fa-check"></i>Check for any fluid leaks</li>
												<li><i className="fa fa-check"></i>Fix next service due sticker</li>
											</ul>
											<div className="pricingtable-footer"> 
												<Link to="/booking" className="btn btn-primary">Get It Now</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-sm-6 mb-30">
									<div className="pricingtable-wrapper style1 pricingtable-highlight">
										<div className="pricingtable-tag">
											most used
										</div>
										<div className="pricingtable-inner">
											<div className="pricingtable-main">
												<div className="pricingtable-price"> 
													<span className="priceing-doller">from £</span>
													<span className="pricingtable-bx">155.00</span>
												</div>
												<div className="pricingtable-title">
													<h4>PREMIUM SERVICE</h4>
												</div>
											</div>
											<ul className="pricingtable-features">
												<li><u>Inside the Vehicle</u></li>
												<li><i className="fa fa-check"></i>Check seat belt operation</li>
												<li><i className="fa fa-check"></i>Check operation of horn</li>
												<li><i className="fa fa-check"></i>Check operation of multi function switches</li>
												<li><i className="fa fa-check"></i>Check operation of wipers and washers</li>
												<li><i className="fa fa-check"></i>Lubricate door hinges</li>
												<li><i className="fa fa-check"></i>Check door lock operation</li>
												<li><u>Under the Bonnet</u></li>
												<li><i className="fa fa-check"></i>Check and top up washer bottle</li>
												<li><i className="fa fa-check"></i>Check radiator coolant level</li>
												<li><i className="fa fa-check"></i>Check antifreeze content</li>
												<li><i className="fa fa-check"></i>Check condition of radiator and hoses</li>
												<li><i className="fa fa-check"></i>Check tension and condition of fan belts</li>
												<li><i className="fa fa-check"></i>Check battery condition</li>
												<li><i className="fa fa-check"></i>Check brake fluid level</li>
												<li><i className="fa fa-check"></i>Check P.A.S. fluid level</li>
												<li><i className="fa fa-check"></i>Check and adjust tappets</li>
												<li><i className="fa fa-check"></i>Renew spark plugs</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Renew air filter element</li>
												<li><i className="fa fa-check"></i>Check fuel filter for water (diesel only)</li>
												<li><i className="fa fa-check"></i>Check condition of emission filter</li>
												<li><i className="fa fa-check"></i>Visually check for electrical wiring security, correct routing and evidence of damage</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Check level of air conditioning refridgerant</li>
												<li><i className="fa fa-check"></i>Check and adjust air/fuel mixture</li>
												<li><i className="fa fa-check"></i>Check condition of H.T. leads/rotot arm and distributor cap</li>
												<li><i className="fa fa-check"></i>Check exhaust manifold for glow</li>
												<li><u>Under the Vehicle</u></li>
												<li><i className="fa fa-check"></i>Renew engine oil and oil filter</li>
												<li><i className="fa fa-check"></i>Check transmission levels</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Top-up transmission levels</li>
												<li><i className="fa fa-check"></i>Check and top up axle level</li>
												<li><i className="fa fa-check"></i>Check brake/fluid lines for leaks</li>
												<li><i className="fa fa-check"></i>Remove all wheels and inspect brakes</li>
												<li><i className="fa fa-check"></i>Visually check steering for damage and gators for leaks</li>
												<li><i className="fa fa-check"></i>Check suspension for damage and wear, gators and ball joints for security</li>
												<li><i className="fa fa-check"></i>Check general condition of underbody</li>
												<li><i className="fa fa-check"></i>Check for fluid leakage</li>
												<li><i className="fa fa-check"></i>Check exhaust/catalyst for condition</li>
												<li><i className="fa fa-check"></i>Check condition and inflation of tyres including spare</li>
												<li><i className="fa fa-check"></i>Check wheel bolts for tightness</li>
												<li><i className="fa fa-times text-danger" style={lightRedBg}></i>Check and adjust front track</li>
												<li><u>Road Test</u></li>
												<li><i className="fa fa-check"></i>Check for clutch operation</li>
												<li><i className="fa fa-check"></i>Check gearbox operation auto/manual</li>
												<li><i className="fa fa-check"></i>Check choke operation</li>
												<li><i className="fa fa-check"></i>Check indicator self cancelling</li>
												<li><u>After Road Test</u></li>
												<li><i className="fa fa-check"></i>Check levels including gearbox</li>
												<li><i className="fa fa-check"></i>Check for any fluid leaks</li>
												<li><i className="fa fa-check"></i>Fix next service due sticker</li>
											</ul>
											<div className="pricingtable-footer"> 
												<Link to="/booking" className="btn btn-primary">Get It Now</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-sm-6 mb-30">
									<div className="pricingtable-wrapper style1">
										<div className="pricingtable-inner">
											<div className="pricingtable-main">
												<div className="pricingtable-price"> 
													<span className="priceing-doller">from £</span>
													<span className="pricingtable-bx">180.00</span>
												</div>
												<div className="pricingtable-title">
													<h4>MAJOR SERVICE</h4>
												</div>
											</div>
											<ul className="pricingtable-features">
												<li><u>Inside the Vehicle</u></li>
												<li><i className="fa fa-check"></i>Check seat belt operation</li>
												<li><i className="fa fa-check"></i>Check operation of horn</li>
												<li><i className="fa fa-check"></i>Check operation of multi function switches</li>
												<li><i className="fa fa-check"></i>Check operation of wipers and washers</li>
												<li><i className="fa fa-check"></i>Lubricate door hinges</li>
												<li><i className="fa fa-check"></i>Check door lock operation</li>
												<li><u>Under the Bonnet</u></li>
												<li><i className="fa fa-check"></i>Check and top up washer bottle</li>
												<li><i className="fa fa-check"></i>Check radiator coolant level</li>
												<li><i className="fa fa-check"></i>Check antifreeze content</li>
												<li><i className="fa fa-check"></i>Check condition of radiator and hoses</li>
												<li><i className="fa fa-check"></i>Check tension and condition of fan belts</li>
												<li><i className="fa fa-check"></i>Check battery condition</li>
												<li><i className="fa fa-check"></i>Check brake fluid level</li>
												<li><i className="fa fa-check"></i>Check P.A.S. fluid level</li>
												<li><i className="fa fa-check"></i>Check and adjust tappets</li>
												<li><i className="fa fa-check"></i>Renew spark plugs</li>
												<li><i className="fa fa-check"></i>Renew air filter element</li>
												<li><i className="fa fa-check"></i>Check fuel filter for water (diesel only)</li>
												<li><i className="fa fa-check"></i>Check condition of emission filter</li>
												<li><i className="fa fa-check"></i>Visually check for electrical wiring security, correct routing and evidence of damage</li>
												<li><i className="fa fa-check"></i>Check level of air conditioning refridgerant</li>
												<li><i className="fa fa-check"></i>Check and adjust air/fuel mixture</li>
												<li><i className="fa fa-check"></i>Check condition of H.T. leads/rotot arm and distributor cap</li>
												<li><i className="fa fa-check"></i>Check exhaust manifold for glow</li>
												<li><u>Under the Vehicle</u></li>
												<li><i className="fa fa-check"></i>Renew engine oil and oil filter</li>
												<li><i className="fa fa-check"></i>Check transmission levels</li>
												<li><i className="fa fa-check"></i>Top-up transmission levels</li>
												<li><i className="fa fa-check"></i>Check and top up axle level</li>
												<li><i className="fa fa-check"></i>Check brake/fluid lines for leaks</li>
												<li><i className="fa fa-check"></i>Remove all wheels and inspect brakes</li>
												<li><i className="fa fa-check"></i>Visually check steering for damage and gators for leaks</li>
												<li><i className="fa fa-check"></i>Check suspension for damage and wear, gators and ball joints for security</li>
												<li><i className="fa fa-check"></i>Check general condition of underbody</li>
												<li><i className="fa fa-check"></i>Check for fluid leakage</li>
												<li><i className="fa fa-check"></i>Check exhaust/catalyst for condition</li>
												<li><i className="fa fa-check"></i>Check condition and inflation of tyres including spare</li>
												<li><i className="fa fa-check"></i>Check wheel bolts for tightness</li>
												<li><i className="fa fa-check"></i>Check and adjust front track</li>
												<li><u>Road Test</u></li>
												<li><i className="fa fa-check"></i>Check for clutch operation</li>
												<li><i className="fa fa-check"></i>Check gearbox operation auto/manual</li>
												<li><i className="fa fa-check"></i>Check choke operation</li>
												<li><i className="fa fa-check"></i>Check indicator self cancelling</li>
												<li><u>After Road Test</u></li>
												<li><i className="fa fa-check"></i>Check levels including gearbox</li>
												<li><i className="fa fa-check"></i>Check for any fluid leaks</li>
												<li><i className="fa fa-check"></i>Fix next service due sticker</li>
											</ul>
											<div className="pricingtable-footer"> 
												<Link to="/booking" className="btn btn-primary">Get It Now</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
			</>
		);
	}
}

export default PricingTableSection;