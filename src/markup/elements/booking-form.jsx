import React, { useRef, useState, useCallback } from 'react'
import DatePicker from "react-datepicker";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from "react-google-recaptcha";

function BookingForm() {

    const [startDate, setStartDate] = useState(new Date());

    const setCaptchaToken = useState(null);
    const captchaRef = useRef(null);

    const [disableSubmit, setDisableSubmit] = useState(true);

    const verify = () => {
        captchaRef.current.getResponse().then(res => {
            setCaptchaToken(res)
        })
    }

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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_67oig34', 'template_7y8cxxr', form.current, '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI')
            .then((result) => {
                console.log(result.text);
                console.log("Message Sent!");
                toastifySuccess();
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                toastifyFail();
            })
    }

    return (
        <>
            <form className="booking-form ajax-form" ref={form} onSubmit={sendEmail}>
                <div className="heading-bx mb-20">
                    <h2 className="title mb-0">BOOK YOUR CAR FOR A SERVICE</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="form-group">
                            <h6 className="form-title">CAR REGISTRATION</h6>
                            <div className="input-group">
                                <input type="text" className="form-control bg-warning text-dark text-center text-uppercase" placeholder="e.g. AB12 ABC" />
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
                            <h6 className="form-title">DATE REQUIRED</h6>
                            <div className="input-group">
                                <DatePicker
                                    selected={startDate}
                                    minDate={new Date()}
                                    dateFormat="dd MMM yyyy"
                                    className="form-control"
                                    onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                            <h6 className="form-title">SELECT SERVICES NEEDED</h6>
                            <div className="row">
                                <div className="col-md-12 col-lg-3">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing4" />
                                        <label className="form-check-label" for="customControlAutosizing4">MOT</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-3">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing1" />
                                        <label className="form-check-label" for="customControlAutosizing1">Full Service - Standard</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-3">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing2" />
                                        <label className="form-check-label" for="customControlAutosizing2">Full Service - Premium</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-3">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing3" />
                                        <label className="form-check-label" for="customControlAutosizing3">Full Service - Major</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-3">
                                    <div className="form-check custom-checkbox mb-10">
                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing5" />
                                        <label className="form-check-label" for="customControlAutosizing5">Air Conditioning</label>
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
                                <input name="name"
                                    type="text"
                                    required className="form-control"
                                    placeholder="Name"
                                    onChange={event => setName(event.target.value)}
                                    value={name} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <div className="input-group">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={event => setEmail(event.target.value)}
                                    value={email} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <div className="input-group">
                                <input
                                    name="phone"
                                    type="tel"
                                    required
                                    className="form-control"
                                    placeholder="Phone Number" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <div className="input-group">
                                <select className="form-control">
                                    <option value="New Customer" selected="selected">New Customer</option>
                                    <option value="Existing Customer">Existing Customer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <div className="input-group">
                                <textarea
                                    name="message"
                                    rows="4"
                                    required=""
                                    className="form-control"
                                    placeholder="Type Message"
                                    onChange={event => setMessage(event.target.value)}
                                    value={message}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 mb-4">
                        <ReCAPTCHA
                            sitekey="6LcP6fwSAAAAAHs_NhZ08q3VKVZe1JGkDk8kQLOA"
                            ref={captchaRef}
                            onChange={useCallback(() => setDisableSubmit(false), [])}
                            onVerify={verify}
                        />
                    </div>
                    <div className="col-lg-12">
                        <button name="submit" type="submit" value="Submit" className="btn btn-primary btn-lg" disabled={disableSubmit}> Send Message</button>
                    </div>
                </div>
                <ToastContainer />
            </form>
        </>
    );
}

export default BookingForm;
