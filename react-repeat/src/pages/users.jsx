import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserList from '../components/userList/userList';

const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            setUsers(response.data)})
    },[]);
    
    return (
        <div>
            <UserList users={users}/>
        </div>
    );
};

export default Users;