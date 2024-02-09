import React from 'react'
import "./Widget.css";
import FriendData from './OnlineFriend/FriendData';
import OnlineFriend from './OnlineFriend/OnlineFriend';

const Widget = () => {
  return (
    <div className='Widget'>
    <div className="birthday_container">
      <img src="https://tse1.mm.bing.net/th?id=OIP.ic540z9L1QGuQJt1H-9vGQHaHa&pid=Api&P=0&h=180" alt="" />
      <span className="birthday_text">
    
      <b> Nouman </b> and <b>Other friend</b>  have a birthday
      
      </span>
    
    </div>
      
      <div className="Advertisement">
        <img src="https://tse2.mm.bing.net/th?id=OIP.ye-GeSnOdXUIgij7f7nXIQHaE8&pid=Api&P=0&h=180" alt="" />
      </div>

      <div className="Friend"> 
      <h3>Online Friend</h3>
          {
            FriendData.map((val)=>(
                <OnlineFriend onlineuser={val} key={val.id} />
            ))
          }

      </div>
    </div>
  )
}

export default Widget
