import React from 'react'
import FriendData from "./FriendData"
import "./OnlineFriend.css"
const OnlineFriend = ({onlineuser}) => {
  return (
    <div className='Onlinefriend'>
    
    <div className="userdata">
    <ul className='userdatalist'>
        <li><img className='userimage' src={onlineuser.img}alt="" /></li>
        <li className='usename'>{onlineuser.name} </li>
    </ul>
    </div> 
    </div>
  )
}

export default OnlineFriend
