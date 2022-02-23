import React from 'react';
import {Link} from 'react-router-dom';
const UserList = ({users}) => {
    return (
        <div>
            
            {users.map(user=>{
                return(
                    <div className="card mb-2" key={user.id} >
                <div className="card-body pd-3">
                   <Link to={`${user.id}`}>{user.name}</Link>
                </div>
            </div>
                )
            })}
        </div>
    );
};

export default UserList;
