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
import Pricelist from '../parts/Pricelist';  // Make sure to import this component
import Meta from '../parts/Meta';  // Make sure to import this component

function LandingPage() {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="container mx-auto">
        <Hero data={landingPageData.hero} />
        <About data={landingPageData.about} />
      </div>
      <Portofolio data={landingPageData.portfolio} />
      <div className="container mx-auto" id="content">
        {/* Include the Pricelist component */}
        <Pricelist data={landingPageData.pricelist} />
        <Testimonial data={landingPageData.testimonial} />
        <WhatsAppButton />
        <Contact data={landingPageData.contact} />
        <Footer data={landingPageData.footer} />
      </div>
    </>
  );
}

export default LandingPage;
