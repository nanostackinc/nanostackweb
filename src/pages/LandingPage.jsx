import React from 'react'
import Navbar from '../parts/Navbar'
import Hero from '../parts/Hero'
import About from '../parts/About'
import WhatsAppButton from '../parts/wabutton'
import Contact from '../parts/Contact'
import Portofolio from '../parts/Portofolio'
import landingPageData from '../json/content.json'
import Testimonial from '../parts/Testimonial'
import Footer from '../parts/footer'

function LandingPage(){
    return(
        <div className="container">
        <Navbar/>
        <Hero data={landingPageData.hero}/>
        <About data={landingPageData.about}/>
        <Portofolio data={landingPageData.portfolio}/>
        <Testimonial data={landingPageData.testimonial}/>
        <WhatsAppButton/>
        <Contact/>
        <Footer/>
        </div>
    )
}
export default LandingPage