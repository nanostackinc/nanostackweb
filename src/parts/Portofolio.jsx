import React from "react";
import Tabs from "../components/Tabs";
import {Android, Website, Product} from "../assets";
import './tabs.css'
const Portofolio = ({data}) => {
  const tabsData = [
    {
      title: (<img src={Website} alt="image.svg" className="image align-items-center" />),
      content: (
        <>
        <h3 className='title-port justify-content-center'>{data.title}</h3>
      <div class="card-body">
        {data
          .website
          .map((item) => {
            const isEvenId = item.id % 2 === 0;
            const colClassImg = isEvenId
            ? "col-md-5 order-md-2"
            : "col-md-5 ";
            const colClassText = isEvenId
            ? "col-md-5 order-md-1 "
            : "col-md-6 ";
            return (
              <div className="card-portofolio row g-0" key={item.id}>
                <div className={colClassImg} id='card-col'>
                  <img
                    src={item.image}
                    className="car-card img-fluid rounded-start"
                    alt="image.png"/>
                </div>
                <div className={colClassText}>
                  <div className="text-card">
                    <h5 className="card-title mt-4">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
      </>
      )
    }, {
      title: (<img src={Android} alt="image.svg"/>),
      content: (
        <>
        <h3 className='title-port text-center'>{data.title}</h3>
      <div class="card-body">
        {data
          .android
          .map((item) => {
            const isEvenId = item.id % 2 === 0;
            const colClassImg = isEvenId
            ? "col-md-5 order-md-2"
            : "col-md-5 ";
            const colClassText = isEvenId
            ? "col-md-5 order-md-1 "
            : "col-md-6 ";
            return (
              <div className="card-portofolio row g-0" key={item.id}>
                <div className={colClassImg} id='card-col'>
                  <img
                    src={item.image}
                    className="car-card img-fluid rounded-start"
                    alt="image.png"/>
                </div>
                <div className={colClassText}>
                  <div className="text-card">
                    <h5 className="card-title mt-4">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
      </>
      )
    }, {
      title: (<img src={Product} alt="image.svg"/>),
      content: (
        <>
        <h3 className='title-port text-center'>{data.title}</h3>
      <div class="card-body">
        {data
          .product
          .map((item) => {
            const isEvenId = item.id % 2 === 0;
            const colClassImg = isEvenId
            ? "col-md-5 order-md-2"
            : "col-md-5 ";
            const colClassText = isEvenId
            ? "col-md-5 order-md-1 "
            : "col-md-6 ";
            return (
              <div className="card-portofolio row g-0" key={item.id}>
                <div className={colClassImg} id='card-col'>
                  <img
                    src={item.image}
                    className="car-card img-fluid rounded-start"
                    alt="image.png"/>
                </div>
                <div className={colClassText}>
                  <div className="text-card">
                    <h5 className="card-title mt-4">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
      </>
      )
    }
  ];

  return (
      <section id="portofolio" className="mt-5">
      <Tabs tabsData={tabsData}/>
      </section>
  );
};

export default Portofolio;
