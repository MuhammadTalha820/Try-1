import React from 'react'
import Feed from './Feed/Feed'
import Sidebar from './Sidebar/Sidebar'
import Widget from './Widget/Widget'
import "./Middle.css"
const Middle = () => {
  return (
    <div className='Middle'>
      <Sidebar className="MiddleSidebar"/>
      <Feed className="MiddlFeed"/>
      <Widget className="MiddleWidget"/>

    </div>
  )
}

export default Middle
