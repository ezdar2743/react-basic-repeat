import React from 'react';
import styles from './anilist.module.css'

const Anilist = ({list,handleDelete}) => {
    
    return(
    <>
    <ul className={styles.list}>
        <li className={styles.aniTitle}>{list.title} </li>
        <li className={styles.aniYear}>({list.year})</li>
        <button className='deleteBtn' onClick={()=>handleDelete(list.id)}>삭제 버튼</button>


    </ul>
    <div className={styles.underLine}></div>
    </>    
    )}

export default Anilist;