import React from 'react'
import UsersList from './UsersList'

const UsersListContainer = () => {
    return (
        <div className="container">
            <div id="usersListContainer">
                <h3 className="headers">Lista de usuarios:</h3>
                <UsersList />
            </div>
        </div>
    )
}

export default UsersListContainer
