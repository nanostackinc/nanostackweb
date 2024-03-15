import React from 'react'
import Button from '../components/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const LatestProject = () => {
  return (
    <section>
      <div
        className='latest-project row'>
        <div
          className='col-lg-6 text-content-latest-project d-flex flex-column justify-content-center py-auto px-md-5 px-sm-2'>
          <div className='headline-latest-project'>
            <h4 className='title-latest-project'>Our Latest project</h4>
            <p className='subtitle-latest-project'>Various innovative solutions we have delivered. Our portfolio reflects our commitment to providing modern technology solutions that meet the needs of our clients.</p>
          </div>
          <div className="d-flex justify-content-start">
           <Button className='btn-light-latest' type="link" href="/portofolio">Explore More</Button>
          </div>
        </div>
        <div
          className='col-lg-6 card-content'>
          <div className="card-portofolio-latest row g-0">           
            <img src="/images/team/bunda_bakery.png" className="car-card" style={{ borderRadius:27 }} alt="image.png"/>            
            <div className="text-card-latest">
              <h5 className="card-title mt-4">Bunda Bakery Shop</h5>
              <p className="card-text-latest">E-Commerce</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestProject;