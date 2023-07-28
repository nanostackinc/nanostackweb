import React, { useState } from 'react';
import { Logo } from '../assets';

function Navbar() {
  const [isShowed, setIsShowed] = useState(false);

  const handleToggle = () => {
    setIsShowed(!isShowed);
  };

  const handleLinkClick = () => {
    setIsShowed(false); // Set isShowed state to false when any link is clicked
  };

  return (
    <nav className="navbar navbar-expand-md bg-body-none align-items-center">
      <a className="navbar-brand d-flex" id="logo" href="#">
        <img src={Logo} className="me-2" alt="logo.png" style={{ width: 32, height: 32 }} />
        nanostack
      </a>
      <button
        className="toggler"
        type="button"
        onClick={handleToggle}
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
      >
        <span>
          {isShowed ? (
            <i className="fa fa-times fa-2x" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          )}
        </span>
      </button>
      <div className={`collapse navbar-collapse justify-content-end ${isShowed ? 'show' : ''}`} id="navbarText">
        <div className="list">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#hero" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleLinkClick}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portofolio" onClick={handleLinkClick}>
                Portofolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonial" onClick={handleLinkClick}>
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
