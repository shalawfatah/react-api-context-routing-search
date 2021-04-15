import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router'
import { UserStore } from '../store/UserContext'

const UserSingle = () => {
    const {name} = useParams()
    const [users, setUsers] = useContext(UserStore)
    const singleUser = users.find(user => {
        return user.name === name
    })
    const history = useHistory()
    return (
        <div>
            <h1>{singleUser.name}</h1>
            <p>{singleUser.email}</p>
            <p>{singleUser.website}</p>
            <p>{singleUser.company.name}</p>
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

export default UserSingle
