import React, { useState } from 'react';
import "./Messagebox.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoodIcon from '@mui/icons-material/Mood';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import MessageModel from './MessageModel';

const Messagebox = () => {
  const [fullscreen, setFullscreen] = useState(false);

  const openMessage = () => {
    setFullscreen(true);
  }

  const onClose = () => {
    setFullscreen(false);
  }

  return (
    <div className="Messagebox"> 
      <div className="topbox">
        <AccountCircleIcon className='Avatar'/>
        <input
          type="text"
          className='Messageinput'
          placeholder="What's on your mind"
          onFocus={openMessage} // Use onFocus to trigger fullscreen on input focus
        />
        {fullscreen && <MessageModel onclose={onClose}/>}
      </div> 
      <div className="bottombox">
        <div className="actionbox">
          <div className="actioninfo">
            <VideoCameraBackIcon/>   
            Video
          </div>
          <div className="actioninfo">
            <AddToPhotosIcon/>
            Photo
          </div>
          <div className="actioninfo">
            <MoodIcon/>
            Feeling
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messagebox;
