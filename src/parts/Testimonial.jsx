import React from 'react';

function Testimonial({data}) {
  return (
    <section id='testimonial'>
      <h4 className='title-testi'>{data.title}</h4>
      <div className="card-group justify-content-center">
        {data.material.map((item)=>{
            return(
                <div className="card-testi ms-4 me-4 mt-4">
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