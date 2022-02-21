import React, { useState } from 'react';
import './app.css';
import Navbar from './components/navbar/navbar';
import {
      BrowserRouter,
      Routes,
      Route
} from "react-router-dom"
import Users from './pages/users';
import Animation from './pages/animation'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path= "/" element="home"></Route>
      <Route path= "/Animation" element={<Animation></Animation>}></Route>
      <Route path=  "Users" element={<Users/>}></Route>
    </Routes>
    
    
    

    </BrowserRouter>
  );
}

export default App;
