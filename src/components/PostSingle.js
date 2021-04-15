import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router'
import { PostStore } from '../store/PostContext'
import { UserStore } from '../store/UserContext'

const PostSingle = () => {
    const {title} = useParams()
    const [posts, setPosts] = useContext(PostStore)
    const singlePost = posts.find(post => {
        return post.title === title
    })
    const history = useHistory()
    
    return (
        <div>
            <h1>{singlePost.title}</h1>
            <p>{singlePost.body}</p>
            <button
                onClick={() => {
                    history.goBack();
                }}
            >
                Go back
            </button>
        </div>
    )
}


export default PostSingle
