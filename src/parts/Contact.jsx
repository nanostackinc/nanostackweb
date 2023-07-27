import React from 'react';
import ContactImage from '../assets/images/contact.jpg'
import Map from '../assets/images/icon/MapPin.svg'
import Phone from '../assets/images/icon/Phone.svg'
import Email from '../assets/images/icon/Envelope.svg'
import Clock from '../assets/images/icon/Clock.svg'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container position-relative my-5">
        <div className="row">
          <div className="col-12 col-lg-6 my-3 my-lg-0">
            <img src={ContactImage} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-lg-6 my-3 my-lg-0">
            <div className="row justify-content-center">
              <h1 className="text-center mb-3">Get in Touch: Reach Out Today</h1>
              <div className="row my-3">
                <div className="col-12 col-md-6 d-flex text-center text-lg-start align-items-stretch">
                  <div className="card d-flex flex-fill border-0">
                    <div className="card-body">
                      <h5 className="card-tagline">
                        <span>
                          <img src={Map} className="pe-2" alt="MapPin" />
                        </span>
                        Address
                      </h5>
                      <p>Jombang Kota, Jombang, East Java, Indonesia</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex text-center text-lg-start align-items-stretch">
                  <div className="card d-flex flex-fill border-0">
                    <div className="card-body">
                      <h5 className="card-tagline">
                        <span>
                          <img src={Phone} className="pe-2" alt="Phone" />
                        </span>
                        Phone
                      </h5>
                      <p>+62 899-3845-802 (Dicky)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-12 col-md-6 d-flex text-center text-lg-start align-items-stretch">
                  <div className="card d-flex flex-fill border-0">
                    <div className="card-body">
                      <h5 className="card-tagline">
                        <span>
                          <img src={Email} className="pe-2" alt="Envelope" />
                        </span>
                        Email
                      </h5>
                      <p>nanostackindustries@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex text-center text-lg-start align-items-stretch">
                  <div className="card d-flex flex-fill border-0">
                    <div className="card-body">
                      <h5 className="card-tagline">
                        <span>
                          <img src={Clock} className="pe-2" alt="Clock" />
                        </span>
                        Opening Hour
                      </h5>
                      <div className="pe-3"></div>
                      <p className="m-0">Monday to Friday</p>
                      <p>09:00 AM - 05:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
