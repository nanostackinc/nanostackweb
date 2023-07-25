import React from 'react';
import AboutImage from '../assets/images/about.png'

const About = () => {
  return (
    <section id="about">
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-5">
            <img src={AboutImage} className="img-fluid" alt="" />
          </div>
          <div className="col col-md-6 offset-1">
            <h1>
              A dedicated Software production Company based in Indonesia{' '}
              <i className="em em-flag-id" aria-role="presentation" aria-label="Indonesia Flag"></i>
            </h1>
            <p>
              With our broad knowledge & experience in various Industry, We can help to achieve your goals in fast & efficient manner.
            </p>
            <p>
              We excel in designing and maintaining responsive user interface, crafting dynamic, engaging interfaces with clean and optimized code. Collaborating seamlessly with cross-functional teams, they ensure outstanding web/mobile applications that deliver a smooth user experience. Let's turn your vision into a reality within weeks! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
