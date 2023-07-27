import React from 'react'
import Button from '../components/Button'
import Logo from '../assets/images/icon/logo.svg'
import Globe from '../assets/images/icon/Globe.svg'
import Android from '../assets/images/icon/AndroidLogo.svg'
import Selection from '../assets/images/icon/SelectionAll.svg'

export default function Hero({data}) {
  return (
    <section id="hero">
      <div className="container my-5">
        <div className="row">
          <div class="col-12 col-lg-7">
            <h1 class="text-center text-lg-start">{data.title}</h1>
            <p class="text-center text-lg-start">{data.subtitle}</p>
            <div class="row justify-content-center justify-content-lg-start">
              <Button className='btn-primary '>{data.cta_text}</Button>
              <Button
                className='btn-light'
                style={{
                marginLeft: 16
              }}>{data.cta_link}</Button>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-none d-lg-block position-relative">
            <div class="card card-website position-absolute border-0">
              <div class="card-body px-4 py-3">
                <p class="m-0"><span><img src={Globe} class="pe-3" alt=""/></span>Website</p>
              </div>
            </div>
            <div class="card card-android position-absolute border-0">
              <div class="card-body px-4 py-3">
                <p class="m-0"><span><img src={Android} class="pe-3" alt=""/></span>Android App</p>
              </div>
            </div>
            <div class="card card-product position-absolute border-0">
              <div class="card-body px-4 py-3">
                <p class="m-0"><span><img src={Selection} class="pe-3" alt=""/></span>Product Design</p>
              </div>
            </div>
            <div class="card card-logo position-absolute border-0 rounded-circle">
              <div class="card-body px-4 py-3 d-flex justify-content-center ">
                <p class="m-0"><span><img src={Logo} class="px-auto" alt=""/></span></p>
              </div>
            </div>
            <img src={data.background_image} className="img-hero img-fluid p-4" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}
