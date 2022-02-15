import React,{useState} from 'react';

const Form = ({addList}) => {
  const [aniTitle,setAniTitle] = useState('')
  const [aniYear,setAniYear] = useState('')
  const inputReset=()=>{
    setAniTitle('');
    setAniYear('');
  }
  const onSubmit= (e)=>{
    e.preventDefault();
    addList({
        title:aniTitle,
        year:aniYear
    })
    inputReset();


  }

    return(
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
    )
};

export default Form;