import React from 'react'
import FriendRequestdata from '../FriendRequest/FriendRequestdata'
const Friendadd = () => {
    return (
      <div>
      <h3 className='heading'>Friend you may have</h3>
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
          <button className='btn Add_Friend'>Add Friend</button>
          <button className='btn Remove'>Remove</button>
          </div>
          </div>
      </div>
        
      </div>
          ))
      }
    
      </div>
    )
  }

export default Friendadd
