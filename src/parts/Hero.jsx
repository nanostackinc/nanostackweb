import React from 'react';
import Button from '../components/Button';
import Logo from '../assets/images/icon/logo.svg';
import Globe from '../assets/images/icon/Globe.svg';
import Android from '../assets/images/icon/AndroidLogo.svg';
import Selection from '../assets/images/icon/SelectionAll.svg';

export default function Hero({ data }) {
  return (
    <section id="hero" style={{marginTop:63}}>
        <div className="row">
          <div className="col-lg-7 col-md-12  justify-content-center">
            <h1 className='hero-title'>{data.title}</h1>
            <p className='hero-subtitle'>{data.subtitle}</p>
            <div className="card-cta">
              <a href="https://api.whatsapp.com/send?phone=08993845802" style={{ textDecoration: "none" }}>
                <Button className='hero-btn1'>Contact Us</Button>
              </a>
              <a href='#portofolio'>
                <Button className='hero-btn2' style={{ marginLeft: 16 }}>{data.cta_link}</Button>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-none d-lg-block position-relative">
            {/* <div className="card card-website position-absolute border-0">
              <div className="card-body px-4 py-3">
                <p className="m-0"><span><img src={Globe} className="pe-3" alt="" /></span>Website</p>
              </div>
            </div>
            <div className="card card-android position-absolute border-0">
              <div className="card-body px-4 py-3">
                <p className="m-0"><span><img src={Android} className="pe-3" alt="" /></span>Android App</p>
              </div>
            </div>
            <div className="card card-product position-absolute border-0">
              <div className="card-body px-4 py-3">
                <p className="m-0"><span><img src={Selection} className="pe-3" alt="" /></span>Product Design</p>
              </div>
            </div>
            <div className="card card-logo position-absolute border-0 rounded-circle">
              <div className="card-body px-4 py-3 d-flex justify-content-center ">
                <p className="m-0"><span><img src={Logo} className="px-auto" alt="" /></span></p>
              </div>
            </div> */}
            <img src={data.background_image} className="img-hero img-fluid" alt="" />
          </div>
        </div>
    </section>
  );
}