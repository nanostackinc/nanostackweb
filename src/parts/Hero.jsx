import React from 'react';
import Button from '../components/Button';


export default function Hero({ data }) {
  return (
    <section id="hero" class="mt-0 mt-md-5">
        <div className="row">
          <div className="col-lg-7 col-md-12  justify-content-center">
            <h1 className='hero-title my-2 py-4'>{data.title}</h1>
            <p className='hero-subtitle'>{data.subtitle}</p>
            <div className="card-cta mx-auto">
              <a href={data.whatsapp} target='__blank' style={{ textDecoration: "none" }}>
                <Button className='btn-primary'>{data.cta_text}</Button>
              </a>
              <a href='#portofolio' style={{textDecoration:"none"}}>
                <Button className='btn-light' style={{ marginLeft: 16 }}>{data.cta_link}</Button>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-none d-lg-block position-relative">
            <img src={data.background_image} className="img-hero img-fluid" alt="" />
          </div>
        </div>
    </section>
  );
}
