import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../components/spinner/spinner';
import UserList from '../components/userList/userList';

const Users = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            setUsers(response.data)})
            setLoading(false);
    },[]);
    
    return (
        <div>
            {loading? <Spinner/>
            :<UserList users={users}/>
}
            
        </div>
    );
};

export default Users;