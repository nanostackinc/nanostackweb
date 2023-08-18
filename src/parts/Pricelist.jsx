import React from 'react'
import Button from '../components/Button'

const Pricelist = ({data}) => {
  // (data.basic.map((item) => {
  //   // console.log(item.fake_price)
  //   item.benefit.map((value)=>{
  //     // console.log(value.usability)
  //   })
  // }))
  return (
    <section id='pricelist'>
      <div className="title-pricelist">
        <h3 className='title-price'>{data.title}</h3>
        <p className='sub-price'>{data.subtitle}</p>
      </div>
      <div  className='card-group justify-content-center mx-auto' style={{gap:16}}>
        <div id="card-basic"  >
          <div class="card-body">
            <h5 class="card-title-price">Basic</h5>
            <p class="card-text-price">start from</p>
            {data
              .basic
              .map((item) => {
                return ( 
                <> 
                <h3 className="fake-price">
                  Rp. {item.fake_price}
                </h3> < h2 className = "price-original" >Rp. {item.real_price} </h2>                                 
                </>
        )
      })}
            {data.basic.map((item)=>{
              return(
              item.benefit.map((value)=>{
                return(
            <div className="collect-benefit">
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.usability}</p>
              </div>
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.tech}</p>
              </div>              
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.pages}</p>
              </div>              
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.design}</p>
              </div>              
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.time}</p>
              </div>   
              <Button className='btn-light justify-content-center' style={{width:"100%"}}>
                Take this plan
                </Button>           
            </div>
                )
              })
            )})}
          </div>
        </div>
        <div id="card-standard" >
          <div class="card-body">
            <h5 class="card-title-price">Standard</h5>
            <p class="card-text-price">start from</p>
            {data.standard.map((item)=>{
              return(
                <>
            <h3 className="fake-price">
              Rp. {item.fake_price}
            </h3>
            <h2 className="price-original">
              Rp. {item.real_price}
            </h2>                
                </>
              )
            })}
             {data.standard.map((item)=>{
              return(
              item.benefit.map((value)=>{
                return(
            <div className="collect-benefit">
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.usability}</p>
              </div>
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.tech}</p>
              </div>              
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.pages}</p>
              </div>              
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.design}</p>
              </div>              
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.hosting}</p>
              </div>              
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.email}</p>
              </div>              
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.book}</p>
              </div>              
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.admin}</p>
              </div>              
              <div id='benefit'>
                <svg
                  className='icon'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
                  <path
                    d="M5.83337 10L8.46495 12.5L14.1667 7.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
                <p className='subtext-price ms-2'>{value.time}</p>
              </div>      
              <Button className='btn-light justify-content-center' style={{width:"100%"}}>
                Take this plan
                </Button>           
            </div>
                )
              })
            )})}
          </div>
        </div>
        <div>
        <div id="card-header">
          <p className='tagline'>All round your Business Needs</p>
        </div>
        <div id="card-premium">
          <div class="card-body">
        
            <h5 class="card-title-price">Premium</h5>
            <p class="card-text-premium">start from</p>
             {data.premium.map((item)=>{
              return(
                <>
            <h3 className="fake-price-premium">
              Rp. {item.fake_price}
            </h3>
            <h2 className="price-original-premium">
              Rp. {item.real_price}
            </h2>                
                </>
              )
             })} 
           {data.premium.map((item)=>{
              return(
              item.benefit.map((value)=>{
                return(
            <div className="collect-benefit">
              <div id='benefit'>
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
              <path d="M5.83325 10L8.46483 12.5L14.1666 7.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <p className='subtext-price-premium ms-2'>{value.usability}</p>
              </div>
              <div id='benefit'>
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
              <path d="M5.83325 10L8.46483 12.5L14.1666 7.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <p className='subtext-price-premium ms-2'>{value.tech}</p>
              </div>              
              <div id='benefit'>
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
              <path d="M5.83325 10L8.46483 12.5L14.1666 7.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <p className='subtext-price-premium ms-2'>{value.pages}</p>
              </div>              
              <div id='benefit'>
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
              <path d="M5.83325 10L8.46483 12.5L14.1666 7.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <p className='subtext-price-premium ms-2'>{value.design}</p>
              </div>              
              <div id='benefit'>
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
              <path d="M5.83325 10L8.46483 12.5L14.1666 7.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <p className='subtext-price-premium ms-2'>{value.hosting}</p>
              </div>              
              <div id='benefit'>
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
              <path d="M5.83325 10L8.46483 12.5L14.1666 7.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <p className='subtext-price-premium ms-2'>{value.email}</p>
              </div>              
              <div id='benefit'>
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
              <path d="M5.83325 10L8.46483 12.5L14.1666 7.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <p className='subtext-price-premium ms-2'>{value.book}</p>
              </div>              
              <div id='benefit'>
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
              <path d="M5.83325 10L8.46483 12.5L14.1666 7.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <p className='subtext-price-premium ms-2'>{value.admin}</p>
              </div>              
              <div id='benefit'>
              <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#4E96E1" fill-opacity="0.9"/>
              <path d="M5.83325 10L8.46483 12.5L14.1666 7.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <p className='subtext-price-premium ms-2'>{value.time}</p>
              </div>        
              <Button className='btn-primary justify-content-center' style={{width:"100%"}}>
                Take this plan
                </Button>         
            </div>
                )
              })
            )})}
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Pricelist