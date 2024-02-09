import React from 'react'
import "./Homepage.css";
import Navbar from './Navbar/Navbar';
import Sidebar from './Middle/Sidebar/Sidebar';
import Feed from './Middle/Feed/Feed';
import Widget from './Middle/Widget/Widget';

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className='Middle'>
      <Sidebar />
      <Feed />
      <Widget />
    </div>
    </>
  
 
  
  )
}

export default Homepage
