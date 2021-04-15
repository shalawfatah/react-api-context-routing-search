import React, { createContext, useState, useEffect } from 'react'

export const UserStore = createContext()

export const UserContext = ({children}) => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <UserStore.Provider value={[users, setUsers]}>
            {children}
        </UserStore.Provider>
    )
}

