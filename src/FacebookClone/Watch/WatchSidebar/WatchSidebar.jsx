import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import Sidebardata from "./Sidebardata"
import "./WatchSidebar.css"
const WatchSidebar = () => {
  return (
    <div className=' Sidebars'>
    <div className="Sidebar_container containers">
        <div className="topsidebar topsides">
            <h1>Video</h1>
            <SettingsIcon/>
        </div>
        <div className="middlesidebar middlesides">
            <SearchIcon/>
            <input type="search" placeholder='Search videos' />
        </div>
        <div className="bottomsidebar bottomesides">
        {
  Sidebardata.map((val, index) => (
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

export default WatchSidebar
