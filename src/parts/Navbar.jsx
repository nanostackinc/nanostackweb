import React, {useState} from 'react';
import {Logo, Click} from '../assets';
import IconFlag from '../assets/images/icon/flag-gb.svg'
import IconFlagID from '../assets/images/icon/flag-id.svg'
function Navbar({onLanguageChange, data, onChangeHref}) {
  const [isShowed,
    setIsShowed] = useState(false);
  const [lng,
    setLng] = useState(false);
  const [language,
    setLanguage] = useState(lng
    ? 'Bahasa Indonesia'
    : 'English');
  const[link,setLink]=useState("")
  const handleToggle = () => {
    setIsShowed(!isShowed);
  };

    const changeToLoweCase=(link)=>{
      return link.toLowerCase().replace(/\s/g, '-');
    }


  const handleLinkClick = (value) => {
    setIsShowed(false);  
    onChangeHref(value)
  };

  const handleStatus = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    onLanguageChange(newLanguage); // Call the provided callback to update language
  };
  const dataLanguage = localStorage.getItem('language')

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container px-0">
        <a className="navbar-brand d-flex" id="logo" href="/">
          <img src={Logo} className="me-2 logo-navbar" alt="Nanostack Logo"/>
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
          <div className="btn-group me-5 d-none d-lg-block">
            <button
              type="button"
              id='btn-toggle'
              className="btn order-6 order-md-1 dropdown-toggle"
              data-bs-toggle="dropdown">
              {dataLanguage === "Bahasa Indonesia"
                ? <img src={IconFlagID}/>
                : dataLanguage === "English"
                  ? <img src={IconFlag}/>
                  : dataLanguage === "undefined"
                    ? <img src={IconFlag}/>
                    : dataLanguage === null
                      ? <img src={IconFlag}/>
                      : ""}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              style={{
                borderRadius: '8px',
                background: '#FFF',
                boxShadow: '0px 6px 60px 0px rgba(51, 51, 51, 0.06)',
                border:"none",
                width: '99px',
                padding: '8px 0px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '8px',
              }}>
              <li
                style={{
                padding: '8px 16px',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                alignSelf: 'stretch'
              }}>
                <button
                  className="dropdown-item d-flex justify-content-space-between"
                  value="English"
                  id='dropdown-select'
                  type="button"
                  onClick={handleStatus}>
                  <img src={IconFlag}/> {dataLanguage === 'English'
                    ? <span><img
                        style={{
                        display: "block"
                      }}
                        src={Click}
                        alt="Click"/></span>
                    : dataLanguage === "Bahasa Indonesia"
                      ? <span><img
                          src={Click}
                          style={{
                          display: "none"
                        }}
                          alt="Click"/></span>
                      : dataLanguage === "undefined"
                        ? <span><img
                            src={Click}
                            style={{
                            display: "block"
                          }}
                            alt="Click"/></span>
                        : dataLanguage === null
                          ? <span><img
                              src={Click}
                              style={{
                              display: "block"
                            }}
                              alt="Click"/></span>
                          : ""}
                </button>
              </li>
              <li  style={{
                padding: '8px 16px',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                alignSelf: 'stretch'
              }}>
                <button
                  className="dropdown-item d-flex justify-content-space-between"
                  id='dropdown-select'
                  type="button"
                  value="Bahasa Indonesia"
                  onClick={handleStatus}>
                  <img src={IconFlagID}/> {dataLanguage === 'Bahasa Indonesia'
                    ? <span><img src={Click} alt="Click"/></span>
                    : ""}
                </button>
              </li>
            </ul>
          </div>
          <div className="list">
            <ul className="navbar-nav">
              {data.map(({link})=>
              <li className="nav-item">
              {                  
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={`#${changeToLoweCase(link)}`}             
                  onClick={()=>handleLinkClick(changeToLoweCase(link))}>
                  {link}
                </a>
              }
              </li>              
              )}                         
            </ul>
          </div>
          <div
            className="btn-group mt-4 me-5 d-sm-block d-md-block d-lg-none"
            id='btn-toggle'>
            <button
              type="button"
              className="btn order-6 order-md-1 dropdown-toggle"
              data-bs-toggle="dropdown">
              {dataLanguage === "Bahasa Indonesia"
                ? <img src={IconFlagID}/>
                : dataLanguage === "English"
                  ? <img src={IconFlag}/>
                  : dataLanguage === null
                    ? <img src={IconFlag}/>
                    : ""}
            </button>
            <ul
              className="dropdown-menu"
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
                  <img src={IconFlag}/> {dataLanguage === 'English'
                    ? <span><img
                        style={{
                        display: "block"
                      }}
                        src={Click}
                        alt="Click"/></span>
                    : dataLanguage === "Bahasa Indonesia"
                      ? <span><img
                          src={Click}
                          style={{
                          display: "none"
                        }}
                          alt="Click"/></span>
                      : dataLanguage === null
                        ? <span><img
                            src={Click}
                            style={{
                            display: "block"
                          }}
                            alt="Click"/></span>
                        : ""}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item d-flex justify-content-between"
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
                  <img src={IconFlagID}/> {dataLanguage === 'Bahasa Indonesia' && <span><img src={Click} alt="Click"/></span>}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
