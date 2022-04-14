import React, { useEffect, useState } from 'react'

const Users = ({setUsers, users}) => {
  if(users) return (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map(user => {
                return (
                    <li key={user.username}>
                      <h3>{user.username}</h3>
                      <img className='user-img' src={user.avatar_url} alt={user.username} />
                      <p>{user.kudos}</p>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Users