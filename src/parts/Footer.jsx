import React from 'react';
import {Logo} from '../assets';

const Footer = ({data,value}) => {
  return (
    <section id="footer" className='my-32'>

      <div className="row d-flex justify-content-between gap-32">
        <div className="col-12 col-md-3">
          <h5 className='title-footer align-items-center'>
            <span>
              <img src={Logo} className="pe-2" alt="Nanostack Logo" style={{width:157,height:33}}/>
            </span>
          </h5>
          <p className='m-0'>{data.desc}</p>
        </div>
        <div className="col-12 col-md-3">
          <p>
            <a href="#" className="fw-700 text-black">Menu</a>
          </p>
          <p>
            <a href="#">{value.link1}</a>
          </p>
          <p>
            <a href="#">{value.link2}</a>
          </p>
          <p>
            <a href="#">{value.link3}</a>
          </p>
          <p className='m-0'>
            <a href="#">{value.link4}</a>
          </p>
        </div>
        <div className="col-12 col-md-3">
          <p>
            <a href="#" className="fw-700 text-black">{data.forum}</a>
          </p>
          <p>
            <a
              href={data.fastwork}
              target="_blank">Fastwork</a>
          </p>
          <p>
            <a href="#">Instagram</a>
          </p>
          <p>
            <a href="#">LinkedIn</a>
          </p>
          <p className='m-0'>
            <a href="#">Facebook</a>
          </p>
         </div>
      </div>

    </section>
  );
};

export default Footer;
