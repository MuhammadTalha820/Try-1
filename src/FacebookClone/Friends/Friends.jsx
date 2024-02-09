import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import Friendtop from './Friendtop/Friendtop'
import FriendRequest from './FriendRequest/FriendRequest'
import "./Friends.css"
import Friendadd from './FriendAdd/Friendadd'
const Friends = () => {
  return (
    <div>
      <Navbar/>
      <div className="Friends">
        <Friendtop/>
        <FriendRequest/>
        <Friendadd/>
      </div>
    </div>
  )
}

export default Friends
