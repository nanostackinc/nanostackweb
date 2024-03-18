import React from 'react'

const BrandPortofolio=()=>{
    return(
<div
        className='latest-project-porto row'>
        <div
          className='col-lg-6 text-content-latest-project-porto d-flex flex-column justify-content-center align-items-center px-md-5 px-sm-2'>
          <div className='headline-latest-project-porto'>
            <h4 className='title-latest-project'>Projects</h4>
            <p className='subtitle-latest-project'>Each project reflects our ability to deliver the latest and innovative technological solutions for our clients. We always strive to deliver the best results and meet our customers' expectations.</p>
          </div>
          <div className="d-flex justify-content-start">
        
          </div>
        </div>
        <div
          className='col-lg-6'>
          <div className="card-portofolio row g-0">           
            <img src="/images/ec.png" className="car-card" style={{ borderRadius:27 }} alt="image.png"/>                        
          </div>
        </div>
      </div>
    )
}

export default BrandPortofolio