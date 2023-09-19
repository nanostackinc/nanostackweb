import React, { useState } from 'react';
import Navbar from '../parts/Navbar';
import Hero from '../parts/Hero';
import About from '../parts/About';
import WhatsAppButton from '../parts/wabutton';
import Contact from '../parts/Contact';
import Portofolio from '../parts/Portofolio';
import landingPageDataIdn from '../json/content-ind.json';
import landingPageDataEn from '../json/content-eng.json';
import Testimonial from '../parts/Testimonial';
import Footer from '../parts/Footer';
import Pricelist from '../parts/Pricelist';
import Meta from '../parts/Meta';
import Modal from '../components/Modal';
import Team from '../parts/Team';

function LandingPage() {
  const [language, setLanguage] = useState(localStorage.getItem('language')); // Initialize language state
  const [itemData,setItem]=useState({})
  const [status,setStatus]=useState("")
  const [closeModal,setCloseModal]=("")
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // Update language in local storage
  };
  
  const landingPageData = language === 'Bahasa Indonesia' ? landingPageDataIdn : language === 'English'?landingPageDataEn:language==="undefined"?landingPageDataEn:language===null?landingPageDataEn:"";

  const handleModal=(item,modalStatus)=>{
      setItem(item)
      setStatus(modalStatus)
    
  }
  const handleCloseModal =()=>{
    setStatus(false)

  }

  return (
    <>
   <div
  className='d-flex flex-column'
  style={{
    position: 'fixed',
    top: 0,
    backdropFilter: 'blur(10px)',
    right: 0,
    bottom: 0,
    left: 0,
    margin:"0 auto",
    overflowY: 'auto',
  }}
 
 
>
       
      <Meta />
      <Navbar data={landingPageData.navbar} onLanguageChange={handleLanguageChange} />
    

      <div className="container d-flex flex-column  mx-auto px-30"  onClick={handleCloseModal}>
        <Hero data={landingPageData.hero} />
        <About data={landingPageData.about} />
      </div>
      <Portofolio data={landingPageData.portfolio} onChangeModal={handleModal} />
      <div className="container d-flex flex-column  mx-auto px-30" id="content"  onClick={handleCloseModal}>
        <Pricelist data={landingPageData.pricelist} />
        <Team data={landingPageData.team}/>
        <Testimonial data={landingPageData.testimonial} />
        <Contact data={landingPageData.contact} />
        <Footer data={landingPageData.footer} value={landingPageData.navbar} />
      </div>
    </div>
    
        <WhatsAppButton />
      <Modal data={itemData} status={status} onCloseModal={handleCloseModal}/>
      </>
    
  );
}

export default LandingPage;
