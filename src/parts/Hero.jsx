import React from 'react'
import Button from '../components/Button'
export default function Hero({data}) {
  return (
    <section id="hero">
      <div className="container position-relative my-5">
        <div className="row">
          <div class="col-md-7">
            <h1>{data.title}</h1>
            <p>{data.subtitle}</p>
            <div className="d-flex justify-content-start">
            <a href="https://api.whatsapp.com/send?phone=08993845802" style={{textDecoration:"none"}}>
              <Button className='btn-primary 'href="https://api.whatsapp.com/send?phone=08993845802">{data.cta_text}</Button>
             </a>
             <a href='#portofolio'>
              <Button
                className='btn-light'
                style={{
                  marginLeft: 16
                }} href>{data.cta_link}</Button>
                </a>
            </div>
          </div>
          <div className="col-md-5">
            <img src={data.background_image} className="img-fluid p-4" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}
