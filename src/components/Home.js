import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserStore } from '../store/UserContext'



const Home = () => {

    const [users, setUsers] = useContext(UserStore)
    return (
        <div>
            <h1>Three Users</h1>
            {users.slice(0,3).map((user)=> {
                return (
                    <>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.website}</p>
                    </>
                )
            })}
            <Link to='/users'>See All Users</Link>
            <hr />

        </div>
    )
}

export default Home
