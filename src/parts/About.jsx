import React from 'react';


const About = ({data}) => {
  return (
    <section id="about"  className="d-flex flex-column my-5">
        <div className="row  d-flex justify-content-between">
        <div className="col-12 col-lg-5 d-none d-lg-block position-relative">
            <img src={data.image} className="img-about" alt={data.image}/>
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
