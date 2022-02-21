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
import Home from './pages/home';
import routeList from './routeList';


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {routeList.map(route=>{
        return (
          <Route 
          path= {route.path} 
          element={<route.component/>}
          exact
          key={route.path}
          ></Route>
        )
      })}

    </Routes>
    
    
    

    </BrowserRouter>
  );
}

export default App;
