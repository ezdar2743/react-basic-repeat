import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/spinner/spinner';
import UserInfo from '../components/userList/userInfo';



const User = () => {
    const [user,setUser] = useState(1);
    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then(response=>{
            setUser(response.data)})
            setLoading(false);
            
    },[]);
    const userInfo = loading? <Spinner/>
    : <UserInfo user={user}/>
    
    return (
        <>
        <h3>개인정보</h3>
        <div>{userInfo}</div>
        </>
    );
};

export default User;