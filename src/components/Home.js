import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostStore } from '../store/PostContext'
import { UserStore } from '../store/UserContext'



const Home = () => {
    const [users, setUsers] = useContext(UserStore)
    const [posts, setPosts] = useContext(PostStore)

    const filteredUsers = users.splice(0, 3)
    const filteredPosts = posts.splice(0,3)
    return (
        <div>
            <h1>Three Users</h1>
            {filteredUsers.map((user)=> {
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
