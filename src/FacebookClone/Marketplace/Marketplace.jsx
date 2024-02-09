import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar';
import MarketSidebar from './MarketSidebar/MarketSidebar';
import MarketFeed from './MarketFeed/MarketFeed.jsx';
import "./Marketplace.css";
const Marketplace = () => {
  return (
<div>
    <Navbar/>
    <div className="Marketplace">
        <MarketSidebar/>
        <MarketFeed className="section1"/>
        <MarketFeed/>
    </div>
</div>
  )
}

export default Marketplace;
