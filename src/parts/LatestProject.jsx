import React from 'react'
import Button from '../components/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const LatestProject = ({section,data}) => {
  console.log(data)
  return (
    <section id={section} style={{ backgroundColor:"#4E96E1" }}>
      <div className="container px-0">
      <div
        className='latest-project row'>
        <div
          className='col-lg-6 text-content-latest-project d-flex flex-column justify-content-center py-auto px-md-5 px-sm-2'>
          <div className='headline-latest-project'>
            <h4 className='title-latest-project'>{data.title}</h4>
            <p className='subtitle-latest-project'>{data.description}</p>
          </div>
          <div className="d-flex justify-content-start">
           <Button className='btn-light-latest' style={{ textDecoration:"none" }} type="link" href="/portofolio">{data.cta_text}</Button>
          </div>
        </div>
        <div
          className='col-lg-6 card-content'>
          <div className="card-portofolio-latest row g-0">           
            <img src="/images/team/bunda_bakery.png" className="car-card" style={{ borderRadius:27 }} alt="image.png"/>            
            <div className="text-card-latest">
              <h5 className="card-title mt-4">{data.website.title_second}</h5>
              <p className="card-text-latest">{data.website.title}</p>
            </div>
          </div>
        </div>
      </div>
      </div>  
    </section>
  )
}

export default LatestProject;