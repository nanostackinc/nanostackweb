import React, { useState } from 'react';
import './style.css'

const Modal = ({ data, status, onCloseModal }) => {
 
  // console.log(data)
  const closeModal = () => {
    onCloseModal(false)
  };
  // console.log(status)
  return (
    <>
      {status && Object.keys(data).length > 0 ? (
        <div className="main-container" onClick={closeModal}>
          <div className="modal-container">
            <h3 className="title-heading text-left">{data.title}</h3>
            <p className='desc'>{data.description}</p>
            <img className="modal-image" src={data.image} />
            <div className='content-modal'>
            <h3 className='title-desc'>Description</h3>
            <p className='modal-text'>{data.long_desc}</p>
            </div>
            <div className='content-modal'>
            <h3 className='title-desc'>Problem</h3>
            <p className='modal-text'>{data.problem}</p>
            </div>
            <div className='content-modal'>
            <h3 className='title-desc'>Solution</h3>
            <p className='modal-text'>{data.solution}</p>
          </div>
          </div>
        </div>
      ) : (
        <div className="main-container d-none">
          <div className="modal-container">
            <h1 className="">{data.title}</h1>
            <img className="modal-image" src={data.image} />
            <div>
              <div className="modal-text">
                <p>{data.long_desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
