import React,{useState} from 'react';
import Input from './input';

const Form = ({addList, renderAniList}) => {
  const [aniTitle,setAniTitle] = useState('')
  const [aniYear,setAniYear] = useState('')
  const inputReset=()=>{
    setAniTitle('');
    setAniYear('');
  }
  const onSubmit= (e)=>{
    e.preventDefault();
    if(aniTitle.length>0&&aniYear.length){
        addList({
            title:aniTitle,
            year:aniYear,
            id: Date.now()
        })
        inputReset();
    }
    else alert('이름과 년도를 입력해주세요')
    


  }

    return(
    <>
    <h1>AniList</h1>
    <form onSubmit={onSubmit}>
     <Input 
     type='text'
     placeholder ='title'
     onChange={e=>setAniTitle(e.target.value)}
     value={aniTitle}/>

      <Input 
      type="text"
      placeholder='year'
      onChange={e=>setAniYear(e.target.value)}
      value={aniYear}/>
      
      <input type="submit" value='입력'/>
    </form>
    {renderAniList}
    </>
    )
};

export default Form;