import React from 'react';
import {Logo} from '../assets';

const Footer = ({data,value}) => {
  const filteredLinks = value.filter(
    (item) =>
      item.link === 'Home' ||
      item.link === 'Pricing' ||
      item.link === 'Portfolio' ||
      item.link === 'Contact' || 
      item.link === 'Beranda' ||
      item.link === 'Harga' ||
      item.link === 'Portofolio' ||
      item.link === 'Kontak' 
  );

  const changeToLoweCase=(link)=>{
    return link.toLowerCase().replace(/\s/g, '-');
  } 
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
          {filteredLinks.map((item)=>
          <p>
            <a href={`#${changeToLoweCase(item.link)}`}>{item.link}</a>
          </p>
          )}
          
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
