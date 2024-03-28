import React from 'react'

const BrandPortofolio=({data})=>{
    return(
      <section  style={{ backgroundColor:"#4E96E1" }}>
 <div className="container px-0">
      <div
        className='latest-project-porto row'>
        <div
          className='col-lg-6 text-content-latest-project-porto d-flex flex-column justify-content-center align-items-center px-md-5 px-sm-2'>
          <div className='headline-latest-project-porto'>
            <h4 className='title-latest-project'>Projects</h4>
            <p className='subtitle-latest-project'>{data.tagline}</p>
          </div>
          <div className="d-flex justify-content-start">        
          </div>
        </div>
        <div
          className='col-lg-6'>
          <div className="card-portofolio row g-0">           
            <img src={data.images} className="car-card" style={{ borderRadius:27 }} alt="image.png"/>                        
          </div>
        </div>
      </div>
      </div>
      </section>
    )
}

export default BrandPortofolio