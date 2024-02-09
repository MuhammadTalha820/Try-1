import React from 'react'
import "./MarketSidebar.css";
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import Marketsidebardata from './Marketsidebardata';
const MarketSidebar = () => {
    return (
      <div className='Market_side Sidebars'>
      <div className="Sidebar_container containers">
          <div className="topsidebar topsides">
              <h1>MarketPlace</h1>
              <SettingsIcon/>
          </div>
          <div className="middlesidebar middlesides">
              <SearchIcon/>
              <input type="search" placeholder='Search MarketPlace' />
          </div>
          <div className="bottomsidebar bottomesides">
          {
            Marketsidebardata.map((val, index) => (
      <div key={index} className="Sidebaroption Sidebaropts">
          <div className='icons'>{val.icon}
          </div>
           <h3 className='titles'>{val.title}</h3>
      </div>
    ))
  }
  
          </div>
      </div>
        
      </div>
    )
  }

export default MarketSidebar
