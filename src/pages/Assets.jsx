import React from 'react';
import { Cover, Pricelist, Workflow } from '../assets';

const Assets=()=>{
    return(
        <div>
            <img className='m-4' src={Cover}/>
            <img className='m-4' src={Workflow}/>
            <img className='m-4' src={Pricelist}/>
        </div>
    )
}
export default Assets