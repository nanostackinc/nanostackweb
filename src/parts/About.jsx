import React from 'react';


const About = ({data}) => {
  return (
    <section id="about"  class="my-5">
        <div className="row">
          <div className="col-12 col-lg-5 d-flex justify-content-center position-relative justify-content-lg-start">
            <picture class="d-flex align-items-center">
              <img src={data.image} className="img-fluid" alt={data.image}/>
            </picture>
            {/* <div class="d-flex">
              <div class="card card-about1 position-absolute border-0">
                <div class="card-body px-4 py-3">
                  <p class="m-0"><span><img src={Lightning} class="pe-3" alt=""/></span>Accelerate Growth</p>
                </div>
              </div>
              <div class="card card-about2 position-absolute border-0">
                <div class="card-body px-4 py-3">
                  <p class="m-0"><span><img src={Dollar} class="pe-3" alt=""/></span>Boost Profits</p>
                </div>
              </div>
              <div class="card card-about3 position-absolute border-0">
                <div class="card-body px-4 py-3">
                  <p class="m-0"><span><img src={Trend} class="pe-3" alt=""/></span>Maximize Impact</p>
                </div>
              </div>
              <div class="card card-logo2 position-absolute border-0 rounded-circle">
                <div class="card-body px-4 py-3 d-flex justify-content-center ">
                  <p class="m-0"><span><img src={Logo} class="px-auto" alt=""/></span></p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 justify-content-center justify-content-lg-start">
            <h1 class="text-center text-lg-start">
              {data.title}{' '}
            </h1>
            <p class="text-center text-lg-start">
              {data.description_primary}
            </p>
            <p class="text-center text-lg-start">
              {data.description_secondary}
            </p>
          </div>
        </div>
    </section>
  );
};

export default About;
