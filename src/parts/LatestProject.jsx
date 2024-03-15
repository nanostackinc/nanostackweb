import React from 'react'
import { Image } from '../assets';
const LatestProject=()=>{
    return(
        <section>
            <div className='row d-flex' style={{ backgroundColor:"#4E96E1" }}>
            <div className='col-lg-6 d-flex flex-column justify-content-center py-auto' style={{ gap: 64, paddingBottom: 56, paddingTop: 56,paddingLeft:100 }}>
    <div className='d-flex flex-column' style={{ gap: 32 }}>
        <h4 style={{ color: "white", fontFamily: "Open-sans",fontSize:32,fontWeight:900, textAlign: "left" }}>Project Terbaru Kami</h4>
        <p style={{ color: "white", fontFamily: "Open-sans", textAlign: "left" }}>Kami sajikan berbagai solusi inovatif yang telah kami bangun. Portfolio kami mencerminkan komitmen untuk menyediakan solusi teknologi modern untuk memenuhi kebutuhan client kami.</p>
    </div>
    <div className="d-flex justify-content-start">
    <button style={{ 
        backgroundColor: "white", 
        color: "#4E96E1", 
        borderRadius: 12, 
        height: 43,
        paddingRight:24, 
        paddingLeft:24,
        paddingTop:12, 
        paddingBottom:12, 
        border: "none",
        fontFamily: "Open Sans",
        fontWeight: 700,
        fontSize: 14
    }}>
        Pelajari lebih lanjut
    </button>
</div>

</div>



                    <div className='col-lg-6'style={{ paddingBottom:56, paddingTop:56 }}>
                    <div className="card-portofolio-latest row g-0">
                {/* <div  id='card-col'> */}
                  <img
                    src={Image}
                    className="car-card"
                    alt="image.png"/>
                {/* </div> */}
                {/* <div className={colClassText}> */}
                  <div className="text-card-latest">
                    <h5 className="card-title mt-4">Bunda Bakery Shop</h5>
                    <p className="card-text">E-Commerce</p>
                  {/* </div> */}
                </div>
              </div>
                    </div>
            </div>
        </section>
    )
}

export default LatestProject;