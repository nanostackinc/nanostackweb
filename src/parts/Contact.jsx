import React from 'react';
import ContactImage from '../assets/images/contact.jpg'
import Map from '../assets/images/icon/MapPin.svg'
import Phone from '../assets/images/icon/Phone.svg'
import Email from '../assets/images/icon/Envelope.svg'
import Clock from '../assets/images/icon/Clock.svg'

const Contact = ({data}) => {
  return (
    <section id="contact">
      <div className="container position-relative my-5">
        <div className="row">
          <div className="col col-md-6">
            <img src={ContactImage} className="img-fluid" alt="" />
          </div>
          <div className="col col-md-6">
            <div className="row justify-content-center">
              <h1 className="text-center mb-3">{data.title}</h1>
              <div className="row my-3">
                <div className="col col-md-6 d-flex align-items-stretch">
                  <div className="card d-flex flex-fill border-0">
                    <div className="card-body">
                      <h5 className="card-tagline">
                        <span>
                          <img src={Map} className="pe-2" alt="MapPin" />
                        </span>
                        Address
                      </h5>
                      <p>{data.address}</p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6 d-flex align-items-stretch">
                  <div className="card d-flex flex-fill border-0">
                    <div className="card-body">
                      <h5 className="card-tagline">
                        <span>
                          <img src={Phone} className="pe-2" alt="Phone" />
                        </span>
                        Phone
                      </h5>
                      <p>{data.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col col-md-6 d-flex align-items-stretch">
                  <div className="card d-flex flex-fill border-0">
                    <div className="card-body">
                      <h5 className="card-tagline">
                        <span>
                          <img src={Email} className="pe-2" alt="Envelope" />
                        </span>
                        Email
                      </h5>
                      <p>{data.email}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 px-3 pb-3 pb-md-0 align-items-stretch">
                  <div className="card d-flex flex-fill border-0">
                    <div className="card-body">
                      <h5 className="card-tagline">
                        <span>
                          <img src={Clock} className="pe-2" alt="Clock" />
                        </span>
                        Opening Hour
                      </h5>
                      <div className="pe-3"></div>
                      <p className="m-0">{data.start_day} to {data.end_day}</p>
                      <p>{data.start_time}- {data.end_time}</p>
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
