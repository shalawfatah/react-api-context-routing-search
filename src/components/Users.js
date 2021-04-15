import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserStore } from '../store/UserContext'

const Users = () => {
    const [users, setUsers] = useContext(UserStore)

    return (
        <div>
           <h1>All Users</h1>
           {users.map((user)=> {
               return (
                   <>
                   <Link to={`/users/${user.name}`}>
                       <h3>{user.name}</h3>
                   </Link>
                   </>
               )
           })} 
        </div>
    )
}

export default Users