import React from 'react';
import Logo from '../assets/images/icon/logo.svg'

const Footer = ({data}) => {
  return (
    <section id="footer" style={{
      marginTop: 64
    }}>
      
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-3">
            <h5 className='title-footer align-items-center'>
              <span>
                <img src={Logo} className="pe-2" alt=""/>
              </span>
              nanostack
            </h5>
            <p>{data.desc}</p>
          </div>
          <div className="col-12 col-md-3">
            <p>
              <a href="#" className="fw-bolder">Menu</a>
            </p>
            <p>
              <a href="#about">About Us</a>
            </p>
            <p>
              <a href="#portofolio">Portfolio</a>
            </p>
            <p>
              <a href="#testimonial">Testimonial</a>
            </p>
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>
          <div className="col-12 col-md-3">
            <p>
              <a href="#" className="fw-bolder">Community</a>
            </p>
            <p>
              <a href={data.instagram}>Instagram</a>
            </p>
            <p>
              <a href={data.linkedin}>LinkedIn</a>
            </p>
            <p>
              <a href={data.facebook}>Facebook</a>
            </p>
            <p>
              <a href={data.youtube}>Youtube</a>
            </p>
          </div>
        </div>
    </section>
  );
};

export default Footer;
