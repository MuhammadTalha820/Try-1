import React from 'react'
import FriendRequestdata from './FriendRequestdata';
import "./FriendRequest.css"
const FriendRequest = () => {
  return (
    <div>
    <h3 className='heading'>Friend Requests</h3>
    {
        FriendRequestdata.map((val,index)=>(
            <div className='FriendRequest' key={index}>
    <div className="Profiles">
        <div className="profileimage">
        <img src={val.profileimage} alt="profileimage" />
        </div>
        <div className="profileinfo">
        <h2>{val.profilename}</h2>
        <div className='requestbtn'> 
        <button className='btn confirm'> Confirm</button>
        <button className='btn delete'> Delete</button>
        </div>
        </div>
    </div>
      
    </div>
        ))
    }
  
    </div>
  )
}

export default FriendRequest;
