import React, {useState} from 'react';
import './style.css'

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
                <img className="modal-image" src={data.images}/>
                <h3 className="title-heading text-center">{data.title}</h3>

                <div className="collect-benefit">
                  <div id='benefit'>
                    <svg
                      className='icon'
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none">
                      <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                      <path
                        d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                    <p className='subtext-price ms-2'>Timeline: {data.timeline_text}
                      {data.timeline}</p>
                  </div>
                  <div id='benefit'>
                    <svg
                      className='icon'
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none">
                      <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                      <path
                        d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                    </svg>
                    <p className='subtext-price ms-2'>{data.price_text} {" "}<span>{data.price}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="envi-porto">
                <h3 className="title-heading text-start">{data.subtitle_second}</h3>
                <div className="content-spec">
                  <h3 className="title-heading text-start">{data.title_second}</h3>
                  <p className='desc'>{data.description}</p>
                  <div className="d-flex flex-column justify-content-center" style={{ width:"100%" }}>
                  <img src={data.images} className="modal-image" alt="..."/>
                  </div>
                  <div className='content-project'>
                    <h3 className='title-desc'>Description</h3>
                    <p className='modal-text'>{data.long_desc}</p>
                  </div>
                  <div className='content-project'>
                    <h3 className='title-desc'>Problem</h3>
                    <p className='modal-text'>{data.problem}</p>
                  </div>
                  <div className='content-project'>
                    <h3 className='title-desc'>Solution</h3>
                    <p className='modal-text'>{data.solution}</p>
                  </div>
                  <div className='content-project'>
                    <h3 className='title-desc'>Tech Stack</h3>
                    <p className='modal-text'>{data.tech_stack}</p>
                  </div>
                </div>
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
  } </>
  );
}

export default Modal;