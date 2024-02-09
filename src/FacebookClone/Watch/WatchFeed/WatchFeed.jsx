import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import Watchpostdata from "./Watchpostdata"
import "./WatchFeed.css";
const WatchFeed = () => {
  return (
    <div>
    {Watchpostdata.map((val, index) => (
      <div className='WatchFeed' key={index}>
        <div className="WatchItem">
          <div className="Watchtop">
            <img src={val.postprofile} alt="" />
            <div className="Watchinfo">
              <h3>{val.postName}</h3>
              <p>{val.posttime}</p>
            </div>
          </div>

          <div className="Watch_title">
            <h3>{val.post_title}</h3>
          </div>

          <div className="WatchMid">
          <video controls>
            <source src={val.postvideo} alt="postvideo"/>
          </video>
          </div>

          <div className="Watchbottom">
            <div className="WatchAction">
              <div className="WatchActioninfo">
                <ThumbUpOffAltIcon /> Like
              </div>
              <div className="WatchActioninfo">
                <ChatBubbleOutlineIcon /> Comment
              </div>
              <div className="WatchActioninfo">
                <ShareIcon /> Share
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default WatchFeed
