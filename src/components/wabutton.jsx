import React from 'react';
import wa from '../assets/images/icon/whatsapp-48.png'

const WhatsAppButton = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=08993845802" target="_blank">
      <button id="wa" className="btn-floating d-flex align-items-center">
        <img src={wa} alt="wa" width="28px" />
        <span>08993845802</span>
      </button>
    </a>
  );
};

export default WhatsAppButton;
