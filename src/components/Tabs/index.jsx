import React, { useState } from 'react';

const Tabs=({tabsData})=>{
    const[activeTabs,setActiveTabs]=useState(0)
    const handleClick=(index)=>{
        setActiveTabs(index)
    }
    return(
        <div>
            <div className="tabs">
            {tabsData.map((item,index)=>(
                <div
                key={index}
                className={`tab-${index===activeTabs?"active":"inactive"}`}
                onClick={()=>handleClick(index)}
                >
                {item.title}
                </div>
            ))}
            </div>
        <div className='tab-content'>
            {tabsData[activeTabs].content}
        </div>
        </div>
    )
}
export default Tabs