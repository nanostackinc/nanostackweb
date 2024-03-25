import React, { useState } from "react";
import Navbar from "../parts/Navbar";
import Hero from "../parts/Hero";
import About from "../parts/About";
import WhatsAppButton from "../parts/wabutton";
import Contact from "../parts/Contact";
import landingPageDataIdn from "../json/content-ind.json";
import landingPageDataEn from "../json/content-eng.json";
import Testimonial from "../parts/Testimonial";
import Footer from "../parts/Footer";
import LatestProject from "../parts/LatestProject";
import Meta from "../parts/Meta";
import Modal from "../components/Modal";
import Team from "../parts/Team";
// import Services from "../parts/Services";
import Pricing from "../parts/Pricing";


function LandingPage() {
  const [language, setLanguage] = useState(localStorage.getItem("language")); 
  const [itemData, setItem] = useState({});
  const [status, setStatus] = useState("");
  const [href,setHref]=useState("")
  // const [closeModal, setCloseModal] = "";
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };
  
  const landingPageData =
    language === "Bahasa Indonesia"
      ? landingPageDataIdn
      : language === "English"
      ? landingPageDataEn
      : language === "undefined"
      ? landingPageDataEn
      : language === null
      ? landingPageDataEn
      : "";

  const handleModal = (item, modalStatus) => {
    setItem(item);
    console.log(modalStatus);
    setStatus(modalStatus);
  };
  const handleCloseModal = () => {
    setStatus(false);
  };

  const handleHref=(link)=>{
    setHref(link)
    
  }



  return (
    <>
      <div
        className="d-flex flex-column"
        style={{
          position: "fixed",
          top: 0,
          backdropFilter: "blur(10px)",
          right: 0,
          bottom: 0,
          left: 0,
          margin: "0 auto",
          overflowY: "auto",
        }}>
        <Meta />
        <Navbar
          data={landingPageData.navbar}
          onLanguageChange={handleLanguageChange}
          onChangeHref={handleHref}
        />

        <div
          className="container d-flex flex-column  mx-auto"
          onClick={handleCloseModal}>
          <Hero data={landingPageData.hero} section={href === "home" || href === "beranda"?href:""} />
          <About data={landingPageData.about} section={href === "about-us" || href === "tentang-kami"?href:""}  />
        </div>
        {/* <Services data={landingPageData.services} onChangeModal={handleModal} /> */}
        {/* <Portofolio data={landingPageData.portfolio} onChangeModal={handleModal} /> */}
        <div
          className="container d-flex flex-column  mx-auto"
          id="content"
          onClick={handleCloseModal}>
         <Pricing section={href === "pricing" || href === "harga"?href:""} data={landingPageData.pricelist}/>
        </div>
         <LatestProject data={landingPageData.services.latest_service} section={href === "portfolio"? href:""} />
         <div
          className="container d-flex flex-column  mx-auto"
          id="content"
         >
         
          <Team data={landingPageData.team} section={href === "team" || href === "tim"?href:""} />
         </div>
          <div
          id="content-blue"
          onClick={handleCloseModal}>
        
            <Testimonial data={landingPageData.testimonial} section={href === "testimonial"? href:""} />
            
          </div>
          <div
          className="container d-flex flex-column  mx-auto"
          id="content"
         >
         
          <Contact data={landingPageData.contact} section={href === "contact" || href === "kontak"?href:""} />
          <Footer
            data={landingPageData.footer}
            value={landingPageData.navbar}
          />
        </div>
      </div>
      <WhatsAppButton />
      <Modal data={itemData} status={status} onCloseModal={handleCloseModal} />
    </>
  );
}

export default LandingPage;
