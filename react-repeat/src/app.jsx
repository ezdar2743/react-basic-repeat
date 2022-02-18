import React, { useState } from 'react';
import './app.css';
import Anilist from './components/list/anilist';
import Form from './components/form/form';
import Navbar from './components/navbar/navbar';
import {
      BrowserRouter,
      Routes,
      Route
} from "react-router-dom"
import Users from './pages/users';
import axios from 'axios';

function App() {
  const[aniList, setAniList] = useState([])
  
  const handleDelete= (id)=>{
    setAniList(aniList.filter((list)=>{
      return list.id!==id;
    }))
  }
  const renderAniList = aniList.length? aniList.map((list)=>{
    return(
      <Anilist 
      list={list}
      key = {list.title}
      handleDelete={handleDelete}
      />
    )
  }) :'추가된 애니메이션이 없습니다'
  const addList= (list)=>{
    setAniList([...aniList,list])
  }

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path= "/" element="home"></Route>
      <Route path= "/Animation" element={<Form addList={addList} renderAniList={renderAniList}/>}></Route>
      <Route path=  "Users" element={<Users/>}></Route>
    </Routes>
    
    
    

    </BrowserRouter>
  );
}

export default App;
