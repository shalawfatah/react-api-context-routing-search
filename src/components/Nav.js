import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div style={{display:'flex', margin: '10px'}}>
         <p style={{margin:'10px'}}><Link to='/'>Home</Link></p> 
         <p style={{margin:'10px'}}><Link to='/users'>Users</Link></p> 
         <p style={{margin:'10px'}}><Link to='/posts'>Posts</Link></p> 
        </div>
    )
}

export default Nav