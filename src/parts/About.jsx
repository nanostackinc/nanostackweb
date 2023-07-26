import React from 'react';

const About = ({data}) => {
  return (
    <section id="about">
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-5">
            <img src={data.image} className="img-fluid" alt={data.image}/>
          </div>
          <div className="col col-md-6 offset-1">
            <h1>
              {data.title}{' '}
              <i className="em em-flag-id"></i>
            </h1>
            <p>
              {data.description_primary}
            </p>
            <p>
              {data.description_secondary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
