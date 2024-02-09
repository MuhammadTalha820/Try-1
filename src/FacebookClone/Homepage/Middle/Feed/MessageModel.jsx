import React, { useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoodIcon from '@mui/icons-material/Mood';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import "./MessageModel.css";
const MessageModel = ({onclose}) => {
  useEffect(() => {
    console.log('useEffect is running');
    document.body.style.overflowY = "hidden";
    return () => {
      console.log('cleanup function is running');
      document.body.style.overflowY = "scroll";
    };
  }, []);
  
  return (
    <>

    <div onClick={onclose} className='modelwrapper'>
    </div>

    <div className="container">
    <div className="topbox">
        <AccountCircleIcon className='Avatar'/>
        <input
          type="text"
          className='Messageinput'
          placeholder="What's on your mind"
        />
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

     </> 
  )
}

export default MessageModel
