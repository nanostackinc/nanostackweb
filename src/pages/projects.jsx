import React,{useState} from 'react'
import Navbar from '../parts/Navbar';
import landingPageDataIdn from "../json/content-ind.json";
import landingPageDataEn from "../json/content-eng.json";
import PortofolioDataEng from '../json/portfolio-eng.json'
import PortofolioDataInd from '../json/portfolio-ind.json'
import BrandPortofolio from './BrandPortofolio';
import Services from "../parts/Services";
import Footer from '../parts/Footer';
import WhatsAppButton from "../parts/wabutton";
import Modal from "../components/Modal";
const Projects=()=>{
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

    const portofolioData =
  language === "Bahasa Indonesia"
    ? PortofolioDataInd
    : language === "English"
    ? PortofolioDataEng
    : language === "undefined"
    ? PortofolioDataEng
    : language === null
    ? PortofolioDataEng
    : "";


  const handleModal = (item, modalStatus) => {
    setItem(item);
    // console.log(modalStatus);
    setStatus(modalStatus);
  };
  const handleCloseModal = () => {
    setStatus(false);
  };

  const handleHref=(link)=>{
    setHref(link)
    
  }
  // console.log(landingPageData.services)
return(
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

         <Navbar
          data={landingPageData.navbar}
          onLanguageChange={handleLanguageChange}
          onChangeHref={handleHref}
        />

        <BrandPortofolio data={portofolioData.hero}/>
        <div
          className="container d-flex flex-column  mx-auto">

         <Services data={portofolioData} onChangeModal={handleModal} />
         <Footer
            data={landingPageData.footer}
            value={landingPageData.navbar}
          />
          </div>
        </div>
        <WhatsAppButton />
        <Modal data={itemData} status={status} onCloseModal={handleCloseModal} />
  
    </>
)
}

export default Projects