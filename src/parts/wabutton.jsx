import React from 'react';
import wa from '../assets/images/icon/whatsapp-48.png'

const WhatsAppButton = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=62895366423269&text=Hai,%20saya%20tertarik%20untuk%20membuat%20website/mobile%20apps%20untuk%20bisnis%20saya" target="_blank">
      <button id="wa" className="btn-floating d-flex align-items-center">
        <img src={wa} alt="wa" width="28px" />
        <span>08993845802</span>
      </button>
    </a>
  );
};

export default WhatsAppButton;
