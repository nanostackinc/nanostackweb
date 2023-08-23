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

function LandingPage() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'English'); // Initialize language state

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // Update language in local storage
  };

  const landingPageData = language === 'Bahasa Indonesia' ? landingPageDataIdn : landingPageDataEn;

  return (
    <>
      <Meta />
      <Navbar data={landingPageData.navbar} onLanguageChange={handleLanguageChange} />
      <div className="container mx-auto">
        <Hero data={landingPageData.hero} />
        <About data={landingPageData.about} />
      </div>
      <Portofolio data={landingPageData.portfolio} />
      <div className="container mx-auto" id="content">
        <Pricelist data={landingPageData.pricelist} />
        <Testimonial data={landingPageData.testimonial} />
        <WhatsAppButton />
        <Contact data={landingPageData.contact} />
        <Footer data={landingPageData.footer} value={landingPageData.navbar} />
      </div>
    </>
  );
}

export default LandingPage;
