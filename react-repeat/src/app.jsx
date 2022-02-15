import React, { useState } from 'react';
import './app.css';
import Anilist from './components/anilist';
function App() {
  const[aniList, setAniList] = useState([{
    title: 'ss',
    year: 200,
}])
  const [aniTitle,setAniTitle] = useState('')
  const [aniYear,setAniYear] = useState('')
  
  const renderAniList = aniList.map((list)=>{
    return(
      <Anilist list={list}/>
    )
  })
  const onSubmit= (e)=>{
    e.preventDefault();
    setAniList([...aniList,{
      title: aniTitle,
      year : aniYear
    }])
    setAniTitle('');
    setAniYear('');


  }

  return (
    <>
    <h1>AniList</h1>
    <form onSubmit={onSubmit}>
      <input 
      type="text"
      placeholder='title'
      onChange={e=>setAniTitle(e.target.value)}
      value={aniTitle}
      
      />
      <input type="text"
      placeholder='year'
      onChange={e=>setAniYear(e.target.value)}
      value={aniYear}/>
      <input type="submit" value='입력'/>
    </form>
    {renderAniList}

    </>
  );
}

export default App;
