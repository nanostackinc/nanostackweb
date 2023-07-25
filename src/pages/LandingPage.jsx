import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import WhatsAppButton from '../components/wabutton'
import Contact from '../components/Contact'

 function LandingPage(){
    return(
        <div className="container">
        <Navbar/>
        <Hero/>
        <About/>
        <WhatsAppButton/>
        <Contact/>
        </div>
    )
}
export default LandingPage