import React from 'react'
import Marketdata from './Marketdata'
import "./MarketFeed.css"
const MarketFeed = () => {
  return (
    <div className='MarketFeed'>
{
    Marketdata.map((val,index)=>(
        <div className="saleinfo" key={index}>
            <div className="saleimage">
                <img src={val.saleimage} alt="saleimage" />
                <button className='btns'>Buy</button>
            </div>
        </div>
    ))
}
      
    </div>
  )
}

export default MarketFeed
