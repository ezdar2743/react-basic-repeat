import React, { useState } from 'react';
import './app.css';
import Anilist from './components/list/anilist';
import Form from './components/form/form';
function App() {
  const[aniList, setAniList] = useState([])
  
  const renderAniList = aniList.map((list)=>{
    return(
      <Anilist 
      list={list}
      key = {list.title}
      />
    )
  })
  const addList= (list)=>{
    setAniList([...aniList,list])
  }

  return (
    <>
    <h1>AniList</h1>
    <Form addList={addList}/>
    {renderAniList}

    </>
  );
}

export default App;
