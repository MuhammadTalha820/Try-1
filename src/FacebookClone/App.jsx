import React from 'react';
import LoginPage from './Loginpage/LoginPage';
import HomePage from './Homepage/Homepage';
import Mainpage from './Mainpage/Mainpage';
import Watch from './Watch/Watch';
import Friends from './Friends/Friends';
import Marketplace from "./Marketplace/Marketplace"
import { Route,Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
    <Routes>
     <Route exact path="/" element={<LoginPage/>}></Route>
     <Route exact path="/HomePage" element={<HomePage/>}></Route>
     <Route exact path="/Watch" element={<Watch/>}></Route>
     <Route exact path='/Friends' element={<Friends/>}></Route>
     <Route exact path='/Marketplace' element={<Marketplace/>}></Route>
    </Routes>
    </>
  );
};

export default App;
