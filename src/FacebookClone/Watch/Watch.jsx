import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import WatchSidebar from './WatchSidebar/WatchSidebar'
import WatchFeed from ".//WatchFeed/WatchFeed"
import "./Watch.css";
const Watch = () => {
  return (
    <div>
    <Navbar/>
    <div className="Watchpage">
      <WatchSidebar/>
      <WatchFeed/>
    </div>

    </div>
  )
}

export default Watch
