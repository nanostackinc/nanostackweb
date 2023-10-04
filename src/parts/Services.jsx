import React, { useState } from 'react'
import Button from '../components/Button'
import Tabs from "../components/Tabs";
import './tabs.css'

const Services = ({onChangeModal,data}) => {
  const[display,setDisplay]=useState('d-flex')
  const[status,setStatus]=useState("")

  const handleStatus=(index)=>{
      setStatus(index)
  }
  const[modal,setModal]=useState(false)
  const[dataItem,setData]=useState({})
  const handleModalWebsite=(target)=>{
    setModal(true)
    const itemData = data.website.find(item => item.id === target);
    setData(itemData)
    onChangeModal(itemData,true)
  }
  const handleModalAndroid=(target)=>{
    setModal(true)
    const itemData = data.android.find(item => item.id === target);
    setData(itemData)
    onChangeModal(itemData,true)
  }
  const tabsData=[
    {
      title:(
      <>
       <p className="title-tabs"> <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="#333333CC">
      <path d="M10.5 1.875C8.89303 1.875 7.32214 2.35152 5.986 3.24431C4.64985 4.1371 3.60844 5.40605 2.99348 6.8907C2.37852 8.37535 2.21762 10.009 2.53112 11.5851C2.84463 13.1612 3.61846 14.6089 4.75476 15.7452C5.89106 16.8815 7.33880 17.6554 8.91490 17.9689C10.4910 18.2824 12.1247 18.1215 13.6093 17.5065C15.0940 16.8916 16.3629 15.8502 17.2557 14.5140C18.1485 13.1779 18.625 11.6070 18.625 10.0000C18.6227 7.84581 17.7660 5.78051 16.2427 4.25727C14.7195 2.73403 12.6542 1.87727 10.5 1.875ZM17.375 10C17.3757 10.882 17.2059 11.7558 16.875 12.5734L13.3828 10.4258C13.2343 10.3342 13.0682 10.2748 12.8953 10.2516L11.1125 10.0109C10.8668 9.9789 10.6172 10.0201 10.3948 10.1293C10.1725 10.2386 9.98729 10.4110 9.8625 10.6250H9.18125L8.88438 10.0109C8.80231 9.83995 8.68219 9.69002 8.53324 9.57261C8.38428 9.45521 8.21043 9.37345 8.0250 9.33359L7.4 9.19844L8.01094 8.1250H9.31641C9.52766 8.12459 9.73538 8.07084 9.92032 7.96875L10.8773 7.44062C10.9614 7.39376 11.0400 7.33768 11.1117 7.27344L13.2141 5.37188C13.4248 5.18298 13.5649 4.92788 13.6112 4.64865C13.6575 4.36942 13.6073 4.08276 13.4688 3.83594L13.4406 3.78516C14.6170 4.34297 15.6111 5.22296 16.3075 6.32301C17.0039 7.42306 17.3741 8.69805 17.375 10.0000ZM3.6250 10.0000C3.62396 8.97814 3.85194 7.96904 4.29219 7.04688L5.17813 9.41172C5.25196 9.60752 5.37376 9.78165 5.53237 9.91815C5.69098 10.0546 5.88132 10.1491 6.08594 10.1930L7.76016 10.5531L8.05782 11.1719C8.16112 11.3823 8.32121 11.5597 8.52001 11.6839C8.7188 11.8082 8.94839 11.8744 9.18282 11.8750H9.29844L8.73360 13.1430C8.63407 13.3662 8.60220 13.6138 8.64191 13.8550C8.68162 14.0962 8.79118 14.3204 8.95704 14.5000L8.96797 14.5109L10.5000 16.0891L10.3484 16.8703C8.55299 16.8285 6.84497 16.0867 5.58885 14.8031C4.33273 13.5196 3.62798 11.7959 3.6250 10.0000Z" fill="#333333CC"/>
      </svg></p>
      Website</>),
      content:(
      <>
      <div className="row row-cols-1 row-cols-md-3 g-4">     
      {data.website.map((item)=>{
      return (
      <>
      <div className="col">
      <div class="card" id='card-standard' onClick={()=>handleModalWebsite(item.id)} key={item.id}>
      <img src={item.images} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
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
                  <p className='subtext-price ms-2'>{item.timeline}</p>
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
                  <p className='subtext-price ms-2'>{item.price_text} {" "}<span>{item.price}</span></p>
                </div>              
                                      
                <a href="https://api.whatsapp.com/send?phone=62895366423269&text=Hai,%20saya%20tertarik%20untuk%20membuat%20website%20untuk%20bisnis%20saya%20dengan%20paket%20standard" style={{width:"100%"}} target="_blank">
                    
        </a>      
              </div>
      </div>
      </div>
      </div>
      </>
      )})}
      </div>    
      </>
      )
    },{
      title:(
      <>
      <p className='title-tabs'>
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
      <path d="M15.6766 3.92769C15.6188 3.86988 15.5602 3.81363 15.5016 3.75816L17.4422 1.81753C17.5003 1.75947 17.5463 1.69053 17.5777 1.61466C17.6092 1.53879 17.6254 1.45747 17.6254 1.37535C17.6254 1.29323 17.6092 1.21191 17.5777 1.13604C17.5463 1.06017 17.5003 0.991229 17.4422 0.93316C17.3841 0.875091 17.3152 0.829028 17.2393 0.797602C17.1634 0.766175 17.0821 0.75 17 0.75C16.9179 0.75 16.8366 0.766175 16.7607 0.797602C16.6848 0.829028 16.6159 0.875091 16.5578 0.93316L14.5266 2.96441C13.056 1.92928 11.301 1.37495 9.50273 1.37761C7.70441 1.38027 5.95105 1.93978 4.4836 2.97925L2.44219 0.93316C2.32492 0.815885 2.16586 0.75 2 0.75C1.83415 0.75 1.67509 0.815885 1.55782 0.93316C1.44054 1.05044 1.37466 1.2095 1.37466 1.37535C1.37466 1.5412 1.44054 1.70026 1.55782 1.81753L3.51563 3.77535C2.64101 4.604 1.94464 5.60237 1.46911 6.70939C0.993583 7.81641 0.74889 9.0088 0.750004 10.2136V12.0003C0.750004 12.3319 0.8817 12.6498 1.11612 12.8842C1.35054 13.1187 1.66848 13.2503 2 13.2503H17C17.3315 13.2503 17.6495 13.1187 17.8839 12.8842C18.1183 12.6498 18.25 12.3319 18.25 12.0003V10.1253C18.2532 8.9733 18.0274 7.83211 17.5856 6.76813C17.1438 5.70416 16.4949 4.73863 15.6766 3.92769ZM6.6875 10.1253C6.50208 10.1253 6.32083 10.0704 6.16666 9.96735C6.01249 9.86434 5.89232 9.71792 5.82137 9.54661C5.75041 9.37531 5.73184 9.18681 5.76802 9.00495C5.80419 8.82309 5.89348 8.65605 6.02459 8.52494C6.1557 8.39382 6.32275 8.30453 6.50461 8.26836C6.68646 8.23219 6.87496 8.25075 7.04627 8.32171C7.21758 8.39267 7.36399 8.51283 7.46701 8.667C7.57002 8.82117 7.625 9.00243 7.625 9.18785C7.625 9.43649 7.52623 9.67494 7.35042 9.85076C7.1746 10.0266 6.93614 10.1253 6.6875 10.1253ZM12.3125 10.1253C12.1271 10.1253 11.9458 10.0704 11.7917 9.96735C11.6375 9.86434 11.5173 9.71792 11.4464 9.54661C11.3754 9.37531 11.3568 9.18681 11.393 9.00495C11.4292 8.82309 11.5185 8.65605 11.6496 8.52494C11.7807 8.39382 11.9477 8.30453 12.1296 8.26836C12.3115 8.23219 12.5 8.25075 12.6713 8.32171C12.8426 8.39267 12.989 8.51283 13.092 8.667C13.195 8.82117 13.25 9.00243 13.25 9.18785C13.25 9.43649 13.1512 9.67494 12.9754 9.85076C12.7996 10.0266 12.5611 10.1253 12.3125 10.1253Z" fill="#333333" fill-opacity="0.8"/>
      </svg>
      </p>
      Android
      </>),
       content:(
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">     
        {data.android.map((item)=>{
        return (

        <div className="col">
        <div class="card" id='card-standard' onClick={()=>handleModalAndroid(item.id)} key={item.id}>
        <img src={item.images} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
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
                    <p className='subtext-price ms-2'>{item.timeline}</p>
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
                    <p className='subtext-price ms-2'>{item.price_text} {" "}<span>{item.price}</span></p>
                  </div>              
                                        
                  <a href="https://api.whatsapp.com/send?phone=62895366423269&text=Hai,%20saya%20tertarik%20untuk%20membuat%20website%20untuk%20bisnis%20saya%20dengan%20paket%20standard" style={{width:"100%"}} target="_blank">
                      
          </a>      
                </div>
        </div>
        </div>
        </div>
        )})}
        </div>    
        </>
        )
    }
  
  ]
  return (
    <section id='pricelist'>
      <div className="title-pricelist">
        <h3 className='title-price'>{data.title}</h3>
        <p className='sub-price'>{data.subtitle_website}</p>
      </div>
      <Tabs tabsData={tabsData} display={display} handleActive={handleStatus}/>
    </section>
  )
}
export default Services