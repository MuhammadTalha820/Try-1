import React from 'react';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VideocamIcon from '@mui/icons-material/Videocam';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LogoutIcon from '@mui/icons-material/Logout';
import Menulist from './MenuList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sdata from './Sdata';
import "./Sidebar.css";

const Sidebar = ({Navstatus}) => {
  return (
    <div  className="Sidebar">
      <Menulist Icon={<AccountCircleIcon/>} title="M Talha" />
      <Menulist Icon={<RssFeedIcon/>} title="Feed" />
      <Menulist Icon={<ChatIcon/>} title="Chat" />
      <Menulist Icon={<VideocamIcon/>} title="Video" />
      <Menulist Icon={<Diversity3Icon/>} title="Friend" />
      <Menulist Icon={<BookmarkIcon/>} title="Bookmark" />
      <Menulist Icon={<LocalGroceryStoreIcon/>} title="Market" />
      <Menulist Icon={<Brightness6Icon/>} title="Theme" />
      <Menulist Icon={<LogoutIcon/>} title="Logout" />
      
      {Sdata.map((val, index) => (
        <div className="SidebarFriend" key={index}>
          <ul className='.SidebarFriendList'>
            <li className='SidebarFriendListItem'>
              <img className="SidebarFriendImage"src={val.img} alt="img" />
              <span className='SidebarFriendName'>{val.personName}</span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
