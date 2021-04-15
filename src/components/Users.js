import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserStore } from '../store/UserContext'

const Users = () => {
    const [users, setUsers] = useContext(UserStore)
    const [search, setSearch] = useState()
    const filteredUsers = users.filter(user => {
        return user.name?.toLowerCase().trim().includes(search?.toLowerCase().trim())
    })
    return (
        <div>
           <h1>All Users</h1>
           <input type="search" placeholder="Search users ..." value={search} onChange={e => setSearch(e.target.value)} />
           {filteredUsers.map((user)=> {
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