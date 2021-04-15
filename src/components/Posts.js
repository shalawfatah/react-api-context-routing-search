import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostStore } from '../store/PostContext'

const Posts = () => {
    const [posts, setPosts] = useContext(PostStore)
    
    return (
        <div>
            <h1>All Posts</h1>
           {posts.map((post)=> {
               return (
                   <>
                   <Link to={`/posts/${post.title}`}>
                       {post.title}
                   </Link>
                   <hr/>
                   </>
               )
           })} 
        </div>
    )
}

export default Posts