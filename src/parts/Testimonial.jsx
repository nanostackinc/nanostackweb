import React from 'react';

function Testimonial({data}) {
  return (
    <section className='my-32 py-0' id='testimonial'>
      <h4 className='title-testi'>{data.title}</h4>
      <div className="card-group justify-content-center">
        {data
          .material
          .map((item, index) => {
            return (
              <div className="card-testi md-0 mx-md-2 my-2 my-md-0">
                <p className="card-text">
                  {item.content}
                </p>
                <h5 className="name-testi mt-2 card-title text-center">{item.name}</h5>
                <p className=" job-testi card-text text-center">
                  {item.job}
                </p>
              </div>
            )
          })}

      </div>
    </section>
  )
}
export default Testimonial