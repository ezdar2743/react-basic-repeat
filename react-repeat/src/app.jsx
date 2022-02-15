import React, { useState } from 'react';
import './app.css';
import Anilist from './components/list/anilist';
import Form from './components/form/form';
function App() {
  const[aniList, setAniList] = useState([])
  
  const renderAniList = aniList.length? aniList.map((list)=>{
    return(
      <Anilist 
      list={list}
      key = {Date.now()}
      />
    )
  }) :'추가된 애니메이션이 없습니다'
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
