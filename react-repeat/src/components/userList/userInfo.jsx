import React from 'react';

const UserInfo = ({user}) => {
    return (
        <div>
            <div>Name: {user.name}</div>
            <div>Id: {user.username}</div>
            <div>E-mail: {user.email}</div>
            <div>Phone: {user.phone}</div>
            
        </div>
    );
};

export default UserInfo;