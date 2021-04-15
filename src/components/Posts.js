import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { PostStore } from '../store/PostContext'

const Posts = () => {
    const [posts, setPosts] = useContext(PostStore)
    const [search, setSearch] = useState('')

    const filteredPosts = posts.filter((post)=> {
        return post.title.toLowerCase().trim().includes(search.toLocaleLowerCase().trim())
    })

    return (
        <div>
            <h1>All Posts</h1>
            <input type="search" placeholder="Search posts ..." value={search} onChange={e => setSearch(e.target.value)} />
            <br />
           {filteredPosts.map((post)=> {
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