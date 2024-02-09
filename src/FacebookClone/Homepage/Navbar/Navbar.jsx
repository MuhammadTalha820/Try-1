import React, { useState } from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Profileimage from "../Image/img.png";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Sidebar from '../Middle/Sidebar/Sidebar';

const Navbar = () => {
  const [Navstatus, setNavstatus] = useState(false);

  const toggleNav = () => {
    setNavstatus(!Navstatus);
  };

  return (
    <div className='Homenavbar'>
      <div className="leftnavbar">
        <img src="https://logopng.com.br/logos/facebook-13.png" className='logo' alt="" />
        <div className="inputinfo">
          <SearchIcon className='searchicon' />
          <form>
            <input type="Search" className='searchinput' placeholder='Search Facebook' />
          </form>
        </div>
      </div>
      <div className="midlenavbar">
        <div className="header_option">
          <NavLink to="/Homepage">
            <HomeIcon className="`header_option_icon`" />
          </NavLink>
        </div>
        <div className='header_option'>
          <NavLink to="/Watch">
            <OndemandVideoIcon className="header_option_icon" />
          </NavLink>
        </div>
        <div className='header_option'>
          <NavLink to="/Friends">
            <GroupIcon className="header_option_icon" />
          </NavLink>
        </div>
        <div className='header_option'>
          <NavLink to="/Marketplace">
            <StorefrontIcon className="header_option_ico" />
          </NavLink>
        </div>
      </div>
      <div className={Navstatus ? "Mobile_menu" : "rightnavbar"}>
        <div className="header_info profile_info mobileinfo ">
          <AccountCircleIcon src={Profileimage} />
          <h5>M talha</h5>
        </div>
        <div className="header_info mobileinfo">
          <AppsIcon className='header_info_icon' />
        </div>
        <div className="header_info mobileinfo">
          <ForumIcon className='header_info_icon' />
        </div>
        <div className="header_info mobileinfo">
          <NotificationsIcon className='header_info_icon' />
        </div>
        <div className="header_info mobileinfo">
          <ArrowDropDownIcon className='header_info_icon' />
        </div>
      </div>
      <div className="Navbar_Menuicon">
        <MenuIcon onClick={toggleNav} />
      </div>
    </div>
  )
}

export default Navbar;
