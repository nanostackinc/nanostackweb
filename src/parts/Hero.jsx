import React from 'react';
import Button from '../components/Button';


export default function Hero({ data }) {
  return (
    <section id="hero" className="mt-0 mt-md-4">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-6 col-md-12  justify-content-center" id='hero-image'>
            <h1 className='hero-title py-3 my-0 pt-md-0 pb-md-3'>{data.title}</h1>
            <p className='hero-subtitle py-3 my-0'>{data.subtitle}</p>
            <div className="card-cta mx-auto">
              <a href={data.whatsapp} target='_blank' style={{ textDecoration: "none" }}>
                <Button className='btn-primary'>{data.cta_text}</Button>
              </a>
              <a href='#portofolio' style={{textDecoration:"none"}}>
                <Button className='btn-light' style={{ marginLeft: 16 }}>{data.cta_link}</Button>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-5 position-relative my-4 my-md-0 py-2 py-md-0">
            <img src={data.background_image} className="img-hero" alt="" />
          </div>
        </div>
    </section>
  );
}
