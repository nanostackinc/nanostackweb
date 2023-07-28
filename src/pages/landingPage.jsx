import React from 'react';
import Navbar from '../parts/Navbar';
import Hero from '../parts/Hero';
import About from '../parts/About';
import WhatsAppButton from '../parts/wabutton';
import Contact from '../parts/Contact';
import Portofolio from '../parts/Portofolio';
import landingPageData from '../json/content.json';
import Testimonial from '../parts/Testimonial';
import Footer from '../parts/Footer';

function LandingPage() {
  return (
    <>
      <Navbar />
    <div className="container">
      <Hero data={landingPageData.hero} />
      <About data={landingPageData.about} />
      <Portofolio data={landingPageData.portfolio} />
      <Testimonial data={landingPageData.testimonial} />
      <WhatsAppButton />
      <Contact data={landingPageData.contact} />
      <Footer data={landingPageData.footer}/>
    </div>
    </>
    );
}

export default LandingPage;
