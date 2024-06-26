import React from 'react';
import ContactImage from '../assets/images/contact.png'
import Map from '../assets/images/icon/MapPin.svg'
import Phone from '../assets/images/icon/Phone.svg'
import Email from '../assets/images/icon/Envelope.svg'
import Clock from '../assets/images/icon/Clock.svg'

const Contact = ({data,section}) => {
  return (
    <section id={section} className='contact my-32'>
        <div className="row">
          <div className="col-12 col-lg-6 my-3 my-lg-0 d-none d-md-block">
            <img src={ContactImage} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-lg-6 mt-3 my-lg-0">
            <div className="row justify-content-center contact-card">
              <h1 className="text-center mb-3">{data.title}</h1>
              <div className="row px-0">
                <div className="col-12 col-md-6 d-flex text-center text-lg-start align-items-stretch">
                  <a href={data.addresshref} class="d-flex flex-fill border-0 text-decoration-none text-mainblack" target="_blank">
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
                  </a>
                </div>
                <div className="col-12 col-md-6 d-flex text-center text-lg-start align-items-stretch">
                  <a href={data.phonehref} class="d-flex flex-fill border-0 text-decoration-none text-mainblack" target="_blank">
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
                  </a>
                </div>
              </div>
              <div className="row px-0">
                <div className="col-12 col-md-6 d-flex text-center text-lg-start align-items-stretch">
                  <div className="card d-flex flex-fill border-0">
                    <a href={data.emailhref} class="text-decoration-none text-mainblack" target="_blank">
                      <div className="card-body">
                        <h5 className="card-tagline">
                          <span>
                            <img src={Email} className="pe-2" alt="Envelope" />
                          </span>
                          Email
                        </h5>
                        <p>{data.email}</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex text-center text-lg-start align-items-stretch">
                  <div className="card d-flex flex-fill border-0 mb-0">
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
    </section>
  );
};

export default Contact;
