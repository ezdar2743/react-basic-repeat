import React,{useState} from 'react';
import Form from '../components/form/form';
import Anilist from '../components/list/anilist';

const Animation = () => {
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
        <div>
            <Form addList={addList} renderAniList={renderAniList}/>
        </div>
    );
};

export default Animation;