import React from 'react'

const UsersList = ({ usersData }) => {

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover" id="tableResponsive">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <p>Botones</p>
                                    {/* service PUT con user.id como parametro */}
                                    {/* service DELETE con user.id como parametro */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersList
