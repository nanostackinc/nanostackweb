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
                  <h5 className="title-category">{data.categories.join(', ')}</h5>

                </div>
                <div>
                  <a
                    href={data.portfolio_url}
                    target="_blank"
                    className="link_porto"
                    rel="noopener noreferrer">{data.cta_text}</a>
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
                <div>
  {data.tech_stack.reduce((rows, image, index) => {
    if (index % 4 === 0) rows.push([]);
    rows[rows.length - 1].push(image);
    return rows;
  }, []).map((row, rowIndex) => (
    <div className="row content-tech px-5" key={rowIndex}>
      {row.map((image, index) => (
        <div
          key={index}
          className={`col-lg-auto d-flex justify-content-center col-sm-12`}
        >
          <img
            src={image}
            alt={`Tech Stack ${index + rowIndex * 4 + 1}`}
            style={{
              width: 64,
              height: 64,
              margin: 'auto'
            }}
          />
        </div>
      ))}
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