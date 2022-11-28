import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookingForm() {

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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_67oig34', 'template_7y8cxxr', form.current, 'ZTeLzksJ-kmEf3ki')
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
            <form className="booking-form ajax-form" ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="form-group">
                            <h6 className="form-title">VEHICLE YEAR</h6>
                            <div className="input-group">
                                <input type="number" className="form-control" placeholder="e.g. 2008" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                            <h6 className="form-title">VEHICLE MAKE</h6>
                            <div className="input-group">
                                <select className="form-control">
                                    <option value="" selected="selected">Choose...</option>
                                    <option value="Alfa Romeo">Alfa Romeo</option>
                                    <option value="Audi">Audi</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Chevrolet">Chevrolet</option>
                                    <option value="Chrysler">Chrysler</option>
                                    <option value="Citroen">Citroen</option>
                                    <option value="Daewoo">Daewoo</option>
                                    <option value="Daihatsu">Daihatsu</option>
                                    <option value="Daimler">Daimler</option>
                                    <option value="Dodge">Dodge</option>
                                    <option value="Fiat">Fiat</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Hyundai">Hyundai</option>
                                    <option value="Isuzu">Isuzu</option>
                                    <option value="Jaguar">Jaguar</option>
                                    <option value="Jeep">Jeep</option>
                                    <option value="Lancia">Lancia</option>
                                    <option value="Land Rover">Land Rover</option>
                                    <option value="Lexus">Lexus</option>
                                    <option value="Lotus">Lotus</option>
                                    <option value="Mazda">Mazda</option>
                                    <option value="Mercedes">Mercedes</option>
                                    <option value="MG">MG</option>
                                    <option value="Mini">Mini</option>
                                    <option value="Mitsubishi">Mitsubishi</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Peugeot">Peugeot</option>
                                    <option value="Porsche">Porsche</option>
                                    <option value="Proton">Proton</option>
                                    <option value="Renault">Renault</option>
                                    <option value="Rolls Royce">Rolls Royce</option>
                                    <option value="Rover">Rover</option>
                                    <option value="Saab">Saab</option>
                                    <option value="Seat">Seat</option>
                                    <option value="Skoda">Skoda</option>
                                    <option value="Smart">Smart</option>
                                    <option value="Subaru">Subaru</option>
                                    <option value="Suzuki">Suzuki</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Vauxhall">Vauxhall</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="Volvo">Volvo</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="form-group">
                            <h6 className="form-title">VEHICLE MILEAGE</h6>
                            <div className="input-group">
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <h6 className="form-title">SELECT SERVICES NEEDED</h6>
                            <div className="row">
                                <div className="col-md-12 col-lg-4">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing1" />
                                        <label className="form-check-label" for="customControlAutosizing1">Air Conditioning</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing2" />
                                        <label className="form-check-label" for="customControlAutosizing2">Brakes Repair</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing3" />
                                        <label className="form-check-label" for="customControlAutosizing3">Engine Diagnostics</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing4" />
                                        <label className="form-check-label" for="customControlAutosizing4">Heating &amp; Cooling</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing5" />
                                        <label className="form-check-label" for="customControlAutosizing5">Oil, Lube &amp; Filters</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing6" />
                                        <label className="form-check-label" for="customControlAutosizing6">Transmission Repair</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <h6 className="form-title">PERSONAL INFO</h6>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <div className="input-group">
                                <input name="name" type="text" required className="form-control" placeholder="Name" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <div className="input-group">
                                <input name="phone" type="email" required className="form-control" placeholder="Email" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <div className="input-group">
                                <input name="phone" type="tel" required className="form-control" placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <div className="input-group">
                                <input name="subject" type="text" required="" className="form-control" placeholder="Subject" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <div className="input-group">
                                <textarea name="message" rows="4" required="" className="form-control" placeholder="Type Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <button name="submit" type="submit" value="Submit" className="btn btn-primary btn-lg"> Send Message</button>
                    </div>
                </div>
                <ToastContainer />
            </form>
        </>
    );
}

export default BookingForm;
