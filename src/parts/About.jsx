import React from 'react';


const About = ({data}) => {
  return (
    <section id="about"  className="d-flex flex-column my-md-5">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-5 position-relative">
            <img src={data.image} className="img-about" alt={data.image}/>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 justify-content-center justify-content-lg-start">
            <h2 class="text-start text-md-center text-lg-start py-4 py-md-0 my-2 my-md-0">
              {data.title}{' '}
            </h2>
            <p class="text-start">
              {data.description_primary}
            </p>
            <p class="text-start">
              {data.description_secondary}
            </p>
          </div>
        </div>
    </section>
  );
};

export default About;
