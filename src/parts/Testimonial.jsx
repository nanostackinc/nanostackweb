import React from 'react';

function Testimonial({section, data}) {
  return (
    <section className="testimonial" id={section} style={{ backgroundColor:"#4E96E1" }}>
     <div className="container px-0">
      <div className="row">
        <div className="col-12 col-lg-5 d-flex testimonial-section-title flex align-items-start align-items-lg-center">
          <div className=" w-100 px-2 px-lg-0">
            <h4 className='title-testi text-white pb-1'>{data.title}</h4>
            <p className="desc-testi text-white text-center text-lg-start">{data.desc}</p>
          </div>
        </div>
        <div className="col-12 col-lg-7 d-none d-lg-block">
          <div className="row d-flex justify-content-start align-items-start ">
              <div className="slidernya">
                {/* <div className="slide-track"> */}
                  {data
                  .material
                  .map((item) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                        <div className="card-testi mb-4">
                          <p className="card-text m-0">
                            {item.content}
                          </p>
                          <div className="d-flex flex-col w-100">
                            <div className="circle-blue my-auto"></div>
                            <div className="ms-2">
                              <h5 className="name-testi mt-2 card-title">{item.name}</h5>
                              <p className=" job-testi card-text">
                                {item.job}
                              </p>
                            </div>
                          </div>
                        </div>
                    )
                  })}
              </div> 
              <div className="slidernya">
                {data
                .material
                .slice()
                .reverse()
                .map((item) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                      <div className="card-testi mb-4">
                        <p className="card-text m-0">
                          {item.content}
                        </p>
                        <div className="d-flex flex-col w-100">
                          <div className="circle-blue my-auto"></div>
                          <div className="ms-2">
                            <h5 className="name-testi mt-2 card-title">{item.name}</h5>
                            <p className=" job-testi card-text">
                              {item.job}
                            </p>
                          </div>
                        </div>
                      </div>
                  )
                })}
              </div>           
          </div>
        </div>
        <div className="col-12 d-block d-lg-none">
          <div className="slidernya-mobile d-flex ">
              {data
              .material
              .map((item) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                    <div className="card-testi mb-4 mx-2">
                      <p className="card-text m-0">
                        {item.content}
                      </p>
                      <div className="d-flex flex-col w-100">
                        <div className="circle-blue my-auto"></div>
                        <div className="ms-2">
                          <h5 className="name-testi mt-2 card-title text-truncate" style={{maxWidth: "240px"}}>{item.name}</h5>
                          <p className=" job-testi card-text">
                            {item.job}
                          </p>
                        </div>
                      </div>
                    </div>
                )
              })}
          </div>
        </div>
      </div>
      </div>

    </section>
  )
}
export default Testimonial