import React, {useState} from 'react';
import './style.css'
import Carousel from '../Carousel';
const Modal = ({data, status, onCloseModal}) => {

  // console.log(data)
  const closeModal = () => {
    onCloseModal(false)
  };
  // console.log(status)
  return ( <> {
    status && Object
      .keys(data)
      .length > 0
      ? (
        <div className="main-container" onClick={closeModal}>
          <div className="modal-container">
            <div className='modal-body'>

              <div className='content-modal'>
                <div>
                  <h4 className="title-client">{data.name}</h4>
                  <h3 className="title-heading">{data.title}</h3>
                  <h5 className="title-category">{data.category}</h5>
                </div>
                <div>
                  <a
                    href={data.portfolio_url}
                    target="_blank"
                    className="link_porto"
                    rel="noopener noreferrer">Web Demo</a>
                  <p className='description'>{data.description}</p>
                </div>
                <div className='p-2'>
                  <img src={data.images} className="modal-image" alt="..."/>
                </div>
                <div
                  className='d-flex flex-column'
                  style={{
                  gap: 8
                }}>
                  <p className="title-desc">Problem</p>
                  <p className='desc'>{data.problem}</p>
                </div>
                <div
                  className='d-flex flex-column'
                  style={{
                  gap: 8
                }}>
                  <p className="title-desc">Solution</p>
                  <p className='desc'>{data.solution}</p>
                </div>
              </div>

            </div>
            <div
              className={`envi-porto ${data.highlights !== null
              ? 'd-flex'
              : 'd-none'}`}>
              <div
                className={`d-${data.highlights !== null
                ? 'block'
                : 'none'}`}>
                {data.highlights !== null && <Carousel data={data.highlights}/>}
              </div>
            </div>
            <div className='modal-body'>
            <div className='content-modal'>
              <div
                className='d-flex flex-column'
                style={{
                gap: 8
              }}>
                <p className="title-desc">Tech stack</p>
                <div
  className='row content-tech px-5'
  >
  {data
    .tech_stack
    .map((image, index) => (
      <div
        key={index}
        className={`col-lg-auto d-flex justify-content-center col-sm-12`}
        style={{
          alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end', // Mengatur posisi vertikal elemen-elemen
        }}>
        <img
          src={image}
          alt={`Tech Stack ${index + 1}`}
          style={{
            width: 64,
            height: 64,
            margin: 'auto'
          }}/>
      </div>
    ))}
</div>

              </div>
              {data.testimonial && (
  <div className='d-flex flex-column' style={{ gap: 8 }}>
    <p className="title-desc">Testimoni</p>
    <div>
    <p className='desc text-center'>{data.testimonial.content}</p>
  </div>
    <div>
    <p className='title-desc text-center'>{data.testimonial.name}</p>
    <p className='desc text-center'>{data.testimonial.job}</p>
  </div>
  </div>
)}


            </div>
          </div>
          </div>
        </div>
      )
      : (
        <div className="main-container d-none">
          <div className="modal-container">
            <h1 className="">{data.title}</h1>
            <img className="modal-image" src={data.image}/>
            <div>
              <div className="modal-text">
                <p>{data.long_desc}</p>
              </div>
            </div>
          </div>
        </div>
      )
  } 

  </>
  );
}

export default Modal;