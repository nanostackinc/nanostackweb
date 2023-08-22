import React, {useState} from 'react';
import {Logo, Click} from '../assets';

function Navbar({onStatusChange, data}) {
  const [isShowed,
    setIsShowed] = useState(false);
  const [lng,
    setLng] = useState(false);
  const [language,
    setLanguage] = useState(lng
    ? 'Bahasa Indonesia'
    : 'English');

  const handleToggle = () => {
    setIsShowed(!isShowed);
  };

  const handleLinkClick = () => {
    setIsShowed(false);
  };

  const handleStatus = (e) => {
    const data = e.target.value
    setLng(!lng);
    if (!lng) {
      setLanguage(data);
      onStatusChange(lng);
      console.log(language)
    } else {
      setLanguage(data);
      onStatusChange(lng);
      console.log(language)
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex" id="logo" href="/">
          <img
            src={Logo}
            className="me-2"
            alt="Nanostack Logo"
            style={{
            width: 157,
            height: 33
          }}/>
        </a>
        <button
          className="toggler"
          type="button"
          onClick={handleToggle}
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText">
          <span>
            {isShowed
              ? (
                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
              )
              : (
                <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
              )}
          </span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${isShowed
          ? 'show'
          : ''}`}
          id="navbarText">
          <div className="btn-group me-5">
            <button type="button" id='btn-toggle' className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
              {language}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              style={{
              border: "none",
              width: '192px',
              padding: '8px 0px',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '8px',
              borderRadius: '8px',
              background: '#FFF',
              boxShadow: '0px 6px 60px 0px rgba(51, 51, 51, 0.06)'
            }}>
              <li>
                <button
                  className="dropdown-item d-flex justify-content-between"
                  value="English"
                  id='dropdown-select'
                  type="button"
                  onClick={handleStatus}>
                  English {language === 'English' && <span><img src={Click} alt="Click"/></span>}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  id='dropdown-select'
                  type="button"
                  value="Bahasa Indonesia"
                  onClick={handleStatus}
                  style={{
                  fontFamily: 'Open Sans',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  marginTop: 8,
                  fontWeight: 600,
                  lineHeight: 'normal',
                  letterSpacing: '-1.12px'
                }}>
                  Bahasa Indonesia {language === 'Bahasa Indonesia' && <span><img src={Click} alt="Click"/></span>}
                </button>
              </li>
            </ul>
          </div>
          <div className="list">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#hero"
                  onClick={handleLinkClick}>
                  {data.link}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={handleLinkClick}>
                  {data.link1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#title-porto" onClick={handleLinkClick}>
                  {data.link2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial" onClick={handleLinkClick}>
                  {data.link3}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={handleLinkClick}>
                  {data.link4}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
