import React from 'react';
import Logo from '../assets/images/icon/logo.svg'

const Footer = () => {
  return (
    <section id="footer">
      <div className="container position-relative">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-3">
            <h5>
              <span>
                <img src={Logo} className="pe-2" alt="" />
              </span>
              nanostack
            </h5>
            <p>{data.desc}</p>
          </div>
          <div className="col-12 col-md-3">
            <p><a href="#" className="fw-700">Menu</a></p>
            <p><a href="#">About Us</a></p>
            <p><a href="#">Portfolio</a></p>
            <p><a href="#">Testimonial</a></p>
            <p><a href="#">Contact</a></p>
          </div>
          <div className="col-12 col-md-3">
            <p><a href="#" className="fw-700">Community</a></p>
            <p><a href="https://fastwork.id/user/ivanar6542/web-development-64971353?utm_source=app_sharing" target="_blank">Fastwork</a></p>
            <p><a href="#">Instagram</a></p>
            <p><a href="#">LinkedIn</a></p>
            <p><a href="#">Facebook</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
