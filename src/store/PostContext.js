
import React, { createContext, useEffect, useState } from 'react'

export const PostStore = createContext()

export const PostContext = ({children}) => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
    }

    useEffect(()=> {
        fetchPosts()
    }, [])

    return (
        <PostStore.Provider value={[posts, setPosts]}>
            {children}
        </PostStore.Provider>
    )
}
