import React, { useState } from 'react'
import './LoginPage.css'
import { NavLink } from 'react-router-dom';
const LoginPage = () => {
  const [formData,setformData]=useState({
    Email:"",
    Password:"",
  })
  const handlechange=(e)=>{
    const {name,value}=e.target;
    setformData({...formData, [name]:value})
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    if (formData.Email.trim() === '' || formData.Password.trim() === '') {
      alert('Please fill out both Email and Password');
    } else {
      alert('Login Successfully');
    }
  };
  
  return (
    <>
 

      <div className='login_page'>
      <div className='facebook'>
      <div className='facebook_text'>
        <h1>facebook</h1>
        </div>
        <div className="title">
            Facebook helps you to connect and share
            <br />with the people in your life
      </div> 

      </div>
        <form onSubmit={handlesubmit} className="loginContainer">
            <div className="logindetail">
                <input type="email" name="Email" onChange={handlechange} value={formData.Email} placeholder='Email address or Phone number'/>
                <br />
                <input type="Password" name="Password" onChange={handlechange} value={formData.Password} placeholder='Password'/>
                <br />
                <button className="btn_login login_button">                
                 <NavLink to="/HomePage" style={{ backgroundColor: "#2381fa", color: "white" }}>
                 <h3 >Login</h3>                   
                 </NavLink>
               </button>
                <br />
                <div className="forget">
                 <a href="forgetten"> Forgotton_Password?</a>
                <br />
                <button className="btns create_button">
                <h3> Create_New_Account</h3>
                </button>
                </div>

            <div className="new_page">
            <p>
                <a href="Create_page">Create a page </a> for a celebrity, brand or business
            </p>
            </div>
            </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage;
